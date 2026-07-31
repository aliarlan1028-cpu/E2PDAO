# E2P DAO 全站改进路线图（逐页 Before / After）

> 目标：让初次访客在 **5 秒内看懂"E2P DAO 做什么、给谁、有什么结果、下一步做什么"**，同时用真实证据建立信任。
> 原则：**不推倒重来**。保留深色 Web3 风格、Services 的 5 阶段流程、跳转式信息结构；重做的是"信息表达 + 信任证据 + 可读性"。

---

## 0. 总体策略

**三条主线**
1. **信息清晰**：每页开头一句大白话说清"这是什么"，去掉抽象黑话。
2. **信任证据**：把"装出来的专业感"（假数据面板）换成"真实证据"（案例细节、真实数字、授权 logo、用户评价）。
3. **可读性**：正文换普通无衬线字体、放大字号、减少全大写。

**分人群（贯穿全站）**
- 项目方（Project）— 想要增长 / 上市 / 曝光
- KOL / 创作者 — 想接单变现
- 交易所 · 服务合作方（Partner）— 想合作 / 接资源

每个人群从首页就有独立入口，而不是一个万能 "Start a Partnership"。

**保留资产**
- 深色 + 绿色的品牌视觉
- Services 页的 5 阶段孵化流程（全站最强的一页）
- 用跳转整理重复页（labs→services、tokenomics→club 等）——结构保留

---

## 1. 全站通用改动（跨所有页面）

| 项目 | Before（现状） | After（目标） |
|---|---|---|
| 正文字体 | 几乎全站 `font-mono` + 全大写 + 7–10px 极小字 | 正文改无衬线（Inter/系统字体），14–16px；`mono` 只留给数字、标签、代码感元素 |
| CTA 体系 | 到处是 `Start a Partnership`，都跳外部 `w3claw.xyz` | 按人群区分：`我是项目方 / 我是 KOL / 我是合作方`；点击前用一句话预告"提交后会发生什么" |
| 术语 | E2PDAO / W3Claw / Incubator / Club / Campaign Matrix… 满天飞 | 统一叫法；**W3Claw 收到后台**（只在隐私/流程说明里出现，不放首屏） |
| 假数据面板 | Network Terminal / System Synchronized / Engine E2P-V2 / 假折线 | 删掉或替换为**真实数字与案例**；保留视觉容器，填真内容 |
| 免责声明 | 每页大量堆叠 | 收敛到 1 处链接（风险披露页），首屏只留最必要一句 |
| 联系方式 | 只有跳转，Footer 邮箱与账号邮箱不一致 | 统一一个真实邮箱 + Telegram；新增真实"联系/合作"入口 |

---

## 2. 逐页 Before / After

### 2.1 首页 Home（`app/page.tsx` + `components/Hero.tsx`）— 最高优先级

**现状问题**
- 主标题 "Connect projects with the right market resources" 抽象，无具体好处。
- 右侧 "E2P Network Terminal" 是假面板，注明"非真实业绩"，反而掉信任。
- 唯一 CTA 是万能 "Start a Partnership"，跳外部表单无预告。

**目标结构（从上到下）**
1. **Hero**
   - Before 标题：Connect projects with the right market resources
   - After 标题（示例，待定稿）：**「把 Web3 项目对接 KOL、交易所与社区，铺一条从冷启动到上市的增长路径」**
   - After 副文案：一句话——"我们连接 400+ KOL、20+ 资源节点和交易所关系，帮项目做增长、造势与上市准备。"
   - After CTA：主按钮"项目方申请孵化" + 次按钮"查看服务/案例"；下方三个人群小入口。
   - After 右侧卡片：**去掉"在线终端"演出**，改成"真实数据 + 一句证明"（例：已服务 X 个项目 / 4 个可查案例 / 合作交易所名单）。
2. **人群分流区（新增）**：三张卡 = 项目方 / KOL / 合作方，各一句好处 + 独立入口。
3. **三大产品**（保留现有 KOL Marketplace / Incubator / Club 卡片，文案去黑话）。
4. **生态闭环图**（保留 EcosystemOrbit，配一句大白话解释）。
5. **真实案例条**（新增/前移）：CHAX、HIRO、Virtuals、USBT——带一句"做了什么、结果如何"。
6. **底部行动区**（保留，改为分人群 CTA）。

---

### 2.2 导航 Navbar（`components/Navbar.tsx`）+ Footer（`components/Footer.tsx`）

**Navbar**
- Before：Home / KOL Marketplace / Incubator / E2P Club / About + `Start a Partnership`
- After：措辞更直白（如 Incubator→"孵化服务"）；CTA 保留但补一个下拉/落点让不同人群选。

**Footer**
- Before：OKX / GATE.IO logo 有 hover 效果却不可点（像坏链接）；假遥测 "System Synchronized / Nodes Active / Engine E2P-V2"；邮箱 `aliarlan1028@gmail.com` 与账号邮箱不一致。
- After：删假遥测；logo 要么去掉、要么做成真实可点（需授权）；**统一真实邮箱**；补真实联系入口。

---

### 2.3 About（`app/about/page.tsx`）— 现状最弱，最该改清楚

**现状问题**
- H1 "A Web3 growth and listing cooperation network" 抽象；把内部工具 W3Claw 摆到台前，制造困惑；通篇没有一句大白话说"我们是谁、帮你做成什么"。

