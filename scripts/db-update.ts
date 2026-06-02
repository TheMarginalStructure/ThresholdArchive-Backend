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
  // ========================================

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
