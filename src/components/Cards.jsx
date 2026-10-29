import { MessageCircle } from 'lucide-react';
import { icons } from './icons';
import { waLink, quoteMsg } from '../lib/whatsapp';
const ext = { target: '_blank', rel: 'noopener noreferrer' };

export function ServiceCard({ item, icon }) {
  const Icon = icons[icon];
  return (
    <article className="card">
      <div className="thumb"><Icon size={34} aria-hidden="true" /></div>
      <h4>{item.name}</h4>
      {item.desc && <p>{item.desc}</p>}
      <a className="btn btn-small" href={waLink(item.msg || quoteMsg(item.name))} {...ext}>Solicitar orçamento</a>
    </article>
  );
}
export function ProductCard({ item }) {
  const Icon = icons[item.icon] || icons.gift;
  return (
    <article className="card">
      <div className="thumb"><Icon size={40} aria-hidden="true" /><small>Imagem ilustrativa</small></div>
      <h4>{item.name}</h4>
      <p>{item.desc}</p>
      <p className="price-note">{item.price}</p>
      <a className="btn btn-small" href={waLink(item.msg || quoteMsg(item.name))} {...ext}>Personalizar este produto</a>
    </article>
  );
}
export function PromotionCard({ item }) {
  const msg = `Olá, Gráfica M! Vi a promoção de ${item.name} (${item.price}${item.unit ? ' ' + item.unit : ''}) no site e gostaria de aproveitar. Podem informar-me sobre tamanhos, quantidades e disponibilidade?`;
  return (
    <article className="promo">
      <span className="tag">Promoção</span>
      <h4>{item.name}</h4>
      <p className="price">{item.price}</p>
      {item.unit && <p>{item.unit}</p>}
      {item.note && <p>{item.note}</p>}
      <a className="btn btn-red" href={waLink(msg)} {...ext}><MessageCircle size={18} aria-hidden="true" /> Aproveitar promoção</a>
    </article>
  );
}
