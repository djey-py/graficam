import { MessageCircle } from 'lucide-react';
import { waLink } from '../lib/whatsapp';
export default function WhatsAppButton() {
  return <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Gráfica M no WhatsApp"><MessageCircle size={28} /></a>;
}
