# 设计系统 Skills

本仓库是 **Agent Skills** 的公共库，供团队在AI coding 中按设计规范生成界面、校验 Figma 设计稿时使用。

## 包含的 Skill

| Skill | 说明 |
|-------|------|
| **design-system-index** | 设计规范入口索引。在做设计相关任务或 Figma 校验时，引导 Agent 按场景加载色彩/字体/布局/组件等规范并输出合规结果。 |

## 团队如何使用

> 说明：下文统一用 `<skills-dir>` 表示你所使用的 AI coding 工具识别 skill 的目录，实际路径以对应工具约定为准。

### 方式一：复制到本地项目（推荐）

1. 克隆本仓库到本地：
   ```bash
   git clone https://github.com/你的用户名/你的仓库名.git
   ```
2. 把需要的 skill **整个文件夹** 复制到你项目的 `<skills-dir>/` 下：
   ```bash
   cp -r 你的仓库名/design-system-index 你的项目/<skills-dir>/
   ```
3. 在 AI IDE 或其他工具中打开你的项目，Agent 会自动识别 `<skills-dir>/` 下的 skill；对话时提到「设计规范」「Figma 校验」等即可触发。

### 方式二：Git Submodule（便于同步更新）

在你的项目根目录执行：

```bash
mkdir -p <skills-dir>
git submodule add https://github.com/你的用户名/你的仓库名.git <skills-dir>/design-system-skills
# 若仓库根下包含 design-system-index，可将该目录移动或复制到最终 skill 目录下
mv <skills-dir>/design-system-skills/design-system-index <skills-dir>/
```

其他成员拉代码后执行：

```bash
git submodule update --init
```

### 方式三：直接克隆到技能目录

```bash
cd 你的项目
mkdir -p <skills-dir>
git clone https://github.com/你的用户名/你的仓库名.git <skills-dir>/design-system-index
# 若仓库根是「设计系统 skills」且内含 design-system-index 文件夹，则克隆后路径应为：
# <skills-dir>/设计系统skills/design-system-index
# 只要最终 design-system-index 位于你的工具可识别的 skill 目录下即可。
```

## 仓库结构说明

```
design-system-index/     # 设计规范索引 skill
├── SKILL.md             # 入口与指引（name、description、场景速查）
├── references/          # 子规范文档（按需加载）
│   ├── color-tokens.md
│   ├── typography.md
│   ├── layout-grid.md
│   ├── spacing-scale.md
│   ├── components.md
│   ├── icons.md
│   ├── forms.md
│   └── input-templates.md
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
- 使用前请确保你的 AI coding 工具已启用 Skills/Agent Skills 能力。

## License

按团队约定选择（如 MIT、内部使用等）。
