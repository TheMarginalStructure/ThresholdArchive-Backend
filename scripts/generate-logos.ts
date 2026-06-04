/**
 * 阈界徽记 SVG 生成脚本 v2
 * 为每个 TMS 档案手工设计独⽴的 SVG 徽记
 * 
 * 运行: npx tsx backend/scripts/generate-logos.ts
 */

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// ── 10 枚手写 SVG 徽记 ──
const LOGOS: Record<string, string> = {

  /* ═══════════════════════════════════
   * TMS-O0442 回音殿堂 (Echo Hall)
   * 意象: 拱门 + 声波回响 + 殿堂
   * ═══════════════════════════════════ */
  'TMS-O0442': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-O0442" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#EA580C" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#9A3412" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="arch-O0442" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FDBA74" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#EA580C" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-O0442)" stroke="#EA580C" stroke-width="0.8" opacity="0.3"/>
  <circle cx="100" cy="100" r="84" fill="none" stroke="#EA580C" stroke-width="0.4" opacity="0.15" stroke-dasharray="3 4"/>
  <!-- 主拱门 -->
  <path d="M 50 150 L 50 80 Q 50 30 100 30 Q 150 30 150 80 L 150 150" fill="none" stroke="url(#arch-O0442)" stroke-width="2.5"/>
  <path d="M 58 150 L 58 82 Q 58 38 100 38 Q 142 38 142 82 L 142 150" fill="none" stroke="#FDBA74" stroke-width="0.8" opacity="0.25"/>
  <!-- 门槛 -->
  <line x1="42" y1="150" x2="158" y2="150" stroke="#EA580C" stroke-width="1.5" opacity="0.5"/>
  <line x1="48" y1="148" x2="152" y2="148" stroke="#FDBA74" stroke-width="0.5" opacity="0.3"/>
  <!-- 回音波纹 — 从拱心向外 -->
  <ellipse cx="100" cy="100" rx="12" ry="18" fill="none" stroke="#FDBA74" stroke-width="0.8" opacity="0.5"/>
  <ellipse cx="100" cy="100" rx="20" ry="28" fill="none" stroke="#FDBA74" stroke-width="0.6" opacity="0.3"/>
  <ellipse cx="100" cy="100" rx="30" ry="38" fill="none" stroke="#FDBA74" stroke-width="0.5" opacity="0.15"/>
  <!-- 拱顶宝石 -->
  <circle cx="100" cy="38" r="4" fill="#FDBA74" opacity="0.8"/>
  <circle cx="100" cy="38" r="7" fill="none" stroke="#FDBA74" stroke-width="0.4" opacity="0.3"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-L0567 一神坠入 (The Falling God)
   * 意象: 破碎神环 + 坠落 + 冲击
   * ═══════════════════════════════════ */
  'TMS-L0567': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-L0567" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#DC2626" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fall-L0567" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FCA5A5" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#DC2626" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="95" r="90" fill="url(#g-L0567)" stroke="#DC2626" stroke-width="0.6" opacity="0.25"/>
  <!-- 断裂神环 — 顶部破裂 -->
  <path d="M 30 75 A 75 75 0 0 1 120 22" fill="none" stroke="#DC2626" stroke-width="2" opacity="0.5"/>
  <path d="M 130 22 A 75 75 0 0 1 170 75" fill="none" stroke="#DC2626" stroke-width="2" opacity="0.5"/>
  <path d="M 170 75 A 75 75 0 0 1 162 130" fill="none" stroke="#DC2626" stroke-width="1.5" opacity="0.3"/>
  <path d="M 30 75 A 75 75 0 0 0 55 143" fill="none" stroke="#DC2626" stroke-width="1.5" opacity="0.3"/>
  <!-- 断裂碎片 -->
  <path d="M 100 22 L 105 12 L 110 22" fill="none" stroke="#FCA5A5" stroke-width="1" opacity="0.6"/>
  <path d="M 95 22 L 90 14 L 100 20" fill="none" stroke="#FCA5A5" stroke-width="0.8" opacity="0.4"/>
  <!-- 坠落倒三角 -->
  <polygon points="100,52 122,102 78,102" fill="none" stroke="url(#fall-L0567)" stroke-width="2.5"/>
  <polygon points="100,62 115,98 85,98" fill="none" stroke="#DC2626" stroke-width="0.8" opacity="0.4"/>
  <!-- 坠落轨迹线 -->
  <line x1="100" y1="18" x2="100" y2="46" stroke="#FCA5A5" stroke-width="0.8" opacity="0.3" stroke-dasharray="2 3"/>
  <!-- 冲击波 -->
  <ellipse cx="100" cy="148" rx="70" ry="10" fill="none" stroke="#DC2626" stroke-width="1.2" opacity="0.3"/>
  <ellipse cx="100" cy="148" rx="55" ry="7" fill="none" stroke="#DC2626" stroke-width="0.8" opacity="0.2"/>
  <ellipse cx="100" cy="148" rx="40" ry="4" fill="none" stroke="#FCA5A5" stroke-width="0.5" opacity="0.15"/>
  <!-- 碎片粒子 -->
  <circle cx="135" cy="120" r="1.5" fill="#FCA5A5" opacity="0.5"/>
  <circle cx="140" cy="130" r="1" fill="#FCA5A5" opacity="0.3"/>
  <circle cx="65" cy="115" r="1.2" fill="#FCA5A5" opacity="0.4"/>
  <circle cx="60" cy="125" r="0.8" fill="#FCA5A5" opacity="0.3"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-T0112 静默车站 (The Silent Station)
   * 意象: 铁轨透视 + 站台 + 远方
   * ═══════════════════════════════════ */
  'TMS-T0112': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-T0112" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#2563EB" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="track-T0112" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#93C5FD" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#2563EB" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <!-- 背景 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-T0112)" stroke="#2563EB" stroke-width="0.6" opacity="0.2"/>
  <!-- 铁轨 — 透视汇聚 -->
  <line x1="40" y1="170" x2="96" y2="70" stroke="#93C5FD" stroke-width="1.5" opacity="0.5"/>
  <line x1="160" y1="170" x2="104" y2="70" stroke="#93C5FD" stroke-width="1.5" opacity="0.5"/>
  <!-- 枕木 — 透视间距 -->
  <line x1="48" y1="160" x2="152" y2="160" stroke="#2563EB" stroke-width="1" opacity="0.35"/>
  <line x1="56" y1="147" x2="144" y2="147" stroke="#2563EB" stroke-width="0.9" opacity="0.3"/>
  <line x1="64" y1="135" x2="136" y2="135" stroke="#2563EB" stroke-width="0.8" opacity="0.25"/>
  <line x1="72" y1="124" x2="128" y2="124" stroke="#2563EB" stroke-width="0.7" opacity="0.2"/>
  <line x1="80" y1="114" x2="120" y2="114" stroke="#2563EB" stroke-width="0.6" opacity="0.15"/>
  <line x1="86" y1="105" x2="114" y2="105" stroke="#2563EB" stroke-width="0.5" opacity="0.1"/>
  <!-- 站台边缘 -->
  <line x1="32" y1="175" x2="168" y2="175" stroke="#2563EB" stroke-width="1.2" opacity="0.4"/>
  <line x1="35" y1="173" x2="165" y2="173" stroke="#93C5FD" stroke-width="0.5" opacity="0.25"/>
  <!-- 汇聚点星光 -->
  <circle cx="100" cy="70" r="3" fill="#93C5FD" opacity="0.6"/>
  <circle cx="100" cy="70" r="6" fill="none" stroke="#93C5FD" stroke-width="0.5" opacity="0.25"/>
  <!-- 上方月台灯 -->
  <line x1="100" y1="30" x2="100" y2="48" stroke="#93C5FD" stroke-width="0.8" opacity="0.2"/>
  <circle cx="100" cy="28" r="3" fill="none" stroke="#93C5FD" stroke-width="0.6" opacity="0.3"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-R0009 遗忘图书馆 (The Forgotten Library)
   * 意象: 书架阵列 + 知识树 + 智慧之眼
   * ═══════════════════════════════════ */
  'TMS-R0009': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-R0009" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="book-R0009" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#B45309" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-R0009)" stroke="#B45309" stroke-width="0.6" opacity="0.2"/>
  <!-- 左书架 -->
  <rect x="46" y="75" width="6" height="75" rx="1" fill="none" stroke="#B45309" stroke-width="0.8" opacity="0.25"/>
  <rect x="54" y="70" width="6" height="80" rx="1" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.35"/>
  <rect x="62" y="78" width="6" height="72" rx="1" fill="none" stroke="#B45309" stroke-width="0.8" opacity="0.25"/>
  <rect x="70" y="65" width="6" height="85" rx="1" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.35"/>
  <!-- 右书架 -->
  <rect x="124" y="72" width="6" height="78" rx="1" fill="none" stroke="#B45309" stroke-width="0.8" opacity="0.25"/>
  <rect x="132" y="68" width="6" height="82" rx="1" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.35"/>
  <rect x="140" y="80" width="6" height="70" rx="1" fill="none" stroke="#B45309" stroke-width="0.8" opacity="0.25"/>
  <rect x="148" y="75" width="6" height="75" rx="1" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.35"/>
  <!-- 底部书架隔板 -->
  <line x1="42" y1="152" x2="158" y2="152" stroke="#B45309" stroke-width="0.8" opacity="0.3"/>
  <!-- 知识树 (从书芯生出) -->
  <path d="M 100 140 Q 95 120 85 105 Q 75 90 60 80" fill="none" stroke="#B45309" stroke-width="1" opacity="0.25"/>
  <path d="M 100 140 Q 105 120 115 105 Q 125 90 140 80" fill="none" stroke="#B45309" stroke-width="1" opacity="0.25"/>
  <path d="M 100 140 Q 98 115 95 100 Q 90 85 85 70" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.2"/>
  <path d="M 100 140 Q 102 115 105 100 Q 110 85 115 70" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.2"/>
  <!-- 知识之眼 -->
  <ellipse cx="100" cy="48" rx="10" ry="14" fill="none" stroke="#FBBF24" stroke-width="1.5" opacity="0.5"/>
  <ellipse cx="100" cy="48" rx="6" ry="9" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.3"/>
  <circle cx="100" cy="48" r="3" fill="#FBBF24" opacity="0.4"/>
  <!-- 书架顶线 -->
  <line x1="44" y1="62" x2="156" y2="62" stroke="#B45309" stroke-width="0.4" opacity="0.15"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-L0735 深邃之海 (The Deep Oceanic Simulacrum)
   * 意象: 深海波浪 + 下潜 + 深渊
   * ═══════════════════════════════════ */
  'TMS-L0735': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-L0735" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-L0735)" stroke="#B45309" stroke-width="0.6" opacity="0.2"/>
  <!-- 波浪层 1 -->
  <path d="M 20 65 Q 45 55 70 65 Q 95 75 120 65 Q 145 55 180 65" fill="none" stroke="#FBBF24" stroke-width="1.2" opacity="0.4"/>
  <!-- 波浪层 2 -->
  <path d="M 20 90 Q 50 78 80 90 Q 110 102 140 90 Q 160 82 180 90" fill="none" stroke="#B45309" stroke-width="1" opacity="0.35"/>
  <!-- 波浪层 3 -->
  <path d="M 20 115 Q 55 105 90 115 Q 125 125 160 115 Q 172 110 180 115" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.25"/>
  <!-- 波浪层 4 (底部) -->
  <path d="M 20 140 Q 60 130 100 140 Q 140 150 180 140" fill="none" stroke="#B45309" stroke-width="0.6" opacity="0.2"/>
  <!-- 下潜三角 -->
  <polygon points="100,25 110,65 90,65" fill="none" stroke="#FBBF24" stroke-width="1.5" opacity="0.4"/>
  <polygon points="100,40 106,62 94,62" fill="none" stroke="#FBBF24" stroke-width="0.6" opacity="0.2"/>
  <!-- 下潜轨迹 -->
  <line x1="100" y1="65" x2="100" y2="155" stroke="#FBBF24" stroke-width="0.5" opacity="0.15" stroke-dasharray="3 4"/>
  <!-- 气泡 -->
  <circle cx="80" cy="50" r="2" fill="none" stroke="#FBBF24" stroke-width="0.4" opacity="0.3"/>
  <circle cx="120" cy="45" r="1.5" fill="none" stroke="#FBBF24" stroke-width="0.4" opacity="0.25"/>
  <circle cx="110" cy="55" r="1" fill="none" stroke="#FBBF24" stroke-width="0.3" opacity="0.2"/>
  <!-- 深渊底部 -->
  <path d="M 40 160 L 50 170 L 60 160 L 70 170 L 80 160 L 90 170 L 100 160 L 110 170 L 120 160 L 130 170 L 140 160 L 150 170 L 160 160" fill="none" stroke="#B45309" stroke-width="0.4" opacity="0.15"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-O2847 存在性否定实体 (Existential Negation Entity)
   * 意象: 虚无 + 否定 + 消融
   * ═══════════════════════════════════ */
  'TMS-O2847': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-O2847" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6B21A8" stop-opacity="0.15"/>
      <stop offset="70%" stop-color="#3B0764" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="void-O2847" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C084FC" stop-opacity="0.4"/>
      <stop offset="40%" stop-color="#6B21A8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-O2847)" stroke="#6B21A8" stroke-width="0.6" opacity="0.25"/>
  <!-- 虚空圆 -->
  <circle cx="100" cy="100" r="42" fill="url(#void-O2847)" stroke="#C084FC" stroke-width="1.2" opacity="0.3"/>
  <!-- 否定交叉 X -->
  <line x1="72" y1="72" x2="128" y2="128" stroke="#C084FC" stroke-width="2" opacity="0.45"/>
  <line x1="128" y1="72" x2="72" y2="128" stroke="#C084FC" stroke-width="2" opacity="0.45"/>
  <!-- 二级否定 X (内层) -->
  <line x1="85" y1="85" x2="115" y2="115" stroke="#6B21A8" stroke-width="0.8" opacity="0.3"/>
  <line x1="115" y1="85" x2="85" y2="115" stroke="#6B21A8" stroke-width="0.8" opacity="0.3"/>
  <!-- 消融环 (逐渐消失的虚线圆) -->
  <circle cx="100" cy="100" r="62" fill="none" stroke="#C084FC" stroke-width="0.6" opacity="0.2" stroke-dasharray="8 6"/>
  <circle cx="100" cy="100" r="52" fill="none" stroke="#C084FC" stroke-width="0.5" opacity="0.15" stroke-dasharray="5 8"/>
  <circle cx="100" cy="100" r="32" fill="none" stroke="#C084FC" stroke-width="0.4" opacity="0.1" stroke-dasharray="3 10"/>
  <!-- 否定标记点 (四角) -->
  <circle cx="62" cy="62" r="1.5" fill="#C084FC" opacity="0.3"/>
  <circle cx="138" cy="62" r="1.5" fill="#C084FC" opacity="0.3"/>
  <circle cx="62" cy="138" r="1.5" fill="#C084FC" opacity="0.3"/>
  <circle cx="138" cy="138" r="1.5" fill="#C084FC" opacity="0.3"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-E0771 生物侵蚀模因载体 (Bio-Erosive Memetic)
   * 意象: 细胞分裂 + 生物膜 + 侵蚀扩散
   * ═══════════════════════════════════ */
  'TMS-E0771': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-E0771" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cell-E0771" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBBF24" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#B45309" stop-opacity="0.05"/>
    </radialGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-E0771)" stroke="#B45309" stroke-width="0.6" opacity="0.2"/>
  <!-- 中心母细胞 -->
  <circle cx="100" cy="100" r="30" fill="url(#cell-E0771)" stroke="#FBBF24" stroke-width="1.5" opacity="0.4"/>
  <circle cx="100" cy="100" r="20" fill="none" stroke="#FBBF24" stroke-width="0.6" opacity="0.2"/>
  <!-- 细胞核 -->
  <circle cx="100" cy="100" r="8" fill="none" stroke="#FBBF24" stroke-width="1" opacity="0.35"/>
  <!-- 分裂子细胞 -->
  <ellipse cx="56" cy="72" rx="14" ry="10" fill="none" stroke="#B45309" stroke-width="1.2" opacity="0.35" transform="rotate(-30 56 72)"/>
  <ellipse cx="56" cy="72" rx="6" ry="4" fill="none" stroke="#B45309" stroke-width="0.6" opacity="0.2" transform="rotate(-30 56 72)"/>
  <ellipse cx="150" cy="130" rx="16" ry="11" fill="none" stroke="#B45309" stroke-width="1.2" opacity="0.35" transform="rotate(45 150 130)"/>
  <ellipse cx="150" cy="130" rx="7" ry="5" fill="none" stroke="#B45309" stroke-width="0.6" opacity="0.2" transform="rotate(45 150 130)"/>
  <!-- 侵蚀扩散圈 -->
  <circle cx="100" cy="100" r="55" fill="none" stroke="#FBBF24" stroke-width="0.5" opacity="0.2" stroke-dasharray="2 6"/>
  <circle cx="100" cy="100" r="70" fill="none" stroke="#B45309" stroke-width="0.4" opacity="0.15" stroke-dasharray="1 8"/>
  <!-- 生物膜链接丝 -->
  <path d="M 80 80 Q 70 70 60 72" fill="none" stroke="#FBBF24" stroke-width="0.5" opacity="0.2"/>
  <path d="M 120 120 Q 135 125 145 128" fill="none" stroke="#FBBF24" stroke-width="0.5" opacity="0.2"/>
  <!-- 微小孢子 -->
  <circle cx="35" cy="45" r="1" fill="#FBBF24" opacity="0.2"/>
  <circle cx="160" cy="35" r="1.2" fill="#FBBF24" opacity="0.15"/>
  <circle cx="170" cy="90" r="0.8" fill="#FBBF24" opacity="0.2"/>
  <circle cx="25" cy="130" r="1" fill="#FBBF24" opacity="0.15"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-L0734 囤积者回廊 (The Hoarder's Corridor)
   * 意象: 透视回廊 + 重复门框 + 堆积
   * ═══════════════════════════════════ */
  'TMS-L0734': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-L0734" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#D97706" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-L0734)" stroke="#D97706" stroke-width="0.6" opacity="0.2"/>
  <!-- 透视回廊门框 (由外到内) -->
  <rect x="30" y="32" width="140" height="130" rx="2" fill="none" stroke="#FCD34D" stroke-width="1.2" opacity="0.4"/>
  <rect x="44" y="44" width="112" height="110" rx="2" fill="none" stroke="#D97706" stroke-width="1" opacity="0.35"/>
  <rect x="58" y="56" width="84" height="90" rx="1.5" fill="none" stroke="#FCD34D" stroke-width="0.8" opacity="0.3"/>
  <rect x="72" y="68" width="56" height="70" rx="1.5" fill="none" stroke="#D97706" stroke-width="0.6" opacity="0.25"/>
  <rect x="86" y="80" width="28" height="50" rx="1" fill="none" stroke="#FCD34D" stroke-width="0.5" opacity="0.2"/>
  <!-- 中心 (回廊尽头) -->
  <rect x="93" y="88" width="14" height="35" rx="1" fill="none" stroke="#FCD34D" stroke-width="0.5" opacity="0.15"/>
  <!-- 底部堆积物 (囤积) -->
  <line x1="50" y1="155" x2="150" y2="155" stroke="#D97706" stroke-width="1.2" opacity="0.35"/>
  <line x1="58" y1="160" x2="142" y2="160" stroke="#FCD34D" stroke-width="0.8" opacity="0.25"/>
  <line x1="66" y1="165" x2="134" y2="165" stroke="#D97706" stroke-width="0.5" opacity="0.15"/>
  <!-- 走廊地面线 -->
  <line x1="35" y1="168" x2="165" y2="168" stroke="#FCD34D" stroke-width="0.4" opacity="0.15"/>
  <!-- 天花板线 -->
  <line x1="35" y1="28" x2="165" y2="28" stroke="#D97706" stroke-width="0.4" opacity="0.1"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-L0234 明知山 (The Mountain of Knowing)
   * 意象: 山峰 + 攀登路径 + 星空
   * ═══════════════════════════════════ */
  'TMS-L0234': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-L0234" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-L0234)" stroke="#B45309" stroke-width="0.6" opacity="0.2"/>
  <!-- 主峰 -->
  <polygon points="100,22 140,95 60,95" fill="none" stroke="#FBBF24" stroke-width="1.5" opacity="0.5"/>
  <!-- 左峰 -->
  <polygon points="55,50 78,95 32,95" fill="none" stroke="#B45309" stroke-width="1" opacity="0.3"/>
  <!-- 右峰 -->
  <polygon points="145,50 168,95 122,95" fill="none" stroke="#B45309" stroke-width="1" opacity="0.3"/>
  <!-- 山体分层 (等高线) -->
  <line x1="88" y1="55" x2="112" y2="55" stroke="#FBBF24" stroke-width="0.5" opacity="0.2"/>
  <line x1="76" y1="68" x2="124" y2="68" stroke="#FBBF24" stroke-width="0.5" opacity="0.18"/>
  <line x1="65" y1="80" x2="135" y2="80" stroke="#FBBF24" stroke-width="0.4" opacity="0.15"/>
  <!-- 底部山脊线 -->
  <path d="M 25 100 L 60 95 L 100 95 L 140 95 L 175 100" fill="none" stroke="#B45309" stroke-width="0.6" opacity="0.25"/>
  <!-- 山巅之星 -->
  <circle cx="100" cy="22" r="3" fill="#FBBF24" opacity="0.7"/>
  <circle cx="100" cy="22" r="6" fill="none" stroke="#FBBF24" stroke-width="0.4" opacity="0.2"/>
  <!-- 攀登路径 (虚线) -->
  <path d="M 55 150 Q 68 130 75 115 Q 82 100 88 90 Q 94 78 98 65" fill="none" stroke="#B45309" stroke-width="0.8" opacity="0.25" stroke-dasharray="3 3"/>
  <!-- 地面 -->
  <line x1="25" y1="148" x2="175" y2="148" stroke="#B45309" stroke-width="0.8" opacity="0.25"/>
