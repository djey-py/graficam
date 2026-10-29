import { contact, serviceCategories } from '../data/site';
import { waLink } from '../lib/whatsapp';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap fgrid">
        <div><p className="logo">GRÁFICA <b>M</b></p><p>{contact.slogan}</p></div>
        <div><h4>Serviços</h4><ul>{serviceCategories.map((c) => <li key={c.id}>{c.title}</li>)}</ul></div>
        <div><h4>Contacto</h4><p><a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp {contact.phone}</a></p>
          {contact.social.map((s) => <p key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></p>)}</div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Gráfica M. Todos os direitos reservados.</p>
    </footer>
  );
}
