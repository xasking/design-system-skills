# 表单页面规范（步骤条表单）

> 适用于投放平台及 B 端企业级后台中常见的**多步骤表单**页面，是平台最常用的表单形式之一。参考 Figma 设计稿「投放平台 26 Q1」中步骤条表单结构，结合现有实现提炼。

---

## 一、页面整体结构

### 1.1 布局层级

```
┌────────────────────────────────────────────────────────────┐
│ 顶部导航栏（Header）                                         │
├────────────┬───────────────────────────────────────────────┤
│ 左侧 Sider  │ 主内容区（Content）                             │
│ 步骤条导航  │  ┌─────────────────────────────────────────┐  │
│ Step1      │  │ 面包屑 Breadcrumb（可选）                  │  │
│ Step2      │  ├─────────────────────────────────────────┤  │
│ Step3      │  │ 顶部摘要区卡片（可选，用于展示上下文）      │  │
│   …        │  ├─────────────────────────────────────────┤  │
│            │  │ 主内容卡片（Form 内容）                    │  │
│            │  │  - 分组 1                                 │  │
│            │  │  - 分组 2                                 │  │
│            │  │  - …                                      │  │
│            │  ├─────────────────────────────────────────┤  │
│            │  │ 底部按钮区卡片                             │  │
│            │  │  [主按钮] [次要按钮]                       │  │
│            │  └─────────────────────────────────────────┘  │
└────────────┴───────────────────────────────────────────────┘
```

### 1.2 核心模块说明

| 模块 | 说明 | 是否必选 |
|------|------|----------|
| 顶部导航 | 平台 Logo、通知、用户信息 | 必选 |
| 左侧步骤条 | 展示多步骤流程，支持点击跳转；高亮当前步骤 | 必选 |
| 主内容卡片 | 表单主体，按业务分组用 Card 或 Section 分隔 | 必选 |
| 底部按钮区 | 独立卡片，放置「下一步」「保存」「取消」等操作按钮 | 必选 |

---

## 二、步骤条规范

### 2.1 结构要求

- **位置**：固定在左侧 Sider 内，宽度建议 200px
- **展示形式**：垂直排列的步骤项，每步显示「第 N 步：步骤名称」
- **当前步骤**：通过 `currentStep` 或路由高亮当前项
- **交互**：支持点击已完成/当前步骤进行步骤间跳转

### 2.2 步骤命名

- 步骤名称简洁明了，如「第一步：方案」「第二步：单元」「第三步：定向」
- 与页面标题或面包屑末级保持一致

### 2.3 技术实现参考

- 可使用 OneUI `Anchor` 或 `Steps` 组件
- 步骤跳转与路由绑定（如 `/step1`、`/step2`）

---

## 三、主内容区规范

### 3.1 内容区布局

- **内容区宽度**：参考《布局与栅格系统》，单列表单页建议 720–840px
- **页面左右边距（强约束）**：整个页面左右两侧外边距始终为 **24px（H4）**，不得随分辨率或业务内容调整
- **背景**：内容区背景使用浅灰（如 #f0f2f5），卡片白底突出
- **卡片间距**：上下卡片间距 24px（V4）

### 3.2 主内容卡片

- **白卡内边距（通用规则）**：所有表单中的白卡（主内容卡片、内嵌卡片、底部按钮区卡片等）内边距统一为**上下左右 24px**，适用于所有表单页面。
- **白卡圆角（强约束）**：所有表单中的白卡（主内容卡片、内嵌卡片、底部按钮区卡片等）圆角统一为 **10px（radius-r2）**，不得使用其他圆角值。
- 每个主内容卡片内部包含一个或多个**业务分组**
- 分组方式：
  - **Card type="inner"**：用内嵌卡片表示一个业务模块（如「推广产品与服务」「出价预期」）
  - **Divider orientation="left"**：同一卡片内的子分组可用分割线
