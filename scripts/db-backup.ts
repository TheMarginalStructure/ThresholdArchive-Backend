/**
 * 数据库全量备份脚本
 * 将数据库中所有表的数据导出为 JSON 文件
 * 备份文件保存至 .history/backend/prisma/backup.YYYYMMDD_YYYYMMDDHHMMSS.json
 */

import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

async function backup() {
  const now = new Date()
  const dateStr = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`
  const timeStr = `${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}`
  const ts = `${dateStr}_${timeStr}`

  console.log('开始数据库全量备份...')

  const data: Record<string, unknown[]> = {}

  // 按依赖顺序导出（先导出被引用的表）
  console.log('导出 Department...')
  data.Department = await prisma.department.findMany()

  console.log('导出 Personnel...')
  data.Personnel = await prisma.personnel.findMany()

  console.log('导出 Archive...')
  data.Archive = await prisma.archive.findMany()

  console.log('导出 ArchiveRelation...')
  data.ArchiveRelation = await prisma.archiveRelation.findMany()

  console.log('导出 ArchiveSignature...')
  data.ArchiveSignature = await prisma.archiveSignature.findMany()

  console.log('导出 ArchiveHistory...')
  data.ArchiveHistory = await prisma.archiveHistory.findMany()

  console.log('导出 ExplorationTeam...')
  data.ExplorationTeam = await prisma.explorationTeam.findMany()

  console.log('导出 TeamMember...')
  data.TeamMember = await prisma.teamMember.findMany()

  console.log('导出 NewsBulletin...')
  data.NewsBulletin = await prisma.newsBulletin.findMany()

  console.log('导出 EquipmentItem...')
  data.EquipmentItem = await prisma.equipmentItem.findMany()

  console.log('导出 Review...')
  data.Review = await prisma.review.findMany()

  console.log('导出 SystemAnnouncement...')
  data.SystemAnnouncement = await prisma.systemAnnouncement.findMany()

  console.log('导出 ArchiveTemplate...')
  data.ArchiveTemplate = await prisma.archiveTemplate.findMany()

  // 写入备份文件
  const historyDir = path.join(__dirname, '..', '..', '.history', 'backend', 'prisma')
  if (!fs.existsSync(historyDir)) {
    fs.mkdirSync(historyDir, { recursive: true })
  }

  const backupFile = path.join(historyDir, `backup.${ts}.json`)
  fs.writeFileSync(backupFile, JSON.stringify(data, null, 2), 'utf-8')

  // 打印统计
  console.log('\n===== 备份完成 =====')
  for (const [table, rows] of Object.entries(data)) {
    console.log(`  ${table}: ${rows.length} 条记录`)
  }
  console.log(`\n备份文件: ${backupFile}`)
  console.log(`文件大小: ${(fs.statSync(backupFile).size / 1024).toFixed(1)} KB`)
}

backup()
  .catch((e) => { console.error('备份失败:', e); process.exit(1) })
  .finally(() => prisma.$disconnect())
