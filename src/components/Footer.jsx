import Link from "next/link";

export function ContactAndFooter() {
  return (
    <section className="bg-[#0071CE] text-white">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side: Contact Info */}
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6 text-white/80 text-lg md:text-2xl">For general enquiries</p>

          <div className="space-y-4 text-white/90 text-base md:text-[20px]">
            <p>
              <strong>Address:</strong> <br />
              110, 16th Road, Chembur, Mumbai – 400071
            </p>
            <p>
              <strong>Phone:</strong> <br />
              +91 22 25208822
            </p>
            <p>
              <strong>Email:</strong> <br />
              info@supremegroup.co.in
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="space-y-4 order-1 md:order-2">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-transparent border-b border-white/50 py-2 md:py-3 pt-3 md:pt-5 placeholder-white/80 focus:outline-none text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-white/50 py-2 md:py-3 pt-3 md:pt-5 placeholder-white/80 focus:outline-none text-sm md:text-base"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border-b border-white/50 py-2 md:py-3 pt-3 md:pt-5 placeholder-white/80 focus:outline-none text-sm md:text-base"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full bg-transparent border-b border-white/50 py-2 md:py-3 pt-3 md:pt-5 placeholder-white/80 focus:outline-none text-sm md:text-base"
          ></textarea>
          <button
            type="submit"
            className="text-black bg-white px-6 py-2 md:px-[51px] md:py-[14px] rounded-full font-medium hover:bg-gray-200 transition text-sm md:text-base"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-14">
          {/* Logo */}
          <div className="pb-8 md:pb-[60px] flex  justify-start">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/Supreme_logos (3).png"
                alt="Supreme Group logo"
                className="h-8 md:h-[63px] md:w-[226px]"
              />
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Applications Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-3 md:mb-5 text-lg md:text-2xl">APPLICATIONS</h4>
              <ul className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-[14px]">
                <li>Apparel</li>
                <li>Automotive</li>
                <li>Filtration</li>
                <li>Customized Solutions</li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-3 md:mb-5 text-lg md:text-2xl">COMPANY</h4>
              <ul className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-[14px]">
                <li>Innovation</li>
                <li>Global Competency</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
            {/* More Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-3 md:mb-5 text-lg md:text-2xl">MORE</h4>
              <ul className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-[14px]">
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            
            {/* Follow Us Column */}
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold mb-3 md:mb-5 text-lg md:text-2xl">FOLLOW US</h4>
              <ul className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-[14px]">
                <li>
                  <Link href="https://twitter.com" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com" className="hover:underline">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://instagram.com" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://medium.com" className="hover:underline">
                    Medium
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200"></div>
        
        {/* Copyright Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs md:text-[14px] font-medium text-gray-500">
          <div>©2023. All Rights Reserved.</div>
          <div className="text-center">
            Supreme house: 110, 16th Road, Chembur, Mumbai – 400071.
          </div>
        </div>
      </footer>
    </section>
  );
}