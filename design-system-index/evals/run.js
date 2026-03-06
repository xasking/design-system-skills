#!/usr/bin/env node
/**
 * design-system-index evals 运行脚本
 * 读取 evals.json，校验结构并逐条输出 prompt，便于在 Cursor 中手动测试或对接评测流程。
 * 用法：npm run evals  或  node evals/run.js
 */

const fs = require('fs');
const path = require('path');

const EVALS_PATH = path.join(__dirname, 'evals.json');

function loadEvals() {
  if (!fs.existsSync(EVALS_PATH)) {
    console.error('未找到 evals.json，路径:', EVALS_PATH);
    process.exit(1);
  }
  const raw = fs.readFileSync(EVALS_PATH, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('evals.json 解析失败:', e.message);
    process.exit(1);
  }
}

function validate(data) {
  const errors = [];
  if (!data.skill_name) errors.push('缺少 skill_name');
  if (!Array.isArray(data.evals)) errors.push('evals 须为数组');
  else {
    data.evals.forEach((item, i) => {
      if (item.id == null) errors.push(`evals[${i}] 缺少 id`);
      if (!item.prompt) errors.push(`evals[${i}] 缺少 prompt`);
      if (!item.expected_output) errors.push(`evals[${i}] 缺少 expected_output`);
    });
  }
  if (errors.length) {
    console.error('校验失败:\n', errors.join('\n'));
    process.exit(1);
  }
}

function main() {
  const data = loadEvals();
  validate(data);

  console.log('skill:', data.skill_name);
  console.log('evals 条数:', data.evals.length);
  console.log('---\n');

  data.evals.forEach((item) => {
    console.log(`## Eval id=${item.id}`);
    console.log('Prompt:');
    console.log(item.prompt);
    console.log('\nExpected（供人工对照）:');
    console.log(item.expected_output);
    console.log('\n---');
  });

  console.log('\n提示：将上方任意 Prompt 复制到 Cursor 对话中，检查回复是否引用设计规范并符合 Expected 要求。');
}

main();
