// ÚNICA FONTE DE DADOS: edite aqui contactos, preços, serviços e portfólio.
export const contact = {
  name: 'Gráfica M', slogan: 'Dá Vida à Tua Imaginação.',
  phone: '+244 921 377 736', wa: '244921377736',
  location: 'Luanda, Grafanil Bar, junto à referência “Ras 13” — ou Viana, Universidade DI-STA.',
  locationConfirmed: false, // mude para true depois de confirmar com a empresa
  hours: null,              // ex.: 'Seg–Sáb, 8h–18h' (só depois de confirmado)
  mapUrl: null,             // URL de incorporação do mapa, quando confirmada a localização
  social: [],               // ex.: [{ label: 'Instagram', url: '...' }]
};
export const serviceCategories = [
  { id: 'impressao', icon: 'printer', title: 'Criação e impressão', items: [
    { name: 'Lonas publicitárias', desc: 'Impressão em vários tamanhos para a tua publicidade.', msg: 'Olá, Gráfica M! Gostaria de solicitar um orçamento para impressão de lona. Podem informar-me sobre os tamanhos e condições?' },
    { name: 'Panfletos e flyers', desc: 'Divulga o teu negócio ou evento.' },
    { name: 'Vinil normal', desc: 'Autocolantes e aplicações em vinil.' },
    { name: 'Vinil transparente', desc: 'Ideal para vidros e montras.' },
    { name: 'Fitas de festa', desc: 'Personalizadas para a tua celebração.' },
    { name: 'Cartões de visita', desc: 'A tua imagem profissional.' },
    { name: 'Placas de selfie', desc: 'Para eventos e fotografias divertidas.' },
    { name: 'Convites de casamento', desc: 'Convites com o teu estilo.' } ] },
  { id: 'personalizacao', icon: 'shirt', title: 'Personalização e timbragem', items: [
    'T-shirts personalizadas', 'Casacos personalizados', 'Lacostes', 'Chapéus e bonés', 'Cuecas personalizadas', 'Coletes', 'Chaveiros', 'Canecas personalizadas', 'Copos personalizados', 'Cantis', 'Quadros digitais', 'Quadros personalizados', 'Passes e cartões PVC'
  ].map((name) => ({ name, desc: 'Personalizado à tua medida.' })) },
  { id: 'documentos', icon: 'file', title: 'Digitalização e documentos', items: [
    { name: 'Digitalização de documentos', msg: 'Olá, Gráfica M! Gostaria de solicitar um serviço de digitalização ou preparação de documentos. Podem ajudar-me?' },
    { name: 'Elaboração de currículos vitae' }, { name: 'Requerimentos' }, { name: 'Trabalhos escolares' },
    { name: 'Envio de documentos' }, { name: 'Plastificação' }, { name: 'Reprodução de fotografias' }
  ].map((s) => ({ desc: 'Atendimento simples e directo.', ...s })) },
];
export const products = [
  { name: 'T-shirts personalizadas', icon: 'shirt', desc: 'Para equipas, eventos, empresas ou presentes.', msg: 'Olá, Gráfica M! Tenho interesse em T-shirts personalizadas. Gostaria de saber os tamanhos disponíveis, as opções de personalização e as condições para encomendar.' },
  { name: 'Chapéus e bonés', icon: 'shirt', desc: 'Com o teu logótipo ou design.' },
  { name: 'Quadros digitais', icon: 'frame', desc: 'As tuas fotografias em quadro.', msg: 'Olá, Gráfica M! Gostaria de encomendar um quadro digital. Podem informar-me sobre os tamanhos, os preços e o processo de produção?' },
  { name: 'Canecas', icon: 'coffee', desc: 'Mensagens e imagens que ficam.', msg: 'Olá, Gráfica M! Tenho interesse em canecas personalizadas. Gostaria de receber informações sobre os modelos e preços.' },
  { name: 'Chaveiros e brindes', icon: 'gift', desc: 'Lembranças para clientes e convidados.' },
  { name: 'Vestuário profissional', icon: 'shirt', desc: 'Coletes e uniformes personalizados.' },
  { name: 'Cartões PVC', icon: 'card', desc: 'Passes e cartões de identificação.' },
  { name: 'Materiais promocionais', icon: 'gift', desc: 'Tudo para promover a tua marca.' },
].map((p) => ({ price: 'Preço sob consulta', ...p }));
export const promotions = [
  { name: 'Lona', price: '4.000 Kz', unit: 'por metro', note: '' },
  { name: 'T-shirts personalizadas', price: '2.500 Kz', unit: '', note: '' },
  { name: 'Chapéus/bonés', price: '2.500 Kz', unit: '', note: '' },
  { name: 'Quadro digital A4', price: '5.500 Kz', unit: '', note: '' },
  { name: 'Quadro digital A3', price: '9.500 Kz', unit: '', note: '' },
];
export const portfolioFilters = ['Todos', 'T-shirts e vestuário', 'Quadros digitais', 'Lonas e panfletos', 'Canecas e brindes', 'Cartões e documentos', 'Publicidade e sinalização'];
// Substitua "image" por ficheiros reais em src/assets/ (ex.: import foto from '../assets/tshirt1.jpg').
export const portfolio = portfolioFilters.slice(1).flatMap((cat) => [1, 2].map((n) => ({ id: `${cat}-${n}`, title: `${cat} — modelo ${n}`, category: cat, image: null })));
export const whyUs = ['Diversidade de serviços gráficos', 'Personalização de acordo com as necessidades do cliente', 'Soluções para uso pessoal, empresarial e promocional', 'Atendimento directo pelo WhatsApp', 'Facilidade para solicitar orçamentos'];
