## ACCESS 主题色彩系统

> 以下为 Figma 中 ACCESS 模式下的基础色板，仅列出与颜色相关的 token。  
> 命名建议：`color-{family}-{level}`，例如 `color-brand-6`、`color-gray-9`。

### 品牌色 Brand（ACCESS）

| Token            | Hex     |
| ---------------- | ------- |
| `color-brand-1`  | `#F2F7FF` |
| `color-brand-2`  | `#E3EDFF` |
| `color-brand-3`  | `#C4DAFF` |
| `color-brand-4`  | `#99BEFF` |
| `color-brand-5`  | `#729CFE` |
| `color-brand-6`  | `#4D79FF` |
| `color-brand-7`  | `#3A5BFD` |
| `color-brand-8`  | `#333FE6` |
| `color-brand-9`  | `#0F2DBD` |
| `color-brand-10` | `#1C244A` |

### 蓝色 Blue（ACCESS）

| Token           | Hex     |
| --------------- | ------- |
| `color-blue-1`  | `#EBF2FF` |
| `color-blue-2`  | `#DCE9FF` |
| `color-blue-3`  | `#BFD6FF` |
| `color-blue-4`  | `#95BCFF` |
| `color-blue-5`  | `#729CFE` |
| `color-blue-6`  | `#4D79FF` |
| `color-blue-7`  | `#3A5BFD` |
| `color-blue-8`  | `#333FE6` |
| `color-blue-9`  | `#0F2DBD` |
| `color-blue-10` | `#1C244A` |

### 绿色 Green（ACCESS）

| Token            | Hex     |
| ---------------- | ------- |
| `color-green-1`  | `#F4FCF3` |
| `color-green-2`  | `#E9FAE5` |
| `color-green-3`  | `#C3E6BC` |
| `color-green-4`  | `#96D68A` |
| `color-green-5`  | `#70C760` |
| `color-green-6`  | `#4DBB3A` |
| `color-green-7`  | `#39AD25` |
| `color-green-8`  | `#389527` |
| `color-green-9`  | `#357529` |
| `color-green-10` | `#244F1C` |

### 红色 Red（ACCESS）

| Token          | Hex     |
| -------------- | ------- |
| `color-red-1`  | `#FEF5F5` |
| `color-red-2`  | `#FEECEC` |
| `color-red-3`  | `#FFD1D1` |
| `color-red-4`  | `#FFA8A8` |
| `color-red-5`  | `#FF7575` |
| `color-red-6`  | `#FF5252` |
| `color-red-7`  | `#F21818` |
| `color-red-8`  | `#C80E0E` |
| `color-red-9`  | `#900404` |
| `color-red-10` | `#640202` |

### 黄色 Yellow（ACCESS）

| Token             | Hex     |
| ----------------- | ------- |
| `color-yellow-1`  | `#FFFBF5` |
| `color-yellow-2`  | `#FFF4DD` |
| `color-yellow-3`  | `#FFDDB8` |
| `color-yellow-4`  | `#FFC485` |
| `color-yellow-5`  | `#FAB061` |
| `color-yellow-6`  | `#FB972D` |
| `color-yellow-7`  | `#F57E00` |
| `color-yellow-8`  | `#D16900` |
| `color-yellow-9`  | `#944A00` |
| `color-yellow-10` | `#522B04` |

### 中性色 Gray（ACCESS）

| Token           | Hex     |
| --------------- | ------- |
| `color-gray-0`  | `#FFFFFF` |
| `color-gray-1`  | `#EFF0F6` |
| `color-gray-2`  | `#E4E7F1` |
| `color-gray-3`  | `#DADEEC` |
| `color-gray-4`  | `#C6CCDC` |
| `color-gray-5`  | `#B2B9CD` |
| `color-gray-6`  | `#8F96AE` |
| `color-gray-7`  | `#666E85` |
| `color-gray-8`  | `#494F5F` |
| `color-gray-9`  | `#111111` |
| `color-gray-10` | `#000000` |

### 半透明/蒙层 Translucent（ACCESS）

> Translucent 与 Gray 色板共享相同 Hex，仅语义不同，通常用于蒙层、描边、分割线等。

