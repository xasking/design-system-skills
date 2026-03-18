# design-system-index Skill 测试说明

## 1. 如何确认 Skill 已生效

- **对话中触发**：在 Cursor 对话里使用包含「设计规范」「设计系统」「布局」「色彩」「Figma 校验」等关键词的提问时，Agent 会按 SKILL.md 的说明加载本 skill，并**按需引用** `references/` 下的文档（如 `layout-grid.md`、`color-tokens.md` 等）。
- **判断标准**：回复中应**明确写出引用的规范文件**（例如「详见 `references/color-tokens.md`」「符合 `layout-grid.md` 中的无侧导表单布局」），且给出的布局/色彩/间距/组件用法与这些文档一致。

## 2. 手动测试（推荐）

在**新开对话**中复制下面任意一条 Prompt，发送给 Agent，检查回复是否满足对应的 Expected。

| 测试项 | Prompt（复制到对话） | 预期 |
|--------|----------------------|------|
| Figma 校验 | 我有一份 Figma 设计稿链接：https://figma.com/design/xxxx/yyy?node-id=1-2，请帮我校验这份设计稿是否符合我们项目的设计规范，重点看色彩和主文本/按钮是否合规。 | 按「设计稿规范验证流程」执行，加载 color-tokens，输出通过项与不符合项。 |
| 状态标签 | 做一个「状态标签」组件的设计说明：成功、警告、错误、信息四种状态，包括背景色、文字色、圆角、内边距，要符合我们设计系统。 | 状态色符合 color-tokens（成功→Green、警示→Yellow 等），尺寸/圆角符合 spacing-scale 或 components。 |
| 无侧导表单 | 请根据我们项目的设计规范，给一个「无侧导表单」页面的布局与组件说明。要求：应用 Form、Input、Select、Button、Card，说明单块白色卡片居中、标签在上、表单项间距与底部操作栏，并引用布局与栅格、表单、组件库规范。 | 无侧导表单布局（顶部导航 + 单块白卡 720–840px）、labelPosition top、表单项间距 24px、引用 layout-grid/forms/components。 |
| 有侧导表格 | 请根据设计规范给一个「有侧导表格（标题栏为筛选区）」的布局与组件说明，用 Sidenav、Search、Select、Button、Table、Pagination、Card，并引用布局与组件库规范。 | 有侧导表格结构，筛选区在标题栏，引用 layout-grid、components。 |
| 有侧导卡片列表 | 请根据设计规范给一个「有侧导卡片列表」的布局与组件说明，用 Sidenav、Search、Button、Card、Pagination、Uploader，并引用布局与组件库规范。 | 有侧导卡片列表结构（标题/搜索 → 筛选/Tab → 卡片网格 → 分页），引用 layout-grid、components。 |

## 3. 运行 Evals 脚本（列出所有测试用例）

```bash
cd .cursor/skills/design-system-index
npm run evals
```

会打印全部 6 条测试 Prompt 及 Expected，便于复制到对话中逐条验证。

## 4. 建议

- 用**新对话**测试，避免历史上下文干扰。
- 若回复未引用 `references/` 或与规范不一致，可检查：当前会话是否在含本 skill 的工作区内、提问是否包含设计相关关键词、或尝试显式写「根据设计系统 / 设计规范」。
- 设计类输出主观性较强，evals 以**人工对照 Expected 检查**为主。