**目标结构**
1. H1 改成一句人话：**「E2P DAO 是一个 Web3 增长与上市合作网络——帮项目找到对的 KOL、交易所和资源。」**
2. "我们解决什么问题"（3 点痛点 → 我们的做法）。
3. "运作方式"流程图（申请 → 评估 → 匹配资源 → 执行 → 跟进）；W3Claw 只在这里作为"后台评估系统"一句带过。
4. 团队 / 背景 / 可信度（有多少就放多少真的）。
5. CTA：分人群入口。

---

### 2.4 Services / 孵化器（`app/services/page.tsx`）— 全站最强，微调即可

**现状**：H1 "Build the project. Engineer the market."；5 阶段流程（Diagnose→Architect→Activate→Launch→List & Scale）；20 资源节点；4 个可查案例。结构和说服力都好。

**改进（小）**
- Before：Hero 里 "Sample Readiness Console" 标着 DEMO MODEL 的假环形图/折线。
- After：换成**真实交付物示意**（真实项目的脱敏成果截图/数据），或明确标"示意图"但弱化，别喧宾夺主。
- 案例区（Portfolio）**加详情**：每个案例"背景 → 我们做了什么 → 结果"，这是首页也要复用的信任资产。
- 术语 "Readiness / Campaign" 配一句解释。

---

### 2.5 Influence / KOL Marketplace（`app/influence/page.tsx`）

**现状**：H1 "400+ KOL resources. One Campaign Matrix."；脱敏样例卡；渠道/市场覆盖；3 种 Campaign 类型。对懂行的人清楚，但 "Campaign Matrix" 是黑话。

**改进（中）**
- Before 标题：400+ KOL resources. One Campaign Matrix.
- After 标题：**「400+ KOL 资源，一套可组合的投放方案」**（去 "Matrix" 黑话）。
- 双人群拆分：上半页对**项目方**（"如何用我们的 KOL 做增长"），下半页对**KOL**（"如何加入接单"）。现在两拨人混在一起。
- `400+` 若无法验证，改成可解释的口径（如"覆盖 X 个渠道、Y 个语区的创作者网络"）。

---

### 2.6 Club（`app/club/page.tsx`）

**现状**：H1 "The community layer behind market growth"；Trading Agent 演示终端 + 风控图；$E2P Point（Earn/Access/Use/Govern + 合约链接）；会员价值。tokenomics 已并入此页 `#e2p-point`。

**改进（中）**
- Before 标题：The community layer behind market growth
- After 标题：**「E2P Club：交易社区 + 交易 Agent + $E2P 积分」**（一句说清三件事）。
- Trading Agent：Before 是"很炫的假终端"。After 说清**它是什么、怎么用、风控如何、$E2P 起什么作用**；演示明确标注"界面示意"。
- $E2P Point：把 Earn/Access/Use/Govern 讲成用户视角的"我能怎么赚、怎么用"。
- 风险披露：保留但收敛，链到统一风险页。

---

### 2.7 联系 / Contact（`app/contact/page.tsx`）— 建议从"跳转"改为真实页

**现状**：只 `redirect('/services')`，没有真实联系方式，缺信任信号。

**改进**
- 新建真实联系页：Telegram（社区 + 商务 `@BitEsq`）、统一邮箱、"你是谁 → 走哪个入口"的引导、常见问题 FAQ。
- 让 Navbar/Footer 的"联系"落到这里，而不是甩去 Services。

---

### 2.8 法务页 Privacy / Risk（`app/privacy` `app/risk-disclosure`）

**现状**：内容齐全、写得规范（含"勿提交私钥/助记词"提醒）。
**改进（小）**：保留内容；作为**全站免责的唯一落点**，其它页的零散免责都收敛到这里链接过来；确认邮箱统一。

---

### 2.9 跳转页（labs / e2p-labs / e2p-club / e2p-signal-bot / campaigns / launch / tokenomics / success-cases / dashboard）

**现状**：都是干净的 `redirect`，用于收拢旧链接。
**改进**：**保留**。这是好设计，SEO 与旧链接兼容。无需改动。

---

## 3. 分阶段实施计划

| 阶段 | 内容 | 产出 | 见效 |
|---|---|---|---|
| **Phase 1**（先做） | 首页 Hero 改版 + 人群分流 + 去假面板；统一 CTA 与邮箱 | 首页焕新 | 最大、最快 |
| **Phase 2** | About 重写为"最好懂的一页"；新建真实 Contact 页；Footer 清理 | 信任骨架 | 高 |
| **Phase 3** | Services 案例详情化、Influence 双人群拆分、Club 文案人话化；字体/可读性系统统一 | 全站一致 | 中，长期 |

---

## 4. 需要你确认/提供的输入

1. **邮箱**：以哪个为准？`arlan1028@proton.me`（账号）还是 `aliarlan1028@gmail.com`（现 Footer）？
2. **真实数据**：`400+ KOL`、`20 资源节点`、`4 案例` 哪些可公开、可验证？案例能否给"背景/做了什么/结果"？
3. **交易所 logo**（OKX/GATE 等）：是否有展示授权？没有就去掉，避免误导。
4. **语言**：站点保持全英文，还是要中英双语？
5. **品牌语气**：偏"极客/终端风"还是"专业/机构风"？影响文案和视觉取舍。
6. **$E2P / Trading Agent**：现在是真实上线产品，还是设计阶段？决定文案能说到多实。
