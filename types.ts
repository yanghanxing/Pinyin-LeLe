
export enum PinyinCategory {
  INITIALS = '声母',
  FINALS = '韵母',
  WHOLE = '整体认读音节',
}

export interface PinyinChar {
  char: string;
  example: string; // A Chinese character example (e.g., 'b' -> '爸')
  category: PinyinCategory;
  pronunciation: string; // The teaching sound textual representation (e.g., 'bo')
  ttsProxy?: string; // A Chinese character that sounds exactly like the Pinyin to force correct TTS (e.g., 'b' -> '波')
  tones?: string[]; // Array of 4 strings representing the 4 tones (e.g. ['bō', 'bó', 'bǒ', 'bò'])
  toneChars?: (string | null)[]; // Array of 4 Representative Characters for the tones (e.g. ['波', '伯', '跛', '播']). Used for 100% accurate TTS.
  rhyme?: string; // Standard teaching mnemonic (顺口溜)
}

export interface TeacherResponse {
  explanation: string;
  words: string[];
  funFact: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export interface GeneratedAudio {
  url: string;
}