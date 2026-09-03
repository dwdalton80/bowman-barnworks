import { type FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, ChevronDown, Facebook, Hammer, Mail, MapPin, Menu, Ruler, ShieldCheck, X } from "lucide-react";

const facebookUrl = "https://www.facebook.com/people/Bowman-Barnworks/61593504673226/";

const projects = [
  {
    title: "Silo Porch Retreat",
    type: "Adaptive Reuse",
    image: "/images/gallery-silo-porch.jpg",
    description: "A weathered grain silo reimagined as a shaded porch made for slow Oklahoma afternoons.",
  },
  {
    title: "Stone Hearth",
    type: "Interior Craftsmanship",
    image: "/images/gallery-stone-hearth.jpg",
    description: "A floor-to-ceiling stone fireplace that gives the open living space a strong, natural anchor.",
  },
  {
    title: "Covered Back Porch",
    type: "Outdoor Living",
    image: "/images/gallery-covered-porch.jpg",
    description: "A generous covered porch with warm timber overhead and an uninterrupted view of the land.",
  },
  {
    title: "Windmill After Dark",
    type: "Landmark Structures",
    image: "/images/gallery-windmill-dusk.jpg",
    description: "A restored windmill becomes a striking evening landmark beside the finished homestead.",
  },
  {
    title: "The Red Barn",
    type: "Custom Structures",
    image: "/images/gallery-red-barn.jpg",
    description: "A practical custom barn with deep covered bays, classic lines, and plenty of everyday utility.",
  },
  {
    title: "Curved Staircase",
    type: "Finish Carpentry",
    image: "/images/gallery-curved-staircase.jpg",
    description: "Hand-finished timber and dark ironwork shape a graceful staircase built around the room.",
  },
  {
    title: "Barn Entry Details",
    type: "Exterior Craftsmanship",
    image: "/images/gallery-barn-entry.jpg",
    description: "Stone, board-and-batten siding, and handcrafted awnings bring lasting character to the entry.",
  },
  {
    title: "Fire Tower Platform",
    type: "Timber Structures",
    image: "/images/gallery-fire-tower.jpg",
    description: "A tall timber observation platform engineered for open views and a true sense of adventure.",
  },
  {
    title: "Built for the Land",
    type: "Bowman Barnworks",
    image: "/images/gallery-land-view.jpg",
    description: "A bird’s-eye view of structures designed to sit naturally within the surrounding property.",
  },
];

