# 🤖 中国大模型 AI 人才计划招聘汇总

> 汇集国内所有主要大模型 AI 人才计划与招聘信息，涵盖互联网大厂、AI 独角兽、硬件厂商等 30+ 个人才计划

[![Netlify Status](https://api.netlify.com/api/v1/badges/7c183af7-a74b-4712-98fe-69d362c6481f/deploy-status)](https://app.netlify.com/projects/dashing-biscotti-53b190/deploys)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg)](https://vitejs.dev)

## 🌐 在线访问

**官方网站**: https://dashing-biscotti-53b190.netlify.app

## 📖 项目介绍

本项目是一个全面的中国大模型 AI 人才计划招聘信息汇总平台，旨在帮助求职者、研究人员和学生快速了解国内各大企业和研究机构的大模型 AI 人才招聘计划。

### 🎯 核心价值

- **信息聚合**: 一站式获取 30+ 个 AI 人才计划信息
- **实时更新**: 持续跟踪最新招聘信息
- **分类清晰**: 按企业类型、计划特点分类展示
- **快速搜索**: 支持关键词搜索和分类筛选
- **直达官网**: 所有链接直接跳转到官方招聘页面

## ✨ 功能特性

### 🔍 智能搜索与筛选

- **关键词搜索**: 支持公司名称、计划名称、方向等关键词搜索
- **分类筛选**: 按企业类型（互联网大厂、AI 独角兽、硬件厂商等）筛选
- **标签过滤**: 通过标签快速定位特定方向的人才计划

### 📊 详细信息展示

- **公司背景**: 展示招聘单位基本信息
- **计划详情**: 人才计划的具体介绍和要求
- **目标人群**: 明确招聘对象（应届博士/硕士、实习生等）
- **薪资待遇**: 部分计划提供薪资范围参考
- **研究方向**: 详细列出技术方向和研究领域

### 🎨 现代化界面

- **响应式设计**: 完美适配桌面、平板、手机
- **深色主题**: 科技感十足的深色 UI 设计
- **流畅动画**: 悬停效果、过渡动画提升用户体验
- **卡片布局**: 清晰的信息展示结构

## 🏢 收录企业（30+）

### 互联网大厂（15个）

| 企业 | 人才计划 |
|------|---------|
| 字节跳动 | Top Seed、Seed 大模型人才、前沿技术领域 |
| 阿里巴巴 | 阿里星（Ali Star）、A Star Program |
| 阿里国际 | Bravo Star |
| 腾讯 | 青云计划 |
| 百度 | AIDU 计划、文心·新星 |
| 美团 | 北斗计划、LongCat |
| 蚂蚁集团 | AI 方向校招 |
| 京东 | TGT 顶尖青年技术天才计划 |
| 小米 | AI 大模型方向校招 |
| 网易 | 校园招聘 |

### AI 独角兽（9个）

| 企业 | 人才计划 |
|------|---------|
| DeepSeek | 大规模招聘 |
| 月之暗面（Kimi） | 全球人才招募 |
| 智谱 AI | 社会招聘、校园招聘 |
| 阶跃星辰 | StepStar 顶尖人才计划 |
| 百川智能 | 招聘 |
| MiniMax | 招聘 |
| 面壁智能 | 招聘 |
| 零一万物 | 招聘 |

### 硬件/终端厂商（4个）

| 企业 | 人才计划 |
|------|---------|
| 华为 | 天才少年计划 |
| OPPO | O-Star 顶尖人才计划 |
| vivo | 蓝极星计划 |
| 商汤科技 | 招聘 |

### 其他 AI 企业（2个）

| 企业 | 人才计划 |
|------|---------|
| 科大讯飞 | 飞星计划 |
| 火山引擎 | 招聘 |

## 🛠️ 技术栈

### 前端框架
- **React 18.2** - UI 组件库
- **TypeScript 5.0** - 类型安全
- **Vite 6.0** - 构建工具

### 样式与 UI
- **Tailwind CSS 4.1** - 原子化 CSS 框架
- **Font Awesome 6.4** - 图标库

### 部署
- **Netlify** - 静态网站托管
- **GitHub** - 代码托管与版本控制

## 📁 项目结构

```
.
├── public/
│   └── _redirects          # Netlify 路由重定向配置
├── src/
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── index.html             # HTML 模板
├── package.json           # 项目依赖
├── tsconfig.json          # TypeScript 配置
├── vite.config.js         # Vite 配置
├── netlify.toml           # Netlify 部署配置
└── vercel.json            # Vercel 部署配置（备用）
```

## 🚀 本地运行

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/zeng-yirong/LLMplan.git
cd LLMplan
```

2. **安装依赖**
```bash
npm install
```

3. **启动开发服务器**
```bash
npm run dev
```

4. **访问网站**
打开浏览器访问 `http://localhost:3000`

### 构建生产版本

```bash
npm run build
```

构建完成后，产物在 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 📦 部署指南

### Netlify 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入仓库
3. 配置构建命令：`npm run build`
4. 配置发布目录：`dist`
5. 点击部署，等待完成

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入仓库
3. 自动检测 Vite 项目配置
4. 点击部署

### 其他平台

项目支持部署到任何静态网站托管服务：
- GitHub Pages
- Cloudflare Pages
- 阿里云 OSS
- 腾讯云 COS

## 📊 数据统计

- **收录企业**: 30+
- **人才计划**: 30+
- **技术方向**: 大模型、多模态、AI Agent、具身智能等
- **更新频率**: 持续更新

## 🔄 更新日志

### 2026-01
- ✅ 初始版本发布
- ✅ 收录 30+ 个 AI 人才计划
- ✅ 实现搜索和筛选功能
- ✅ 响应式设计
- ✅ Netlify 部署上线

## 🤝 贡献指南

欢迎贡献！如果你发现信息有误或有新的招聘计划需要添加，请：

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 添加新的人才计划

在 `src/App.tsx` 的 `talentPrograms` 数组中添加新条目：

```typescript
{
  id: 31,  // 递增 ID
  company: '公司名称',
  programName: '人才计划名称',
  description: '计划描述',
  link: '官方招聘链接',
  category: '互联网大厂' | 'AI独角兽' | '硬件/终端厂商' | '其他',
  tags: ['标签1', '标签2'],
  salary: '薪资范围（可选）',
  targetGroup: '目标人群（可选）'
}
```

## 📝 数据来源

- 各公司官方招聘网站
- 公开新闻报道
- 校园招聘公告
- 社交媒体官方账号

⚠️ **免责声明**: 所有信息来源于公开渠道，仅供参考。具体招聘信息请以各公司官网为准。

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为 AI 人才培养做出贡献的企业和机构！

## 📮 联系方式

如有问题或建议，欢迎：
- 提交 Issue
- 发起 Pull Request
- 邮件联系

---

<div align="center">

**如果这个项目对你有帮助，请给一个 ⭐️ Star 支持！**

[访问网站](https://dashing-biscotti-53b190.netlify.app) | [报告问题](https://github.com/zeng-yirong/LLMplan/issues) | [贡献代码](https://github.com/zeng-yirong/LLMplan/pulls)

</div>
