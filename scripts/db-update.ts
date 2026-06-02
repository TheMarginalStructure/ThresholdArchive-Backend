/**
 * 数据库定点更新工具
 * ====================
 * 用途：更新数据库中已有的指定数据，不修改非指定数据。
 * 用法：修改下方 update 函数内的逻辑，然后运行：
 *   npx tsx scripts/db-update.ts
 *
 * 规则：
 * 1. 必须使用 where 条件精确锁定目标记录
 * 2. 只更新指定字段，不 spread 整个 body
 * 3. 更新完成后打印变更摘要供人工核对
 * 4. 涉及表结构变更时改用 seed（seed 不修改已有数据）
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function update() {
  // ========================================
  // 在此区域内编写更新逻辑
  // 示例：更新部门编码
  // ========================================

  /*
  // ---- 示例 1: 更新单个字段 ----
  const r1 = await prisma.department.update({
    where: { code: 'DEPT-00' },
    data: { code: 'DEPT-10' },
  })
  console.log(`更新部门: ${r1.name} ${r1.code}`)

  // ---- 示例 2: 按条件批量更新 ----
  const r2 = await prisma.archive.updateMany({
    where: {
      category: '阈界档案',
      imagePath: null,
    },
    data: {
      imagePath: '/api/v1/uploads/default.png',
    },
  })
  console.log(`更新 ${r2.count} 个档案的 imagePath`)
  */

  // ========================================
  // 在此之上编写更新逻辑
  // ========================================
}

update()
  .catch((e) => {
    console.error('更新失败:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
