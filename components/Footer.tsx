import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="container py-10 flex max-md:flex-col flex-wrap justify-between gap-5">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image 
            src="/logo.svg"
            className="object-contain"
            width={118}
            height={18}
            alt="Car Hub"
          />
          {/* <p className="text-base text-gray-700">
            CarHub 2023<br />
            All right reserved &copy;
          </p> */}
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => {
            const { title, links } = link;
            return (
              <div key={index} className="footer__link">
                <h3 className="font-bold">{title}</h3>
                {links.map((link, i) => (
                  <Link key={i} href={link.url} className="text-gray-500 hover:text-primary-blue transition-colors">
                    {link.title}
                  </Link>
                ))}
              </div>
            )            
          })}
        </div>
      </div>
      <div className="container max-md:flex-col flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 py-10">
        <p className="text-gray-700">&copy; CarHub {new Date().getFullYear()}. All right reserved.</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500 hover:text-primary-blue transition-colors">
            Privacy Policy
          </Link>
          <Link href={"/"} className="text-gray-500 hover:text-primary-blue transition-colors">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
};

export default Footer;