</svg>`,

  /* ═══════════════════════════════════
   * TMS-O0881 万花筒殿 (Kaleidoscope Palace)
   * 意象: 万花对称 + 彩窗 + 中心眼
   * ═══════════════════════════════════ */
  'TMS-O0881': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="g-O0881" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#B45309" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="r1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FBBF24"/><stop offset="100%" stop-color="#B45309"/></linearGradient>
    <linearGradient id="r2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#D4A373"/><stop offset="100%" stop-color="#78350F"/></linearGradient>
    <linearGradient id="r3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#60A5FA"/><stop offset="100%" stop-color="#1E3A5F"/></linearGradient>
    <linearGradient id="r4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F472B6"/><stop offset="100%" stop-color="#9D174D"/></linearGradient>
  </defs>
  <!-- 外环 -->
  <circle cx="100" cy="100" r="92" fill="url(#g-O0881)" stroke="#FBBF24" stroke-width="0.6" opacity="0.2"/>
  <!-- 8 瓣万花扇 -->
  <path d="M 100 100 L 160 45 A 50 50 0 0 1 180 95 Z" fill="none" stroke="url(#r1)" stroke-width="0.8" opacity="0.35"/>
  <path d="M 100 100 L 180 95 A 50 50 0 0 1 170 148 Z" fill="none" stroke="url(#r2)" stroke-width="0.8" opacity="0.3"/>
  <path d="M 100 100 L 170 148 A 50 50 0 0 1 130 178 Z" fill="none" stroke="url(#r3)" stroke-width="0.8" opacity="0.25"/>
  <path d="M 100 100 L 130 178 A 50 50 0 0 1 72 178 Z" fill="none" stroke="url(#r4)" stroke-width="0.8" opacity="0.25"/>
  <path d="M 100 100 L 72 178 A 50 50 0 0 1 30 148 Z" fill="none" stroke="url(#r1)" stroke-width="0.8" opacity="0.3"/>
  <path d="M 100 100 L 30 148 A 50 50 0 0 1 20 95 Z" fill="none" stroke="url(#r2)" stroke-width="0.8" opacity="0.35"/>
  <path d="M 100 100 L 20 95 A 50 50 0 0 1 40 45 Z" fill="none" stroke="url(#r3)" stroke-width="0.8" opacity="0.3"/>
  <path d="M 100 100 L 40 45 A 50 50 0 0 1 160 45 Z" fill="none" stroke="url(#r4)" stroke-width="0.8" opacity="0.25"/>
  <!-- 装饰圆环 -->
  <circle cx="100" cy="100" r="65" fill="none" stroke="#FBBF24" stroke-width="0.4" opacity="0.15" stroke-dasharray="3 5"/>
  <circle cx="100" cy="100" r="50" fill="none" stroke="#FBBF24" stroke-width="0.3" opacity="0.1" stroke-dasharray="2 6"/>
  <!-- 万花眼 -->
  <circle cx="100" cy="100" r="18" fill="none" stroke="#FBBF24" stroke-width="1.2" opacity="0.4"/>
  <circle cx="100" cy="100" r="10" fill="none" stroke="#FBBF24" stroke-width="0.8" opacity="0.3"/>
  <circle cx="100" cy="100" r="4" fill="#FBBF24" opacity="0.5"/>
  <!-- 外圈装饰点 -->
  <circle cx="160" cy="45" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="180" cy="95" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="170" cy="148" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="130" cy="178" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="72" cy="178" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="30" cy="148" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="20" cy="95" r="1.5" fill="#FBBF24" opacity="0.3"/>
  <circle cx="40" cy="45" r="1.5" fill="#FBBF24" opacity="0.3"/>
</svg>`,
}

async function main() {
  console.log('🗂️  获取所有 TMS 档案...')

  const archives = await prisma.archive.findMany({
    where: { code: { startsWith: 'TMS' } },
    select: { id: true, code: true, title: true, logoSvg: true },
    orderBy: { code: 'asc' },
  })

  console.log(`   找到 ${archives.length} 个阈界档案\n`)
  console.log('🎨 写入手工 SVG 徽记...\n')

  let count = 0
  for (const archive of archives) {
    const svg = LOGOS[archive.code]
    if (!svg) {
      console.log(`   ${archive.code} — ⚠️ 无徽记数据，跳过`)
      continue
    }

    if (archive.logoSvg === svg) {
      console.log(`   ${archive.code} — 未变更，跳过`)
      continue
    }

    await prisma.archive.update({
      where: { id: archive.id },
      data: { logoSvg: svg },
    })

    console.log(`   ✅ ${archive.code} — ${archive.title.slice(0, 30)}`)
    count++
  }

  console.log(`\n✨ ${count} 枚手工徽记已写入！`)
}

main()
  .catch((e) => { console.error('❌ 失败:', e); process.exit(1) })
  .finally(() => prisma.$disconnect())
