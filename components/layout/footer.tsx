import { Button } from "@headlessui/react";

const footerNavigation = {
  clientServices: [
    { name: "Contact", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  kismetByMilka: [
    { name: "Legal Terms", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Management", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Sitemap", href: "#" },
  ],
  followUs: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export default async function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="bg-black h-[900px] lg:h-[340px] md:h-[340px]"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {/* Newsletter section */}
            <div className="md:col-span-1">
              <h3 className="text-[14px] font-medium text-white mb-6">
                NEWSLETTER
              </h3>
              <form className="space-y-4">
                <input
                  id="email-address"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="*E-mail"
                  className="w-full bg-transparent border-b border-white text-white placeholder-white text-[16px] pb-2 focus:outline-none focus:border-gray-300"
                />
              </form>
              <div className="mt-8 flex flex-col gap-4">
                <h3 className="text-[14px] font-medium text-white mb-6">
                  OUR STORES
                </h3>
                <p className="text-[16px] text-white mb-4">All Stores</p>
                <Button className="border rounded-full border-white text-white px-6 py-2 text-[16px] hover:bg-white hover:text-black transition-colors">
                  Book Appointment
                </Button>
              </div>
            </div>

            {/* Client Services */}
            <div className="md:col-span-1 lg:justify-self-end">
              <h3 className="text-[14px] font-medium text-white mb-6">
                CLIENT SERVICES
              </h3>
              <ul className="space-y-4">
                {footerNavigation.clientServices.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[16px] text-white hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kismet By Milka */}
            <div className="md:col-span-1 lg:justify-self-end">
              <h3 className="text-[14px] font-medium text-white mb-6">
                KISMET BY MILKA
              </h3>
              <ul className="space-y-4">
                {footerNavigation.kismetByMilka.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[16px] text-white hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="md:col-span-1 lg:justify-self-end">
              <h3 className="text-[14px] font-medium text-white mb-6">
                FOLLOW US
              </h3>
              <ul className="space-y-4">
                {footerNavigation.followUs.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[16px] text-white hover:text-gray-300 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
