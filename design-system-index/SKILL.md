---
name: design-system-index
description: 设计系统入口索引。指导 Agent 在做设计相关任务前查阅并遵守本项目设计系统子规范；执行 Figma 设计稿合规校验时按本索引加载对应规范（如色彩系统）并输出通过项/不符合项。只要用户提到设计规范、设计系统、UI规范、组件规范、视觉规范、Figma 设计、界面/页面/组件设计、设计稿校验、色彩/字体/布局/间距规范，或需要生成整页设计、组件、图标、插画、栅格与无障碍相关输出，即应加载本 skill；即使用户未明确说「设计规范」，只要涉及界面设计、Figma 校验或设计稿合规，也应优先加载。
---

## 设计规范索引

本 Skill 是**设计系统的入口索引**，用于告诉 Agent：在生成任何设计稿、组件或页面之前与过程中，必须优先对照本项目的设计系统规范，并按需跳转到对应的子 Skill 文档阅读和执行。

### 使用时机

- 当用户提到以下关键词时，优先加载本 Skill：  
  - 「设计规范」「设计系统」「UI 规范」「组件规范」「视觉规范」「设计风格」「Figma 设计」「界面设计」「页面设计」「组件设计」等；
- 当用户**提供 Figma 链接并要求校验/验证设计稿**是否符合设计规范时，必须按本 Skill 的「设计稿规范验证流程」执行。
- 当 Agent 需要：
  - 生成**整页/整流程**设计方案；
  - 设计或调整**组件、模块、图标、插画**等视觉元素；
  - 为设计稿补充/优化**间距、对齐、栅格、色彩、字体、状态、无障碍**等细节；
  - 将产品需求转化为**可直接在 Figma 中搭建的结构描述**时。

### 使用方式（给 Agent 的指引）

