# 设计系统 Skills（Cursor Agent Skills）

本仓库是 **Cursor Agent Skills** 的公共库，供团队在 Cursor 中按设计规范生成界面、校验 Figma 设计稿时使用。

## 包含的 Skill

| Skill | 说明 |
|-------|------|
| **design-system-index** | 设计规范入口索引。在做设计相关任务或 Figma 校验时，引导 Agent 按场景加载色彩/字体/布局/组件等规范并输出合规结果。 |

## 团队如何使用

### 方式一：复制到本地项目（推荐）

1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/你的用户名/你的仓库名.git
   ```
2. 把需要的 skill **整个文件夹** 复制到你项目的 `.cursor/skills/` 下：
   ```bash
   cp -r 你的仓库名/design-system-index 你的项目/.cursor/skills/
   ```
3. 在 Cursor 中打开你的项目，Agent 会自动识别 `.cursor/skills/` 下的 skill；对话时提到「设计规范」「Figma 校验」等即可触发。

### 方式二：Git Submodule（便于同步更新）

在你的项目根目录执行：

```bash
mkdir -p .cursor/skills
git submodule add https://github.com/你的用户名/你的仓库名.git .cursor/skills/design-system-skills
# 把 skill 放到 Cursor 能识别的名字下（若仓库根就是 design-system-index 可做一次 ln 或复制）
mv .cursor/skills/design-system-skills/design-system-index .cursor/skills/
```

其他成员拉代码后执行：

```bash
git submodule update --init
```

### 方式三：直接克隆到 .cursor/skills

```bash
cd 你的项目
mkdir -p .cursor/skills
git clone https://github.com/你的用户名/你的仓库名.git .cursor/skills/design-system-index
# 若仓库根是「设计系统 skills」且内含 design-system-index 文件夹，则克隆后路径应为：
# .cursor/skills/设计系统skills/design-system-index
# Cursor 会递归识别 .cursor/skills 下含有 SKILL.md 的目录，因此只要最终 design-system-index 在 .cursor/skills 下即可。
```

## 仓库结构说明

```
design-system-index/     # 设计规范索引 skill
├── SKILL.md             # 入口与指引（name、description、场景速查）
├── references/          # 子规范文档（按需加载）
│   ├── 色彩系统.md
│   ├── 字体与字号系统.md
│   ├── 布局与栅格系统.md
│   ├── 间距与尺寸系统.md
│   ├── 组件库规范.md
│   ├── 图标使用规范.md
│   ├── 表单页面规范.md
│   └── 输入模板.md
├── evals/
│   ├── evals.json       # 评测用例
│   └── run.js           # 列出 prompt 便于手动测试
└── package.json         # npm run evals 用
```

## 更新与协作

- 修改规范内容：直接改 `references/*.md` 或 `SKILL.md`，提交 PR 或推送到主分支。
- 新增规范文档：在 `references/` 下新增 `.md`，并在 `SKILL.md` 的「规范模块总览」「索引场景速查」中补充说明和引用。

## 依赖说明

- 本仓库仅含 Markdown 与简单脚本，无运行时依赖。
- 使用前请确保项目已在 Cursor 中打开，并已启用 Agent Skills。

## License

按团队约定选择（如 MIT、内部使用等）。
