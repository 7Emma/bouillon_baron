import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-[rgba(255,255,255,0.55)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=60')] bg-cover bg-center opacity-[0.18]" />

      <div className="relative z-[1] grid grid-cols-[1.4fr_1fr_1fr_1.4fr] gap-[60px] px-[120px] pb-[60px] pt-20 max-[1024px]:grid-cols-2 max-[1024px]:gap-10 max-[1024px]:px-10 max-[1024px]:pb-10 max-[1024px]:pt-[60px] max-[640px]:grid-cols-1 max-[640px]:gap-8 max-[640px]:px-5 max-[640px]:pb-8 max-[640px]:pt-12">
        <div className="flex flex-col items-start gap-0">
          <div className="flex flex-col items-center gap-1.5">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="26" y1="15" x2="26" y2="65" stroke="#ff5a1f" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="21" y1="15" x2="21" y2="30" stroke="#ff5a1f" strokeWidth="2.8" strokeLinecap="round" />
              <line x1="31" y1="15" x2="31" y2="30" stroke="#ff5a1f" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M21 30 Q26 36 31 30" stroke="#ff5a1f" strokeWidth="2.8" fill="none" strokeLinecap="round" />
              <line x1="54" y1="15" x2="52" y2="65" stroke="#ff5a1f" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M54 15 L60 26 Q57 34 52 33" stroke="#ff5a1f" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="33" y1="34" x2="47" y2="48" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              <line x1="47" y1="34" x2="33" y2="48" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
              <line x1="12" y1="58" x2="12" y2="72" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" />
              <line x1="68" y1="58" x2="68" y2="72" stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-[var(--orange)]">◀</span>
              <span className="text-[1.4rem] font-extrabold tracking-[0.02em] text-[var(--orange)]">Bouillon Baron</span>
              <span className="text-base font-bold text-[var(--orange)]">▶</span>
            </div>
            <div className="mt-0.5 text-[0.7rem] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.4)]">
              Restaurant
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-base font-semibold tracking-[0.02em] text-[var(--white)]">Navigation</h4>
          <ul className="flex list-none flex-col gap-3.5">
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Accueil</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Événements</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Témoignages</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Catégories</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Contacts</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-base font-semibold tracking-[0.02em] text-[var(--white)]">Liens utiles</h4>
          <ul className="flex list-none flex-col gap-3.5">
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Inscription</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Connexion</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Politique</Link></li>
            <li><Link href="#" className="text-[0.9rem] font-normal text-[rgba(255,255,255,0.55)] transition-colors hover:text-[var(--orange)]">Conditions générales</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-base font-semibold tracking-[0.02em] text-[var(--white)]">Flux Instagram</h4>
          <div className="grid grid-cols-3 gap-1.5 max-[640px]:max-w-[240px]">
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&q=80" alt="food 1" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80" alt="food 2" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="food 3" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=80" alt="food 4" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&q=80" alt="food 5" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
            <Link href="#" className="block aspect-square overflow-hidden rounded-[3px]">
              <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=200&q=80" alt="food 6" className="h-full w-full object-cover brightness-[0.85] transition-all duration-300 hover:scale-[1.08] hover:brightness-100 hover:opacity-90" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-[1] flex items-center justify-between gap-5 border-t border-[rgba(255,255,255,0.08)] px-[120px] py-[22px] max-[1024px]:px-10 max-[1024px]:py-5 max-[640px]:flex-col max-[640px]:gap-3 max-[640px]:px-5 max-[640px]:py-[18px] max-[640px]:text-center">
        <p className="text-[0.82rem] text-[rgba(255,255,255,0.35)]">
          Copyright ©2026 Tous droits réservés | Ce modèle est réalisé avec
          <span className="text-[#e74c3c]"> ❤ </span>
          par <Link href="#" className="font-semibold text-[var(--orange)] hover:underline">Colorlib</Link>
        </p>
        <div className="flex items-center gap-3.5">
          <span className="whitespace-nowrap text-[0.82rem] text-[rgba(255,255,255,0.45)]">Suivez-nous</span>
          <div className="h-px w-10 bg-[rgba(255,255,255,0.25)]" />
          <div className="flex items-center gap-3.5">
            <Link href="#" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--orange)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>
            <Link href="#" aria-label="Facebook" className="flex h-8 w-8 items-center justify-center text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--orange)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </Link>
            <Link href="#" aria-label="Website" className="flex h-8 w-8 items-center justify-center text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--orange)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center text-[rgba(255,255,255,0.5)] transition-colors hover:text-[var(--orange)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
