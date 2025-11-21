
import { PinyinCategory, PinyinChar } from './types';

export const PINYIN_DATA: PinyinChar[] = [
  // Initials (声母)
  { 
    char: 'b', example: '爸', category: PinyinCategory.INITIALS, pronunciation: 'bo', ttsProxy: '波', 
    tones: ['bō', 'bó', 'bǒ', 'bò'], 
    toneChars: ['波', '伯', '跛', '播'],
    rhyme: '听广播 b b b，右下半圆 b b b' 
  },
  { 
    char: 'p', example: '婆', category: PinyinCategory.INITIALS, pronunciation: 'po', ttsProxy: '坡', 
    tones: ['pō', 'pó', 'pǒ', 'pò'], 
    toneChars: ['坡', '婆', '笸', '破'],
    rhyme: '爬山坡 p p p，右上半圆 p p p' 
  },
  { 
    char: 'm', example: '妈', category: PinyinCategory.INITIALS, pronunciation: 'mo', ttsProxy: '摸', 
    tones: ['mō', 'mó', 'mǒ', 'mò'], 
    toneChars: ['摸', '摩', '抹', '墨'],
    rhyme: '两个门洞 m m m，摸摸头 m m m' 
  },
  { 
    char: 'f', example: '佛', category: PinyinCategory.INITIALS, pronunciation: 'fo', ttsProxy: '佛', 
    tones: ['fō', 'fó', 'fǒ', 'fò'], 
    toneChars: [null, '佛', null, null], // fo usually only has 2nd tone in common usage
    rhyme: '一尊大佛 f f f，伞柄朝上 f f f' 
  },
  { 
    char: 'd', example: '得', category: PinyinCategory.INITIALS, pronunciation: 'de', ttsProxy: '得', 
    tones: ['dē', 'dé', 'dě', 'dè'], 
    toneChars: ['嘚', '得', null, null],
    rhyme: '左下半圆 d d d，马蹄声响 d d d' 
  },
  { 
    char: 't', example: '特', category: PinyinCategory.INITIALS, pronunciation: 'te', ttsProxy: '特', 
    tones: ['tē', 'té', 'tě', 'tè'], 
    toneChars: [null, null, '忑', '特'],
    rhyme: '伞柄朝下 t t t，特别特别 t t t' 
  },
  { 
    char: 'n', example: '讷', category: PinyinCategory.INITIALS, pronunciation: 'ne', ttsProxy: '讷', 
    tones: ['nē', 'né', 'ně', 'nè'], 
    toneChars: [null, '哪', null, '讷'],
    rhyme: '一个门洞 n n n，哪吒闹海 n n n' 
  },
  { 
    char: 'l', example: '勒', category: PinyinCategory.INITIALS, pronunciation: 'le', ttsProxy: '勒', 
    tones: ['lē', 'lé', 'lě', 'lè'], 
    toneChars: [null, null, null, '乐'],
    rhyme: '一根小棍 l l l，快乐快乐 l l l' 
  },
  { 
    char: 'g', example: '哥', category: PinyinCategory.INITIALS, pronunciation: 'ge', ttsProxy: '哥', 
    tones: ['gē', 'gé', 'gě', 'gè'], 
    toneChars: ['哥', '格', '葛', '个'],
    rhyme: '9字加弯 g g g，哥哥哥哥 g g g' 
  },
  { 
    char: 'k', example: '科', category: PinyinCategory.INITIALS, pronunciation: 'ke', ttsProxy: '科', 
    tones: ['kē', 'ké', 'kě', 'kè'], 
    toneChars: ['科', '咳', '可', '克'],
    rhyme: '蝌蚪蝌蚪 k k k，科学科学 k k k' 
  },
  { 
    char: 'h', example: '喝', category: PinyinCategory.INITIALS, pronunciation: 'he', ttsProxy: '喝', 
    tones: ['hē', 'hé', 'hě', 'hè'], 
    toneChars: ['喝', '河', '荷', '贺'],
    rhyme: '一把椅子 h h h，喝水喝水 h h h' 
  },
  { 
    char: 'j', example: '鸡', category: PinyinCategory.INITIALS, pronunciation: 'ji', ttsProxy: '基', 
    tones: ['jī', 'jí', 'jǐ', 'jì'], 
    toneChars: ['机', '急', '挤', '记'],
    rhyme: '一只公鸡 j j j，竖弯加点 j j j' 
  },
  { 
    char: 'q', example: '气', category: PinyinCategory.INITIALS, pronunciation: 'qi', ttsProxy: '期', 
    tones: ['qī', 'qí', 'qǐ', 'qì'], 
    toneChars: ['七', '齐', '起', '气'],
    rhyme: '一个气球 q q q，左上半圆 q q q' 
  },
  { 
    char: 'x', example: '西', category: PinyinCategory.INITIALS, pronunciation: 'xi', ttsProxy: '西', 
    tones: ['xī', 'xí', 'xǐ', 'xì'], 
    toneChars: ['西', '习', '洗', '戏'],
    rhyme: '切开西瓜 x x x，像个叉号 x x x' 
  },
  { 
    char: 'zh', example: '知', category: PinyinCategory.INITIALS, pronunciation: 'zhi', ttsProxy: '知', 
    tones: ['zhī', 'zhí', 'zhǐ', 'zhì'], 
    toneChars: ['知', '直', '纸', '制'],
    rhyme: '妈妈织衣 zh zh zh，蜘蛛织网 zh zh zh' 
  },
  { 
    char: 'ch', example: '吃', category: PinyinCategory.INITIALS, pronunciation: 'chi', ttsProxy: '吃', 
    tones: ['chī', 'chí', 'chǐ', 'chì'], 
    toneChars: ['吃', '迟', '尺', '翅'],
    rhyme: '大口吃饭 ch ch ch，刺猬带刺 ch ch ch' 
  },
  { 
    char: 'sh', example: '狮', category: PinyinCategory.INITIALS, pronunciation: 'shi', ttsProxy: '诗', 
    tones: ['shī', 'shí', 'shǐ', 'shì'], 
    toneChars: ['诗', '十', '始', '事'],
    rhyme: '狮子狮子 sh sh sh，老师老师 sh sh sh' 
  },
  { 
    char: 'r', example: '日', category: PinyinCategory.INITIALS, pronunciation: 'ri', ttsProxy: '日', 
    tones: ['rī', 'rí', 'rǐ', 'rì'], 
    toneChars: [null, null, null, '日'],
    rhyme: '一轮红日 r r r，小苗发芽 r r r' 
  },
  { 
    char: 'z', example: '字', category: PinyinCategory.INITIALS, pronunciation: 'zi', ttsProxy: '资', 
    tones: ['zī', 'zí', 'zǐ', 'zì'], 
    toneChars: ['资', '紫', '子', '字'], // Tweaked tone 2 proxy
    rhyme: '像个2字 z z z，写字写字 z z z' 
  },
  { 
    char: 'c', example: '刺', category: PinyinCategory.INITIALS, pronunciation: 'ci', ttsProxy: '雌', 
    tones: ['cī', 'cí', 'cǐ', 'cì'], 
    toneChars: ['刺', '词', '此', '次'],
    rhyme: '半个圆圈 c c c，刺猬刺猬 c c c' 
  },
  { 
    char: 's', example: '丝', category: PinyinCategory.INITIALS, pronunciation: 'si', ttsProxy: '思', 
    tones: ['sī', 'sí', 'sǐ', 'sì'], 
    toneChars: ['丝', '死', '死', '四'], // Tone 2 rare
    rhyme: '半个8字 s s s，蚕宝宝吐丝 s s s' 
  },
  { 
    char: 'y', example: '医', category: PinyinCategory.INITIALS, pronunciation: 'yi', ttsProxy: '医', 
    tones: ['yī', 'yí', 'yǐ', 'yì'], 
    toneChars: ['衣', '姨', '椅', '意'],
    rhyme: '像个树杈 y y y，医生医生 y y y' 
  },
  { 
    char: 'w', example: '屋', category: PinyinCategory.INITIALS, pronunciation: 'wu', ttsProxy: '屋', 
    tones: ['wū', 'wú', 'wǔ', 'wù'], 
    toneChars: ['屋', '无', '五', '雾'],
    rhyme: '屋顶屋顶 w w w，乌鸦乌鸦 w w w' 
  },

  // Finals (韵母)
  { 
    char: 'a', example: '啊', category: PinyinCategory.FINALS, pronunciation: 'a', ttsProxy: '阿', 
    tones: ['ā', 'á', 'ǎ', 'à'], 
    toneChars: ['阿', 'á', 'ǎ', 'à'], // a is often just vocal
    rhyme: '张大嘴巴 a a a' 
  },
  { 
    char: 'o', example: '喔', category: PinyinCategory.FINALS, pronunciation: 'o', ttsProxy: '喔', 
    tones: ['ō', 'ó', 'ǒ', 'ò'], 
    toneChars: ['喔', 'ó', 'ǒ', '哦'],
    rhyme: '圆圆嘴巴 o o o' 
  },
  { 
    char: 'e', example: '鹅', category: PinyinCategory.FINALS, pronunciation: 'e', ttsProxy: '鹅', 
    tones: ['ē', 'é', 'ě', 'è'], 
    toneChars: ['阿', '鹅', '恶', '饿'], // proxy 'e' sound
    rhyme: '扁扁嘴巴 e e e' 
  },
  { 
    char: 'i', example: '衣', category: PinyinCategory.FINALS, pronunciation: 'yi', ttsProxy: '衣', 
    tones: ['yī', 'yí', 'yǐ', 'yì'], 
    toneChars: ['衣', '姨', '椅', '意'],
    rhyme: '牙齿对齐 i i i' 
  },
  { 
    char: 'u', example: '乌', category: PinyinCategory.FINALS, pronunciation: 'wu', ttsProxy: '乌', 
    tones: ['wū', 'wú', 'wǔ', 'wù'], 
    toneChars: ['乌', '吴', '五', '误'],
    rhyme: '嘴巴突出 u u u' 
  },
  { 
    char: 'ü', example: '鱼', category: PinyinCategory.FINALS, pronunciation: 'yu', ttsProxy: '迂', 
    tones: ['yū', 'yú', 'yǔ', 'yù'], 
    toneChars: ['迂', '鱼', '雨', '玉'],
    rhyme: '嘴吹口哨 ü ü ü' 
  },
  
  // Compound Finals - Critical for Tones
  { 
    char: 'ai', example: '爱', category: PinyinCategory.FINALS, pronunciation: 'ai', ttsProxy: '哀', 
    tones: ['āi', 'ái', 'ǎi', 'ài'], 
    toneChars: ['哀', '癌', '矮', '爱'],
    rhyme: 'a母在前 ai ai ai，姐姐弟弟紧挨着' 
  },
  { 
    char: 'ei', example: '诶', category: PinyinCategory.FINALS, pronunciation: 'ei', ttsProxy: '诶', 
    tones: ['ēi', 'éi', 'ěi', 'èi'], 
    toneChars: ['诶', 'éi', 'ěi', 'èi'],
    rhyme: 'e母在前 ei ei ei，干活使劲 ei ei ei' 
  },
  { 
    char: 'ui', example: '威', category: PinyinCategory.FINALS, pronunciation: 'wei', ttsProxy: '威', 
    tones: ['wēi', 'wéi', 'wěi', 'wèi'], 
    toneChars: ['威', '围', '伟', '喂'],
    rhyme: 'u母在前 ui ui ui，围巾围巾 ui ui ui' 
  },
  { 
    char: 'ao', example: '袄', category: PinyinCategory.FINALS, pronunciation: 'ao', ttsProxy: '熬', 
    tones: ['āo', 'áo', 'ǎo', 'ào'], 
    toneChars: ['凹', '熬', '袄', '奥'],
    rhyme: 'a母在前 ao ao ao，棉袄棉袄 ao ao ao' 
  },
  { 
    char: 'ou', example: '鸥', category: PinyinCategory.FINALS, pronunciation: 'ou', ttsProxy: '欧', 
    tones: ['ōu', 'óu', 'ǒu', 'òu'], 
    toneChars: ['欧', '偶', '藕', '怄'],
    rhyme: 'o母在前 ou ou ou，海鸥海鸥 ou ou ou' 
  },
  { 
    char: 'iu', example: '优', category: PinyinCategory.FINALS, pronunciation: 'you', ttsProxy: '优', 
    tones: ['yōu', 'yóu', 'yǒu', 'yòu'], 
    toneChars: ['优', '游', '有', '右'],
    rhyme: 'i母在前 iu iu iu，优秀优秀 iu iu iu' 
  },
  { 
    char: 'ie', example: '耶', category: PinyinCategory.FINALS, pronunciation: 'ye', ttsProxy: '耶', 
    tones: ['yē', 'yé', 'yě', 'yè'], 
    toneChars: ['耶', '爷', '野', '夜'],
    rhyme: '椰子椰子 ie ie ie' 
  },
  { 
    char: 'üe', example: '月', category: PinyinCategory.FINALS, pronunciation: 'yue', ttsProxy: '约', 
    tones: ['yuē', 'yué', 'yuě', 'yuè'], 
    toneChars: ['约', '绝', '雪', '月'],
    rhyme: '月亮月亮 üe üe üe' 
  },
  { 
    char: 'er', example: '耳', category: PinyinCategory.FINALS, pronunciation: 'er', ttsProxy: '儿', 
    tones: ['ēr', 'ér', 'ěr', 'èr'], 
    toneChars: [null, '儿', '耳', '二'],
    rhyme: '耳朵耳朵 er er er' 
  },
  { 
    char: 'an', example: '安', category: PinyinCategory.FINALS, pronunciation: 'an', ttsProxy: '安', 
    tones: ['ān', 'án', 'ǎn', 'àn'], 
    toneChars: ['安', '寒', '俺', '暗'],
    rhyme: '天安门 an an an' 
  },
  { 
    char: 'en', example: '恩', category: PinyinCategory.FINALS, pronunciation: 'en', ttsProxy: '恩', 
    tones: ['ēn', 'én', 'ěn', 'èn'], 
    toneChars: ['恩', 'én', 'ěn', '摁'],
    rhyme: '摁门铃 en en en' 
  },
  { 
    char: 'in', example: '因', category: PinyinCategory.FINALS, pronunciation: 'yin', ttsProxy: '因', 
    tones: ['yīn', 'yín', 'yǐn', 'yìn'], 
    toneChars: ['音', '银', '引', '印'],
    rhyme: '树荫树荫 in in in' 
  },
  { 
    char: 'un', example: '温', category: PinyinCategory.FINALS, pronunciation: 'wen', ttsProxy: '温', 
    tones: ['wēn', 'wén', 'wěn', 'wèn'], 
    toneChars: ['温', '文', '吻', '问'],
    rhyme: '蚊子蚊子 un un un' 
  },
  { 
    char: 'ün', example: '云', category: PinyinCategory.FINALS, pronunciation: 'yun', ttsProxy: '晕', 
    tones: ['yūn', 'yún', 'yǔn', 'yùn'], 
    toneChars: ['晕', '云', '允', '运'],
    rhyme: '白云白云 ün ün ün' 
  },
  { 
    char: 'ang', example: '昂', category: PinyinCategory.FINALS, pronunciation: 'ang', ttsProxy: '昂', 
    tones: ['āng', 'áng', 'ǎng', 'àng'], 
    toneChars: ['肮', '昂', 'ǎng', 'àng'],
    rhyme: '昂首挺胸 ang ang ang' 
  },
  { 
    char: 'eng', example: '鞥', category: PinyinCategory.FINALS, pronunciation: 'eng', 
    tones: ['ēng', 'éng', 'ěng', 'èng'], 
    toneChars: ['鞥', 'éng', 'ěng', 'èng'],
    rhyme: '台灯台灯 eng eng eng' 
  }, 
  { 
    char: 'ing', example: '英', category: PinyinCategory.FINALS, pronunciation: 'ying', ttsProxy: '英', 
    tones: ['yīng', 'yíng', 'yǐng', 'yìng'], 
    toneChars: ['英', '营', '影', '硬'],
    rhyme: '老鹰老鹰 ing ing ing' 
  },
  { 
    char: 'ong', example: '轰', category: PinyinCategory.FINALS, pronunciation: 'hong', 
    tones: ['hōng', 'hóng', 'hǒng', 'hòng'], 
    toneChars: ['轰', '红', '哄', '哄'],
    rhyme: '闹钟闹钟 ong ong ong' 
  },

  // Whole Syllables
  { 
    char: 'zhi', example: '织', category: PinyinCategory.WHOLE, pronunciation: 'zhi', ttsProxy: '知', 
    tones: ['zhī', 'zhí', 'zhǐ', 'zhì'], 
    toneChars: ['知', '直', '纸', '制'],
    rhyme: '织毛衣 zhi zhi zhi' 
  },
  { 
    char: 'chi', example: '吃', category: PinyinCategory.WHOLE, pronunciation: 'chi', ttsProxy: '吃', 
    tones: ['chī', 'chí', 'chǐ', 'chì'], 
    toneChars: ['吃', '迟', '尺', '翅'],
    rhyme: '吃苹果 chi chi chi' 
  },
  { 
    char: 'shi', example: '狮', category: PinyinCategory.WHOLE, pronunciation: 'shi', ttsProxy: '诗', 
    tones: ['shī', 'shí', 'shǐ', 'shì'], 
    toneChars: ['诗', '十', '始', '事'],
    rhyme: '大狮子 shi shi shi' 
  },
  { 
    char: 'ri', example: '日', category: PinyinCategory.WHOLE, pronunciation: 'ri', ttsProxy: '日', 
    tones: ['rī', 'rí', 'rǐ', 'rì'], 
    toneChars: [null, null, null, '日'],
    rhyme: '红太阳 ri ri ri' 
  },
  { 
    char: 'zi', example: '资', category: PinyinCategory.WHOLE, pronunciation: 'zi', ttsProxy: '资', 
    tones: ['zī', 'zí', 'zǐ', 'zì'], 
    toneChars: ['资', '紫', '子', '字'],
    rhyme: '写汉字 zi zi zi' 
  },
  { 
    char: 'ci', example: '次', category: PinyinCategory.WHOLE, pronunciation: 'ci', ttsProxy: '雌', 
    tones: ['cī', 'cí', 'cǐ', 'cì'], 
    toneChars: ['刺', '词', '此', '次'],
    rhyme: '小刺猬 ci ci ci' 
  },
  { 
    char: 'si', example: '丝', category: PinyinCategory.WHOLE, pronunciation: 'si', ttsProxy: '思', 
    tones: ['sī', 'sí', 'sǐ', 'sì'], 
    toneChars: ['丝', '死', '死', '四'],
    rhyme: '吐丝丝 si si si' 
  },
  { 
    char: 'yi', example: '衣', category: PinyinCategory.WHOLE, pronunciation: 'yi', ttsProxy: '衣', 
    tones: ['yī', 'yí', 'yǐ', 'yì'], 
    toneChars: ['衣', '姨', '椅', '意'],
    rhyme: '穿新衣 yi yi yi' 
  },
  { 
    char: 'wu', example: '屋', category: PinyinCategory.WHOLE, pronunciation: 'wu', ttsProxy: '屋', 
    tones: ['wū', 'wú', 'wǔ', 'wù'], 
    toneChars: ['屋', '无', '五', '雾'],
    rhyme: '小房屋 wu wu wu' 
  },
  { 
    char: 'yu', example: '鱼', category: PinyinCategory.WHOLE, pronunciation: 'yu', ttsProxy: '迂', 
    tones: ['yū', 'yú', 'yǔ', 'yù'], 
    toneChars: ['迂', '鱼', '雨', '玉'],
    rhyme: '大鲤鱼 yu yu yu' 
  },
];
