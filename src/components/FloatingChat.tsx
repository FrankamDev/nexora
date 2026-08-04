import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Shield, Clock, MapPin, Zap } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickReplies?: string[];
  cta?: { label: string; whatsappMessage: string };
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasGreeted, setHasGreeted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "237690372977";
  const PERSISTENT_BADGE: boolean = true;
  const [hasUnread, setHasUnread] = useState(true);

  const now = () =>
    new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 50);
  };

  const openWhatsApp = (text: string) => {
    const message = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const pushBotMessage = (
    text: string,
    quickReplies?: string[],
    cta?: Message['cta'],
    delay = 1000
  ) => {
    setIsTyping(true);
    scrollToBottom();
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text,
          time: now(),
          quickReplies,
          cta,
        },
      ]);
      scrollToBottom();
    }, delay);
  };

  const pushUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        text,
        time: now(),
      },
    ]);
    scrollToBottom();
  };

  // Message d'accueil à la première ouverture
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      pushBotMessage(
        "Bonjour 👋 Bienvenue chez NEXORA. Je suis votre assistant anti-nuisibles. Comment puis-je vous aider ?",
        [
          "Intervention urgente",
          "Demander un devis",
          "Nos services",
          "Parler à un technicien",
        ]
      );
    }
    if (isOpen && !PERSISTENT_BADGE) {
      setHasUnread(false);
    }
  }, [isOpen, hasGreeted]);

  const handleQuickReply = (reply: string) => {
    pushUserMessage(reply);

    switch (reply) {
      case "Intervention urgente":
        pushBotMessage(
          "Nous intervenons sous 2 heures à Yaoundé et Douala. Décrivez rapidement le problème (rats, cafards, moustiques...) et notre équipe vous contacte immédiatement.",
          undefined,
          {
            label: "Lancer l'urgence sur WhatsApp",
            whatsappMessage:
              "🚨 URGENCE NEXORA — J'ai besoin d'une intervention rapide contre des nuisibles.",
          }
        );
        break;

      case "Demander un devis":
        pushBotMessage(
          "Parfait. Pour un devis précis et gratuit, indiquez-nous le type de nuisible, la surface approximative et le lieu. Nous vous répondons très rapidement.",
          undefined,
          {
            label: "Recevoir mon devis sur WhatsApp",
            whatsappMessage:
              "Bonjour NEXORA, je souhaite obtenir un devis pour une intervention de dératisation / désinsectisation.",
          }
        );
        break;

      case "Nos services":
        pushBotMessage(
          "Nous proposons :\n• Dératisation (rats & souris)\n• Désinsectisation (cafards, moustiques, guêpes...)\n• Désinfection complète\n• Contrats de prévention\n\nGarantie jusqu'à 6 mois.",
          ["Demander un devis", "Parler à un technicien"]
        );
        break;

      case "Parler à un technicien":
        pushBotMessage(
          "Bien sûr. Je vous mets en relation directe avec un technicien NEXORA dès maintenant.",
          undefined,
          {
            label: "Ouvrir WhatsApp maintenant",
            whatsappMessage:
              "Bonjour NEXORA, je souhaite parler à un technicien pour une intervention.",
          }
        );
        break;

      default:
        break;
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    pushUserMessage(userText);
    setInputValue('');
    pushBotMessage(
      "Merci pour votre message. Pour une réponse rapide et précise, continuons directement sur WhatsApp — notre équipe y est plus réactive.",
      undefined,
      {
        label: "Continuer sur WhatsApp",
        whatsappMessage: `Bonjour NEXORA, ${userText}`,
      }
    );
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-15 h-15 sm:w-16 sm:h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/30 flex items-center justify-center transition-all duration-300"
        aria-label="Ouvrir le chat NEXORA"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25 }}
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </motion.div>

        {/* Badge notification */}
        {hasUnread && !isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          >
            1
          </motion.div>
        )}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[340px] sm:w-[360px] max-w-[calc(100vw-1.5rem)] h-[510px] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 flex flex-col"
          >
            {/* Header pro */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 flex items-center gap-3 shrink-0">
              <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[15px] truncate">NEXORA Assistant</p>
                <p className="text-xs opacity-90 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300"></span>
                  </span>
                  En ligne • Réponse rapide
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white shrink-0 p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-zinc-50 dark:bg-zinc-950"
            >
              {messages.length === 0 && !isTyping && (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center mb-3">
                    <Zap size={26} className="text-emerald-500" />
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Connexion à l’assistant NEXORA...
                  </p>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-emerald-500 text-white rounded-br-md'
                        : 'bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-100 dark:border-zinc-700 rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-1 px-1">
                    {msg.time}
                  </span>

                  {/* Quick replies */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-2 mt-2 max-w-full">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 text-xs font-medium border border-emerald-500/60 text-emerald-600 dark:text-emerald-400 rounded-full hover:bg-emerald-500 hover:text-white transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* CTA WhatsApp */}
                  {msg.cta && (
                    <button
                      onClick={() => openWhatsApp(msg.cta!.whatsappMessage)}
                      className="mt-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle size={14} />
                      {msg.cta.label}
                    </button>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-start"
                >
                  <div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 0.65,
                          repeat: Infinity,
                          delay: i * 0.14,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2 shrink-0 bg-white dark:bg-zinc-900">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Décrivez votre besoin..."
                className="flex-1 bg-zinc-100 dark:bg-zinc-800 border-none rounded-full px-4 py-2.5 text-sm text-zinc-800 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Envoyer"
              >
                <Send size={16} />
              </button>
            </div>

            {/* Footer info */}
            <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 flex items-center justify-between text-[10px] text-zinc-400 shrink-0">
              <span className="flex items-center gap-1">
                <Clock size={11} /> Intervention sous 2h
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={11} /> Yaoundé & Douala
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}