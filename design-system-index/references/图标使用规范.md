# 图标使用规范

---

## 图标库

- **使用 [dls-icons-react](https://github.com/ecomfe/dls-icons/tree/master/packages/dls-icons-react)**（DLS 设计体系官方 React 图标库）。
- 安装：`npm i -D dls-icons-react`。
- 按需引入组件：`import { IconArrowRight, IconCheckCircleSolid } from 'dls-icons-react'`。
- 组件支持 `spin`、`active` 等 props，可通过 `style` 或 className 控制尺寸与颜色。

---

## 尺寸规范

- 尺寸=相邻文字字号+2px
- 同一层级、同一类型的图标在同一界面内保持统一尺寸。

---

## 线/面性规范

dls-icons-react 中同一语义常提供**线型（默认）**与**面型（-Solid 后缀）**两套图标。

| 类型 | 命名示例 | 应用场景 |
|------|----------|----------|
| **线型（outline）** | `IconArrowRight`、`IconCalendar` | 有色背景上使用线型，使用较少。
| **面型（solid）** | `IconArrowRightSolid`、`IconCalendarSolid` | 通常优先使用面型图标。如表单label旁的问号、侧导icon、顶导icon、标题栏旁问号等。

---

## 颜色选择

|搭配的文字颜色  | icon颜色
|-------------|----------|
|Gray-7           |Gray-5        | 
|Gray-9          |Gray-5        | 
|Blue-7           |Blue-7       | 
|Yellow-7           |Yellow-7       | 
|Red-7           |Red-7       | 
|Green-7           |Green-7       | 



---

## 其他约定

- 装饰性图标使用 `aria-hidden="true"`；表意或可点击图标需提供 `aria-label` 或可见文案。
- 与 OneUI 组件配合时，颜色与尺寸优先遵循组件库与 DLS 设计 token。