const services = [
  { number: "01", title: "Rustic Structures", text: "Barns, shelters, workshops, and outbuildings made to feel at home on your land." },
  { number: "02", title: "Custom Carpentry", text: "Thoughtful woodwork and one-off details shaped around the way you live and work." },
  { number: "03", title: "Home Improvement", text: "Practical upgrades with a durable, considered finish that stands up to real life." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [inquiry, setInquiry] = useState({ name: "", email: "", phone: "", projectType: "Barn or structure", details: "" });
  const [emailDraftReady, setEmailDraftReady] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInquirySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${inquiry.name || "website visitor"}`);
    const body = encodeURIComponent(`Name: ${inquiry.name}
Email: ${inquiry.email}
Phone: ${inquiry.phone}
Project type: ${inquiry.projectType}

Project details:
${inquiry.details}`);
    setEmailDraftReady(true);
    window.setTimeout(() => {
      window.location.href = `mailto:bartbowman@gmail.com?subject=${subject}&body=${body}`;
    }, 120);
  };

  return (
    <main className="min-h-screen bg-[#f5ead2] text-[#24140f] selection:bg-[#b85a20] selection:text-[#1c100b]">
      <header className="absolute inset-x-0 top-0 z-40 text-[#fff3d8]">
        <div className="container flex items-center justify-between border-b border-white/20 py-5">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3 text-left" aria-label="Bowman Barnworks home">
            <img src="/images/bowman-logo.png" alt="Bowman Barnworks logo" className="h-12 w-12 rounded-full object-cover" />
            <span className="brand-condensed hidden text-[12px] font-semibold uppercase tracking-[0.26em] sm:block">Bowman<br />Barnworks</span>
          </button>
          <nav className="brand-condensed hidden items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.22em] md:flex">
            <button onClick={() => scrollTo("work")} className="transition-colors hover:text-[#e3a14c]">Our work</button>
            <button onClick={() => scrollTo("approach")} className="transition-colors hover:text-[#e3a14c]">Our approach</button>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/40 px-5 py-3 transition hover:border-[#e3a14c] hover:bg-[#e3a14c] hover:text-[#24140f]">Start a project <ArrowUpRight className="ml-1 inline h-3 w-3" /></button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="border-b border-white/15 bg-[#24140f] px-6 py-6 md:hidden"><div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.16em]"><button onClick={() => scrollTo("work")}>Our work</button><button onClick={() => scrollTo("approach")}>Our approach</button><button onClick={() => scrollTo("contact")}>Start a project</button></div></div>}
      </header>

      <section id="top" className="relative flex min-h-[730px] items-end overflow-hidden bg-[#24140f] pb-20 pt-36 lg:min-h-[820px] lg:pb-28">
        <img src="/images/bowman-sunset-windmill-hero.png" alt="Bowman Barnworks windmill, gazebo, and homestead at sunset" className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b0e09]/94 via-[#1b0e09]/58 to-[#1b0e09]/12" />
        <div className="absolute inset-0 opacity-[0.09] mix-blend-screen" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\'0 0 180 180\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.75\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.55\'/%3E%3C/svg%3E')" }} />
        <div className="container relative z-10 grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div className="max-w-3xl animate-[fadeUp_.7s_ease-out_both]">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#e3a14c]"><span className="h-px w-10 bg-[#e3a14c]" /> Calera, Oklahoma</p>
            <h1 className="font-display text-6xl leading-[.92] tracking-[-0.04em] text-[#fff3d8] sm:text-7xl lg:text-[7.7rem]">Built with<br /><em className="font-display text-[#e3a14c]">purpose.</em></h1>
            <p className="story-copy mt-8 max-w-md text-xl leading-relaxed text-[#eedbbd]">Rustic structures and honest craftsmanship for the places that matter most.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><button onClick={() => scrollTo("contact")} className="rounded-full bg-[#e3a14c] px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#24140f] transition hover:-translate-y-1 hover:bg-[#f2be6b]">Let’s build something <ArrowUpRight className="ml-2 inline h-4 w-4" /></button><button onClick={() => scrollTo("work")} className="px-3 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition hover:text-white">Explore the work ↓</button></div>
          </div>
          <div className="hidden justify-self-end border-l border-white/30 pl-7 text-sm leading-relaxed text-[#e0c7aa] lg:block lg:max-w-[245px]"><span className="mb-4 block text-2xl text-[#e3a14c]">“</span><p>We believe the best buildings don’t just occupy land — they belong to it.</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e3a14c]">— The Bowman way</p></div>
        </div>
      </section>

      <div className="heritage-strip border-y border-[#e3a14c]/25 py-6 text-[#fff3d8]">
        <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="brand-condensed flex flex-wrap items-center justify-center gap-4 text-sm font-medium uppercase tracking-[.34em] text-[#e9d3b4] sm:gap-7"><span>Wood</span><span className="text-[#e3a14c]">|</span><span>Steel</span><span className="text-[#e3a14c]">|</span><span>Heritage</span><span className="text-[#e3a14c]">|</span><span>Home</span></div>
          <div className="brand-script -rotate-2 text-4xl text-[#f2be6b] sm:text-5xl">Built to Last</div>
        </div>
      </div>

      <section id="approach" className="border-b border-[#d8c3a0] bg-[#f5ead2] py-24 lg:py-32"><div className="container grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24"><div><p className="eyebrow">The Bowman way</p><h2 className="section-title mt-5 max-w-md">Good work<br /><em>holds up.</em></h2></div><div className="max-w-2xl"><p className="story-copy text-2xl leading-snug text-[#4c3427] sm:text-3xl">At Bowman Barnworks, we build with the kind of care you can see in the grain.</p><p className="story-copy mt-7 max-w-xl text-lg leading-8 text-[#705342]">From a working barn to a one-of-a-kind backyard retreat, every project starts with a good conversation and ends with something made to last. We’re a small, hands-on construction and home improvement company serving Calera and the surrounding Oklahoma countryside.</p><div className="mt-10 grid grid-cols-2 gap-7 border-t border-[#d8c3a0] pt-7 sm:grid-cols-3"><div><div className="font-display text-4xl text-[#9a3f1b]">01</div><p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-[#705342]">Honest materials</p></div><div><div className="font-display text-4xl text-[#9a3f1b]">02</div><p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-[#705342]">Thoughtful details</p></div><div><div className="font-display text-4xl text-[#9a3f1b]">03</div><p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-[#705342]">Built to endure</p></div></div></div></div></section>

      <section id="work" className="wood-panel py-24 text-[#fff3d8] lg:py-32"><div className="container"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow text-[#e3a14c]">Selected work</p><h2 className="section-title mt-5 text-[#fff3d8]">Made for<br /><em className="text-[#e3a14c]">real life.</em></h2></div><a href={facebookUrl} target="_blank" rel="noreferrer" className="brand-condensed hidden items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#e3a14c] transition hover:text-white sm:flex">More on Facebook <ArrowUpRight className="h-4 w-4" /></a></div><div className="grid gap-5 md:grid-cols-3">{projects.map((project, index) => <a href={facebookUrl} target="_blank" rel="noreferrer" key={project.title} aria-label={`${project.title}: ${project.description}`} className={`group relative overflow-hidden border border-[#e3a14c]/25 bg-[#2a130c] shadow-[0_18px_50px_rgba(0,0,0,.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3a14c] ${[1, 4, 7].includes(index) ? "md:translate-y-12" : ""}`}><div className="aspect-[.82] overflow-hidden bg-[#5a2f20]"><img src={project.image} alt={project.title} className="h-full w-full object-cover sepia-[.08] transition duration-500 group-hover:scale-105 group-focus-visible:scale-105" loading="lazy" /></div><div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-[#4b1d0c]/10 to-transparent transition duration-300 group-hover:via-[#4b1d0c]/40 group-focus-visible:via-[#4b1d0c]/40" /><div className="pointer-events-none absolute inset-x-0 bottom-0 -translate-y-16 p-6 transition-transform duration-300 md:translate-y-0 md:group-hover:-translate-y-16 md:group-focus-visible:-translate-y-16"><p className="brand-condensed text-[11px] font-semibold uppercase tracking-[.2em] text-[#e3a14c]">{project.type}</p><h3 className="mt-2 font-display text-2xl leading-tight">{project.title}</h3></div><p className="pointer-events-none absolute inset-x-0 bottom-0 line-clamp-2 px-6 pb-5 text-sm leading-6 text-white/85 transition duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">{project.description}</p></a>)}</div></div></section>

      <section id="story" className="relative overflow-hidden border-y border-[#d8c3a0] bg-[#f5ead2] py-24 lg:py-32"><div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[#ead8b9] lg:block" /><div className="container relative"><div className="grid gap-14 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:gap-24"><div className="relative"><div className="absolute -left-4 -top-4 h-full w-full border border-[#b85a20]/50 sm:-left-6 sm:-top-6" /><img src="/images/gallery-red-barn.jpg" alt="The red barn at Bowman Barnworks" className="relative aspect-[4/3] w-full object-cover shadow-[14px_14px_0_#5a2f20]" loading="lazy" /><div className="brand-script absolute -bottom-8 right-4 rounded-sm bg-[#b85a20] px-5 py-2 text-3xl text-[#fff3d8] shadow-lg sm:right-8">From the ground up</div></div><div className="max-w-2xl"><p className="eyebrow">Our story</p><h2 className="section-title mt-5">Built for the<br /><em>long haul.</em></h2><div className="story-copy mt-8 space-y-5 text-xl leading-8 text-[#4c3427]"><p>Bowman Barnworks is rooted in Calera, Oklahoma, where good work is still measured by how it holds up over time. Our approach is simple: listen first, use honest materials, and make each detail earn its place.</p><p>From practical barns and outdoor structures to custom woodwork and home improvements, we build projects that belong to the land—and to the people who call it home.</p></div><div className="brand-condensed mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[.22em] text-[#9a3f1b]"><span>Calera, Oklahoma</span><span className="text-[#b85a20]">•</span><span>Wood · Steel · Heritage · Home</span></div></div></div><div className="relative mt-16 lg:grid lg:grid-cols-[.88fr_1.12fr] lg:gap-24"><div aria-hidden="true" className="hidden lg:block" /><aside className="grid gap-6 border-t border-[#b85a20]/25 pt-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-10"><figure className="overflow-hidden border border-[#9a3f1b]/25 bg-[#ead8b9]"><img src="/images/bart-bowman-founder.jpg" alt="Bowman Barnworks founder holding a child on a rope swing" className="aspect-[4/3] w-full object-cover object-[center_18%]" loading="lazy" /><figcaption className="brand-condensed px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-[.18em] text-[#9a3f1b]">Founder · Bowman Barnworks</figcaption></figure><div className="border-l-2 border-[#b85a20] pl-6 sm:pl-8"><p className="eyebrow">Founder note</p><blockquote className="story-copy mt-4 text-2xl leading-9 text-[#3e2218] sm:text-3xl">“We build every project with one goal: make it honest, useful, and ready for the long haul.”</blockquote><p className="brand-condensed mt-5 text-xs font-semibold uppercase tracking-[.2em] text-[#9a3f1b]">Bart Bowman · Founder</p><img src="/images/bart-bowman-signature.png" alt="Bart Bowman signature" className="mt-2 h-auto w-56 max-w-full object-contain object-left" loading="lazy" /><button type="button" onClick={() => scrollTo("contact")} className="brand-condensed group mt-6 inline-flex items-center gap-2 border border-[#9a3f1b]/45 bg-transparent px-4 py-2.5 text-xs font-semibold uppercase tracking-[.2em] text-[#9a3f1b] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[#b85a20] hover:bg-[#b85a20] hover:text-[#fff3d8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b85a20]">Start a project <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div></aside></div></div></section>

      <section id="why-choose" className="bg-[#ead8b9] py-24 lg:py-28"><div className="container"><div className="max-w-2xl"><p className="eyebrow">Why choose us</p><h2 className="section-title mt-5">Good work has<br /><em>good reasons.</em></h2><p className="story-copy mt-7 max-w-xl text-xl leading-8 text-[#4c3427]">The value is in the details: a better conversation at the start, a better fit for the property, and a finished piece that keeps doing its job.</p></div><div className="mt-14 grid gap-px overflow-hidden border border-[#b85a20]/30 bg-[#b85a20]/30 md:grid-cols-3"><div className="bg-[#f5ead2] p-8 lg:p-10"><Ruler className="h-8 w-8 text-[#b85a20]" /><h3 className="mt-8 font-display text-2xl text-[#2d1811]">Designed for your land</h3><p className="story-copy mt-4 text-lg leading-7 text-[#705342]">Every project begins with the site, the setting, and the way you plan to use it—not a one-size-fits-all plan.</p></div><div className="bg-[#f5ead2] p-8 lg:p-10"><Hammer className="h-8 w-8 text-[#b85a20]" /><h3 className="mt-8 font-display text-2xl text-[#2d1811]">Craft you can see</h3><p className="story-copy mt-4 text-lg leading-7 text-[#705342]">Honest materials, careful joinery, and thoughtful finishing are visible in every corner of the work.</p></div><div className="bg-[#f5ead2] p-8 lg:p-10"><ShieldCheck className="h-8 w-8 text-[#b85a20]" /><h3 className="mt-8 font-display text-2xl text-[#2d1811]">Built to endure</h3><p className="story-copy mt-4 text-lg leading-7 text-[#705342]">We focus on durable solutions that feel at home today and continue to earn their keep for years to come.</p></div></div></div></section>

      <section className="relative overflow-hidden py-24 text-[#fff3d8] lg:py-32"><img src="/images/windmill-services.jpg" alt="Bowman Barnworks windmill at dusk" className="absolute inset-0 h-full w-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-r from-[#1d0e08]/95 via-[#2f1208]/80 to-[#7f3514]/55" /><div className="container relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><div><p className="eyebrow text-[#e3a14c]">What we do</p><h2 className="section-title mt-5 max-w-lg text-[#fff3d8]">Craftsmanship<br /><em className="text-[#f2be6b]">with a job to do.</em></h2><p className="brand-condensed mt-8 text-sm uppercase tracking-[.28em] text-[#e6c8a7]">Rustic structures · lasting traditions</p></div><div className="grid gap-4 sm:grid-cols-3">{services.map((service) => <div key={service.number} className="group border border-white/20 bg-black/20 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#e3a14c]/80 hover:bg-black/35"><div className="font-display text-3xl text-[#e3a14c]">{service.number}</div><h3 className="mt-8 font-display text-xl leading-snug text-[#fff3d8]">{service.title}</h3><p className="mt-4 text-sm leading-6 text-[#e6d2bc]">{service.text}</p><ArrowUpRight className="mt-6 h-4 w-4 text-[#e3a14c] transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div>)}</div></div></section>

      <section className="bg-[#f5ead2] py-24 lg:py-32"><div className="container grid gap-16 lg:grid-cols-[1fr_.9fr] lg:items-start"><div><p className="eyebrow">A few good questions</p><h2 className="section-title mt-5">Before we<br /><em>break ground.</em></h2></div><div>{["What kind of projects do you take on?", "Do you serve areas outside of Calera?", "How do we get a conversation started?"] .map((question, index) => <div key={question} className="border-t border-[#d8c3a0]"><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} className="flex w-full items-center justify-between py-6 text-left font-display text-2xl text-[#39251c]"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-[#9a3f1b] transition ${faqOpen === index ? "rotate-180" : ""}`} /></button>{faqOpen === index && <div className="max-w-xl pb-6 pr-10 leading-7 text-[#705342]">{index === 0 ? "Our work centers on rustic structures, custom carpentry, and thoughtful home improvements — built around your land, your needs, and your ideas." : index === 1 ? "Bowman Barnworks is based at 671 Island Bayou in Calera, Oklahoma, and works with homeowners and landowners throughout the surrounding area." : "Send us a note with what you’re dreaming up. We’ll follow up at bartbowman@gmail.com to learn more and talk through next steps."}</div>}</div>)}</div></div></section>

      <section id="contact" className="relative overflow-hidden bg-[#2b1710] py-24 text-[#fff3d8] lg:py-32"><div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(227,161,76,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(227,161,76,.12) 1px, transparent 1px)", backgroundSize: "46px 46px" }} /><div className="container relative grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-24"><div><p className="eyebrow text-[#e3a14c]">Start a project</p><h2 className="section-title mt-5 text-[#fff3d8]">Tell us what<br /><em className="text-[#f2be6b]">you’re building.</em></h2><p className="story-copy mt-8 max-w-md text-xl leading-8 text-[#d6bda1]">A few details are all we need to start a good conversation. Bart will follow up to learn more about your ideas, your land, and the work ahead.</p><div className="brand-condensed mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[#e3a14c]"><MapPin className="h-4 w-4" /> Calera, Oklahoma</div><div className="mt-7 grid gap-4 border-t border-[#e3a14c]/25 pt-6 text-sm text-[#d6bda1]"><a href="mailto:bartbowman@gmail.com" className="flex items-center gap-3 transition hover:text-[#fff3d8]"><Mail className="h-4 w-4 shrink-0 text-[#e3a14c]" /> bartbowman@gmail.com</a><a href={facebookUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-[#fff3d8]"><Facebook className="h-4 w-4 shrink-0 text-[#e3a14c]" /> Follow along on Facebook</a><p className="flex items-start gap-3 leading-6"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#e3a14c]" /><span>671 Island Bayou<br />Calera, OK</span></p></div></div><form onSubmit={handleInquirySubmit} className="grid gap-5 border border-[#e3a14c]/35 bg-[#24140f]/75 p-6 backdrop-blur-sm sm:grid-cols-2 sm:p-8"><div><label htmlFor="inquiry-name" className="brand-condensed text-[11px] font-semibold uppercase tracking-[.18em] text-[#e3a14c]">Your name</label><input id="inquiry-name" required value={inquiry.name} onChange={(event) => setInquiry({ ...inquiry, name: event.target.value })} className="mt-2 w-full border-b border-[#d6bda1]/45 bg-transparent px-0 py-3 text-lg text-[#fff3d8] outline-none transition placeholder:text-[#d6bda1]/45 focus:border-[#e3a14c]" placeholder="Name" /></div><div><label htmlFor="inquiry-email" className="brand-condensed text-[11px] font-semibold uppercase tracking-[.18em] text-[#e3a14c]">Email address</label><input id="inquiry-email" type="email" required value={inquiry.email} onChange={(event) => setInquiry({ ...inquiry, email: event.target.value })} className="mt-2 w-full border-b border-[#d6bda1]/45 bg-transparent px-0 py-3 text-lg text-[#fff3d8] outline-none transition placeholder:text-[#d6bda1]/45 focus:border-[#e3a14c]" placeholder="you@example.com" /></div><div><label htmlFor="inquiry-phone" className="brand-condensed text-[11px] font-semibold uppercase tracking-[.18em] text-[#e3a14c]">Phone <span className="text-[#d6bda1]/55">optional</span></label><input id="inquiry-phone" type="tel" value={inquiry.phone} onChange={(event) => setInquiry({ ...inquiry, phone: event.target.value })} className="mt-2 w-full border-b border-[#d6bda1]/45 bg-transparent px-0 py-3 text-lg text-[#fff3d8] outline-none transition placeholder:text-[#d6bda1]/45 focus:border-[#e3a14c]" placeholder="(555) 555-5555" /></div><div><label htmlFor="inquiry-type" className="brand-condensed text-[11px] font-semibold uppercase tracking-[.18em] text-[#e3a14c]">Project type</label><select id="inquiry-type" value={inquiry.projectType} onChange={(event) => setInquiry({ ...inquiry, projectType: event.target.value })} className="mt-2 w-full border-b border-[#d6bda1]/45 bg-[#24140f] px-0 py-3 text-lg text-[#fff3d8] outline-none transition focus:border-[#e3a14c]"><option>Barn or structure</option><option>Outdoor living</option><option>Custom carpentry</option><option>Home improvement</option><option>Something else</option></select></div><div className="sm:col-span-2"><label htmlFor="inquiry-details" className="brand-condensed text-[11px] font-semibold uppercase tracking-[.18em] text-[#e3a14c]">Tell us a little about it</label><textarea id="inquiry-details" required rows={4} value={inquiry.details} onChange={(event) => setInquiry({ ...inquiry, details: event.target.value })} className="mt-2 w-full resize-y border border-[#d6bda1]/35 bg-[#24140f]/40 p-3 text-base leading-6 text-[#fff3d8] outline-none transition placeholder:text-[#d6bda1]/45 focus:border-[#e3a14c]" placeholder="What are you dreaming up? Include a location, preferred timing, and anything else that may be helpful." /></div>{emailDraftReady && <div role="status" aria-live="polite" className="flex items-start gap-3 border border-[#e3a14c]/55 bg-[#e3a14c]/10 p-4 text-sm leading-6 text-[#fff3d8] sm:col-span-2"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f2be6b]" /><p><strong className="font-semibold text-[#f2be6b]">Your email draft is ready.</strong> Please review it in your email app and send it to complete your inquiry.</p></div>}<div className="flex flex-col items-start gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-sm leading-5 text-[#d6bda1]">Submitting opens a pre-addressed email to Bart with your project details.</p><button type="submit" className="brand-condensed inline-flex items-center gap-2 bg-[#e3a14c] px-6 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#24140f] transition hover:-translate-y-1 hover:bg-[#f2be6b]">Send project details <ArrowUpRight className="h-4 w-4" /></button></div></form></div></section>


      <footer className="heritage-strip py-5 text-[#c2a48a]"><div className="container flex flex-col justify-between gap-3 text-[10px] font-bold uppercase tracking-[.2em] sm:flex-row"><span>© {new Date().getFullYear()} Bowman Barnworks</span><span className="flex items-center gap-2"><Hammer className="h-3 w-3 text-[#e3a14c]" /> Rustic structures. Lasting traditions.</span></div></footer>
    </main>
  );
}

// Keep the page self-contained and lightweight: all CTAs route to email or the public Facebook page.
export {};
