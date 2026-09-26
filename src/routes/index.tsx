import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, FlaskConical, Menu, Minus, Plus, ShieldCheck, ShoppingBag, Truck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/amino-heaven-logo.jpeg.asset.json";
import vialImage from "@/assets/amino-heaven-vial-branded.jpg";
import bpcTbImage from "@/assets/products/BPC157_TB500_5mg_5mg.webp.asset.json";
import bpcImage from "@/assets/products/BPC-157_10mg.webp.asset.json";
import cjcIpaImage from "@/assets/products/CJC1295NoDACIPAMORELIN5mg_5mg.webp.asset.json";
import cjcImage from "@/assets/products/CJC1295NoDAC.webp.asset.json";
import glp1Image from "@/assets/products/GLP1-SM10mg.webp.asset.json";
import glp2TenImage from "@/assets/products/GLP2-TR10mg.webp.asset.json";
import glp2SixtyImage from "@/assets/products/GLP2-TR60mg.webp.asset.json";
import glp3Image from "@/assets/products/GLP3-RT10mg.webp.asset.json";
import ghkImage from "@/assets/products/GHK-CU100mg.webp.asset.json";
import glowImage from "@/assets/products/Glow70mg.webp.asset.json";
import ipamorelinImage from "@/assets/products/Ipamorelin10mg.webp.asset.json";
import melanotanImage from "@/assets/products/Melanotanll10mg.webp.asset.json";
import motsCImage from "@/assets/products/motsc40mg.webp.asset.json";
import nadImage from "@/assets/products/Nad_1000mg.webp.asset.json";
import pt141Image from "@/assets/products/pt14110mg.webp.asset.json";
import sermorelinImage from "@/assets/products/SERMORELIN5mg.webp.asset.json";
import tb500Image from "@/assets/products/TB-50010mg.webp.asset.json";

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
  { name: "BPC + TB 10mg", price: 49.95, dose: "10MG", image: bpcTbImage.url },
  { name: "BPC 157 10mg", price: 49.95, dose: "10MG", image: bpcImage.url },
  { name: "CJC + Ipa 10mg", price: 49.95, dose: "10MG", image: cjcIpaImage.url },
  { name: "CJC(noDAC) 10mg", price: 49.95, dose: "10MG", image: cjcImage.url },
  { name: "GLP1-SM 10mg", price: 49.95, dose: "10MG", image: glp1Image.url },
  { name: "GLP2-TR 10mg", price: 49.95, dose: "10MG", image: glp2TenImage.url },
  { name: "GLP2-TR 60mg", price: 199.95, dose: "60MG", image: glp2SixtyImage.url },
  { name: "GLP3-RT 10mg", price: 69.95, dose: "10MG", image: glp3Image.url },
  { name: "GLP3-RT 60mg", price: 249.95, dose: "60MG", image: glp3Image.url },
  { name: "GHK-cu 100mg", price: 44.95, dose: "100MG", image: ghkImage.url },
  { name: "Glow 70mg", price: 99.95, dose: "70MG", image: glowImage.url },
  { name: "Ipamorelin 10mg", price: 49.95, dose: "10MG", image: ipamorelinImage.url },
  { name: "KLOW 80mg", price: 109.95, dose: "80MG", image: vialImage },
  { name: "KPV 10mg", price: 45.95, dose: "10MG", image: vialImage },
  { name: "Melanotan ll 10mg", price: 39.95, dose: "10MG", image: melanotanImage.url },
  { name: "Mots-c 40mg", price: 134.95, dose: "40MG", image: motsCImage.url },
  { name: "NAD+ 1000mg", price: 64.95, dose: "1000MG", image: nadImage.url },
  { name: "PT-141 10mg", price: 39.95, dose: "10MG", image: pt141Image.url },
  { name: "Sermorelin 5mg", price: 39.95, dose: "5MG", image: sermorelinImage.url },
  { name: "TB-500 10mg", price: 39.95, dose: "10MG", image: tb500Image.url },
  { name: "Tesamorelin 10mg", price: 59.95, dose: "10MG", image: vialImage },
];

const trustItems = [
  { icon: FlaskConical, title: "≥99% Purity", text: "HPLC & MS verified per batch" },
  { icon: ShieldCheck, title: "Third-Party COAs", text: "Independent lab reports published" },
  { icon: Truck, title: "Ships same day if ordered before 1 PM PST", text: "Prompt order processing" },
];

const listPrice = (price: number) => Math.round(price * 1.3 * 100) / 100;
const tierPrice = (unitPrice: number, count: number) => Math.round(unitPrice * count * (count === 5 ? 0.95 : count === 10 ? 0.9 : 1) * 100) / 100;
const formatPrice = (price: number) => price.toFixed(2);

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
  const packPrice = tierPrice(product.price, pack);
  const tenVialPrice = tierPrice(product.price, 10);
  return (
    <article className="product-card">
      <a href="#catalog" className="product-image"><img src={product.image} alt={`${product.name} research vial`} /></a>
      <div className="product-copy">
        <div className="flex items-start justify-between gap-3">
          <h3>{product.name}</h3><span className="stock"><span />In Stock</span>
        </div>
        <p className="eyebrow mt-4">Research compound</p>
        <div className="price-line mt-2"><del>${formatPrice(listPrice(product.price))}</del><strong>${formatPrice(product.price)}</strong><span>/ vial</span></div>
        <p className="bulk-price mt-1"><span>10 vials = </span><del>${formatPrice(listPrice(tenVialPrice))}</del> <strong>${formatPrice(tenVialPrice)}</strong></p>
        <div className="pack-grid mt-4">
          {[1,5,10].map((count) => {
            const sellingPrice = tierPrice(product.price, count);
            return <button type="button" key={count} onClick={() => setPack(count)} className={pack === count ? "active" : ""}><b>{count} VIAL{count > 1 ? "S" : ""}</b><span><del>${formatPrice(listPrice(sellingPrice))}</del> ${formatPrice(sellingPrice)}</span>{count > 1 && <em>Save {count === 5 ? 5 : 10}%</em>}</button>;
          })}
        </div>
        <div className="mt-4 grid grid-cols-[104px_minmax(0,1fr)] gap-2">
          <div className="qty"><button aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14}/></button><span>{quantity}</span><button aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={14}/></button></div>
          <Button onClick={() => undefined}><ShoppingBag size={15}/>Add {product.dose}</Button>
        </div>
        <p className="mt-3 text-right text-xs font-semibold">Total: ${formatPrice(packPrice * quantity)}</p>
      </div>
    </article>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="sale-ticker"><div>Fall Sale 30% Off Sitewide - No Code Needed</div></div>
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
