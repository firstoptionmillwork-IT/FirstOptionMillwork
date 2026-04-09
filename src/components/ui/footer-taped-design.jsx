import Link from 'next/link'
import Image from "next/image";

export const Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-[#1f1f1f] to-[#2a2a2a] text-white">

      {/* TOP SECTION */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 - flex items-center gap-6
+ flex items-center gap-4 flex-wrap text-sm">

        {/* ABOUT */}
       <div className="flex flex-col gap-3">
        <Image
          src="/footer-logo.png"
          alt="ActivationLed logo"
          width={220}
          height={60}
          className="object-contain"
        />
        <p className="text-white/60 text-xs leading-relaxed">
          Alliance Network is a custom cabinet specialist based in Vaughan, ON. 
          We offer design, manufacturing, and installation of high-quality cabinetry.
        </p>
      </div>

        {/* REVIEWS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Reviews</h4>
          <p className="text-white/60 text-xs">Google Reviews ★★★★★</p>
          <p className="text-white/60 text-xs">Rated 4.9</p>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-white/60 text-xs">
            <Link href="#">Home</Link>
            <Link href="#">Gallery</Link>
            <Link href="#">Financing</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Contact us</h4>
          <div className="text-white/60 text-xs space-y-2">
            <p>Phone: +1 (905) 761-7474</p>
            <p>Email: info@company.com</p>
            <p>
              Address: 97 Butter Ave,<br />
              Vaughan, ON
            </p>
          </div>
        </div>

        {/* SERVICE AREAS */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Service Areas</h4>
          <div className="grid grid-cols-2 gap-2 text-white/60 text-xs">
            <span>East York</span>
            <span>King City</span>
            <span>North York</span>
            <span>Markham</span>
            <span>Richmond Hill</span>
            <span>Vaughan</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 gap-4">

          {/* LEFT */}
          <div className="flex items-center gap-2">
           <p>© {currentYear} All Rights Reserved</p>
            <Link href="#" className="hover:text-white transition ml-5">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
          </div>

          {/* CENTER */}

          {/* RIGHT */}
          <div className="flex items-center gap-6">


            {/* SOCIAL ICONS */}
            <div className="flex gap-3 ml-2">
             <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition"
            >
              <lord-icon
                src="https://cdn.lordicon.com/qgebwute.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 22, height: 22 }}
              ></lord-icon>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition"
            >
              <lord-icon
                src="https://cdn.lordicon.com/bfoumeno.json"
                trigger="loop"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 22, height: 22 }}
              ></lord-icon>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition"
            >
              <lord-icon
                src="https://cdn.lordicon.com/zmvgugmh.json"
                trigger="loop"
                state="hover-dots"
                stroke="bold"
                colors="primary:#ffffff,secondary:#08a88a"
                style={{ width: 22, height: 22 }}
              ></lord-icon>
            </a>

            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};