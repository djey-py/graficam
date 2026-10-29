import { useState, useEffect } from 'react';
import { X, Image } from 'lucide-react';
import { portfolio, portfolioFilters } from '../data/site';
import { waLink } from '../lib/whatsapp';

function Tile({ p, big }) {
  return p.image
    ? <img src={p.image} alt={p.title} loading="lazy" />
    : <div className={'ph' + (big ? ' big' : '')} role="img" aria-label={`${p.title} (imagem ilustrativa)`}><Image size={big ? 64 : 32} /><small>Imagem ilustrativa</small></div>;
}
export default function Gallery() {
  const [filter, setFilter] = useState('Todos');
  const [open, setOpen] = useState(null);
  const list = portfolio.filter((p) => filter === 'Todos' || p.category === filter);
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, []);
  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar trabalhos">
        {portfolioFilters.map((f) => (
          <button key={f} className={'chip' + (f === filter ? ' on' : '')} aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="grid gallery">
        {list.map((p) => (
          <button key={p.id} className="gitem" onClick={() => setOpen(p)} aria-label={`Ampliar ${p.title}`}>
            <Tile p={p} /><span>{p.title}</span>
          </button>
        ))}
      </div>
      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <div className="lb-body" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setOpen(null)} aria-label="Fechar"><X /></button>
            <Tile p={open} big />
            <h4>{open.title}</h4>
            <a className="btn" href={waLink(`Olá, Gráfica M! Vi o trabalho “${open.title}” no portfólio e gostaria de pedir algo semelhante. Podem ajudar-me?`)} target="_blank" rel="noopener noreferrer">Pedir trabalho semelhante</a>
          </div>
        </div>
      )}
    </>
  );
}
