import { MessageCircle, Phone } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/constants';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Call button */}
      <a
        href="tel:+2347065356471"
        aria-label="Call Us Now"
        className="w-14 h-14 bg-brand hover:bg-brand-light rounded-full flex items-center justify-center shadow-2xl shadow-brand/40 hover:shadow-brand/60 transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      {/* WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bc5a] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </div>
  );
}
