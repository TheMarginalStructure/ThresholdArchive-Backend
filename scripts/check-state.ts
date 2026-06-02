import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()

async function main() {
  // 1. 检查阈界档案
  console.log('=== 阈界档案资源路径 ===')
  const archives = await p.archive.findMany({
    where: { category: '阈界档案' },
    select: { code: true, imagePath: true, videoPath: true },
  })
  for (const a of archives) {
    console.log(`  ${a.code}: image=${a.imagePath ?? '(空)'}, video=${a.videoPath ?? '(空)'}`)
  }

  // 2. 检查人员部门关联
  console.log('\n=== 人员部门关联 ===')
  const personnel = await p.personnel.findMany({
    include: { department: true },
    orderBy: { code: 'asc' },
  })
  for (const per of personnel) {
    const deptName = per.department?.name ?? '(无部门)'
    const deptCode = per.department?.code ?? '(无编码)'
    console.log(`  ${per.code} ${per.name} → 部门: ${deptName} (${deptCode})`)
  }

  await p.$disconnect()
}
main()
