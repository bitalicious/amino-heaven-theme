import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, FlaskConical, Menu, Minus, Plus, ShieldCheck, ShoppingBag, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/amino-heaven-logo.jpeg.asset.json";
import vialImage from "@/assets/amino-heaven-vial-branded.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amino Heaven — Analytical-Grade Research Peptides" },
      { name: "description", content: "Shop American-synthesized, analytical-grade research peptides with independent Certificates of Analysis from accredited U.S. laboratories." },
      { property: "og:title", content: "Amino Heaven — Research Compounds" },
      { property: "og:description", content: "American-synthesized research peptides with independent Certificates of Analysis from accredited U.S. laboratories." },
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
  { icon: Truck, title: "Ships same day if ordered before 1 PM PST", text: "Prompt order processing" },
];

const listPrice = (price: number) => Math.round(price * 1.3 * 100) / 100;
const formatPrice = (price: number) => Number.isInteger(price) ? price.toFixed(0) : price.toFixed(2);

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
        <div className="price-line mt-2"><del>${formatPrice(listPrice(product.price))}</del><strong>${formatPrice(product.price)}</strong><span>/ vial</span></div>
        <p className="bulk-price mt-1"><span>10 vials = </span><del>${formatPrice(listPrice(product.bulk))}</del> <strong>${formatPrice(product.bulk)}</strong></p>
        <div className="mt-3 flex justify-between text-xs"><span>{product.cap}</span><span>1 vial = 10 vials</span></div>
        <div className="pack-grid mt-4">
          {[1,5,10].map((count) => {
            const sellingPrice = count === 1 ? product.price : count === 5 ? product.price * 4 : product.price * 7;
            return <button key={count} onClick={() => setPack(count)} className={pack === count ? "active" : ""}><b>{count} VIAL{count > 1 ? "S" : ""}</b><span><del>${formatPrice(listPrice(sellingPrice))}</del> ${formatPrice(sellingPrice)}</span>{count > 1 && <em>Save {count === 5 ? 20 : 30}%</em>}</button>;
          })}
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
      <div className="sale-ticker"><div>Fall Sale 30% Sitewide - No Code Needed</div></div>
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
              <p className="eyebrow">Independent U.S. Lab Verification</p>
              <h1>Research compounds you can actually verify</h1>
              <p>Amino Heaven delivers American-synthesized, analytical-grade research peptides—each batch accompanied by an independent Certificate of Analysis from accredited U.S. laboratories. Explore. Discover. Pioneer.</p>
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
          <div className="section-heading"><div><p className="eyebrow">Curated compounds</p><h2>Featured compounds</h2><p>Best-moving vials available this week.</p></div><a href="#catalog">View all <ChevronRight size={16}/></a></div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.name} product={product}/>)}</div>
        </section>

        <section id="quality" className="quality-band">
          <HelixBackdrop />
          <div className="quality-inner"><div><p className="eyebrow">Documented at every step</p><h2>Quality you can verify</h2></div><div className="quality-points"><article><span>01</span><h3>Batch-level testing</h3><p>Every lot is analysed by an independent laboratory for identity, purity and endotoxin levels before release.</p></article></div></div>
        </section>
      </main>

      <footer id="contact">
        <div className="footer-grid"><div className="footer-brand"><b>AMINO HEAVEN</b><p>Discover. Innovate. Elevate.</p><p>Research support available Monday–Friday.</p><a href="mailto:hello@aminoheaven.com">hello@aminoheaven.com</a></div><div><h3>Quick links</h3><a href="#catalog">Shop Catalog</a><a href="#quality">Quality Control / COAs</a><a href="#top">Track Order</a><a href="#about">About Us</a></div><div><h3>Newsletter</h3><p>Restock alerts, new COAs and promo vials.</p><form onSubmit={(event) => event.preventDefault()}><input type="email" aria-label="Email address" placeholder="Email address"/><Button type="submit">Subscribe</Button></form></div><div><h3>Compliance</h3><p>For laboratory research use only—not for human consumption.</p><p>Scam warning: anyone who contacts you first to solicit an order is a scammer.</p></div></div>
        <div className="compliance-statement">
          <p>All products distributed through this platform are designated strictly for in vitro research, laboratory analysis, and development purposes. Under no circumstances are these compounds intended, formulated, or approved for human consumption, veterinary administration, or therapeutic application of any kind.</p>
          <p>Statements on this website have not been evaluated by the U.S. Food and Drug Administration. Neither the information presented nor the materials supplied are intended to diagnose, treat, cure, mitigate, or prevent any medical condition or disease.</p>
          <p>Amino Heaven operates solely as an independent biochemical reagent supplier. Amino Heaven is not a compounding pharmacy or chemical compounding facility as defined under Section 503A of the Federal Food, Drug, and Cosmetic Act (FD&amp;C Act), nor an outsourcing facility as defined under Section 503B of the FD&amp;C Act. All inventory is cataloged and sold exclusively for controlled laboratory, analytical, and academic research use by qualified personnel.</p>
        </div>
        <div className="legal"><span>© 2026 Amino Heaven. All rights reserved.</span><span>RESEARCH USE ONLY · NOT FOR HUMAN OR ANIMAL CONSUMPTION</span></div>
      </footer>
    </div>
  );
}
