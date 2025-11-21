# PinYin Lele (Fun Pinyin) 🐼✨

![React](https://img.shields.io/badge/React-19-blue) ![Gemini AI](https://img.shields.io/badge/Google-Gemini%20AI-orange) ![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind-38bdf8) ![License](https://img.shields.io/badge/License-MIT-green)

[**中文文档 (Chinese Documentation)**](README.md)

---

## 📖 Introduction

**PinYin Lele** is an interactive Pinyin learning web application tailored for toddlers and elementary school students.

Designed from the perspective of an experienced language teacher, this app addresses the biggest pain point in Pinyin learning: **Confusion between Chinese Pinyin letters and English alphabet letters.** Standard text-to-speech engines often mispronounce Pinyin 'b' as English 'bee', or 'f' as 'eff'.

This project uses a unique **Character Proxy Mapping** technique combined with **Google Gemini AI** to create a pure, immersive Chinese learning environment.

---

## ✨ Key Features

### 1. Anti-Confusion Pronunciation Engine 🔊
*   **Problem Solved**: Browsers see "b" and say "bee". Kids get confused.
*   **Our Solution**: We use a `ttsProxy` system. Instead of telling the browser to read "b", we tell it to read the Chinese character "波" (Wave), which sounds exactly like the Pinyin "b" (bo).
*   **Result**: 100% accurate Chinese Pinyin pronunciation using standard Web Speech API, with zero "English accent".

### 2. AI Tutor (Powered by Gemini) 🤖
We leverage the Google Gemini 2.5 Flash model for three magical features:
*   **👩‍🏫 AI Teacher's Voice**: Uses Gemini's advanced TTS capabilities to generate natural, human-like pronunciation examples, superior to robotic browser voices.
*   **🎨 Magic Cards**: Can't remember the shape? The AI generates mnemonic illustrations on the fly based on the letter shape and example words (e.g., showing a 't' shape in an umbrella handle).
*   **💡 Ask Teacher**: Simulates a kindergarten teacher explaining concepts using simple language, catchy rhymes, and emojis.

### 3. Comprehensive Curriculum 📚
*   **Complete Categories**: Includes all Initials (声母), Finals (韵母), and Whole Syllables (整体认读音节).
*   **Tone Practice**: Interactive buttons for the four tones (ā á ǎ à) with visual aids depicting the pitch contour.
*   **Mnemonics**: Traditional Chinese teaching rhymes included for every character.

### 4. Kid-Friendly UI/UX 🎈
*   **Color Palette**: Soft, pastel colors (Kid-Yellow, Kid-Blue, Kid-Pink) that are gentle on the eyes.
*   **Typography**: Uses Rounded fonts (`M PLUS Rounded 1c`) and KaiTi (Calligraphy font) for a friendly feel.
*   **Animations**: Floating blob backgrounds and bouncy interactions keep children engaged.

---

## 🛠 How to Use

1.  **Select Category**: Toggle between Initials, Finals, and Whole Syllables at the top.
2.  **Quick Listen**: Click the speaker icon 🔊 on any card for the base sound.
3.  **Deep Dive**: Click the card to open the Detail View.
    *   **Tones**: Click the 4 tone buttons to practice pitch.
    *   **AI Actions**:
        *   **"AI Teacher"**: Listen to high-quality audio.
        *   **"Magic Picture"**: Generate a visual aid.
        *   **"Ask Teacher"**: Get a fun explanation.

---

## 💻 Tech Stack

*   **Frontend**: React 19
*   **Styling**: Tailwind CSS
*   **AI SDK**: `@google/genai`
*   **Data Handling**: Custom TypeScript interfaces for Pinyin data structure.

---

## 🚀 Local Development

This project requires a Google Gemini API Key.

1.  Clone the repository.
2.  Install dependencies.
3.  Set `process.env.API_KEY`.
4.  Run `npm start`.

---
*Designed to make learning Chinese fun and frustration-free!*
