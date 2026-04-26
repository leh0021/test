import { ShoppingBag, User, ArrowRight, Plus } from 'lucide-react';
import { motion } from 'motion/react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgo-iL58pJ7k79B-e7JeA8uZRvM9FdRCVH3tI1s5_i4bJBzRc8j9onOXAr8VbX7AhseqYVPMzKrYpQZe7Kn_GU19PJX70Fkxz4jXaQZbxD0GiJyyMIxa4sdBrCf7UChokuljutE7BnZcGj4krMGbn_NRQoa6lv3xIl_yiDx_ykLeGwPi3bJgluux0tGOqCOwKZJiJ8BLNucE3Jn-jTYwO642Ni8sVaBMM2xArBeNCqwyODDSeHgBHPZELtiJi3bBLrHBu_5yD-nCP1",
  livingRoom: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwLboL15_QSXncxSLZyKVZ5cVrnp0OpG_oDJCTNu8lBghu8-fE5RM7yU8Jro3dCPd9rRj84WGQTOl1nV4wJ4_mWr0vbQafvDoX9jyK7Ug8HdzqoZqfgDMU4hxd4GyC3rJgaWxbiyBmX2UD6XaLe5AJI4qs9f0f6z8jXAVmZLWTopj4aSq04mm3wv4m_F1tlaneTfKy82FnJGIRpW1S-DBiTlZV-c4w54hqFMLoEUo-ikau59uvJgxnHySsFA_TJU4MsWzI0Pb7tM-n",
  dining: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3JNpcTwO56z3kC_epTUhUI7ozQRNaliDALuVMpY6is7xWujDvX6Z8WxG8PDvrrPzAL4h7wnhrQo2Zlb8lu9Wi3OHxRWgVcCql9lbMCDkl4mJGQtpEWyIs-CyxtD2xE1Q5PrSrzHfsNqGfWM_msjYQVmWGwy_-sFTPloEy62V8uW7t-fBwe_tAPYxuuHcouvCVPmQePvjhr6KINwe7IMCJrO50QFBzIXULxAAWnTcAI48ifAkkxYxusS3Vvbqs_gW7lS4ymSCcAfzH",
  bedroom: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf9n0_8OX5k25BTgXbn4tsd7WNI0fcHNwpPFeCb6xhrf4SuKh2JFTuIGOOk23NcwOYK7B5vZROg_xSqqPL2mYEFPnwFwIPm3RBQ6xGsEVQQ43G47OTS-Wo9vACuICb6RMuTuZ2itQgiGNctT_WZM-ktAPIaRcG5fsEiNxlj_aF9ILDXjxO1FVneQmM1ewHEonXL2mgZNvWd4kidiS5ucu2w5i5dkVOfDRyk3J04-fanEwT0GdUGyYJO0A5u83eLT9yb_x3MgxDRB_U",
  lighting: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxSrubJ6QXm4hFhrltKJTayKMIvnQIcQocoU1K6SpneN3hA6J2lRZNHJmzlKjODIS5gQ2kepc7qOGbNgUtp3vlx8ITXabdfSUFndzzRIv5y03YvhsfjQyQB0pdkHBak8lZa3JGoI-iik8Tm48bRnvrD2ABHDDO7HZHZJrCe5oVSfeCmxrCdQiAFoIvnq8s-l1EK5oiVlHRwQ73TDZKhsEwe5jblaI3MXtqQw1qW3KUgiYYRHEVp0V3yRGoygIQnphv95eaQkDT1roH",
  hansChair: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGEbQzDM_nipiT_o0wPpkEm5-_OnUCw2lyXYY5Yzsv7fx2tnLn8NTmuIUz070_EHs0V_eOTomq1q7dO6MxRZtfsedhQw3JDIjkRNNRqPTaq4U7K4h8j0OXtlOZF-90NJ83D7fDlYmRGPu87m97nKq4AbthKfo9Uv11jYR8EpFpkDFu5W8ggOoQTS888U106UEeTSnl2JT4sSWbXnoIdj53qZK1-Rvu05NOXgtsdXVwNJ50CtFzfm5rwWpU1Uje7DlhOygksHdj1aQx",
  artichokeLamp: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvFTRfx3d22Duv46YaDVgFtQt2sqbtbqHIhIUIEXE6ajEz-gBeIUv_-xcDT5mkLWlWgRnqLj7FWpgO7q9tPxgCH6eBI3noUFL5N1dadU0ana8VCrmfhD6af7exOt-Je4IQ0FII_df5AbXqcRcixBu5zOU8si55hkHKCLN8VHuaZ79z6xcdk6m_iaKDfmtVGckVFXAy7AvAr4vZLivql30NG3N-BJVvInsdtnnEpuPmiEzSP7KJqts5ZyQGejMD1-NAU-dX_lM5RKvF",
  teakSideboard: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbLMQ-rnP7_QEPPVH-WGfuy03XQnHrirFFUszak-kZ_0f0CKYR69FYHQZ4iZ0n2KIlVpnF_GcbCxHe_dglOEvxJOewbZDtloQ1yJvyV3589Yw24pWDtxjiV1nrIzl9ZMNmFF0EDcZhM8VMzl6QKuv3Kb_x0YMuxqP2rjh0Og9KLqUR7fM42CrQYhUFyrCtB-OrZwXzwRKl_w3qk38KfY2Kd-BOuUzpV-TbCRmvc9W80FXtXmbMfjC9vkQT-vQXM5v2YQNZYE3as9c5",
  nomaSofa: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrHVtk-6RoKXc_1FPSaEEWw2hIQu7Fa7GpCSQYR06TGt_RRzTajtdgt9UkKVuqQqtBBjdfC1y8qUpthLuEk0NJkHCIIWx4GzTEh0Cv0JBxj0SACVJtIcc8ok0kgVLxUDRc9edW4BlwJiBR6l4Kz4d5CAskLZ_g4rzCuxaL_w9ktsmT5Uv3KLi9GQk3z6_Ydl4e2VQHUMyp3Mqll9IhfhTpSCbGCWrfIbqgRqdnWsttGQndrbESCfUGmX92W1LK8vQ_YIwIkvDrgBMq"
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Spaces />
        <CuratedSelection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav id="navbar" className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-10 py-6">
        <div className="text-2xl font-bold tracking-tighter text-on-background cursor-pointer hover:opacity-70 transition-opacity">
          Dane Design
        </div>
        
        <div className="hidden md:flex items-center space-x-10">
          <NavLink label="Living Room" />
          <NavLink label="Dining" />
          <NavLink label="Bedroom" />
          <NavLink label="New Arrivals" active />
        </div>

        <div className="flex items-center space-x-6 text-primary">
          <button id="bag-button" className="hover:opacity-70 transition-opacity cursor-pointer">
            <ShoppingBag size={20} />
          </button>
          <button id="profile-button" className="hover:opacity-70 transition-opacity cursor-pointer">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`label-caps tracking-widest ${
        active 
          ? "text-primary border-b border-primary pb-1" 
          : "text-on-surface-variant hover:text-on-background transition-colors"
      }`}
    >
      {label}
    </a>
  );
}

