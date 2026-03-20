"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Our Process", "Case Studies", "Contact"],
    },
    {
      title: "Services",
      links: ["Facebook Ads", "Instagram Growth", "Lead Gen", "Creative Strategy"],
    },
    {
      title: "Resources",
      links: ["Blog", "Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-0">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tighter uppercase mb-6">
              Upscalable<span className="text-blue-400">.</span>
            </h2>
            <p className="text-blue-100/70 max-w-sm mb-8 leading-relaxed">
              We build high-performance advertising systems that scale brands beyond ordinary limits. Precision targeting meets creative excellence.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-brand-blue transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-white">
                {column.title}
              </h4>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href="#" 
                      className="text-blue-100/60 hover:text-white flex items-center group transition-colors"
                    >
                      {link}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-blue-100/40 font-jetbrains">
            © {currentYear} Upscalable Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-blue-100/40">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;