| Token                  | Hex     |
| ---------------------- | ------- |
| `color-translucent-0`  | `#FFFFFF` |
| `color-translucent-1`  | `#EFF0F6` |
| `color-translucent-2`  | `#E4E7F1` |
| `color-translucent-3`  | `#DADEEC` |
| `color-translucent-4`  | `#C6CCDC` |
| `color-translucent-5`  | `#B2B9CD` |
| `color-translucent-6`  | `#8F96AE` |
| `color-translucent-7`  | `#666E85` |
| `color-translucent-8`  | `#494F5F` |
| `color-translucent-9`  | `#111111` |
| `color-translucent-10` | `#000000` |

### 图表色板 Chart Palette（ACCESS）

> 以下色板来自 Figma 文件「图表样式库」节点 `1152:2`「access主题图表色板」，用于折线图、柱状图、面积图、饼图/环图等多系列图表。
> **使用规则**：根据指标/系列数量，按顺序取前 N 个颜色；不跳色、不随机重排。若单图超过 9 个系列，不默认循环复用，优先考虑合并维度、分页，或与设计确认是否扩展色板。

| Token | Hex | 说明 |
| ----- | --- | ---- |
| `color-chart-series-1` | `#3A5BFD` | 主起始色，等同 `Brand-7` / `Blue-7` |
| `color-chart-series-2` | `#6EDA2F` | 第二系列色 |
| `color-chart-series-3` | `#FB8750` | 第三系列色 |
| `color-chart-series-4` | `#7B75F0` | 第四系列色 |
| `color-chart-series-5` | `#FFD54D` | 第五系列色 |
| `color-chart-series-6` | `#58E6F0` | 第六系列色 |
| `color-chart-series-7` | `#4DAC5A` | 第七系列色 |
| `color-chart-series-8` | `#FF70AC` | 第八系列色 |
| `color-chart-series-9` | `#B2B9CD` | 第九系列色，等同 `Gray-5`，适合弱化系列 |

### 图表对比色板 Chart Comparison Pairs（ACCESS）

> 以下对比组合也来自同一节点，用于仅有 2 个系列且语义关系明确的对比图，不替代上方 9 色顺序色板。

| 场景 | 推荐色值 |
| ---- | -------- |
| 男女对比等语义类 | `#3A5BFD` + `#FB8750` |
| `before / after`、一个指标重要另一指标仅作参考 | `#3A5BFD` + `#B2B9CD` |

### 商业 AI 渐变色 Commercial AI Gradients（ACCESS）

> 以下渐变来自 Figma 文件「投放平台 26Q2」节点 `4202:83938`，用于商业 AI、云平台运营位、权益提示、托管升级等需要与白色模块区分的视觉场景。
> 文字、卡片边框、普通按钮等基础 UI 色仍优先使用上方基础色板；渐变主要用于背景、品牌氛围、主行动按钮或强调文字。

| Token | 用途 | Type | Stops |
| ------ | ---- | ---- | ----- |
| `color-gradient-commercial-ai-deep-default` | 深色默认背景 / 强品牌主视觉 | Linear | `0% #33A7FF` → `25.5% #3471FE` → `48.1% #0054E6` → `65.9% #3A5BFD` → `98.5% #8E72FF` |
| `color-gradient-commercial-ai-deep-hover` | 深色 hover 背景 | Linear | `0% #4DB2FF` → `25.8% #4D82FE` → `43.6% #3471FE` → `63.9% #3975FE` → `98.5% #9D85FF` |
| `color-gradient-commercial-ai-deep-active` | 深色 active 背景 | Linear | `0% #0080FF` → `25.8% #0054E6` → `37.8% #0054E6` → `63.9% #0054E6` → `98.5% #643DFF` |
| `color-gradient-commercial-ai-deep-disabled` | 深色禁用背景 / 弱化强品牌视觉 | Linear | `0% #C7E8FF` → `26% #B7DBFF` → `69.2% #B9CFFF` → `98.5% #DDD6FF` |
| `color-gradient-commercial-ai-medium-border` | 中等强度边框 / 描边氛围 | Linear | `0% #B1DEFF` → `20.2% #9FCAFF` → `63.8% #92B4FF` → `90.9% #C7BAFF` → `98.5% #DDCDFF` |
| `color-gradient-commercial-ai-medium-background` | 中等强度背景 | Linear | `0% #C7E8FF` → `26% #B7DBFF` → `69.2% #B9CFFF` → `98.5% #DDD6FF` |
| `color-gradient-commercial-ai-light-default` | 浅色默认背景 / 弥散底色 | Linear | `0% #F7F5FF` → `57.7% #F2F6FF` → `96.6% #F2FBFF` |
| `color-gradient-commercial-ai-light-hover` | 浅色 hover 背景 | Linear | `0% #F0EBFF` → `57.7% #E5EEFF` → `96.6% #E5F7FF` |
| `color-gradient-commercial-ai-light-active` | 浅色 active 背景 | Linear | `0% #ECE5FF` → `57.7% #DBE7FF` → `96.6% #DBF3FF` |
| `color-gradient-commercial-ai-light-disabled` | 浅色禁用背景 | Linear | `0% #F7F5FF` → `57.7% #F2F6FF` → `96.6% #F2FBFF` |
| `color-gradient-commercial-ai-text` | 商业 AI 强调文字 | Linear | 同 `color-gradient-commercial-ai-deep-default` |

