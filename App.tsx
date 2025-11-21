
import React, { useState } from 'react';
import { PINYIN_DATA } from './constants';
import { PinyinCategory, PinyinChar } from './types';
import { NavPill } from './components/NavPill';
import { PinyinDetail } from './components/PinyinDetail';

const App: React.FC = () => {
  const [category, setCategory] = useState<PinyinCategory>(PinyinCategory.INITIALS);
  const [selectedChar, setSelectedChar] = useState<PinyinChar | null>(null);
  const [playingChar, setPlayingChar] = useState<string | null>(null);

  const filteredData = PINYIN_DATA.filter(item => item.category === category);

  // Robust TTS function using proxies
  const playPinyinSound = (item: PinyinChar) => {
    // CRITICAL FIX: Use ttsProxy (a real Chinese character) if available.
    // This forces the TTS engine to speak Chinese Pinyin sounds (e.g., "Bo") 
    // instead of English letters (e.g., "Bee").
    const textToSpeak = item.ttsProxy || item.pronunciation || item.char;
    
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech to prevent queue buildup
      window.speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(textToSpeak);
      u.lang = 'zh-CN';
      u.rate = 0.8; // Slightly slower for kids
      
      u.onstart = () => setPlayingChar(item.char);
      u.onend = () => setPlayingChar(null);
      
      window.speechSynthesis.speak(u);
    }
  };

  const handleCardClick = (char: PinyinChar) => {
    setSelectedChar(char);
  };

  const handlePlayClick = (e: React.MouseEvent, item: PinyinChar) => {
    e.stopPropagation(); // Prevent entering detail view
    playPinyinSound(item);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] relative overflow-x-hidden font-rounded select-none">
      {/* Background Decorations */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-kid-blue rounded-full mix-blend-multiply filter blur-[80px] opacity-40 blob"></div>
      <div className="fixed top-[30%] right-[-10%] w-[40%] h-[40%] bg-kid-pink rounded-full mix-blend-multiply filter blur-[80px] opacity-40 blob animation-delay-2000"></div>
      <div className="fixed bottom-[-10%] left-[10%] w-[50%] h-[50%] bg-kid-yellow rounded-full mix-blend-multiply filter blur-[80px] opacity-40 blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-sm mb-4 border-4 border-white ring-4 ring-blue-100">
             <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-wider">
              拼音乐乐
            </h1>
          </div>
          <p className="text-gray-500 text-xl font-kaiti mt-2">
            🌈 开心学拼音，不做"小老外"！
          </p>
        </header>

        {!selectedChar ? (
          <div className="animate-fade-in-up">
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <NavPill 
                label="声母 (Initials)" 
                active={category === PinyinCategory.INITIALS} 
                onClick={() => setCategory(PinyinCategory.INITIALS)}
                colorClass="bg-kid-green"
              />
              <NavPill 
                label="韵母 (Finals)" 
                active={category === PinyinCategory.FINALS} 
                onClick={() => setCategory(PinyinCategory.FINALS)}
                colorClass="bg-kid-pink"
              />
              <NavPill 
                label="整体认读音节" 
                active={category === PinyinCategory.WHOLE} 
                onClick={() => setCategory(PinyinCategory.WHOLE)}
                colorClass="bg-kid-purple"
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
              {filteredData.map((item) => (
                <div
                  key={item.char}
                  onClick={() => handleCardClick(item)}
                  className="
                    aspect-square bg-white rounded-[2rem] shadow-lg border-b-[6px] border-gray-100
                    hover:border-blue-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                    flex flex-col items-center justify-center group relative overflow-hidden cursor-pointer
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-50"></div>
                  
                  {/* Main Character */}
                  <span className="relative text-5xl md:text-6xl font-black text-gray-700 group-hover:text-kid-blue-dark mb-2 transition-colors">
                    {item.char}
                  </span>
                  
                  {/* Pronunciation Label */}
                  <span className="relative text-sm text-gray-400 font-kaiti bg-gray-100 px-2 py-1 rounded-md group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                    读作: {item.pronunciation}
                  </span>

                  {/* Play Button Overlay */}
                  <button
                    onClick={(e) => handlePlayClick(e, item)}
                    className={`
                      absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center
                      transition-all duration-200 shadow-sm z-20
                      ${playingChar === item.char 
                        ? 'bg-green-400 text-white scale-110 ring-2 ring-green-200' 
                        : 'bg-blue-50 text-blue-400 hover:bg-blue-400 hover:text-white hover:scale-110'
                      }
                    `}
                    title="听发音"
                  >
                    {playingChar === item.char ? (
                       <span className="animate-pulse">🔊</span>
                    ) : (
                       <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <PinyinDetail 
            charData={selectedChar} 
            onBack={() => setSelectedChar(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;