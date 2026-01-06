import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading font-black text-2xl tracking-tighter mb-4 text-white">
              AI Voice Assistant for Business
            </h2>
            <p className="text-secondary-gray text-lg max-w-xs leading-relaxed opacity-80">
              Automated inbound + outbound calling that answers, qualifies, and books appointments—so you capture revenue without adding headcount.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary-blue">SITEMAP</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-base hover:text-primary-blue transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-base hover:text-primary-blue transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-base hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary-blue">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-base opacity-80">sales@revenuehunters.com</li>
              <li className="text-base opacity-80">Orlando, Florida</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} AI Voice Assistant. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="uppercase tracking-widest font-heading">Execution is Everything</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;