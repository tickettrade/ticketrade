'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  Lock,
  Percent,
  Check
} from 'lucide-react';
import WaitlistForm from '../components/WaitlistForm';

// Richly Styled Responsive Floating Match Ticket Component
const MatchTicket = ({ delay = 0, duration = 6, style = {}, className = '' }) => {
  return (
    <motion.div
      initial={{ y: 0, rotate: -3 }}
      animate={{
        y: [0, -15, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
      style={style}
      className={`absolute w-44 h-24 md:w-72 md:h-36 rounded-xl md:rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm md:backdrop-blur-md p-3 md:p-5 pointer-events-none select-none z-0 shadow-2xl opacity-15 md:opacity-25 ${className}`}
    >
      <div className="flex justify-between items-start h-full border-r border-emerald-500/20 md:border-r-2 pr-2 md:pr-4">
        <div className="flex flex-col justify-between h-full text-right">
          <div>
            <div className="text-[7px] md:text-[10px] uppercase tracking-wider text-emerald-400 font-extrabold flex items-center gap-0.5 md:gap-1">
              <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              שער VIP
            </div>
            <div className="text-xs md:text-base font-black text-white mt-0.5 md:mt-1 leading-none">מנוי מוקדם</div>
          </div>

          {/* Mock Barcode Graphic */}
          <div className="flex items-end gap-[0.5px] md:gap-[1px] opacity-20 mt-1 md:mt-2 h-4 md:h-7">
            <div className="w-[1px] h-3 md:h-6 bg-white"></div>
            <div className="w-[1.5px] h-3 md:h-6 bg-white"></div>
            <div className="w-[1px] h-3 md:h-6 bg-white"></div>
            <div className="w-[2px] h-3 md:h-6 bg-white"></div>
            <div className="w-[1px] h-3 md:h-6 bg-white"></div>
            <div className="w-[3px] h-3 md:h-6 bg-white"></div>
            <div className="w-[1px] h-3 md:h-6 bg-white"></div>
            <div className="w-[2px] h-3 md:h-6 bg-white"></div>
            <div className="w-[1px] h-3 md:h-6 bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end h-full pl-0.5">
          <div className="text-[6px] md:text-[9px] font-bold text-zinc-600 font-mono">P2P-IL</div>
          <div className="text-[7px] md:text-[10px] text-emerald-400 font-black tracking-widest uppercase rotate-90 origin-bottom-right translate-x-[-12px] md:translate-x-[-18px] translate-y-[-6px] md:translate-y-[-10px]">
            VIP
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [liveSignups, setLiveSignups] = useState(789);
  const [userRank, setUserRank] = useState<number | null>(null);

  const handleSuccess = (rank: number) => {
    setUserRank(rank);
    setLiveSignups(rank);
  };

  return (
    <div dir="rtl" className="min-h-screen text-[#fafafa] flex flex-col font-sans antialiased bg-[url('/stadium.png')] bg-cover bg-center bg-fixed bg-no-repeat relative">

      {/* Immersive Stadium Vibe Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/85 to-black/95 pointer-events-none"></div>

      {/* Floating 3D Tickets (optimized positions for phone and desktop) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <MatchTicket delay={0} duration={6.5} style={{ left: '5%', top: '15%' }} className="rotate-[14deg]" />
        <MatchTicket delay={2} duration={8} style={{ right: '5%', top: '48%' }} className="rotate-[-10deg]" />
      </div>

      {/* Top Header Navbar */}
      <header className="w-full py-5 px-6 md:px-12 border-b border-white/5 flex justify-between items-center z-10 relative">
        <a href="#" className="text-xl md:text-2xl font-black tracking-tight text-white select-none">
          Ticket<span className="text-emerald-500">Trade</span>
        </a>
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#ccff00] bg-[#ccff00]/10 border border-[#ccff00]/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full animate-pulse select-none">
          רשימת ההמתנה פתוחה
        </span>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 z-10 relative">
        <div className="max-w-4xl w-full flex flex-col items-center">

          <span className="text-[10px] md:text-sm font-black tracking-widest text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 px-3.5 py-1 md:px-4 md:py-1.5 rounded-full mb-4 md:mb-6 select-none uppercase shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            הכירו את TicketTrade
          </span>

          <h1
            style={{ fontFamily: "var(--font-secular-one), 'Secular One', sans-serif" }}
            className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter text-white leading-none mb-3 select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            חלאס!
          </h1>

          <p
            style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
            className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white max-w-2xl leading-snug mb-3 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] px-2"
          >
            לא נמאס לכם לחפש כרטיסים בקבוצות ולהיעקץ?
          </p>

          <p className="text-sm md:text-lg text-white max-w-xl mb-8 md:mb-12 leading-relaxed select-none px-4">
            זירת הסחר החדשה לאוהדי כדורגל. בלי ספסרים, בלי עמלות פסיכיות. תשאירו פרטים ונשלח לכם הודעת וואטסאפ ברגע שהאפליקציה באוויר.
          </p>

          {/* Render our interactive Glassmorphic Waitlist Form component */}
          <WaitlistForm onSuccess={handleSuccess} liveSignups={liveSignups} />

          {/* Social Proof Stats */}
          <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10 flex-wrap text-xs md:text-sm text-zinc-400 select-none">
            <div className="flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
              <span>מסחר מאובטח Fan-to-Fan</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
              <span>
                <strong className="text-white font-black">{liveSignups.toLocaleString()}</strong> אוהדים כבר נרשמו
              </span>
            </div>
          </div>

        </div>
      </main>

      {/* The Ticket Crisis Section */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-black/60 backdrop-blur-md relative z-10">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-bold tracking-wider text-[#ef4444] bg-[#ef4444]/10 border border-[#ef4444]/25 px-4 py-1.5 rounded-full mb-4 md:mb-6 select-none inline-block">
              משבר הכרטיסים בארץ
            </span>
            <h2
              style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
              className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-3"
            >
              למה הכל כל כך רקוב?
            </h2>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
              כרטיסים למשחקים הגדולים נעלמים בתוך שניות, ואז צצים בפייסבוק ובטלגרם במחירים מופקעים. האוהדים האמיתיים נשארים בחוץ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all hover:border-emerald-500/20 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center mb-5 md:mb-6">
                <AlertTriangle className="w-4.5 h-4.5 md:w-5 md:h-5" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
                className="text-base md:text-lg font-bold text-white mb-2"
              >
                בוטים וספסרים
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                סקריפטים אוטומטיים קונים את כל היציעים ברגע פתיחת הקופות. האוהד הפשוט נאלץ לשלם פי 3.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all hover:border-emerald-500/20 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center mb-5 md:mb-6">
                <Lock className="w-4.5 h-4.5 md:w-5 md:h-5" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
                className="text-base md:text-lg font-bold text-white mb-2"
              >
                עוקץ ועותקים מזויפים
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                קונים PDF מאנשים זרים ברשת? תתכוננו לגלות בשער שהכרטיס כבר נסרק או שוכתב.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden transition-all hover:border-emerald-500/20 hover:-translate-y-1">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#ef4444]/10 text-[#ef4444] flex items-center justify-center mb-5 md:mb-6">
                <Percent className="w-4.5 h-4.5 md:w-5 md:h-5" />
              </div>
              <h3
                style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
                className="text-base md:text-lg font-bold text-white mb-2"
              >
                עמלות תיווך חזיריות
              </h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
                האתרים הגדולים גוזרים קופון גם מהמוכר וגם מהקונה (מגיע ל-30% עמלה במצטבר!), ומוסיפים 'דמי הדפסה' מומצאים. אצלנו? עמלה אחת, שקופה, הוגנת ובלי הפתעות בחיוב.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Value Stack */}
      <section className="py-16 md:py-24 border-t border-white/5 relative z-10 font-sans">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-[10px] md:text-xs font-bold tracking-wider text-emerald-400 bg-emerald-950/20 border border-emerald-500/25 px-4 py-1.5 rounded-full mb-4 md:mb-6 select-none inline-block">
              חוקי המשחק החדשים
            </span>
            <h2 className="text-2xl md:text-5xl font-sans font-bold text-white mb-3">
              מה מחכה לכם באפליקציה?
            </h2>
            <p className="text-sm md:text-base text-white font-medium opacity-100 leading-relaxed">
              הצטרפו לרשימת ההמתנה לאפליקציה שתשנה את הדרך שבה אוהדים קונים ומוכרים כרטיסים בארץ.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-7 space-y-4">
              {/* Item 1 */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-base md:text-lg font-sans font-bold text-[#ccff00]/30">01</span>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white mb-0.5">כרטיסים במחיר המקורי (Face Value)</h4>
                    <p className="text-[10px] md:text-xs text-zinc-200">חוק ברזל: כרטיסים יימכרו אך ורק במחיר המקורי שלהם ולא שקל אחד מעבר.</p>
                  </div>
                </div>
              </div>
              {/* Item 2 */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-base md:text-lg font-sans font-bold text-[#ccff00]/30">02</span>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white mb-0.5">קנייה ומכירה בטוחה בין אוהדים (P2P)</h4>
                    <p className="text-[10px] md:text-xs text-zinc-200">כל אדם יכול למכור את הכרטיס שלו או לקנות מאחרים בבטחה מלאה ישירות דרך האפליקציה.</p>
                  </div>
                </div>
              </div>
              {/* Item 3 */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-base md:text-lg font-sans font-bold text-[#ccff00]/30">03</span>
                  <div>
                    <h4 className="text-sm font-sans font-bold text-white mb-0.5">ללא מנויים וללא התחייבויות</h4>
                    <p className="text-[10px] md:text-xs text-zinc-200">האפליקציה פתוחה וחינמית לחלוטין לשימוש לכל האוהדים. אין דמי מנוי קבועים.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-zinc-950/70 backdrop-blur-xl border border-emerald-500/30 p-6 md:p-8 rounded-3xl text-center relative overflow-hidden shadow-neon-green font-sans">
              <span className="text-[10px] md:text-xs font-bold text-zinc-500 mb-1 block">רשימת ההמתנה הרשמית</span>
              <div className="text-4xl md:text-5xl font-sans font-bold text-[#ccff00] mb-2 leading-none">חינם</div>
              <span className="text-[10px] md:text-xs font-bold text-zinc-400 tracking-wider mb-6 block uppercase">תפסו מקום עכשיו</span>
              <div className="w-full h-px bg-white/5 mb-6"></div>

              <div className="space-y-3 text-right mb-8">
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>כרטיסים במחיר המקורי בלבד ללא ספסרות</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>קנייה ומכירה מאומטחת מנוי-אל-אוהד</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-200">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>בלי דמי מנוי חודשיים ובלי הפתעות</span>
                </div>
              </div>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => document.getElementById('fullName')?.focus(), 800);
                }}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl text-sm transition-all"
              >
                הרשמה לרשימת ההמתנה
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 px-6 md:px-12 border-t border-white/5 bg-black/80 backdrop-blur-md text-sm text-zinc-500 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-right">
            <span className="text-lg font-black text-white block mb-1">
              Ticket<span className="text-emerald-500">Trade</span>
            </span>
            <p className="text-xs text-zinc-600 font-sans">
              זירת מסחר כרטיסי כדורגל מאובטחת fan-to-fan. מנוהלת על ידי אוהדים, עבור אוהדים.
            </p>
          </div>

          <div className="flex gap-6 text-xs font-sans">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש וואטסאפ</a>
            <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">תקנון פלטפורמה</a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-700 font-sans">
          <div>&copy; 2026 TicketTrade ישראל. כל הזכויות שמורות.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-500">Twitter</a>
            <a href="#" className="hover:text-zinc-500">Discord</a>
            <a href="#" className="hover:text-zinc-500">Instagram</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
