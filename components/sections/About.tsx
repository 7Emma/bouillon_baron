export default function About() {
  return (
    <section
      className="grid min-h-[620px] grid-cols-2 items-center gap-20 bg-[var(--white)] px-[120px] py-20 max-[860px]:min-h-0 max-[860px]:grid-cols-1 max-[860px]:gap-10 max-[860px]:px-6 max-[860px]:py-[60px] max-[480px]:px-5 max-[480px]:py-12"
      id="about"
    >
      <div className="flex flex-col">
        <span className="mb-4 block text-[0.88rem] font-medium tracking-[1px] text-[var(--orange)]">
          Découvrez Nos Saveurs
        </span>
        <h2 className="mb-6 max-w-[520px] text-[clamp(32px,3.5vw,52px)] font-extrabold leading-[1.1] tracking-[-0.5px] text-[var(--black)]">
          Nous servons de bons plats pour votre famille !
        </h2>
        <p className="mb-10 max-w-[480px] text-[0.95rem] font-normal leading-[1.8] text-[var(--grey)]">
          Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit
          aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.
        </p>

        <div className="grid grid-cols-2 gap-x-10 gap-y-7 max-[860px]:gap-x-5 max-[860px]:gap-y-5 max-[480px]:grid-cols-1">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 stroke-[var(--black)]"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 36 C14 28 34 28 34 36 L34 44 L14 44 Z" />
                <circle cx="24" cy="22" r="6" />
                <rect x="18" y="8" width="12" height="8" rx="2" />
                <ellipse cx="24" cy="8" rx="8" ry="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.88rem] font-normal leading-[1.6] text-[var(--grey)]">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 stroke-[var(--black)]"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="24" cy="26" r="14" />
                <circle cx="24" cy="26" r="10" />
                <line x1="17" y1="8" x2="17" y2="16" />
                <line x1="15" y1="8" x2="15" y2="13" />
                <line x1="19" y1="8" x2="19" y2="13" />
                <path d="M15 13 Q17 16 19 13" />
                <line x1="31" y1="8" x2="31" y2="18" />
                <path d="M31 8 L34 12 Q33 15 31 15" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.88rem] font-normal leading-[1.6] text-[var(--grey)]">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 stroke-[var(--black)]"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="16" y="16" width="16" height="10" rx="2" />
                <ellipse cx="24" cy="16" rx="10" ry="5" />
                <circle cx="18" cy="11" r="5" />
                <circle cx="30" cy="11" r="5" />
                <line x1="18" y1="28" x2="30" y2="40" />
                <line x1="30" y1="28" x2="18" y2="40" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.88rem] font-normal leading-[1.6] text-[var(--grey)]">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center">
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 stroke-[var(--black)]"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="24" cy="13" r="5" />
                <path d="M16 38 L16 26 Q16 20 24 20 Q32 20 32 26 L32 38" />
                <path d="M21 22 L24 24 L27 22 L24 20 Z" />
                <line x1="32" y1="26" x2="38" y2="20" />
                <line x1="34" y1="18" x2="42" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-[0.88rem] font-normal leading-[1.6] text-[var(--grey)]">
                Ut enim ad minim veniam, quis nostrud exer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[560px] overflow-hidden rounded-[4px] max-[860px]:order-[-1] max-[860px]:h-[320px] max-[480px]:h-[260px]">
        <img
          src="https://images.unsplash.com/photo-1583394293214-bef5f03e6c13?w=900&q=85"
          alt="Chef souriant en cuisine"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </section>
  );
}
