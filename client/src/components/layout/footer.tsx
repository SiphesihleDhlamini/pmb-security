import { Link } from "wouter";
<<<<<<< HEAD
import logo from "@/assets/logo.png";
=======
import logo from '../../assets/logo.png';
>>>>>>> 55036601deaa4c8140b6fc3eb541db2b735e771c

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
          <div 
              className="flex items-center gap-2 mb-4 cursor-pointer" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
<<<<<<< HEAD
            <img src={logo} alt="PMB Security Services" className="h-16 w-auto" />
=======
            <img src={logo} alt="PMB Security Services" className="h-24 w-auto" />
>>>>>>> 55036601deaa4c8140b6fc3eb541db2b735e771c
              <span className="font-bold text-xl text-white">PMB Security Services</span>
            </div>
            <p className="text-sm">
              We are not looking to be the largest, but rather the best!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Armed & Unarmed Guarding</li>
              <li>VIP Protection</li>
              <li>Forensic Investigations</li>
              <li>Security Systems</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>pmbsecurityservices@gmail.com</li>
              <li>060 769 7605</li>
              <li>37 Natal Street</li>
              <li>Bellevue East</li>
              <li>Johannesburg, Gauteng 2198</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} PMB Security Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}