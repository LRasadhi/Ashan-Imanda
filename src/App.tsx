import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Calendar, Clock, ChevronDown, Heart, MailOpen } from 'lucide-react';

const GOLD = "#B59410";
const CREAM = "#FDFBF7";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date("May 8, 2026 09:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    setTimeout(() => setShowContent(true), 1500);
  };

  if (!showContent) {
    return (
      <div className="h-screen bg-cream flex items-center justify-center overflow-hidden p-4">
        <AnimatePresence>
          {!isOpened ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="relative cursor-pointer group w-full max-w-sm md:max-w-md"
              onClick={handleOpenEnvelope}
            >
              <div className="text-center mb-6">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <MailOpen size={40} className="text-gold mb-3 mx-auto" strokeWidth={1} />
                </motion.div>
                <h2 className="font-calligraphy text-3xl md:text-4xl text-gold tracking-normal">You are invited</h2>
                <p className="text-text-dark/40 text-xs md:text-sm mt-2 font-serif">Tap to open the invitation</p>
              </div>

              <div className="relative w-full h-[180px] md:h-[260px] bg-white shadow-2xl border border-gold/10 rounded-sm">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white border-b border-gold/20 origin-top transition-transform duration-1000 group-hover:bg-ivory" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <Heart size={18} className="text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 md:bottom-6 left-0 w-full text-center">
                  <span className="font-calligraphy text-2xl md:text-3xl text-gold/80">Ashan & Imanda</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2, opacity: 0 }}
              className="relative w-full max-w-sm md:max-w-md h-[180px] md:h-[260px] bg-white shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -200 }}
                  transition={{ duration: 1 }}
                  className="bg-cream p-8 shadow-lg border border-gold/20"
                >
                  <h3 className="font-calligraphy text-3xl text-gold">Opening...</h3>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen selection:bg-gold-light selection:text-text-dark bg-cream"
    >
      {/* Floating Petals */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 10}px`,
              height: `${Math.random() * 15 + 10}px`,
              animationDuration: `${Math.random() * 5 + 7}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <svg viewBox="0 0 100 100" fill={GOLD} className="opacity-20">
              <path d="M50,0 Q80,20 100,50 Q80,80 50,100 Q20,80 0,50 Q20,20 50,0" />
            </svg>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-white">
        {/* Corner flowers - smaller on mobile */}
        <img src="/left.png" alt="" className="absolute left-0 w-36 md:w-64 lg:w-80 pointer-events-none"
          style={{ mixBlendMode: 'multiply', opacity: 0.9, transform: 'translate(-10px, -10px)' }} />
        <img src="/left.png" alt="" className="absolute right-0 w-36 md:w-64 lg:w-80 pointer-events-none"
          style={{ mixBlendMode: 'multiply', opacity: 0.9, transform: 'scaleX(-1) translate(-10px, -10px)' }} />
        <img src="/Flower-left-up.png" alt="" className="absolute right-0 w-48 md:w-96 lg:w-[500px] pointer-events-none"
          style={{ mixBlendMode: 'multiply', opacity: 0.08, transform: 'scaleX(-1) translate(-10px, -10px)' }} />
        <img src="/Flower-left-up.png" alt="" className="absolute left-0 w-48 md:w-96 lg:w-[500px] pointer-events-none"
          style={{ mixBlendMode: 'multiply', opacity: 0.08, transform: 'translate(-10px, -10px)' }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="z-10 px-4"
        >
          <h1 className="font-calligraphy text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-gold mb-4 md:mb-6 tracking-normal leading-tight">
            Ashan & Imanda
          </h1>
          <p className="font-serif text-sm sm:text-base md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-text-dark/80 mb-6 md:mb-10">
            We're getting married
          </p>
          <div className="inline-block px-6 md:px-10 py-3 md:py-4 border-y border-gold/40 font-serif text-xl md:text-2xl lg:text-3xl text-text-dark">
            08 · 05 · 2026
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 md:bottom-10 text-gold z-10"
        >
          <ChevronDown size={28} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Invitation Text */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="font-serif text-base md:text-xl italic text-text-dark/80 leading-relaxed px-2 md:px-4 uppercase">
              Mr. & Mrs. Gamage together with <br />
              Mr. & Mrs. Karuna Arachchige <br />
              warmly request the honour of your presence <br />
              to celebrate the marriage of their children
            </p>

            <div className="my-10 md:my-16 flex items-center justify-center gap-6">
              <div className="h-[1px] w-12 md:w-16 bg-gold/30" />
              <Heart size={18} className="text-gold" fill={GOLD} />
              <div className="h-[1px] w-12 md:w-16 bg-gold/30" />
            </div>

            <h2 className="font-calligraphy text-5xl md:text-6xl lg:text-7xl text-gold leading-tight">Ashan & Imanda</h2>
          </motion.div>
        </div>
      </section>

      {/* Event Details Card */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden"
        style={{
          backgroundImage: 'url("/floral.png")',
          backgroundPosition: '33% 50%',
          backgroundSize: '175%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FDFBF7'
        }}>
        <div className="max-w-sm md:max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative text-center"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #B59410, #e8d48b, #B59410) border-box',
              border: '1.5px solid transparent',
              borderRadius: '2px',
              padding: '2rem 1.5rem',
              boxShadow: '0 8px 60px rgba(181,148,16,0.08), 0 2px 20px rgba(181,148,16,0.06)',
            }}
          >
            <div className="absolute inset-3 md:inset-4 pointer-events-none"
              style={{ border: '1px solid rgba(181,148,16,0.15)', borderRadius: '1px' }} />

            {['-top-0 -left-0', '-top-0 -right-0 rotate-90', '-bottom-0 -left-0 -rotate-90', '-bottom-0 -right-0 rotate-180'].map((pos, i) => (
              <svg key={i} className={`absolute ${pos} w-8 h-8 md:w-10 md:h-10`} viewBox="0 0 40 40" fill="none">
                <path d="M2,2 L2,16" stroke="#B59410" strokeWidth="1" opacity="0.5" />
                <path d="M2,2 L16,2" stroke="#B59410" strokeWidth="1" opacity="0.5" />
                <circle cx="2" cy="2" r="1.5" fill="#B59410" opacity="0.5" />
              </svg>
            ))}

            <h3 className="font-calligraphy text-4xl md:text-5xl text-gold mb-4 md:mb-5">The Wedding Day</h3>

            <div className="space-y-0">
              <div className="flex flex-col items-center py-3 md:py-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center mb-2 md:mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(181,148,16,0.08), rgba(181,148,16,0.02))' }}>
                  <Calendar size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-1 md:mb-2">Date</span>
                <p className="text-base md:text-xl font-serif uppercase">Friday, 8th May 2026</p>
              </div>

              <div className="flex items-center gap-3 px-4 md:px-8">
                <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(181,148,16,0.3))' }} />
                <div className="w-1 h-1 rounded-full bg-gold/40" />
                <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(181,148,16,0.3))' }} />
              </div>

              <div className="flex flex-col items-center py-3 md:py-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center mb-2 md:mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(181,148,16,0.08), rgba(181,148,16,0.02))' }}>
                  <Clock size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-1 md:mb-2">Time</span>
                <p className="text-base md:text-xl font-serif uppercase">9:00 AM to 4:00 PM</p>
              </div>

              <div className="flex items-center gap-3 px-4 md:px-8">
                <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(181,148,16,0.3))' }} />
                <div className="w-1 h-1 rounded-full bg-gold/40" />
                <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(181,148,16,0.3))' }} />
              </div>

              <div className="flex flex-col items-center py-3 md:py-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 flex items-center justify-center mb-2 md:mb-3"
                  style={{ background: 'linear-gradient(135deg, rgba(181,148,16,0.08), rgba(181,148,16,0.02))' }}>
                  <Heart size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-gold/70 mb-1 md:mb-2">Poruwa Ceremony</span>
                <p className="text-base md:text-xl font-serif">9:12 AM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-cream relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] md:text-[12px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-gold mb-4 md:mb-6 block">The Venue</span>
            <h3 className="font-calligraphy text-4xl md:text-5xl text-text-dark mb-3 md:mb-4 leading-tight">The Grand Ballroom</h3>
            <p className="text-gold font-bold mb-2 font-serif text-base md:text-lg uppercase">Grand Mondo Banquet Hotel</p>
            <p className="text-text-dark/60 text-sm md:text-base mb-8 md:mb-12 font-serif italic uppercase leading-relaxed">No. 50/B, Panaluwa, Watareka, Homagama</p>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white mb-8 md:mb-12 h-[280px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=6.8419,80.0085&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/NsDtMLiU6Y38AFKc9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gold text-white rounded-full hover:bg-gold/90 transition-all shadow-xl hover:shadow-gold/30 font-serif text-base md:text-lg tracking-wide"
            >
              <MapPin size={18} />
              GET DIRECTIONS
            </a>
          </motion.div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative"
        style={{
          backgroundImage: 'url("/floral.png")',
          backgroundPosition: '33% 40%',
          backgroundSize: '175%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#FDFBF7'
        }}>
        <div className="max-w-sm md:max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative text-center"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #B59410, #e8d48b, #B59410) border-box',
              border: '1.5px solid transparent',
              borderRadius: '2px',
              padding: '2rem 1.5rem',
              boxShadow: '0 8px 60px rgba(181,148,16,0.08), 0 2px 20px rgba(181,148,16,0.06)',
            }}
          >
            <div className="absolute inset-3 md:inset-4 pointer-events-none"
              style={{ border: '1px solid rgba(181,148,16,0.15)', borderRadius: '1px' }} />

            {['-top-0 -left-0', '-top-0 -right-0 rotate-90', '-bottom-0 -left-0 -rotate-90', '-bottom-0 -right-0 rotate-180'].map((pos, i) => (
              <svg key={i} className={`absolute ${pos} w-8 h-8 md:w-10 md:h-10`} viewBox="0 0 40 40" fill="none">
                <path d="M2,2 L2,16" stroke="#B59410" strokeWidth="1" opacity="0.5" />
                <path d="M2,2 L16,2" stroke="#B59410" strokeWidth="1" opacity="0.5" />
                <circle cx="2" cy="2" r="1.5" fill="#B59410" opacity="0.5" />
              </svg>
            ))}

            <h4 className="font-calligraphy text-2xl md:text-3xl mb-6 md:mb-8">Counting down to the big day</h4>

            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(181,148,16,0.3))' }} />
              <Heart size={12} className="text-gold/50" fill="rgba(181,148,16,0.4)" />
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(181,148,16,0.3))' }} />
            </div>

            {/* Always 4 columns on all screen sizes */}
            <div className="grid grid-cols-4 gap-2 md:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Mins', value: timeLeft.minutes },
                { label: 'Secs', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center py-3 md:py-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(181,148,16,0.04), rgba(181,148,16,0.01))',
                    border: '1px solid rgba(181,148,16,0.15)',
                    borderRadius: '2px',
                  }}
                >
                  <span className="block font-serif text-2xl md:text-4xl text-gold leading-none mb-1 md:mb-2">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] md:text-[11px] uppercase tracking-widest text-text-dark/40 font-serif">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6 md:mt-8">
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(181,148,16,0.3))' }} />
              <div className="w-1 h-1 rounded-full bg-gold/40" />
              <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(181,148,16,0.3))' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-cream relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-calligraphy text-5xl md:text-6xl text-gold mb-4 md:mb-6">Kindly RSVP</h2>
            <p className="text-text-dark/60 mb-2 md:mb-3 font-serif text-base md:text-xl uppercase">By 22nd April 2026</p>
            <p className="text-sm md:text-base italic mb-8 md:mb-12 font-serif text-text-dark/40 uppercase">(Regrets only)</p>

            {/* Stack vertically on mobile, row on desktop */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
              <a
                href="tel:0715319761"
                className="group flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 bg-white border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all w-full max-w-[300px] justify-center shadow-md font-serif text-sm md:text-lg"
              >
                <Phone size={18} className="text-gold group-hover:text-white flex-shrink-0" />
                <span>ASHAN: 071-5319761</span>
              </a>
              <a
                href="tel:0710840269"
                className="group flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 bg-white border border-gold/30 rounded-full hover:bg-gold hover:text-white transition-all w-full max-w-[300px] justify-center shadow-md font-serif text-sm md:text-lg"
              >
                <Phone size={18} className="text-gold group-hover:text-white flex-shrink-0" />
                <span>IMANDA: 071-0840269</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 px-6 bg-white text-center border-t border-gold/10 relative">
        <div className="max-w-2xl mx-auto">
          <Heart size={24} className="text-gold mx-auto mb-6 md:mb-8" fill={GOLD} />
          <p className="text-text-dark/40 text-xs md:text-sm mb-1 font-serif uppercase tracking-[0.3em]">Made with love by</p>
          <p className="font-calligraphy text-3xl md:text-4xl text-text-dark mb-2 md:mb-3">Ashan & Imanda</p>
          <p className="text-text-dark/40 text-xs md:text-sm tracking-[0.3em] uppercase font-serif">May 2026</p>
        </div>
      </footer>
    </motion.div>
  );
}
