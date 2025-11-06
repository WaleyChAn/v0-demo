# 医疗系统测试项目 (Medical System Test Project)

这是一个基于 [Next.js](https://nextjs.org) 构建的医疗系统测试项目，主要使用 [v0.dev](https://v0.dev) 生成 UI 组件，并辅以手动编程完成业务逻辑实现。

## 项目概述 (Project Overview)

- **项目名称**: 医疗系统测试项目
- **技术栈**: Next.js 14+, React, TypeScript, Tailwind CSS
- **UI 开发工具**: 主要使用 v0.dev 快速原型设计
- **部署平台**: Vercel
- **字体优化**: 使用 next/font 自动优化 Geist 字体

## 快速开始 (Getting Started)

### 开发环境运行 (Development Server)

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用运行结果。

### 项目结构说明 (Project Structure)

```
app/
├── page.tsx          // 主页
├── layout.tsx        // 应用布局
└── ...               // 其他页面组件
components/
├── ui/               // v0.dev 生成的 UI 组件
└── ...               // 自定义业务组件
public/               // 静态资源文件
```

## 开发指南 (Development Guide)

### 页面编辑 (Page Editing)
修改 `app/page.tsx` 文件可直接更新主页内容，保存后页面会自动热更新。

### UI 组件开发 (UI Component Development)
本项目采用以下混合开发模式:
1. 使用 [v0.dev](https://v0.dev) 生成基础 UI 组件
2. 将生成的组件放置于 `components/ui/` 目录
3. 在业务组件中导入并使用这些 UI 组件
4. 添加医疗系统的业务逻辑和数据处理

### 医疗系统功能规划 (Medical System Features)
计划实现的核心功能包括:
- 患者信息管理
- 医疗记录存储与查询
- 预约挂号系统
- 处方管理系统
- 数据可视化展示

## 技术文档 (Technical Documentation)

- [Next.js 文档](https://nextjs.org/docs) - 学习 Next.js 特性和 API
- [v0.dev 官网](https://v0.app) - AI 驱动的 UI 生成工具
- [Learn Next.js](https://nextjs.org/learn) - Next.js 交互式教程
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架

## 部署 (Deployment)

推荐使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 进行一键部署（由 Next.js 团队开发）。

详细部署指南请参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 贡献指南 (Contributing)

欢迎对本医疗系统测试项目提出建议和贡献代码。请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证 (License)

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
