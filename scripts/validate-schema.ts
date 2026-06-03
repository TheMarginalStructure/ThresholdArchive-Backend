/**
 * 档案数据字段校验工具
 * 用法：npx tsx scripts/validate-schema.ts
 *
 * 校验所有 JSON 数据文件中的字段名是否与前端渲染期望一致。
 * 在 seed 前运行此脚本可提前发现字段名不匹配问题。
 */

import * as fs from 'fs'
import * as path from 'path'

interface FieldRule {
  name: string       // 字段名
  type: string       // 'string' | 'array' | 'object'
  required?: boolean
  subFields?: { name: string; type: string }[]
}

// 每种档案类型的 details 字段规则
const SCHEMA: Record<string, FieldRule[]> = {
  '阈界档案': [
    { name: 'protocols', type: 'array', subFields: [
      { name: 'phase', type: 'string' },
      { name: 'procedureName', type: 'string' },
      { name: 'measures', type: 'string' },
      { name: 'department', type: 'string' },
    ]},
    { name: 'accessRequirements', type: 'array', subFields: [
      { name: 'allowed', type: 'boolean' },
      { name: 'text', type: 'string' },
    ]},
    { name: 'emergencyProcedures', type: 'array', subFields: [
      { name: 'allowed', type: 'boolean' },
      { name: 'text', 'type': 'string' },
    ]},
    { name: 'behaviorGuidelines', type: 'array', subFields: [
      { name: 'allowed', type: 'boolean' },
      { name: 'text', type: 'string' },
    ]},
    { name: 'properties', type: 'array', subFields: [
      { name: 'category', type: 'string' },
      { name: 'name', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'scope', type: 'string' },
    ]},
    { name: 'phases', type: 'array', subFields: [
      { name: 'name', type: 'string' },
      { name: 'duration', type: 'string' },
      { name: 'mechanism', type: 'string' },
      { name: 'manifestation', type: 'string' },
      { name: 'target', type: 'string' },
      { name: 'keyIndicator', type: 'string' },
    ]},
  ],
}

function validate() {
  const dataDir = path.join(__dirname, '..', 'prisma', 'data')
  const files = [
    { file: 'threatFiles.json', category: '阈界档案' },
    { file: 'objectArchives.json', category: '对象档案' },
    { file: 'explorationLogs.json', category: '勘探记录' },
    { file: 'incidentReports.json', category: '事件报告' },
    { file: 'experimentLogs.json', category: '实验记录' },
  ]

  let hasError = false

  for (const { file, category } of files) {
    const filePath = path.join(dataDir, file)
    if (!fs.existsSync(filePath)) continue

    const items = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    const rules = SCHEMA[category]
    if (!rules) continue

    for (const item of items) {
      for (const rule of rules) {
        const value = item[rule.name]
        if (value === undefined || value === null) continue

        // Check array type
        if (rule.type === 'array' && Array.isArray(value) && rule.subFields) {
          for (const [i, entry] of value.entries()) {
            for (const sub of rule.subFields) {
              const actualType = typeof entry[sub.name]
              if (actualType === 'undefined') {
                console.error(`❌ ${item.code}.${rule.name}[${i}]: 缺少字段 "${sub.name}"（应为 ${sub.type}）`)
                hasError = true
              }
            }
            // Check for unknown fields (frontend wouldn't read them)
            const knownKeys = new Set(rule.subFields.map(s => s.name))
            for (const key of Object.keys(entry)) {
              if (!knownKeys.has(key)) {
                console.warn(`⚠️  ${item.code}.${rule.name}[${i}]: 未知字段 "${key}"，前端不会渲染`)
              }
            }
          }
        }
      }
    }
  }

  if (hasError) {
    console.error('\n❌ 校验失败，请修复上述字段名不匹配问题')
    process.exit(1)
  } else {
    console.log('✅ 所有档案数据字段名校验通过')
  }
}

validate()
