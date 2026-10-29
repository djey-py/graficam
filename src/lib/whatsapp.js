import { contact } from '../data/site';
export const waLink = (msg = 'Olá, Gráfica M! Gostaria de solicitar um orçamento.') =>
  `https://wa.me/${contact.wa}?text=${encodeURIComponent(msg)}`;
export const quoteMsg = (name) => `Olá, Gráfica M! Gostaria de solicitar um orçamento para ${name}. Podem ajudar-me?`;
