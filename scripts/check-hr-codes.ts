import { PrismaClient } from '@prisma/client'
const p = new PrismaClient()

async function main() {
  // DB 实际编码
  const personnel = await p.personnel.findMany({ orderBy: { code: 'asc' } })

  // 前端数据文件中的 HR 编码
  const fs = require('fs')
  const path = require('path')
  const dir = 'D:/Github/TheMarginalStructure/frontend/src/data'
  const files = fs.readdirSync(dir).filter((f: string) => f.endsWith('.ts') || f.endsWith('.tsx'))

  console.log('=== 前端硬编码 HR 引用 vs DB 实际编码 ===')
  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8')
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // 找所有 code: 'HR-...' 或 id: 'HR-...'
      const match = line.match(/code:\s*'(HR-[A-Z0-9-]+)'|id:\s*'(HR-[A-Z0-9-]+)'/)
      if (match) {
        const hrCode = match[1] || match[2]
        // 检查是否是纯数字后缀（排除 HR-AKay 这种特殊格式）
        const suffix = hrCode.replace('HR-', '')
        if (/^\d+$/.test(suffix)) {
          const dbMatch = personnel.find(p => p.code === hrCode)
          if (!dbMatch) {
            // 找名字匹配看应该是谁
            const nameLine = i < lines.length - 1 ? lines[i+1] : ''
            const nameMatch = nameLine.match(/title:\s*'([^']+)'/)
            console.log(`⚠️  ${file}:${i+1} 编码 ${hrCode} 在DB中不存在`)
            if (nameMatch) console.log(`    标题: ${nameMatch[1]}`)
          } else {
            console.log(`✅  ${file}:${i+1} ${hrCode} -> ${dbMatch.name}`)
          }
        } else {
          console.log(`➡️  ${file}:${i+1} ${hrCode} (特殊格式，跳过)`)
        }
      }
    }
  }

  await p.$disconnect()
}
main()