- 卡片内边距：24px（H4/V4）。注意：OneUI Card 不支持 `bodyStyle`，ACCESS 主题默认 body 为 12px，需通过 CSS 覆盖：`.form-page-container .one-access-card-body { padding: 24px !important; }`
- **白卡内最后一个表单项下间距（强约束）**：每个白卡内最后一个表单项不保留 `24px` 下间距，必须为 `0`。推荐覆盖：`.one-access-card-body .one-access-form-item:last-child { margin-bottom: 0 !important; }`

### 3.3 表单分组原则

- 按业务逻辑分组，每组一个清晰的标题
- 常见分组：基础信息、投放设置、出价设置、定向设置、命名等
- 分组标题与内容间距：16px（V3）
- 分组与分组之间：32px（V5）或使用独立 Card 分隔

---

## 四、表单字段规范

### 4.1 表单布局

- **布局方式（强约束）**：优先使用上下布局（Label 在上、输入控件在下）。OneUI `Form` 通过 `labelPosition="top"` 设置：
  ```tsx
  <Form labelPosition="top">
    <Form.Field name="fieldName" label="字段名称" required>
      <Input />
    </Form.Field>
  </Form>
  ```
  > **注意**：OneUI Form 的上下布局使用 `labelPosition="top"`（而非 `layout="vertical"`）。`layout` 属性控制的是表单项之间的排列方式（`default` / `inline` / `grid`），与 Label 位置无关。

- **OneUI Form API 参数精确指引（本规范使用）**：
  - `Form.labelPosition="top"`：启用上下布局（强约束，优先使用）
  - `Form.layout="default"`：常规表单排列；不用于控制 Label 上下位置
  - `Form.hideRequiredMark={false}`：需要显示必填星号时保持默认 false（若为 true 将隐藏星号）
  - `Form.Field.required`：为该字段显示必填星号（并参与必填语义）
  - `Form.Field.label`：支持传入 `ReactNode`，用于插入问号图标与说明触发器

- **表单项间距**：相邻表单项垂直间距 24px（V4）
- **Label 与输入控件**：8px（V1），详见《间距与尺寸系统》

- **必填星号位置（强约束）**：必填星号（`*`）必须出现在 Label **右侧**（OneUI 默认在左侧）。通过 CSS 将星号从 Label 前移至 Label 后：
  ```css
  /* 将必填星号移到 label 右侧 */
  .one-access-form-field-label label,
  .one-form-field-label label {
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .one-access-form-field-icon-required,
  .one-form-field-icon-required {
    margin-right: 0 !important;
    margin-left: 4px;
  }
  ```

- **Label 区域元素排列顺序（强约束）**：当同时出现问号帮助图标和必填星号时，从左到右的顺序为：**Label 文字 → 问号图标 → 必填星号**。实现方式为在 `label` prop 中自定义渲染问号图标，星号由 `required` 属性自动生成并通过上述 CSS 移至右侧：
  ```tsx
  import { IconQuestionCircleSolid } from 'dls-icons-react';
  import { Form, Input, Popover } from '@baidu/one-ui';

  <Form labelPosition="top" layout="default" hideRequiredMark={false}>
    <Form.Field
      name="fieldName"
      required
      label={
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          字段名称
          <Popover content="帮助提示文案">
            <IconQuestionCircleSolid
              style={{ color: '#B2B9CD', marginLeft: 4, cursor: 'pointer' }}
            />
          </Popover>
        </span>
      }
    >
      <Input placeholder="请输入" />
    </Form.Field>
  </Form>
  {/* 渲染结果排列：字段名称 ❓ * */}
  ```

### 4.2 字段类型与组件映射

| 场景 | 组件 | 备注 |
|------|------|------|
| 单选（2–5 项） | Radio.Group | 如出价方式、启用/禁用 |
| 单选（选项较多） | Select | 需 placeholder |
| 数字+单位 | InputNumber | 可配置 addonAfter（如「元/点击」） |
| 单行文本 | Input | 需 placeholder |
| 多行文本 | TextArea | 指定 rows |
| 穿梭选择 | Transfer | 如方案选择 |
| 复杂选择/展示 | 自定义区块 + 修改按钮 | 如关联产品 |