function Hero() {
  return (
    <section id="hero" className="max-w-7xl mx-auto px-4 md:px-10 mt-4 mb-section">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[716px] rounded-lg overflow-hidden flex items-center justify-center text-center bg-surface-container-low"
      >
        <img 
          src={IMAGES.hero} 
          alt="Curated Room Scene" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="headline-xl text-white mb-6 drop-shadow-sm">Curated Comfort</h1>
          <p className="body-lg text-white/90 mb-10 drop-shadow-sm">
            Discover pieces that blend timeless Scandinavian functionalism with warm, tactile materials for your modern home.
          </p>
          <button className="bg-primary hover:bg-primary-container text-on-primary label-caps px-8 py-4 tracking-widest transition-all rounded shadow-md active:scale-95">
            Explore Collections
          </button>
        </div>
      </motion.div>
    </section>
  );
}

function Spaces() {
  const categories = [
    { title: "Living Room", img: IMAGES.livingRoom },
    { title: "Dining", img: IMAGES.dining },
    { title: "Bedroom", img: IMAGES.bedroom },
    { title: "Lighting", img: IMAGES.lighting },
  ];

  return (
    <section id="spaces" className="max-w-7xl mx-auto px-4 md:px-10 mb-section">
      <div className="flex justify-between items-end mb-12">
        <h2 className="headline-lg">Spaces</h2>
        <a href="#" className="label-caps text-primary flex items-center group">
          View All <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {categories.map((cat, idx) => (
          <motion.a 
            key={cat.title}
            href="#"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative h-[380px] rounded-lg overflow-hidden bg-surface-container-low"
          >
            <img 
              src={cat.img} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <h3 className="absolute bottom-6 left-6 headline-md text-white">{cat.title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function CuratedSelection() {
  return (
    <section id="selection" className="max-w-7xl mx-auto px-4 md:px-10 mb-section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="headline-lg mb-4">Curated Selection</h2>
        <p className="body-md text-on-surface-variant">
          Exceptional pieces handpicked for their material quality, honest construction, and enduring aesthetic appeal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {/* Featured Card */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-lg overflow-hidden bg-surface-container-low min-h-[500px]">
          <img 
            src={IMAGES.hansChair} 
            alt="Hans Chair" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-white via-white/20 to-transparent">
             <div className="mt-20">
               <span className="inline-block px-3 py-1 mb-3 border border-outline rounded-full label-caps text-[10px]">Iconic</span>
               <h3 className="headline-md mb-1">Hans Chair</h3>
               <p className="body-sm text-on-surface-variant mb-4 max-w-sm">
                 Solid walnut frame with hand-woven paper cord seat. A masterpiece of functionalist comfort.
               </p>
               <span className="headline-md text-primary">$1,250</span>
             </div>
          </div>
        </div>

        {/* Small Cards */}
        <ProductCard 
          img={IMAGES.artichokeLamp} 
          title="Artichoke Lamp" 
          desc="Brushed copper leaves provide glare-free ambient illumination." 
          price="890" 
        />
        <ProductCard 
          img={IMAGES.teakSideboard} 
          title="Teak Sideboard" 
          desc="Sleek storage solution featuring sliding tambour doors." 
          price="2,100" 
        />

        {/* Wide Horizontal Card */}
        <div className="md:col-span-3 flex flex-col md:flex-row bg-white border border-outline-variant rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300">
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden bg-surface-container-low">
            <img 
               src={IMAGES.nomaSofa} 
               alt="Noma Modular Sofa" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <span className="inline-block px-3 py-1 mb-4 border border-outline rounded-full label-caps text-[10px] w-max">New Arrival</span>
            <h3 className="headline-md mb-2">Noma Modular Sofa</h3>
            <p className="body-md text-on-surface-variant mb-8">
              Upholstered in tactile bouclé, offering deep seating and endless configuration possibilities for modern lounging.
            </p>
            <div className="flex items-center justify-between">
              <span className="headline-md text-primary">$3,400</span>
              <button className="p-3 border border-outline rounded-full hover:bg-surface-container transition-colors group/btn">
                <Plus size={20} className="group-hover/btn:rotate-90 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="label-caps border border-outline px-10 py-4 hover:bg-surface-container transition-colors rounded">
          Load More Products
        </button>
      </div>
    </section>
  );
}

function ProductCard({ img, title, desc, price }: { img: string; title: string; desc: string; price: string }) {
  return (
    <div className="group flex flex-col bg-white border border-outline-variant rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-64 overflow-hidden bg-surface-container-low">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="body-lg font-medium mb-1">{title}</h3>
        <p className="body-sm text-on-surface-variant mb-4 flex-grow">{desc}</p>
        <span className="body-lg text-primary">${price}</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer" className="bg-surface-container-low border-t border-outline-variant py-16 px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-8 mb-8 md:mb-0">
          <FooterLink label="Sustainability" />
          <FooterLink label="Shipping" />
          <FooterLink label="Returns" />
          <FooterLink label="Showrooms" />
        </div>
        <div className="label-caps !text-[10px] text-on-surface-variant">
          © 2024 Dane Design. Scandinavian Functionalism.
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="label-caps !text-[10px] text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline">
      {label}
    </a>
  );
}