## ACCESS 使用场景（语义与用法）

### 语义映射（按颜色家族）

- **红色 Red**：失败 / 错误 / 危险（表单校验失败、删除风险、错误提示、失败状态）
- **黄色 Yellow**：警示 / 风险提示（权限不足提示、信息不完整、即将到期、需要注意的提醒）
- **绿色 Green**：成功 / 已完成 / 正向反馈（保存成功、已通过、已完成、成功状态）
- **蓝色 Blue**：进行中 / 信息 / 中性强调（加载中、处理中、进行中状态、信息提示、可点击强调）
- **灰色 Gray**：失效 / 中性 / 次要（Disabled、占位、分割、弱化信息、非主操作）

### 默认用色规则（强制）

- **默认状态色**：除非有明确语义（成功/警示/失败/进行中），默认使用各色板的 **7 号色**作为主视觉强度（如 Tag、状态点、图标强调、轻量按钮描边/文字等）。
- **黑色文字例外**：正文/标题等主要文本颜色使用 **`color-gray-9`（`#111111`）**，不使用 7 号色替代。

### 常见 UI 场景建议（可直接套用）


- **提示类组件（Toast/Alert/Message）**：
  - Success：`Green-7`
  - Warning：`Yellow-7`
  - Error：`Red-7`
  - Info/Processing：`Blue-7`
- **状态标记（Tag/Badge/Status Dot）**：
  - 状态色优先使用对应色板 `*-7`；背景可用 `*-1 ~ *-3` 做浅底（如需要）
- **按钮/主要操作**：
  - 主按钮默认使用品牌/蓝系（优先 `Brand-7`）
  - 普通按钮（次级按钮、默认按钮）底色优先使用 `Gray-1`，结合灰色文字/描边表现为中性操作
- **进度/进行中**：
  - 进度条/步骤条进行中：`Blue-7`
  - 完成：`Green-7`
  - 失败：`Red-7`
- **图表系列色**：
  - 多系列图表使用 `color-chart-series-1` ~ `color-chart-series-9`，按指标数量顺序取前 N 个颜色
  - 双系列对比图若存在明确语义，可优先使用图表对比色板中的固定组合
- **文本与层级**：
  - 主文本：`Gray-9`（#111111）
  - 次要/说明文本：`Gray-7`

- **商业 AI / 云平台运营位渐变**：
  - 强品牌背景、主行动按钮：优先使用 `color-gradient-commercial-ai-deep-default`；hover/active 分别使用对应状态 token。
  - 运营卡片浅背景：优先使用 `color-gradient-commercial-ai-light-default`，需要更明显区分白色模块时可用 `medium-background`。
  - 卡片边框/描边氛围：优先使用 `color-gradient-commercial-ai-medium-border`；若实现环境不支持渐变描边，退化为 `color-gray-2` / `color-translucent-2`。
  - 强调文字：可使用 `color-gradient-commercial-ai-text`；正文和标题主色仍遵循 `color-gray-9`。
