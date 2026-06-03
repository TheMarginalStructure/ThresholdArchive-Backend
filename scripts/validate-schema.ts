/**
 * 档案数据字段校验工具
 * 用法：npx tsx scripts/validate-schema.ts
 *
 * 校验所有 JSON 数据文件中的字段名是否与前端渲染期望一致。
 * 运行时校验已在 cms.ts 中集成，此脚本用于离线批量检查。
 */

import * as fs from 'fs'
import * as path from 'path'
import { validateDetails } from '../src/lib/details-validator'

const DATA_DIR = path.join(__dirname, '..', 'prisma', 'data')
const FILE_CATEGORIES: [string, string][] = [
  ['threatFiles.json', '阈界档案'],
  ['objectArchives.json', '对象档案'],
  ['explorationLogs.json', '勘探记录'],
  ['incidentReports.json', '事件报告'],
  ['experimentLogs.json', '实验记录'],
]

let hasError = false

for (const [file, category] of FILE_CATEGORIES) {
  const filePath = path.join(DATA_DIR, file)
  if (!fs.existsSync(filePath)) continue

  const items = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  for (const item of items) {
    const errors = validateDetails(category, item)
    for (const err of errors) {
      console.error(`❌ ${item.code}.${err.path}: ${err.message}`)
      hasError = true
    }
  }
}

// 也校验 protocolManuals.json 的 sections
const pmPath = path.join(DATA_DIR, 'protocolManuals.json')
if (fs.existsSync(pmPath)) {
  const items = JSON.parse(fs.readFileSync(pmPath, 'utf-8'))
  for (const item of items) {
    const errors = validateDetails('协议手册', item)
    for (const err of errors) {
      console.error(`❌ ${item.code}.${err.path}: ${err.message}`)
      hasError = true
    }
  }
}

if (hasError) {
  console.error('\n❌ 校验失败，请修复上述字段名不匹配问题')
  process.exit(1)
} else {
  console.log('✅ 所有档案数据字段名校验通过')
}
