/**
 * 档案 details 字段定义 — 单点真相源
 *
 * 修改前端 ArchiveDetail.tsx 渲染逻辑时，必须同步更新此文件。
 * 新增数据条目时，必须按此定义的字段名填写。
 * 运行 `npx tsx scripts/validate-schema.ts` 自动校验合规性。
 */

// 阈界档案 (TMS) 的 details 字段结构
export interface ThreatFileDetails {
  commonName?: string
  archiveNature?: string
  coreFeatures?: string
  properties?: { category: string; name: string; description: string; scope?: string }[]
  phases?: { name: string; duration: string; mechanism: string; manifestation: string; target: string; keyIndicator: string }[]
  environmentFeatures?: {
    physical?: string[]
    cognitive?: string[]
  }
  knownEntities?: { name: string; type: string; behavior: string; mechanism: string; dangerLevel: string; contactRecord: string }[]
  discoveryLocation?: string
  anomalyReport?: string
  responseTeam?: string
  threatAssessments?: { riskLevel: string; personnelType: string; susceptibilityReason: string; recommendedAction: string }[]
  comparisonThreats?: { item: string; thisThreat: string; otherThreat: string }[]
  // ↓↓↓ 以下字段必须使用规定的属性名 ↓↓↓
  protocols?: { phase: string; procedureName: string; measures: string; department: string }[]
  accessRequirements?: { allowed: boolean; text: string }[]
  emergencyProcedures?: { allowed: boolean; text: string }[]
  behaviorGuidelines?: { allowed: boolean; text: string }[]
}
