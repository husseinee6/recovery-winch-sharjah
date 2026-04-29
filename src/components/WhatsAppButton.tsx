import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/97165551234"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      {/* Pulse animation */}
      <span className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30"></span>
    </a>
  )
}