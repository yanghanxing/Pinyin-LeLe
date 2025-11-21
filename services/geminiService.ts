import { GoogleGenAI, Modality, Type } from "@google/genai";

const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY is missing. Please define it in your environment.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key' });

/**
 * Generates a kid-friendly explanation of the pinyin character.
 */
export const getTeacherExplanation = async (pinyin: string, pronunciation: string, example: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a lively Chinese kindergarten teacher (Teacher Wang). 
      Explain the Pinyin "${pinyin}" (pronounced like "${pronunciation}") to a 5-year-old.
      The example word is "${example}".
      
      CRITICAL INSTRUCTION: 
      1. Clarify that this is CHINESE PINYIN, NOT the English letter. 
      2. E.g., if explaining 'b', say "This is Pinyin 'b' (bo), not English 'bee'!".
      
      Output format:
      1. A cute greeting.
      2. How to pronounce it correctly (emphasize not English).
      3. A very short, catchy rhyme (顺口溜).
      4. Use lots of emojis!
      5. Keep it strictly under 100 words.
      6. Language: Simplified Chinese.
      `,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "老师正在思考中...";
  } catch (error) {
    console.error("Error generating explanation:", error);
    return "哎呀，老师的信号不太好，请再试一次！";
  }
};

/**
 * Generates a visual mnemonic image.
 */
export const getPinyinImage = async (pinyin: string, example: string): Promise<string | null> => {
  try {
    // Enhanced prompt to be more educational and literal for kids
    const prompt = `A simple, cute, educational illustration for a Chinese language flashcard. 
    Subject: The object "${example}" (concept). 
    Style: Flat vector art, bright colors, thick outlines, white background. 
    The shape of the object should subtly resemble the letter "${pinyin}" if possible to act as a mnemonic. 
    No text in the image.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: prompt,
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

/**
 * Decodes base64 audio string to AudioBuffer
 */
async function decodeAudioData(
  base64Data: string,
  ctx: AudioContext
): Promise<AudioBuffer> {
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return await ctx.decodeAudioData(bytes.buffer);
}

/**
 * Generates speech for the pinyin using Gemini TTS.
 * Enforces pronunciation rules via prompt engineering.
 */
export const getTeacherVoice = async (char: string, pronunciation: string, example: string): Promise<AudioBuffer | null> => {
  try {
    // We construct a prompt that forces the model to speak Chinese Pinyin sounds, not English letters.
    const textPrompt = `
    请读：拼音"${char}"，发音是"${pronunciation}"。不是英语字母。
    再读词语：${example}。
    最后读一遍：${char}，${char}，${char}。
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: textPrompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (base64Audio) {
       const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
       return await decodeAudioData(base64Audio, audioContext);
    }
    return null;
  } catch (error) {
    console.error("Error generating audio:", error);
    return null;
  }
};