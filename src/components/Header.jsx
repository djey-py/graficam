import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { waLink } from '../lib/whatsapp';
const nav = [['Início', '#inicio'], ['Serviços', '#servicos'], ['Personalização', '#personalizacao'], ['Portfólio', '#portfolio'], ['Promoções', '#promocoes'], ['Contactos', '#contactos']];
const ext = { target: '_blank', rel: 'noopener noreferrer' };
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap bar">
        <a href="#inicio" className="logo" aria-label="Gráfica M — início">GRÁFICA <b>M</b></a>
        <nav className={'nav' + (open ? ' open' : '')} aria-label="Principal">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a className="btn btn-small hide-sm" href={waLink()} {...ext}>Pedir orçamento</a>
        <a className="icon-btn" href={waLink()} {...ext} aria-label="WhatsApp"><MessageCircle /></a>
        <button className="icon-btn menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
