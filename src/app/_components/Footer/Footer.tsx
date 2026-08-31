import Link from "next/link";

const features = [
  {
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Easy Returns",
    desc: "14-day return policy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    desc: "100% secure checkout",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Contact us anytime",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
];

const shopLinks = ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"];
const accountLinks = ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"];
const supportLinks = ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"];
const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

function CartLogoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-green-500">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-green-500">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 text-green-500">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

const socials = [
  {
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.56 1.53-3.98 3.87-3.98 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
        <path d="M22.5 8.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C15.9 5 12 5 12 5h0s-3.9 0-7.2.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S1.3 10.4 1.3 12.3v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8 .2 8 .2s3.9 0 7.2-.3c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.8c0-1.9-.2-3.8-.2-3.8z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98" />
      </svg>
    ),
  },
];

function FooterLinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-5 text-[17px] font-bold text-white">{title}</h5>
      <ul className="space-y-3.5">
        {links.map((label) => (
          <li key={label}>
            <Link
              href="#"
              className="text-sm text-slate-300 transition-colors hover:text-green-500"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Feature strip */}
      <div className="grid grid-cols-1 bg-green-50 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-3.5 px-6 py-7 sm:px-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-green-600">
              {f.icon}
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-slate-900">{f.title}</h4>
              <p className="text-[13px] text-slate-500">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#0f1b33] px-6 pt-14 text-slate-300 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-350 grid-cols-1 gap-x-6 gap-y-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-white px-4.5 py-2.5 text-xl font-extrabold text-[#0f1b33]">
              <CartLogoIcon className="h-5.5 w-5.5 text-green-600" />
              FreshCart
            </div>

            <p className="mb-5 max-w-85 text-sm leading-7 text-slate-400">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            <div className="mb-3 flex items-center gap-2.5 text-sm text-slate-300">
              <PhoneIcon />
              +1 (800) 123-4567
            </div>
            <div className="mb-3 flex items-center gap-2.5 text-sm text-slate-300">
              <MailIcon />
              support@freshcart.com
            </div>
            <div className="mb-3 flex items-center gap-2.5 text-sm text-slate-300">
              <PinIcon />
              123 Commerce Street, New York, NY 10001
            </div>

            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16233f] text-slate-300 transition-colors hover:bg-green-600 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Shop" links={shopLinks} />
          <FooterLinkColumn title="Account" links={accountLinks} />
          <FooterLinkColumn title="Support" links={supportLinks} />
          <FooterLinkColumn title="Legal" links={legalLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mx-auto flex max-w-350 flex-wrap items-center justify-between gap-3 border-t border-white/10 py-5">
          <p className="text-[13px] text-slate-400">
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Visa", "Mastercard", "PayPal"].map((label) => (
              <span key={label} className="flex items-center gap-1.5 text-[13px] text-slate-400">
                <CardIcon />
                {label}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
