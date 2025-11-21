
import React, { useState } from 'react';
import { PinyinChar } from '../types';
import { getTeacherExplanation, getPinyinImage, getTeacherVoice } from '../services/geminiService';

interface PinyinDetailProps {
  charData: PinyinChar;
  onBack: () => void;
}

export const PinyinDetail: React.FC<PinyinDetailProps> = ({ charData, onBack }) => {
  const [explanation, setExplanation] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadingExp, setLoadingExp] = useState(false);
  const [loadingImg, setLoadingImg] = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [activeToneIndex, setActiveToneIndex] = useState<number | null>(null);

  const toneLabels = ['第一声', '第二声', '第三声', '第四声'];
  
  // SVG paths for tones: Flat, Rising, Dipping, Falling
  const toneSvgs = [
    <line x1="10" y1="25" x2="40" y2="25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />, // Flat
    <line x1="10" y1="35" x2="40" y2="15" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />, // Rising
    <polyline points="10,20 25,40 40,15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />, // Dipping
    <line x1="10" y1="15" x2="40" y2="35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />  // Falling
  ];

  const playTone = (toneIndex: number) => {
     // REVERT TO BASIC PRONUNCIATION
     // We use the ttsProxy (e.g., '波') or basic pronunciation (e.g., 'bo') for ALL tone buttons.
     // This ensures the browser speaks it as a Chinese syllable and not English letters (B-O),
     // even though the pitch variation might be lost.
     const textToRead = charData.ttsProxy || charData.pronunciation || charData.char;

     setActiveToneIndex(toneIndex);
     
     const u = new SpeechSynthesisUtterance(textToRead); 
     u.lang = 'zh-CN';
     u.rate = 0.6; // Slower for tone clarity
     
     u.onend = () => {
         setActiveToneIndex(null);
     };
     
     window.speechSynthesis.cancel();
     window.speechSynthesis.speak(u);
  };

  const handleAskTeacher = async () => {
    setLoadingExp(true);
    setExplanation('');
    const exp = await getTeacherExplanation(charData.char, charData.pronunciation, charData.example);
    setExplanation(exp);
    setLoadingExp(false);
  };

  const handleGenerateImage = async () => {
    setLoadingImg(true);
    setImageUrl(null);
    const img = await getPinyinImage(charData.char, charData.example);
    setImageUrl(img);
    setLoadingImg(false);
  };

  const handleListenTeacher = async () => {
    if (loadingAudio) return;
    setLoadingAudio(true);
    const audioBuffer = await getTeacherVoice(charData.char, charData.pronunciation, charData.example);
    
    if (audioBuffer) {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
    }
    setLoadingAudio(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto animate-fade-in">
      <button onClick={onBack} className="self-start mb-4 text-gray-500 hover:text-kid-blue font-bold flex items-center text-lg group">
        <span className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md mr-2 transition-all">
            <svg className="w-6 h-6 text-gray-400 group-hover:text-kid-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </span>
        返回 (Back)
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 w-full text-center border-b-8 border-kid-blue relative overflow-hidden">
        {/* Background Blobs inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-kid-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-50 -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-kid-pink rounded-full mix-blend-multiply filter blur-2xl opacity-50 -ml-10 -mb-10"></div>
        
        <div className="relative z-10">
            <div className="flex flex-col justify-center items-center mb-2 h-40">
                {/* The Big Character - FIXED: Always show original char to prevent confusion (e.g., b -> bō) */}
                <h1 className="text-9xl font-black text-gray-800 font-rounded tracking-wider drop-shadow-sm transition-all duration-300 leading-none">
                  {charData.char}
                </h1>
            </div>

            {/* Pronunciation Guide */}
            <div className="flex justify-center items-center gap-2 mb-6">
                <div className="bg-yellow-100 px-4 py-1 rounded-full border-2 border-yellow-300 flex items-center">
                    <span className="text-gray-500 mr-1 text-sm">读音:</span>
                    <span className="text-2xl font-bold text-orange-600 font-kaiti">{charData.pronunciation}</span>
                </div>
                {charData.ttsProxy && (
                    <div className="bg-blue-50 px-3 py-1 rounded-full border border-blue-200 text-xs text-blue-400">
                        像"{charData.ttsProxy}"
                    </div>
                )}
            </div>

            {/* Standard Rhyme (Mnemonics) */}
            {charData.rhyme && (
                <div className="bg-green-50 rounded-xl p-4 mb-6 border-l-4 border-green-400 text-left shadow-sm">
                     <p className="text-lg text-green-800 font-kaiti font-bold flex items-center">
                        <span className="text-2xl mr-2">🦜</span> 
                        {charData.rhyme}
                     </p>
                </div>
            )}

            <p className="text-3xl text-gray-600 font-kaiti mb-8 flex justify-center items-center gap-2">
               <span>比如:</span> 
               <span className="font-bold text-kid-blue-dark text-4xl">{charData.example}</span>
            </p>
            
            {/* Tone Buttons with Visual SVGs */}
            <div className="flex justify-center gap-3 md:gap-4 mb-2">
                {[0, 1, 2, 3].map((idx) => (
                    <button 
                        key={idx}
                        onClick={() => playTone(idx)}
                        className="flex flex-col items-center gap-1 group outline-none"
                    >
                        <div className={`
                            w-14 h-14 rounded-2xl transition-all duration-200 border-2 flex items-center justify-center shadow-sm
                            ${activeToneIndex === idx 
                                ? 'bg-kid-green border-green-400 text-green-700 scale-110' 
                                : 'bg-white border-gray-200 text-gray-400 hover:bg-green-50 hover:border-green-300 hover:text-green-600 hover:-translate-y-1'}
                        `}>
                           <svg width="50" height="50" viewBox="0 0 50 50" className="p-1">
                               {toneSvgs[idx]}
                           </svg>
                        </div>
                        <span className={`text-xs font-bold ${activeToneIndex === idx ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600'}`}>
                            {toneLabels[idx]}
                        </span>
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
         
         {/* 1. Teacher Audio */}
         <div className="bg-white p-4 rounded-2xl shadow-md border-b-4 border-kid-yellow flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer" onClick={handleListenTeacher}>
            <div className="text-4xl mb-2 transform transition-transform hover:scale-110">📣</div>
            <h3 className="font-bold text-gray-700 mb-1">AI老师读</h3>
            <p className="text-xs text-gray-400 mb-3 text-center">最标准的真人发音</p>
             <button 
                disabled={loadingAudio}
                className="w-full bg-kid-yellow text-yellow-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition disabled:opacity-50 shadow-sm"
            >
                {loadingAudio ? '准备中...' : '播放 Listen'}
            </button>
         </div>

         {/* 2. Magic Picture */}
         <div className="bg-white p-4 rounded-2xl shadow-md border-b-4 border-kid-purple flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer" onClick={!imageUrl ? handleGenerateImage : undefined}>
            <div className="text-4xl mb-2 transform transition-transform hover:scale-110">🎨</div>
            <h3 className="font-bold text-gray-700 mb-1">魔法卡片</h3>
            <p className="text-xs text-gray-400 mb-3 text-center">看图记住它</p>
            {loadingImg ? (
                 <div className="animate-spin text-xl text-purple-400 my-2">🌀</div>
            ) : imageUrl ? (
                <img src={imageUrl} alt="Mnemonic" className="w-full h-24 object-contain rounded-lg bg-gray-50" />
            ) : (
                <button 
                    className="w-full bg-kid-purple text-purple-900 px-4 py-2 rounded-full font-bold hover:bg-purple-300 transition shadow-sm"
                >
                    变个图 Look
                </button>
            )}
         </div>

         {/* 3. AI Explanation */}
         <div className="bg-white p-4 rounded-2xl shadow-md border-b-4 border-kid-green flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer" onClick={!explanation ? handleAskTeacher : undefined}>
            <div className="text-4xl mb-2 transform transition-transform hover:scale-110">💡</div>
            <h3 className="font-bold text-gray-700 mb-1">我有问题</h3>
            <p className="text-xs text-gray-400 mb-3 text-center">老师讲故事</p>
            {!explanation && !loadingExp && (
                <button 
                    className="w-full bg-kid-green text-green-900 px-4 py-2 rounded-full font-bold hover:bg-green-300 transition shadow-sm"
                >
                    问老师 Ask
                </button>
            )}
             {loadingExp && <div className="animate-bounce text-xl text-green-500 my-2">🤔</div>}
         </div>
      </div>

      {/* Explanation Text Area */}
      {explanation && (
          <div className="mt-6 bg-white p-6 rounded-3xl shadow-lg border-4 border-kid-pink w-full animate-slide-up relative">
              <div className="absolute -top-4 -left-2 text-5xl filter drop-shadow-md">👩‍🏫</div>
              <button onClick={() => setExplanation('')} className="absolute top-2 right-2 text-gray-300 hover:text-gray-500">✕</button>
              <div className="pl-10 pt-2">
                <div className="text-lg text-gray-700 leading-relaxed font-kaiti whitespace-pre-wrap bg-pink-50 p-4 rounded-xl">
                    {explanation}
                </div>
              </div>
          </div>
      )}
    </div>
  );
};