- **Progressive Disclosure（按需加载）**：references 下的文档**不要一次性全部读入**。先读本索引，再根据任务类型只加载对应 reference；若某 reference 超过 300 行，先看其目录再定位章节。
- **如何选文档**：不确定该读哪个规范时，优先查看本索引中的 **「索引场景速查」**（场景/关键词 → 应加载的 reference）或 **「不同任务下的规范组合示例」**（任务类型 → 必读文档列表），再按路径加载。
- **读取顺序**：
  - 先完整阅读本《设计规范索引》；
  - 用「索引场景速查」或「不同任务下的规范组合示例」确定要加载的 references；
  - 进入对应 **references/** 文档，逐条对照执行。
- **执行原则**：
  - 所有输出（布局、颜色、字体、组件尺寸、圆角、阴影）必须符合这些规范；
  - 如果多个规范存在冲突，按「本索引 > 具体模块 Skill > 临时说明」的优先级执行；
  - 如遇到规范缺失的场景，要：
    - 先根据已有规范推理出**最一致**的方案；
    - 并在输出说明中显式标注「基于现有规范推断」的假设。
- **产出要求**：
  - 在生成设计稿描述（或 Figma 结构描述）时，需明确标注关键规范的引用，例如：
    - 「颜色使用：主按钮采用 `主品牌色 / Primary`，详见 `references/color-tokens.md`」
    - 「正文采用 `Body / 14px / 行高 22px`，详见 `references/typography.md`」

## 设计稿规范验证流程（Figma 链接校验）

当用户提供 **Figma 链接并要求校验设计稿是否符合设计规范**时，Agent 必须按以下步骤执行（当前仅色彩规范已补充，其他规范待补充后按同样方式扩展）。

### 1. 获取设计数据（优先使用 Figma MCP）

- **若已安装并启用 figma-desktop MCP**：必须优先通过 MCP 获取设计文件数据，无需用户再提供截图或色值列表。
  - 使用 **`get_design_context`**：获取当前/指定设计文件的上下文（文件结构、当前选中节点等）。
  - 使用 **`get_variable_defs`**：获取文件中使用的变量定义（颜色、字体、间距等），用于与 `references/color-tokens.md` 中的色板对照。
  - 使用 **`get_metadata`**：按需获取节点/图层的元数据（填充色、描边色、文字色等），用于逐项色彩合规检查。
  - 从用户提供的 Figma 链接中解析 **file key**（如 `figma.com/design/xxxxx` 中的 `xxxxx`）及可选的 **node-id**，作为 MCP 调用的参数（具体参数名以 MCP 文档为准）。
- **若未配置 Figma MCP 或 MCP 返回数据不足**：再向用户说明无法直接读取画布，并请求以下任一材料：
  - 设计稿主要界面/组件的**截图**，或
  - 从 Figma 中**复制出的色值（Hex）及用途说明**，或
  - 导出的 **Design Tokens**（如 JSON）。
- 明确本次验证范围：**仅色彩** / 色彩+字体 / 全规范（未补充的规范项标注「待补充」）。

### 2. 加载并对照规范文档

- 先阅读本《设计规范索引》，再根据验证范围加载对应 references：
  - **色彩验证**：必读 `references/color-tokens.md`（ACCESS 主题色板、语义映射、默认 7 号色、主文本 Gray-9、普通按钮 Gray-1 等）。
- 将用户提供的色值/截图描述与规范逐条对照，不做主观猜测；若材料不足以判断某条规范，在报告中标注「无法验证（需补充材料）」。

### 3. 色彩合规验证项（当前必检）

按 `references/color-tokens.md` 执行，至少检查：

| 验证项 | 规范要求 | 检查方式 |
|--------|----------|----------|
| 色值是否在规范色板内 | 所有填充/描边/文字颜色须为 Brand/Blue/Green/Red/Yellow/Gray/Translucent 的 1–10 号色（Hex 与文档一致） | 使用 MCP 时：对比 get_variable_defs / get_metadata 返回的色值与色彩系统 md；否则对比用户提供的 Hex |
| 语义是否匹配 | 失败/错误→Red；警示→Yellow；成功→Green；进行中/信息→Blue；中性/次要/禁用→Gray | 根据组件用途（如错误提示、成功 Toast、主按钮）判断所用颜色是否符合语义 |
| 主文本颜色 | 正文/标题主色须为 `Gray-9`（#111111） | 检查主要文字色值是否为 #111111 |
| 普通按钮底色 | 次级/默认按钮底色须为 `Gray-1`（#EFF0F6） | 检查非主按钮、非危险按钮的填充色 |
| 默认状态色 | 无明确语义时的强调色（如 Tag、状态点）须使用各色板 **7 号色** | 检查状态类组件是否使用 *-7 |
| 主按钮 / 危险按钮 | 主按钮：Brand-7 或 Blue-7；危险按钮：Red-7 | 根据按钮类型核对色值 |

### 4. 输出验证结果

- 以结构化形式输出，便于用户修改设计稿或开发实现：
  - **通过项**：列出已符合的规范（可简要注明「如：主文本 Gray-9」）。
  - **不符合项**：逐条列出「位置/组件描述 + 当前值/表现 + 规范要求 + 建议修正」；若某条无法从材料中判断，标注「未验证（需补充材料）」。
- 若用户仅提供 Figma 链接且**未配置 figma-desktop MCP**（或 MCP 返回数据不足），**先回复说明无法直接读取画布，并请求截图或色值列表**，再进入步骤 2–4；若已启用 MCP，则直接通过 MCP 获取数据后进入步骤 2–4。

## 规范模块总览

Agent 在生图/生稿时，**按需**查阅以下 reference 文件（路径均相对于本 skill 目录）。**先根据「索引场景速查」或「不同任务下的规范组合示例」确定要加载的文档，再按路径读取，避免全量读入。**

| 模块 | 文件路径 | 内容摘要 | 典型适用场景 |
|------|----------|----------|--------------|
| color-tokens | `references/color-tokens.md` | 品牌/辅色/中性/状态色、背景与文本规则 | 配色、Figma 色彩校验、按钮/标签/状态色 |
| typography | `references/typography.md` | 字体族、字号层级、行高、字重、中英混排 | 标题/正文层级、排版、字号选择 |
| layout-grid | `references/layout-grid.md` | 最低适配宽度、顶部导航、侧导、白卡分块、典型布局（表单/表格/卡片） | 页面结构、布局选型、带/无侧导、表单/表格/卡片列表 |
| spacing-scale | `references/spacing-scale.md` | Height/水平/垂直间距/圆角 token、使用建议、表单间距索引 | 组件尺寸、页面边距、卡片间距、通用 token |
| components | `references/components.md` | OneUI 组件清单、各组件 best practices、子类型（如 Checkbox/Radio/Form） | 选组件、写表单/表格/按钮/弹窗等 |
| icons | `references/icons.md` | dls-icons-react、尺寸规范、线/面性、Icon 使用建议 | 用图标、图标尺寸与风格 |
| forms | `references/forms.md` | 步骤条表单结构、白卡/圆角/边距、表单间距校验规则、字段与按钮 | 多步骤表单、表单页布局、表单间距与校验 |
| input-templates | `references/input-templates.md` | 设计需求输入结构 | 将需求结构化、填写设计输入 |

## 索引场景速查

| 场景/关键词 | 应加载的 reference |
|-------------|--------------------|
| Figma 设计稿校验、色彩合规 | `color-tokens.md` |
| 整页/整流程界面设计 | `color-tokens`、`typography`、`layout-grid`、`spacing-scale`、`components` |
| 表单页、步骤条表单、多步骤表单、表单布局 | `forms`、`layout-grid`、`spacing-scale`、`components` |
| 表单间距、Label 与输入间距、表单项间距、白卡内边距 | `forms`（含表单间距校验规则）、`spacing-scale`（token 与索引） |
| 表格页、列表页、数据管理、有/无侧导表格 | `layout-grid`、`components`、`spacing-scale` |
| 卡片列表、有/无侧导卡片 | `layout-grid`、`components` |
| 数据看板、运营看板、监控大屏、数据概览页 | `layout-grid`、`components`、`color-tokens`、`spacing-scale` |
| 布局选型、顶部导航、侧导、白卡分块、典型布局 | `layout-grid` |
| 浮层容器、抽屉、弹窗、Modal、Dialog、Popover | `layout-grid`、`components`、`spacing-scale` |
| 单个组件（按钮/输入/选择/卡片/弹窗等） | `components`、`color-tokens`、`typography`、`spacing-scale` |
| 图标、图标库、图标尺寸、线型/面型 | `icons`、`color-tokens` |
| 间距 token、圆角、组件高度、页面边距 | `spacing-scale`；表单内间距细节见 `forms` |
| 设计需求输入、需求结构化 | `input-templates.md` |

## 不同任务下的规范组合示例

按任务类型只加载下列 reference，避免全量读入：

- **设计稿规范验证（用户提供 Figma 链接，当前仅色彩）**：  
  - 必读：`references/color-tokens.md`；按「设计稿规范验证流程」执行并输出通过项/不符合项。

- **整页/整流程设计**：  
  - 必读：`references/color-tokens.md`、`references/typography.md`、`references/layout-grid.md`、`references/spacing-scale.md`、`references/components.md`。

- **表单页/步骤条表单/多步骤表单**：  
  - 必读：`references/forms.md`、`references/layout-grid.md`、`references/spacing-scale.md`、`references/components.md`；涉及配色与字体时加 `references/color-tokens.md`、`references/typography.md`。

- **表格页或卡片列表页（有/无侧导）**：  
  - 必读：`references/layout-grid.md`、`references/components.md`、`references/spacing-scale.md`。

- **数据看板/运营看板/监控大屏**：  
  - 必读：`references/layout-grid.md`、`references/components.md`、`references/color-tokens.md`、`references/spacing-scale.md`；涉及图表组件时参考 `references/components.md` 中的 Chart/Progress 等。

- **单个组件设计（如按钮、输入、选择、卡片、弹窗）**：  
  - 必读：`references/components.md`、`references/color-tokens.md`、`references/typography.md`、`references/spacing-scale.md`。

- **浮层容器（抽屉/弹窗/Popover）**：  
  - 必读：`references/layout-grid.md`（浮层容器章节）、`references/components.md`、`references/spacing-scale.md`；若浮层内含表单可加 `references/forms.md`。

- **图标/插画类输出**：  
  - 必读：`references/icons.md`、`references/color-tokens.md`。

- **状态/交互优化、无障碍**：  
  - 必读：`references/components.md`（含交互与状态相关）、涉及对比度与触控时查阅项目内无障碍说明；当前 references 无独立「交互与状态」「无障碍规范」文件时，以组件库与色彩/对比度为准。

- **设计需求结构化、输入模板**：  
  - 必读：`references/input-templates.md`。

## 当规范不完整时的行为要求

- 不允许随意偏离已有规范去「自由发挥」新的风格；
- 如确实需要补充新模式（例如新增一种状态色），需：
  - 先说明「为何现有规范不足」；
  - 再给出**与现有体系最接近**的新方案，并在描述中明确这是「待确认扩展」；
  - 后续由人工将其整理进对应的 Skill 文档中。

> 简要总结：  
> **在生成任何设计相关内容前后，Agent 必须将本《设计规范索引》视作入口，主动跳转阅读并严格执行对应 references 中的规则，保证所有输出都处在同一套可复用的设计系统内，一致、规范且可扩展。**

## Skill 结构（Anatomy，对齐 skill-creator）

```
design-system-index/
├── SKILL.md           # 本索引（必读）
└── references/        # 按需加载，不要一次性全部读入
    ├── color-tokens.md
    ├── typography.md
    ├── layout-grid.md
    ├── spacing-scale.md
    ├── components.md
    ├── icons.md
    ├── forms.md
    └── input-templates.md
```

若需用 skill-creator 的评测流程（test prompts → 带 skill / 不带 skill 对比 → 人工反馈迭代），可在本 skill 同级建 `evals/evals.json` 并放入若干设计相关测试用例；设计类输出多为主观，建议以人工评审为主、断言为辅。

