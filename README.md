# Feishu HCIS Sync / 飞书知识库同步工具

[English](#english) | [中文](#chinese)

---

<a name="english"></a>
## English

This project is an automated tool to synchronize **Feishu (Lark) Wiki** documentation to local Markdown files. It is designed to facilitate statically generated sites (SSG) or backups.

### Features

- **Automated Sync**: Uses [feishu-pages](https://github.com/maicoo-z/feishu-pages) to fetch documentation from Feishu.
- **Smart Renaming**: Automatically renames downloaded files and folders from hash-tokens to human-readable titles using `rename-from-title.mjs`.
- **GitHub Actions Support**: Includes a workflow to run the sync job automatically every 6 hours and push changes to the `dist` folder.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yunyan-he/feishu-hcis.git
   cd feishu-hcis
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add your Feishu credentials:

```env
FEISHU_APP_ID=cli_xxxxxxxx
FEISHU_APP_SECRET=xxxxxxxxxxxxxxxx
FEISHU_SPACE_ID=xxxxxxxxxxxxxxxx
```

### Usage

**Run locally:**

```bash
# Clean dist run sync, and rename files
npm run export
```

The output files will be generated in the `dist` directory.

**GitHub Actions:**

The project includes a GitHub Action (`.github/workflows/sync.yml`) that runs automatically. To enable it, ensure you have added the following **Secrets** in your GitHub repository settings:

- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`
- `FEISHU_SPACE_ID`

---

<a name="chinese"></a>
## Chinese (中文)

本项目是一个自动化工具，用于将 **飞书（Lark）知识库** 文档同步为本地 Markdown 文件，便于构建静态网站或进行文档备份。

### 功能特性

- **自动同步**：使用 [feishu-pages](https://github.com/maicoo-z/feishu-pages) 获取飞书云文档。
- **智能重命名**：通过 `rename-from-title.mjs` 脚本，自动将下载的 hash 文件名转换为可读的文档标题。
- **GitHub Actions 支持**：包含自动化工作流，每 6 小时自动同步一次，并将生成的 `dist` 文件夹推送到仓库。

### 安装步骤

1. 克隆仓库：
   ```bash
   git clone https://github.com/yunyan-he/feishu-hcis.git
   cd feishu-hcis
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

### 配置方法

在项目根目录创建一个 `.env` 文件，并填入你的飞书凭证：

```env
FEISHU_APP_ID=cli_xxxxxxxx
FEISHU_APP_SECRET=xxxxxxxxxxxxxxxx
FEISHU_SPACE_ID=xxxxxxxxxxxxxxxx
```

### 使用指南

**本地运行：**

```bash
# 清空 dist 目录，同步文档并重命名
npm run export
```

输出的文件将生成在 `dist` 目录下。

**GitHub Actions 自动运行：**

项目包含一个 GitHub Action (`.github/workflows/sync.yml`)。要启用它，请确保在 GitHub 仓库的 Settings -> Secrets 中添加以下变量：

- `FEISHU_APP_ID`
- `FEISHU_APP_SECRET`
- `FEISHU_SPACE_ID`
