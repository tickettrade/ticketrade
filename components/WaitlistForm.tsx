'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { Check, Copy, ChevronLeft, Loader2 } from 'lucide-react';
// Connect to the Supabase client
import { supabase } from '../lib/supabase';
import { copy } from '../lib/copy';

import { ColorTheme } from '../lib/theme';

interface WaitlistFormProps {
  onSuccess: (rank: number) => void;
  liveSignups: number;
  theme: ColorTheme;
}

export default function WaitlistForm({ onSuccess, liveSignups, theme }: WaitlistFormProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tcpaConsent, setTcpaConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralLink, setReferralLink] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phoneNumber) {
      toast.error('אנא מלאו את כל השדות', {
        style: { background: '#18181b', color: '#fafafa', border: '1px solid rgba(255,255,255,0.1)' }
      });
      return;
    }

    if (!tcpaConsent) {
      toast.error('יש לאשר את תנאי קבלת העדכונים', {
        style: { background: '#18181b', color: '#fafafa', border: '1px solid rgba(255,255,255,0.1)' }
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let error = null;
      if (supabase) {
        const { error: dbError } = await supabase
          .from('waitlist')
          .insert([{ full_name: fullName, phone_number: phoneNumber }]);
        error = dbError;
      } else {
        // Graceful offline mock delay
        await new Promise((resolve) => setTimeout(resolve, 850));
        console.log('Mock Waitlist Submission:', { full_name: fullName, phone_number: phoneNumber });
      }

      if (error) {
        console.error("Supabase Error:", error.message);
        toast.error('משהו השתבש, אנא נסו שנית', {
          style: { background: '#18181b', color: '#fafafa', border: '1px solid rgba(255,255,255,0.1)' }
        });
        return;
      }

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#10b981', '#3b82f6', '#ffffff']
      });

      // Hebrew success toast
      toast.success('בום! אתם בפנים. נעדכן בקרוב.', {
        duration: 4000,
        style: {
          background: '#18181b',
          color: '#10b981',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          fontWeight: 'bold',
        }
      });

      const assignedRank = liveSignups + 1;
      onSuccess(assignedRank);
      
      const randomSuffix = Math.random().toString(36).substring(2, 7);
      setReferralLink(`https://tickettrade.co.il/join?ref=tt${randomSuffix}`);
      setIsSubmitted(true);

    } catch (err) {
      console.error("Submission Error:", err);
      toast.error('משהו השתבש, אנא נסו שנית', {
        style: { background: '#18181b', color: '#fafafa', border: '1px solid rgba(255,255,255,0.1)' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success('הקישור הועתק ללוח!', {
      style: {
        background: '#18181b',
        color: '#fafafa',
        border: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.85rem'
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="text-right"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                    {copy.form.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={copy.form.fullNamePlaceholder}
                    required
                    className={`w-full px-4 py-3 bg-transparent border border-white/15 rounded-xl outline-none text-white placeholder-white/60 text-sm transition-all focus:ring-1 ${theme.focusRing}`}
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-white uppercase tracking-wider">
                      {copy.form.phoneLabel}
                    </label>
                    <span className={`text-[10px] ${theme.badgeText} font-bold ${theme.badgeBg} border ${theme.badgeBorder} px-2 py-0.5 rounded`}>
                      {copy.form.phoneBadge}
                    </span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder={copy.form.phonePlaceholder}
                    required
                    className={`w-full px-4 py-3 bg-transparent border border-white/15 rounded-xl outline-none text-white placeholder-white/60 text-sm transition-all ltr focus:ring-1 ${theme.focusRing}`}
                  />
                </div>

                {/* TCPA Opt-in checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={tcpaConsent}
                    onChange={(e) => setTcpaConsent(e.target.checked)}
                    required
                    className="mt-1 w-4 h-4 bg-transparent border border-white/15 rounded cursor-pointer"
                    style={{ accentColor: theme.primaryBg.includes('bg-[#ccff00]') ? '#ccff00' : theme.textColor.replace('text-', '') }}
                  />
                  <label htmlFor="consent" className="text-[11px] leading-relaxed text-white/80">
                    {copy.form.termsConsentBeforeLink}
                    <a href="#" className={`underline hover:opacity-80 ${theme.textColor}`}>
                      {copy.form.termsLinkText}
                    </a>
                    {copy.form.termsConsentAfterLink}
                  </label>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ fontFamily: "var(--font-heebo), 'Heebo', sans-serif" }}
                  className={`w-full py-4 mt-2 ${theme.primaryBg} ${theme.primaryText} ${theme.glowClass} ${theme.hoverBg} font-extrabold rounded-xl text-sm transition-transform flex justify-center items-center gap-2`}
                >
                  {isSubmitting ? (
                    <Loader2 className={`w-5 h-5 animate-spin ${theme.primaryText}`} />
                  ) : (
                    <>
                      <span>{copy.form.submitButton}</span>
                      <ChevronLeft className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center py-2"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 ${theme.badgeBg} border ${theme.badgeBorder} ${theme.textColor} rounded-full mb-5`}>
                <Check className="w-7 h-7" strokeWidth={3} />
              </div>
              
              <h2 className="text-2xl font-black text-white mb-2">{copy.form.successTitle}</h2>
              <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                {copy.form.successSubtitle}
              </p>

              {/* Referral loop */}
              <div className="text-right">
                <span className="block text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">
                  {copy.form.referralShareLabel}
                </span>

                <div className="flex gap-2 mb-4">
                  <div className="flex-1 bg-zinc-950/60 border border-white/10 rounded-lg p-2.5 text-xs text-zinc-400 select-all overflow-hidden text-ellipsis whitespace-nowrap text-left ltr">
                    {referralLink}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copy.form.copyButtonText}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      window.open(`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(copy.form.shareMessage)}`, '_blank');
                    }}
                    className="py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-bold transition-all text-white text-center"
                  >
                    {copy.form.telegramShareButton}
                  </button>
                  <button
                    onClick={() => {
                      const text = `${copy.form.shareMessage} ${referralLink}`;
                      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className={`py-2.5 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-xs font-bold transition-all text-center ${theme.textColor}`}
                  >
                    {copy.form.whatsappShareButton}
                  </button>
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
