import Link from "next/link";

export function ContactAndFooter() {
  return (
    <section className="bg-[#0071CE] text-white">
      {/* Contact Section */}
      <div className="max-w-5xl mx-auto px-12 py-20 grid md:grid-cols-2 gap-12">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Get in touch</h2>
          <p className="mb-6 text-white/80 text-2xl">For general enquiries</p>

          <div className="space-y-4 text-white/90 text-[20px]">
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
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full bg-transparent border-b border-white/50 py-3 pt-5 placeholder-white/80 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full bg-transparent border-b border-white/50 py-3 pt-5 placeholder-white/80 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border-b  border-white/50 py-3 pt-5 placeholder-white/80 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="w-full bg-transparent border-b border-white/50 py-3 pt-5 placeholder-white/80 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-black bg-white  px-[51px] py-[14px] rounded-full font-medium hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-white flex justify-center  text-gray-800 ">
        <div className="w-[100%]  mx-auto px-6 py-14 pl-[20%]">
          {/* Logo */}
          <div>
            <div className=" flex justify-center md:justify-start pb-[60px]">
              <div className="flex items-center space-x-3">
                <img
                  src="/assets/images/Supreme_logos (3).png"
                  alt="Supreme Group logo"
                  className="h-8"
                />
              </div>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
              {/* Navigation columns */}
              <div>
                <h4 className="font-semibold mb-5 text-2xl">APPLICATIONS</h4>
                <ul className="space-y-5 text-gray-600 text-[14px]">
                  <li>Apparel</li>
                  <li>Automotive</li>
                  <li>Filtration</li>
                  <li>Customized Solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-5 text-2xl">COMPANY</h4>
                <ul className="space-y-5 text-gray-600 text-[14px]">
                  <li>Innovation</li>
                  <li>Global Competency</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-5 text-2xl">MORE</h4>
                <ul className="space-y-5 text-gray-600 text-[14px]">
                  <li>Careers</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-5 text-2xl">FOLLOW US</h4>
                <ul className="space-y-5 text-gray-600 text-[14px]">
                  <li>
                    <Link
                      href="https://twitter.com"
                      className="hover:underline"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://linkedin.com"
                      className="hover:underline"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com"
                      className="hover:underline"
                    >
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
        </div>
      </footer>
      <div className="border-t border-gray-200"></div>

      <div className="flex justify-between mx-auto bg-white py-6 text-[14px] font-medium text-gray-500 w-[100%]  px-[20%]">
        <div className=" ">©2023. All Rights Reserved.</div>

        <div className="text-center text-xs   ">
          Supreme house: 110, 16th Road,Chembur, Mumbai – 400071.
        </div>
      </div>
    </section>
  );
}
