import { MessageCircle, Phone, Check, Sparkles, Layers, Headphones } from 'lucide-react';
import { contact, serviceCategories, products, promotions, whyUs } from '../data/site';
import { waLink } from '../lib/whatsapp';
import { ServiceCard, ProductCard, PromotionCard } from '../components/Cards';
import Gallery from '../components/Gallery';

const wa = { target: '_blank', rel: 'noopener noreferrer' };
export default function Home() {
  return (
    <main>
      <section id="inicio" className="hero">
        <div className="wrap">
          <h1>Dá Vida à Tua <span>Imaginação!</span></h1>
          <p>Da impressão à personalização, transformamos as tuas ideias em produtos únicos para ti, para o teu negócio ou para uma ocasião especial.</p>
          <div className="row">
            <a className="btn btn-red" href={waLink()} {...wa}><MessageCircle size={20} aria-hidden="true" /> Pedir orçamento no WhatsApp</a>
            <a className="btn btn-ghost" href="#servicos">Explorar os nossos serviços</a>
          </div>
          <ul className="trust">
            <li><Sparkles size={18} /> Personalização à tua medida</li>
            <li><Layers size={18} /> Serviços gráficos variados</li>
            <li><Headphones size={18} /> Atendimento directo pelo WhatsApp</li>
          </ul>
        </div>
      </section>

      <section id="servicos" className="sec"><div className="wrap">
        <h2>Os nossos serviços</h2>
        {serviceCategories.map((c) => (
          <div key={c.id} className="cat">
            <h3>{c.title}</h3>
            <div className="grid">{c.items.map((i) => <ServiceCard key={i.name} item={i} icon={c.icon} />)}</div>
          </div>
        ))}
      </div></section>

      <section id="personalizacao" className="sec alt"><div className="wrap">
        <h2>Produtos personalizados</h2>
        <div className="grid">{products.map((p) => <ProductCard key={p.name} item={p} />)}</div>
      </div></section>

      <section id="promocoes" className="sec promos"><div className="wrap">
        <h2>Promoções</h2>
        <div className="grid">{promotions.map((p) => <PromotionCard key={p.name} item={p} />)}</div>
        <p className="small">Tamanhos, quantidades e disponibilidade: confirmar com a equipa pelo WhatsApp.</p>
      </div></section>

      <section id="portfolio" className="sec"><div className="wrap">
        <h2>Trabalhos realizados</h2>
        <Gallery />
      </div></section>

      <section className="sec alt"><div className="wrap">
        <h2>Porquê escolher a Gráfica M?</h2>
        <ul className="why">{whyUs.map((w) => <li key={w}><Check size={22} aria-hidden="true" /> {w}</li>)}</ul>
      </div></section>

      <section className="cta"><div className="wrap">
        <h2>Tens uma ideia? Nós damos-lhe vida!</h2>
        <p>Fala connosco, explica o que pretendes e recebe atendimento para o teu próximo projecto gráfico.</p>
        <a className="btn btn-red" href={waLink()} {...wa}><MessageCircle size={20} aria-hidden="true" /> Falar com a Gráfica M no WhatsApp</a>
      </div></section>

      <section id="contactos" className="sec"><div className="wrap">
        <h2>Contactos e localização</h2>
        <p><b>Gráfica M</b> — {contact.phone}</p>
        <p>{contact.location} {!contact.locationConfirmed && <em>(localização a confirmar com a empresa)</em>}</p>
        {contact.hours && <p>Horário: {contact.hours}</p>}
        <div className="row" style={{ marginTop: 16 }}>
          <a className="btn" href={waLink()} {...wa}><MessageCircle size={20} aria-hidden="true" /> Iniciar conversa</a>
          <a className="btn btn-ghost dark" href={`tel:+${contact.wa}`}><Phone size={20} aria-hidden="true" /> Ligar</a>
        </div>
        {contact.mapUrl && <iframe className="map" title="Mapa" src={contact.mapUrl} loading="lazy" />}
      </div></section>
    </main>
  );
}
