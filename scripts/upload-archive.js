/**
 * 档案上传工具
 * 用法: node upload-archive.mjs <文件路径或目录路径>
 *
 * 支持格式:
 * - 单条JSON: 直接发送
 * - JSON数组: 逐条发送
 * - 目录: 扫描所有.json文件并发送
 *
 * API端点: POST /api/v1/cms/archives
 */

const fs = require('fs')
const path = require('path')

const API_BASE = process.env.API_BASE || 'http://localhost:3001/api/v1'

async function postArchive(data) {
  const url = `${API_BASE}/cms/archives`
  const body = buildFormBody(data)
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.text()
    throw new Error(`HTTP ${res.status} for ${data.code || 'unknown'}: ${err}`)
  }
  return res.json()
}

function buildFormBody(data) {
  const details = {}
  // Fields that go into `details` (category-specific)
  const detailFields = [
    'missionCode', 'targetThreshold', 'team', 'teamLeader', 'explorationDate',
    'missionStatus', 'missionOverview', 'teamMembers', 'equipment', 'timeline',
    'discoveries', 'analysis', 'lessons', 'safetyRecommendations', 'followUpActions',
    'incidentNature', 'symptomCharacteristics', 'confirmedCause', 'transmissionMechanism',
    'events', 'responseMeasures', 'currentStatus', 'appendices',
    'communicationType', 'communicationTime', 'channel', 'mainParties', 'purpose',
    'entries', 'keyEvents', 'analysis', 'suggestedMeasures',
    'personnelInfo', 'education', 'workExperience', 'skills', 'qualifications',
    'performanceRecords', 'trainingRecords', 'evaluations', 'careerSuggestions',
    'specialNotes', 'archiveChanges', 'accessRecords',
    'executiveSummary', 'mechanismAnalysis', 'coreHazards', 'clinicalStages',
    'treatmentDifficulties', 'treatmentPlans', 'recommendations',
    'experimentDate', 'leadDepartment', 'experimentLead', 'dataSource', 'contentScope',
    'experimentPurpose', 'experimentType', 'safetyLevel', 'objectives', 'objectDescription',
    'knownCharacteristics', 'environment', 'testResults', 'experimentRounds',
    'observations', 'riskAssessments', 'safetyRequirements', 'recommendedMeasures',
    'conclusions', 'threatLevelAssessment', 'followUpSuggestions',
    'abstract', 'introduction', 'coreConcept', 'theoryComponents', 'phases',
    'comparisonAnalysis', 'caseReevaluation', 'personnelScreening',
    'equipmentProtocols', 'ultimateStrategy', 'hypothesisVerifications',
    'appendixFiles',
    'archiveNature', 'coreFeatures', 'properties', 'environmentFeatures',
    'knownEntities', 'discoveryLocation', 'anomalyReport', 'responseTeam',
    'threatAssessments', 'comparisonThreats', 'protocols', 'accessRequirements',
    'emergencyProcedures', 'behaviorGuidelines',
    'commonName', 'sourceThreshold', 'objectType',
    'version', 'effectiveDate', 'scope', 'sections',
  ]
  detailFields.forEach(f => {
    if (data[f] !== undefined) details[f] = data[f]
  })
  // Legacy text fields from seed data
  if (data.sourceDepartment) details.sourceDepartment = data.sourceDepartment
  if (data.responsibleDepartment) details.responsibleDepartment = data.responsibleDepartment
  if (data.leadPerson) details.leadPerson = data.leadPerson

  return {
    code: data.code || '',
    category: data.category || '阈界档案',
    title: data.title || '',
    status: data.status || '活跃',
    threatLevel: data.threatLevel || '',
    threatLevelColor: data.threatLevelColor || '',
    archiveDate: (data.archiveDate && !data.archiveDate.includes('数据删除') && !data.archiveDate.includes('[')) ? data.archiveDate : null,
    accessLevel: data.accessLevel || '',
    description: data.description || '',
    mainDangers: Array.isArray(data.mainDangers) ? data.mainDangers : ((data.mainDangers || '').split(/[,，、]/).map(s => s.trim()).filter(Boolean)),
    finalReview: data.finalReview || '',
    reviewStatus: data.reviewStatus || 'approved',
    remarks: data.remarks || '',
    details: details,
    sourceDepartmentId: null,
    responsibleDepartmentId: null,
    leadPersonId: null,
    signatures: [],
  }
}

async function uploadFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(raw)
  const items = Array.isArray(data) ? data : [data]
  let success = 0, fail = 0
  for (const item of items) {
    try {
      const result = await postArchive(item)
      console.log(`✅ ${item.code || item.title} → id=${result.id}`)
      success++
    } catch (e) {
      console.error(`❌ ${item.code || item.title}: ${e.message}`)
      fail++
    }
  }
  return { success, fail }
}

async function main(target) {
  const stat = fs.statSync(target)
  if (stat.isFile()) {
    const { success, fail } = await uploadFile(target)
    console.log(`\n完成: ${success} 成功, ${fail} 失败`)
  } else if (stat.isDirectory()) {
    const files = fs.readdirSync(target).filter(f => f.endsWith('.json')).sort()
    let totalSuccess = 0, totalFail = 0
    for (const file of files) {
      console.log(`\n--- ${file} ---`)
      const { success, fail } = await uploadFile(path.join(target, file))
      totalSuccess += success
      totalFail += fail
    }
    console.log(`\n全部完成: ${totalSuccess} 成功, ${totalFail} 失败`)
  }
}

const target = process.argv[2]
if (!target) {
  console.error('用法: node upload-archive.mjs <文件路径|目录路径>')
  console.error('示例: node upload-archive.mjs backend/prisma/data/threatFiles.json')
  process.exit(1)
}

main(target).catch(e => {
  console.error('致命错误:', e)
  process.exit(1)
})
