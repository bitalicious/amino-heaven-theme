import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronRight, FlaskConical, Menu, Minus, Plus, ShieldCheck, ShoppingBag, Snowflake, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/amino-heaven-logo.jpeg.asset.json";
import vialImage from "@/assets/amino-heaven-vial-branded.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amino Heaven — US Warehouse Research Compounds" },
      { name: "description", content: "Shop laboratory-grade peptides in 10-vial kits with independent certificates of analysis and US warehouse dispatch." },
      { property: "og:title", content: "Amino Heaven — Research Compounds" },
      { property: "og:description", content: "Laboratory-grade peptides with batch-level testing and US warehouse dispatch." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const products = [
  { name: "Tirzepatide 10mg", family: "Tirzepatide", price: 80, bulk: 700, cap: "Yellow cap", dose: "10MG" },
  { name: "Reta 5mg", family: "Retatrutide", price: 80, bulk: 750, cap: "Silver cap", dose: "5MG" },
  { name: "BPC 157 / TB-500 Blend 20mg", family: "Blends", price: 200, bulk: 1950, cap: "Black cap", dose: "20MG" },
  { name: "CJC 1295 + Ipamorelin 10mg", family: "Blends", price: 140, bulk: 1300, cap: "Red cap", dose: "10MG" },
  { name: "GHK-CU 100mg", family: "Longevity", price: 85, bulk: 800, cap: "Blue cap", dose: "100MG" },
  { name: "SS31 10mg", family: "Longevity", price: 100, bulk: 950, cap: "Pink cap", dose: "10MG" },
];

const trustItems = [
  { icon: FlaskConical, title: "≥99% Purity", text: "HPLC & MS verified per batch" },
  { icon: ShieldCheck, title: "Third-Party COAs", text: "Independent lab reports published" },
  { icon: Snowflake, title: "US Warehouse", text: "Temperature-controlled handling" },
  { icon: Truck, title: "Free Shipping $600+", text: "Free on qualifying orders" },
];

function HelixBackdrop() {
  return (
    <div className="helix-field" aria-hidden="true">
      <svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice">
        <g className="helix-track">
          <path d="M-60 520C160 520 160 80 380 80S600 520 820 520s220-440 440-440" />
          <path d="M-60 80c220 0 220 440 440 440S600 80 820 80s220 440 440 440" />
          {Array.from({ length: 15 }, (_, i) => (
            <line key={i} x1={i * 92 - 60} y1={90 + ((i % 4) * 95)} x2={i * 92 + 60} y2={530 - ((i % 4) * 95)} />
          ))}
        </g>
        <g className="molecule-nodes">
          {[[105,145],[235,470],[390,120],[535,480],[690,155],[845,450],[1005,120],[1120,405]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="8" />)}
        </g>
      </svg>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [pack, setPack] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const packPrice = pack === 1 ? product.price : pack === 5 ? product.price * 4 : product.price * 7;
  return (
    <article className="product-card">
      <a href="#catalog" className="product-image"><img src={vialImage} alt={`${product.name} research vial`} /></a>
      <div className="product-copy">
        <div className="flex items-start justify-between gap-3">
          <h3>{product.name}</h3><span className="stock"><span />In Stock</span>
        </div>
        <p className="eyebrow mt-4">{product.family}</p>
        <div className="mt-2 flex items-baseline gap-1"><strong className="text-2xl">${product.price}</strong><span className="text-xs text-muted-foreground">/ kit</span></div>
        <p className="mt-1 text-xs text-muted-foreground">10 kits = ${product.bulk}</p>
        <div className="mt-3 flex justify-between text-xs"><span>{product.cap}</span><span>1 kit = 10 vials</span></div>
        <div className="pack-grid mt-4">
          {[1,5,10].map((count) => <button key={count} onClick={() => setPack(count)} className={pack === count ? "active" : ""}><b>{count} VIAL{count > 1 ? "S" : ""}</b><span>${count === 1 ? product.price : count === 5 ? product.price * 4 : product.price * 7}</span>{count > 1 && <em>Save {count === 5 ? 20 : 30}%</em>}</button>)}
        </div>
        <div className="mt-4 grid grid-cols-[104px_minmax(0,1fr)] gap-2">
          <div className="qty"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14}/></button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={14}/></button></div>
          <Button onClick={() => undefined}><ShoppingBag size={15}/>Add {product.dose}</Button>
        </div>
        <p className="mt-3 text-right text-xs font-semibold">Total: ${packPrice * quantity}</p>
      </div>
    </article>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="sale-ticker"><div>END OF SUMMER SALE • SAVE UP TO 30% OFF SITEWIDE • WITH ZELLE & CRYPTO • END OF SUMMER SALE • SAVE UP TO 30% OFF SITEWIDE</div></div>
      <header className="site-header">
        <a href="#top" className="brand"><img src={logoAsset.url} alt="Amino Heaven" /><span><b>AMINO HEAVEN</b><small>RESEARCH USE ONLY</small></span></a>
        <nav className="desktop-nav"><a href="#catalog">Shop</a><a href="#quality">Quality / COAs</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <div className="flex items-center gap-1"><Button variant="ghost" size="icon" aria-label="Shopping bag"><ShoppingBag size={19}/></Button><Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button></div>
        {menuOpen && <nav className="mobile-nav"><a href="#catalog" onClick={() => setMenuOpen(false)}>Shop</a><a href="#quality" onClick={() => setMenuOpen(false)}>Quality / COAs</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>}
      </header>

      <main id="top">
        <section className="hero-band">
          <HelixBackdrop />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">US Warehouse Stock</p>
              <h1>Research compounds you can actually verify</h1>
              <p>Amino Heaven supplies laboratory-grade peptides in 10-vial kits, backed by third-party certificates of analysis. Discover. Innovate. Elevate.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Button asChild><a href="#catalog">Browse the catalog <ChevronRight size={16}/></a></Button><Button asChild variant="outline"><a href="#quality">View COAs</a></Button></div>
              <p className="mt-5 text-xs font-medium text-muted-foreground">For laboratory research use only—not for human consumption.</p>
            </div>
            <div className="hero-product"><div className="halo-ring"/><img src={vialImage} alt="Amino Heaven laboratory research vial"/><span>VERIFIED<br/>RESEARCH<br/>MATERIAL</span></div>
          </div>
        </section>

        <section className="trust-strip">
          {trustItems.map(({ icon: Icon, title, text }) => <div key={title}><Icon size={23}/><span><b>{title}</b><small>{text}</small></span></div>)}
        </section>

        <section id="catalog" className="content-section">
          <div className="section-heading"><div><p className="eyebrow">Curated compounds</p><h2>Featured compounds</h2><p>Best-moving kits from the US warehouse this week.</p></div><a href="#catalog">View all <ChevronRight size={16}/></a></div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product}/>)}</div>
        </section>

        <section id="quality" className="quality-band">
          <HelixBackdrop />
          <div className="quality-inner"><div><p className="eyebrow">Documented at every step</p><h2>Quality assurance,<br/>end to end</h2></div><div className="quality-points"><article><span>01</span><h3>Batch-level testing</h3><p>Every lot is analysed by an independent laboratory for identity, purity and endotoxin levels before release.</p></article><article><span>02</span><h3>Cold-chain handling</h3><p>Lyophilised vials are stored and shipped with temperature-controlled packaging from our US facility.</p></article></div></div>
        </section>
      </main>

      <footer id="contact"><div className="footer-grid"><div className="footer-brand"><b>AMINO HEAVEN</b><p>Discover. Innovate. Elevate.</p><p>Research support available Monday–Friday.</p></div><div><h3>Quick links</h3><a href="#catalog">Shop Catalog</a><a href="#quality">Quality Control / COAs</a><a href="#top">Track Order</a><a href="#about">About Us</a></div><div><h3>Newsletter</h3><p>Restock alerts, new COAs and promo kits.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" aria-label="Email address" placeholder="Email address"/><Button type="submit">Subscribe</Button></form></div><div><h3>Compliance</h3><p>For laboratory research use only—not for human consumption.</p><p>Scam warning: anyone who contacts you first to solicit an order is a scammer.</p></div></div><div className="legal"><span>© 2026 Amino Heaven. All rights reserved.</span><span>RESEARCH USE ONLY · NOT FOR HUMAN OR ANIMAL CONSUMPTION</span></div></footer>
    </div>
  );
}