- **候选项少于 5 个的单选/复选场景**：须使用 **strong** 样式（如 OneUI 的 `Radio.Button` 或组件 `mode="strong"` 等），以便选项更突出、更易点选。
- **父子级选项展示**：当表单支持“父级选项下展开子级选项”时，子级选项应紧跟父级选项展示，父子级组件间垂直间距统一为 **8px（V1）**。

### 4.3 校验与提示

- **必填**：`rules={[{ required: true, message: '...' }]}`
- **自定义校验**：使用 `validator` 处理如「至少选一项」等
- **帮助说明**：使用 `Tooltip` + 图标（如 `QuestionCircleOutlined`）或副文本（`<Text type="secondary">`）
- **Label 帮助图标（强约束）**：表单 Label 后面可增加小问号图标，用于补充说明该字段含义或注意事项。
  - **图标**：使用 `dls-icons-react` 中的 `IconQuestionCircleSolid`
  - **颜色**：G5（`#B2B9CD`）
  - **间距**：距离 Label 文字 **4px**
  - **交互**：hover 图标时弹出 `Popover`，展示提示文案
  - **与必填星号同时出现时顺序**：`Label文字 → 问号icon → *`（从左到右）
  - 示例：
    ```tsx
    import { IconQuestionCircleSolid } from 'dls-icons-react';
    import { Form, Input, Popover } from '@baidu/one-ui';

    <Form.Field
      required
      label={
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          字段名称
          <Popover content="这里是帮助提示文案">
            <IconQuestionCircleSolid
              style={{ color: '#B2B9CD', marginLeft: 4, verticalAlign: 'middle', cursor: 'pointer' }}
            />
          </Popover>
        </span>
      }
    >
      <Input />
    </Form.Field>
    ```
- 详见《交互与状态》与《组件库规范》

### 4.4 字段命名与一致性

- `name` 使用 snake_case，如 `marketing_goal`、`click_price`
- `label` 简洁明确，带单位的在 placeholder 或 addonAfter 中体现

---

## 五、底部按钮区

### 5.1 结构

- **独立卡片**：与主内容卡片分离，`marginTop: 24`
- **位置**：左对齐或根据设计靠右（主按钮靠右时常用）
- **内边距**：24px

### 5.2 按钮组合

- **主操作**：`type="primary"`，如「下一步」「保存并关闭」
- **次要操作**：默认样式，如「取消」「上一步」
- **尺寸**：统一 `size="large"` 以保持视觉层级
- **主按钮禁用**：当表单未满足条件时（如未选择方案）可 `disabled`

### 5.3 常见流程

- 多步骤：下一步 → 提交 / 保存并关闭
- 单页：保存 / 提交 + 取消

---

## 六、顶部摘要区（可选）

- **用途**：展示当前步骤的上下文，如所属方案名称、模块路径
- **布局**：`display: flex`，左右分布：左侧关键信息，右侧路径
- **样式**：与主内容卡片一致，或略简化

---

## 七、表单间距校验规则

> 适用于表单类页面与表单容器内组件，优先使用 OneUI 组件默认值；仅在布局层面进行间距约束，不覆盖组件内部间距。

- Label 与输入项上下结构间距：**8px（V1）**
- 表单项之间垂直间距：**24px（V4）**
- 分组标题与内容间距：**16px（V3）**
- 分组与分组之间：**32px（V5）**
- Alert 通栏上下间距：**24px（V4）**
- 页面整体左右两侧边距：**永远 24px（H4）**（含表单页、步骤条页、配置页）
- 白卡内最后一个表单项下间距：**0px**（去掉默认 **24px（V4）**）

### 示例

- ✅ 正确：
  - Label 与输入控件间距为 8px
  - 相邻表单项间距为 24px
  - 分组标题下方留 16px，再进入分组内首个表单项
- ❌ 反例：
  - Label 与输入间距为 12px
  - 表单项之间仅 12px
  - 分组标题与内容紧贴（≤8px）

