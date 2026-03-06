import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronRight, RotateCcw } from 'lucide-react';

const messages = [
  {
    title: "নাদিয়া...",
    content: `এই ওয়েবসাইটটা বানানোর সময় আমি একটা কথাই ভাবছিলাম...  
হয়তো তুমি এখন আমার উপর একটু রাগ করে আছো।  
হয়তো কথা বলতে ইচ্ছে করছে না।

কিন্তু আমি চাই তুমি এই কয়টা মেসেজ শুধু শান্ত হয়ে পড়ো।

কারণ এগুলা শুধু লেখা না...  
এগুলা আমার হৃদয়ের ভেতরের কথা।`
  },
  {
    title: "তুমি কি জানো…",
    content: `১৫ ডিসেম্বর ২০২৩  
আমি প্রথম তোমাকে দেখি।

তুমি আমাকে দেখোনি।  
কিন্তু আমি তোমাকে দেখেছিলাম।

ভিডিও কলে তোমাকে প্রথম দেখার পর  
আমার মনে হয়েছিল...

এই মেয়েটা অন্যরকম।

আমি তখনও জানতাম না  
এই মেয়েটাই একদিন আমার জীবনের এত বড় একটা অংশ হয়ে যাবে।`
  },
  {
    title: "তারপর মে ২০২৪…",
    content: `আমরা Facebook এ কথা বলা শুরু করলাম।

ছোট ছোট কথা  
হাসি  
মজা  
স্টোরি  
ডিজাইন

আমি যখন তোমার ছবি Photoshop এ edit করেছিলাম  
আর তুমি যখন বলেছিলে "অনেক সুন্দর হয়েছে"

সেই ছোট একটা কথায়  
আমি অনেক খুশি হয়েছিলাম।`
  },
  {
    title: "তারপর সেই দিনটা…",
    content: `২ জুন ২০২৪

যেদিন তুমি আমাকে propose করেছিলে।

সত্যি বলতে আমি অবাক হয়ে গেছিলাম।

কারণ আমি ভাবতেও পারিনি  
তুমিও আমাকে এতটা অনুভব করো।`
  },
  {
    title: "তারপর ১২ জুন…",
    content: `তুমি চট্টগ্রাম যাচ্ছিলে  
দাদুর বাড়ি ঈদ করতে।

আমি চেয়েছিলাম শুধু ৫ মিনিট  
ফেনী স্টেশনে তোমাকে দেখতে।

কিন্তু সেদিন বৃষ্টি ছিল  
আর আমি বের হতে পারিনি।

সেই দিনটা আমার খুব খারাপ লেগেছিল।`
  },
  {
    title: "তারপর আমি সিদ্ধান্ত নিই...",
    content: `আমি চট্টগ্রাম যাব।

১৮ জুন সকালে  
আমি কাউকে না বলে তোমার শহরে চলে যাই।

যখন তোমার বাসায় তোমাকে প্রথম সামনে দেখলাম…

তোমার হাত কাঁপছিল  
চা দিচ্ছিলে।

আর আমার হৃদয়ও তখন কাঁপছিল।`
  },
  {
    title: "সেই সুন্দর দিনগুলো...",
    content: `সেদিন আমরা রিকশায় ঘুরেছিলাম।

নদীর পাশে বসেছিলাম।

তুমি আর আমি  
একসাথে আইসক্রিম খেয়েছিলাম।

আর বৃষ্টিতে ভিজেছিলাম।

আমাদের জীবনের  
সবচেয়ে সুন্দর দিনগুলোর একটা ছিল সেই দিন।`
  },
  {
    title: "তুমি জানো নাদিয়া…",
    content: `তোমার সাথে কাটানো ছোট ছোট মুহূর্তগুলোই  
আমার জীবনের বড় সুখ।

রাস্তায় হাঁটা  
চা খাওয়া  
তোমার ছবি তোলা  
তোমার হাসি দেখা

এইসব জিনিস আমার কাছে খুব মূল্যবান।`
  },
  {
    title: "গতকাল রাত...",
    content: `গতকাল রাতে আমাদের কথা হয়নি।

হয়তো ভুল বোঝাবুঝি হয়েছে।

হয়তো আমি ভুল করেছি।

কিন্তু একটা কথা সত্যি…

আমি কখনো ইচ্ছা করে তোমাকে কষ্ট দিতে চাই না।`
  },
  {
    title: "শেষ কথা...",
    content: `নাদিয়া…

যদি তুমি এই পর্যন্ত পড়ে থাকো  
তাহলে শুধু একটা কথা বলবো।

রাগ করলে করো  
কিন্তু দয়া করে আমার সাথে কথা বলা বন্ধ করো না।

কারণ তুমি না থাকলে  
আমার পৃথিবীটা অনেক ফাঁকা লাগে।

আমি এখনও তোমাকে আগের মতোই ভালোবাসি।

– Abrar ❤️`
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const nextMessage = () => {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setIndex(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6 font-sans overflow-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-rose-500 fill-rose-500" size={24} />
                <span className="text-xs font-mono uppercase tracking-widest text-rose-400/80">
                  Message {index + 1} of {messages.length}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-rose-50 text-balance leading-tight">
                {messages[index].title}
              </h1>

              <div className="space-y-4 text-lg md:text-xl text-slate-300 font-serif leading-relaxed whitespace-pre-line">
                {messages[index].content}
              </div>

              <div className="mt-12 flex justify-end">
                <button
                  onClick={nextMessage}
                  className="group flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-rose-500/20"
                >
                  {index === messages.length - 1 ? "The End ❤️" : "Next"}
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                <Heart className="text-rose-500 fill-rose-500" size={120} />
              </motion.div>
              
              <h2 className="text-4xl font-serif font-bold text-rose-50">I Love You, Nadia</h2>
              <p className="text-slate-400 max-w-md mx-auto">
                Thank you for being part of my life. I hope we can talk soon.
              </p>

              <button
                onClick={reset}
                className="flex items-center gap-2 mx-auto text-slate-500 hover:text-rose-400 transition-colors py-4"
              >
                <RotateCcw size={18} />
                <span>Read again</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Hearts Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%",
              opacity: 0 
            }}
            animate={{ 
              y: "-10%",
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
            className="absolute"
          >
            <Heart className="text-rose-500/20" size={20 + Math.random() * 30} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

