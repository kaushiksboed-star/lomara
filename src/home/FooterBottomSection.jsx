import {
  Facebook,
  Instagram,
  Twitter,
  Home,
} from "react-feather";
import { Copyright } from "lucide-react";

const policyLinks = [
  "Accessibility",
  "Privacy Policy",
  "Licensing Information",
  "Consumer Protection Notice",
  "Terms & Conditions",
];

function PolicyLink({ label }) {
  return (
    <button className="text-gray-400 hover:text-amber-100 transition-all duration-300 underline underline-offset-4 cursor-pointer text-[15px]">
      {label}
    </button>
  );
}

export default function FooterBottomSection() {
  return (
    <section className="bg-black px-[20px] py-20 footer_bottom">
      <div className="container mx-auto px-4">
        {/* Top Description */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400 text-[15px] leading-8">
            Lomara Group is committed to ensuring digital accessibility for
            individuals with disabilities. We are continuously working to
            improve the accessibility of our web experience for everyone and
            welcome feedback and accommodation requests.
          </p>

          <button className="mt-3 text-amber-100 hover:text-white transition-all duration-300 underline underline-offset-4 text-[15px] cursor-pointer">
            Let us know
          </button>
        </div>

        {/* Policy Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-14">
          {policyLinks.map((item, index) => (
            <PolicyLink key={index} label={item} />
          ))}
        </div>

        {/* Address */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <p className="text-gray-500 text-[14px] leading-8">
            2600 Michelson Drive, Suite 1201, Irvine, CA 92612 | Equal Housing
            Lender | Licensed Real Estate Platform
          </p>

          <button className="mt-4 text-amber-100 hover:text-white transition-all duration-300 text-[16px] underline underline-offset-4 cursor-pointer">
            Contact Lomara, Inc. Brokerage
          </button>
        </div>

       
        {/* Bottom Area */}
        <div className="flex flex-col lg:flex-row lg:items-end items-center justify-between gap-8 mt-16 border-t border-[#1f1f1f] pt-10">
          {/* Social */}
          <div className="flex items-center gap-5">
            <button className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-black hover:bg-amber-100 hover:border-amber-100 transition-all duration-300 cursor-pointer">
              <Facebook className="w-5 h-5" />
            </button>

            <button className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-black hover:bg-amber-100 hover:border-amber-100 transition-all duration-300 cursor-pointer">
              <Instagram className="w-5 h-5" />
            </button>

            <button className="w-12 h-12 rounded-full border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-black hover:bg-amber-100 hover:border-amber-100 transition-all duration-300 cursor-pointer">
              <Twitter className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <img src="/lomara/logo.png" alt="Lomara Logo" className="m-w-[100%] footer_logo"/>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2">           
            <Copyright className="w-4 h-4 text-gray-400" />
            <p className="text-gray-400 text-[15px]">2026 Lomara</p>
          </div>
        </div>
      </div>
    </section>
  );
}