### 修正建议

- 将 Label 与输入项间距统一为 **8px（V1）**
- 将相邻表单项间距统一为 **24px（V4）**
- 将分组标题与内容间距统一为 **16px（V3）**
- 将分组与分组之间统一为 **32px（V5）**
- 将白卡内最后一个表单项下间距统一为 **0px**

---

## 八、间距汇总

| 位置 | Token | 数值 |
|------|-------|------|
| 页面左右两侧边距 | H4 | 24px（固定） |
| 内容区 padding | H4/V4 | 24px |
| 白卡圆角 | radius-r2 | 10px（固定） |
| 卡片之间 | V4 | 24px |
| 表单项之间 | V4 | 24px |
| 白卡内最后一个表单项下间距 | - | 0（去掉 24px） |
| Label 与输入 | V1 | 8px |
| 分组标题与内容 | V3 | 16px |
| 分组与分组 | V5 | 32px |
| **白卡内 padding** | **上下左右 24px** | **适用于所有表单** |
| 底部按钮区 marginTop | V4 | 24px |

详见《间距与尺寸系统》；校验规则细节见上文「七、表单间距校验规则」。

---

## 九、与设计系统其他规范的关系

- **色彩**：遵循《色彩系统》，主按钮用主色，错误提示用 Red-7
- **字体**：遵循《字体与字号系统》
- **组件**：优先使用 OneUI 默认组件，见《组件库规范》
- **无障碍**：遵循《无障碍规范》，确保焦点、对比度、触控区域

---

## 十、示例结构（代码层面）

```tsx
// 页面结构示意
<MainLayout breadcrumbItems={breadcrumbItems} currentStep={currentStepIndex}>
  {/* 顶部摘要区（可选） */}
  <Card style={{ marginBottom: 24 }} bodyStyle={{ padding: '24px' }}>
    摘要内容
  </Card>

  {/* 主内容卡片 */}
  <Card bodyStyle={{ padding: '24px' }}>
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Card type="inner" title="分组1" style={{ marginBottom: 24 }} bodyStyle={{ padding: '24px' }}>
        <Form.Item name="field1" label="字段1" rules={[...]}>...</Form.Item>
      </Card>
      <Card type="inner" title="分组2" style={{ marginBottom: 24 }} bodyStyle={{ padding: '24px' }}>
        <Form.Item name="field2" label="字段2">...</Form.Item>
      </Card>
    </Form>
  </Card>

  {/* 底部按钮区 */}
  <Card style={{ marginTop: 24 }} bodyStyle={{ padding: '24px', textAlign: 'left' }}>
    <Space>
      <Button type="primary" size="large" onClick={() => form.submit()}>下一步</Button>
      <Button size="large">取消</Button>
    </Space>
  </Card>
</MainLayout>
```

---

## 十一、校验清单

新建或修改表单页面时，请确认：

- [ ] **白卡内边距**：所有白卡（主内容卡片、内嵌卡片、底部按钮区卡片）内边距为**上下左右 24px**
- [ ] **白卡圆角**：所有白卡圆角统一为 **10px（radius-r2）**
- [ ] **白卡内最后一个表单项下间距**：最后一个表单项 `margin-bottom` 为 **0**（去掉默认 24px）
- [ ] **页面左右两侧边距**：整个页面左右两侧外边距固定为 **24px**
- [ ] 步骤条表单：步骤条在左侧 Sider，当前步骤高亮正确
- [ ] 主内容区使用卡片包裹，分组清晰
- [ ] 底部按钮区独立成卡，主按钮 + 次要按钮组合正确
- [ ] 表单项垂直布局，间距符合 V1/V4 等规范
- [ ] 父子级选项场景中，子级选项在父级下方展示，且父子级间距为 **8px**
- [ ] 必填与校验规则完整，帮助信息使用 Tooltip 或副文本
- [ ] 与《色彩系统》《间距与尺寸系统》《组件库规范》一致
