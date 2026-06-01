const footerLinks = [
  "About",
  "Lomara Estimates",
  "News",
  "Research",
  "Careers",
  "Applicant Privacy Notice",
  "Help",
  "Advertise",
  "Fair Housing Guide",
  "Advocacy",
  "Terms of Use",
  "Privacy Notice",
  "Ad Choices",
  "Cookie Preference",
  "Learn",
  "AI",
  "Mobile Apps",
];

const partnerLinks = [
  "Lomara Living",
  "StreetEasy",
  "HotPads",
  "Out East",
];

function FooterLink({ label }) {
  return (
    <a href="" className="text-[15px] text-gray-400 hover:text-amber-100 transition-all duration-300">
      {label}
    </a>
  );
}

export default function FooterSection() {
  return (
    <footer className="bg-black px-[20px] pt-8 pb-0">
      <div className="container mx-auto px-4">
       
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {footerLinks.map((item, index) => (
            <FooterLink key={index} label={item} />
          ))}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          {partnerLinks.map((item, index) => (
            <a href=""
              key={index}
              className="text-[16px] text-white hover:text-amber-100 transition-all duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        
        <div className="flex justify-center mt-10">
          <a href="" className="text-amber-100 hover:text-white transition-all duration-300 text-[16px] font-medium">
            Do Not Sell or Share My Personal Information →
          </a>
        </div>

        
        <div className="border-t border-[#2a2a2a] mt-20"></div>

      </div>
    </footer>
  );
}