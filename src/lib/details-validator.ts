/**
 * 档案 details 字段校验器
 * 用于运行时（CMS 创建/更新）和离线校验
 */

// 字段规则定义
interface FieldRule {
  name: string
  type: 'string' | 'array' | 'boolean' | 'object'
  subFields?: { name: string; type: string }[]
}

interface ValidationError {
  path: string
  message: string
}

// 每种档案类型的 details 字段规则
const SCHEMAS: Record<string, FieldRule[]> = {
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
      { name: 'text', type: 'string' },
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
    { name: 'environmentFeatures', type: 'object' },
    { name: 'knownEntities', type: 'array', subFields: [
      { name: 'name', type: 'string' },
      { name: 'type', type: 'string' },
      { name: 'behavior', type: 'string' },
      { name: 'mechanism', type: 'string' },
      { name: 'dangerLevel', type: 'string' },
      { name: 'contactRecord', type: 'string' },
    ]},
    { name: 'threatAssessments', type: 'array', subFields: [
      { name: 'riskLevel', type: 'string' },
      { name: 'personnelType', type: 'string' },
      { name: 'susceptibilityReason', type: 'string' },
      { name: 'recommendedAction', type: 'string' },
    ]},
    { name: 'comparisonThreats', type: 'array', subFields: [
      { name: 'item', type: 'string' },
      { name: 'thisThreat', type: 'string' },
      { name: 'otherThreat', type: 'string' },
    ]},
  ],
  '勘探记录': [
    { name: 'missionCode', type: 'string' },
    { name: 'targetThreshold', type: 'string' },
  ],
  '协议手册': [
    { name: 'version', type: 'string' },
    { name: 'sections', type: 'array', subFields: [
      { name: 'title', type: 'string' },
      { name: 'content', type: 'string' },
    ]},
  ],
}

/**
 * 校验 details 对象是否符合指定档案类型的 schema
 * @returns 错误数组，为空则表示通过
 */
export function validateDetails(category: string, details: unknown): ValidationError[] {
  const rules = SCHEMAS[category]
  if (!rules) return [] // 未定义 schema 的类型跳过校验

  const errors: ValidationError[] = []
  const obj = details as Record<string, unknown>

  for (const rule of rules) {
    const value = obj[rule.name]
    if (value === undefined || value === null) continue

    if (rule.type === 'array' && Array.isArray(value) && rule.subFields) {
      for (let i = 0; i < value.length; i++) {
        const entry = value[i] as Record<string, unknown>
        for (const sub of rule.subFields) {
          if (entry[sub.name] === undefined || entry[sub.name] === null) {
            errors.push({
              path: `${rule.name}[${i}].${sub.name}`,
              message: `缺少必填字段，应为 ${sub.type} 类型`,
            })
          }
        }
        // 警告未知字段
        const knownKeys = new Set(rule.subFields.map(s => s.name))
        for (const key of Object.keys(entry)) {
          if (!knownKeys.has(key)) {
            errors.push({
              path: `${rule.name}[${i}].${key}`,
              message: `未知字段，前端不会渲染。合法字段: ${[...knownKeys].join(', ')}`,
            })
          }
        }
      }
    }
  }

  return errors
}

export { SCHEMAS }
