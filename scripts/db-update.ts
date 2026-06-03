/**
 * 数据库定点更新工具
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
  .catch((e) => { console.error('更新失败:', e); process.exit(1) })
  .finally(() => prisma.$disconnect())
