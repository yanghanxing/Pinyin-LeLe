# 拼音乐乐 (PinYin Lele) 🐼✨

![React](https://img.shields.io/badge/React-19-blue) ![Gemini AI](https://img.shields.io/badge/Google-Gemini%20AI-orange) ![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

[中文](#中文介绍) | [English](#english-introduction)

---

## 🇨🇳 中文介绍

**拼音乐乐** 是一款专为幼儿和小学生设计的互动式拼音学习 Web 应用程序。

我们发现现有的许多浏览器自带语音引擎会将拼音（如 `f` 或 `b`）误读为英文字母（F, B）。本项目通过特殊的代理汉字映射技术和 Google Gemini AI，致力于打造一个**纯正中文语境**的学习环境。

### ✨ 核心功能

1.  **严谨的拼音分类** 📚
    *   完整收录 **声母**、**韵母**、**整体认读音节**（按照小学语文标准分类）。
    *   卡片式设计，色彩鲜艳，符合儿童审美。

2.  **防混淆发音引擎** 🔊
    *   **拒绝"洋腔洋调"**：解决了浏览器 TTS 将 `f` 读成 `ABC` 中的 `F` 的问题。
    *   **兜底机制**：对于 `fō` 这种没有对应汉字的读音，系统会自动回退到标准基础音，确保孩子听到的是“拼音”而非“字母”。

3.  **AI 智能私教 (Powered by Gemini)** 🤖
    *   **AI 老师读**：调用 Gemini 高质量语音模型，生成真人般的教学发音。
    *   **魔法卡片**：根据拼音形状和示例词（如 `t` 像伞柄），实时生成助记图像，帮助图像记忆。
    *   **我有问题**：模拟幼儿园 "王老师" 的口吻，用顺口溜和 Emoji 给孩子讲解拼音知识。

4.  **声调练习** 🎵
    *   直观的声调符号（ˉ ˊ ˇ ˋ）可视化。
    *   点击声调按钮，主展示区保持不变（避免视觉干扰），声音播放对应的标准音。

### 📸 界面预览 (Screenshots)

*(此处建议放置截图)*

| 首页列表 (Home) | 拼音详情页 (Detail) |
|:---:|:---:|
| ![Home Page Placeholder](https://via.placeholder.com/400x300?text=Home+Page+List) <br> *声母、韵母、整体认读音节分类展示* | ![Detail Page Placeholder](https://via.placeholder.com/400x300?text=Detail+Page+Interaction) <br> *声调练习与AI互动功能* |

### 🚀 快速开始

#### 1. 环境准备
确保你安装了 Node.js。

#### 2. 安装依赖
```bash
npm install
```

#### 3. 配置 API Key
本项目依赖 Google Gemini API 来实现 AI 语音、绘图和讲解功能。
请在根目录环境变量或代码中配置 `process.env.API_KEY`。

> **注意**：如果您在本地开发，可以直接在 `services/geminiService.ts` 中临时测试，或者使用 `.env` 文件（需配置构建工具支持）。

#### 4. 启动项目
```bash
npm start
```

---

## 🇺🇸 English Introduction

**PinYin Lele** is an interactive Pinyin learning web application tailored for kindergarten and primary school children.

It addresses a common issue where browser Text-to-Speech (TTS) engines mispronounce Pinyin letters (like `f` or `b`) as English alphabet letters. This project uses a proxy character mapping technique and Google Gemini AI to ensure a **pure Chinese learning context**.

### ✨ Key Features

1.  **Standard Categorization** 📚
    *   Fully covers **Initials (声母)**, **Finals (韵母)**, and **Whole Syllables (整体认读音节)**.
    *   Vibrant, card-based UI designed for kids.

2.  **Anti-Confusion Pronunciation Engine** 🔊
    *   **No English Letters**: Prevents the browser from reading `f` as the English letter "F".
    *   **Smart Fallback**: For tone combinations without corresponding Hanzi (like `fō`), the system falls back to the base pronunciation to ensure accuracy.

3.  **AI Integration (Powered by Gemini)** 🤖
    *   **AI Teacher Voice**: Uses Gemini's advanced TTS to generate natural, native-level pronunciations.
    *   **Magic Cards**: Generates mnemonic images on the fly based on the Pinyin shape (e.g., `t` looks like an umbrella handle).
    *   **Ask Teacher**: Provides explanations, rhymes, and fun facts in the persona of a kindergarten teacher using simplified Chinese suitable for 5-year-olds.

4.  **Tone Practice** 🎵
    *   Visual tone marks (Level, Rising, Dipping, Falling).
    *   Consistent UI: Clicking tone buttons plays the sound while keeping the main character display stable to prevent visual confusion.

### 🛠 Tech Stack

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS, Custom Animations (Blob effects)
*   **AI / Backend**: Google GenAI SDK (`@google/genai`)
*   **Fonts**: M PLUS Rounded 1c (Rounded friendly font), KaiTi (Standard Chinese Calligraphy font)

### 🚀 Getting Started

#### 1. Prerequisites
Ensure Node.js is installed.

#### 2. Install Dependencies
```bash
npm install
```

#### 3. API Key Configuration
This project uses Google Gemini API for AI features.
You need a valid API Key from [Google AI Studio](https://aistudio.google.com/).

#### 4. Run the App
```bash
npm start
```

---

## 📝 License

MIT License. Feel free to use this for educational purposes!
