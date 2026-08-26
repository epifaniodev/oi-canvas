import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Irajá Restaurante | Moqueca Capixaba em Colatina" },
    { name: "description", content: "A melhor moqueca capixaba, preparada com qualidade em Colatina, Espírito Santo." },
    { property: "og:title", content: "Irajá Restaurante" },
    { property: "og:description", content: "A melhor moqueca capixaba em Colatina." },
    { property: "og:image", content: "/og.png" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const slides = [
  { image: "/moqueca-01.png", eyebrow: "Irajá Restaurante", title: "A melhor moqueca capixaba", copy: "Sabor, tradição e ingredientes selecionados em cada panela." },
  { image: "/moqueca-02.png", eyebrow: "Nosso objetivo", title: "Qualidade sempre", copy: "Nosso objetivo é sempre manter a qualidade, do preparo até a sua mesa." },
  { image: "/moqueca-03.png", eyebrow: "Colatina · Espírito Santo", title: "Venha saborear", copy: "Uma experiência capixaba feita para reunir família e amigos." },
];

function Index() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) return;
    const timer = window.setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [menuOpen]);
  return <main className="site-shell">
    <header className="topbar"><button className="menu-trigger" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><span/><span/><span/><b>Menu</b></button><img className="header-logo" src="/iraja-logo.png" alt="Irajá Restaurante"/><a className="reserve-link" href="#reservas">Reservas <span>↗</span></a></header>
    <section className="hero" aria-roledescription="carrossel">
      {slides.map((slide,index) => <article key={slide.image} className={`slide ${index===current?"is-active":""}`} aria-hidden={index!==current}><div className="slide-image" style={{backgroundImage:`url(${slide.image})`}}/><div className="veil"/><div className="hero-content"><p>{slide.eyebrow}</p><h1>{slide.title}</h1><div className="copy-row"><span className="line"/><p>{slide.copy}</p></div></div></article>)}
      <nav className="slide-nav" aria-label="Escolher cena">{slides.map((slide,index)=><button key={slide.title} className={index===current?"is-active":""} onClick={()=>setCurrent(index)} aria-label={`Cena ${index+1}`}><span/></button>)}</nav>
      <button className="scroll-cue" onClick={()=>document.querySelector("#sobre")?.scrollIntoView({behavior:"smooth"})}><span>Descubra</span><i>↓</i></button>
    </section>
    <section className="about" id="sobre"><p className="section-kicker">Tradição capixaba em Colatina</p><h2>Qualidade em<br/>cada panela.</h2><div className="about-grid"><p>Nosso objetivo é sempre manter a qualidade. Da escolha dos ingredientes ao tempero servido à mesa, cuidamos de cada detalhe para oferecer a melhor moqueca capixaba.</p><a href="#reservas">Faça sua reserva <span>→</span></a></div></section>
    <section className="ambience" id="ambiente"><div className="ambience-heading"><p className="section-kicker">Nosso ambiente</p><h2>Elegância para<br/>todos os momentos.</h2><p>Uma casa preparada para almoços em família, encontros especiais e celebrações.</p></div><div className="ambience-grid"><figure className="ambience-tall"><img src="/ambiente-01.png" alt="Salão do Irajá preparado para uma celebração" loading="lazy"/></figure><figure><img src="/ambiente-02.png" alt="Mesa para duas pessoas no restaurante Irajá" loading="lazy"/></figure><figure><img src="/ambiente-03.png" alt="Mesa elegante no ambiente interno do Irajá" loading="lazy"/></figure><figure className="ambience-wide"><img src="/ambiente-04.png" alt="Vista do salão do Restaurante Irajá" loading="lazy"/></figure></div></section>
    <section className="reservation" id="reservas"><div className="reservation-intro"><p className="section-kicker">Reserve sua mesa</p><h2>Seu momento<br/>começa aqui.</h2><p>Preencha os dados para simular sua reserva. Este formulário é apenas demonstrativo e não envia informações.</p></div><form className="reservation-form" onSubmit={(event)=>event.preventDefault()}><label>Nome<input type="text" placeholder="Seu nome"/></label><label>Telefone<input type="tel" placeholder="(27) 00000-0000"/></label><div className="form-row"><label>Data<input type="date"/></label><label>Horário<input type="time"/></label></div><label>Pessoas<select defaultValue="2"><option value="1">1 pessoa</option><option value="2">2 pessoas</option><option value="3">3 pessoas</option><option value="4">4 pessoas</option><option value="5">5 pessoas</option><option value="6">6 ou mais</option></select></label><label>Observações<textarea placeholder="Alguma preferência?" rows={3}/></label><button type="submit">Solicitar reserva <span>→</span></button><small>Formulário demonstrativo — nenhuma informação será enviada.</small></form></section>
    <footer><img src="/iraja-logo.png" alt="Irajá Restaurante"/><div><small>Endereço</small><p>Praça Izidoro Binda, nº 136<br/>Vila Nova · Colatina, ES<br/>CEP 29702-040</p></div><div><small>Informações e pedidos</small><p><a href="tel:+552737211062">(27) 3721-1062</a></p></div><div><small>Especialidade</small><p>A melhor moqueca capixaba 🍤</p></div><p className="copyright">© 2026 Irajá Restaurante · Colatina, ES</p></footer>
    <aside className={`menu-panel ${menuOpen?"is-open":""}`} aria-hidden={!menuOpen}><button onClick={()=>setMenuOpen(false)} aria-label="Fechar menu">Fechar <span>×</span></button><nav>{["Início","O restaurante","Moqueca","Reservas"].map((item,index)=><a key={item} href={index===0?"#":index===3?"#reservas":"#sobre"} onClick={()=>setMenuOpen(false)}><small>0{index+1}</small>{item}</a>)}</nav><p>Colatina · Espírito Santo</p></aside>
  </main>;
}
