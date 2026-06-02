import { Router } from 'express'
import { prisma } from '../lib/prisma'

// PRT-0001 v4.0 对齐后的正确部门编码（覆盖 DB 旧值）
const DEPT_CODE_MAP: Record<string, string> = {
  '最高指挥部': 'DEPT-10',
  '外勤行动部': 'DEPT-20',
  '档案与研究部': 'DEPT-30',
  '医疗与心理部': 'DEPT-40',
  '安全与防护部': 'DEPT-50',
  '后勤与架构部': 'DEPT-60',
}

const router = Router()

// 列表
router.get('/', async (req, res) => {
  const depts = await prisma.department.findMany({
    include: { leader: true, _count: { select: { personnel: true } } },
    orderBy: { code: 'asc' },
  })
  // 用正确编码覆盖 DB 旧值
  const corrected = depts.map(d => ({
    ...d,
    code: DEPT_CODE_MAP[d.name] || d.code,
  }))
  res.json(corrected)
})

// 详情
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const dept = await prisma.department.findUnique({
    where: { id },
    include: {
      leader: true,
      personnel: true,
      sourceArchives: { select: { id: true, code: true, title: true, status: true } },
      respArchives: { select: { id: true, code: true, title: true, status: true } },
    },
  })
  if (!dept) return res.status(404).json({ error: 'Department not found' })
  res.json(dept)
})

// 创建
router.post('/', async (req, res) => {
  const { code, name, nameEn, type, description, leaderId, siteLocation, internalChannel } = req.body
  const dept = await prisma.department.create({
    data: { code, name, nameEn, type, description, leaderId, siteLocation, internalChannel },
  })
  res.status(201).json(dept)
})

// 更新
router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.body
  const dept = await prisma.department.update({ where: { id }, data })
  res.json(dept)
})

// 删除
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  await prisma.department.delete({ where: { id } })
  res.status(204).send()
})

export default router
