import React from 'react';
import { Calendar, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-center font-heading font-black text-5xl text-white mb-4">BOOK A DEMO</h1>
        <p className="text-center text-secondary-gray mb-16 text-lg">
          See the system in action. Find out how much revenue you're missing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* CONTACT INFO */}
          <div className="bg-white/5 p-8 border border-white/10 flex flex-col justify-center">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">GET IN TOUCH</h2>
            <p className="text-secondary-gray mb-8">
              Prefer to reach out directly? Give us a call or send an email.
            </p>
            
            <div className="space-y-6">
              <a href="tel:5612643614" className="flex items-center group">
                <div className="h-12 w-12 bg-primary-blue/10 flex items-center justify-center mr-4 group-hover:bg-primary-blue/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-secondary-gray uppercase tracking-widest mb-1">Call Us</span>
                  <span className="text-xl font-heading font-bold text-white group-hover:text-primary-blue transition-colors">561-264-3614</span>
                </div>
              </a>

              <a href="mailto:sales@revenuehunters.com" className="flex items-center group">
                <div className="h-12 w-12 bg-primary-blue/10 flex items-center justify-center mr-4 group-hover:bg-primary-blue/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-secondary-gray uppercase tracking-widest mb-1">Email Us</span>
                  <span className="text-xl font-heading font-bold text-white group-hover:text-primary-blue transition-colors">sales@revenuehunters.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* CALENDLY PLACEHOLDER */}
          <div className="flex flex-col justify-center items-center bg-primary-blue/5 border border-primary-blue/20 p-8 text-center min-h-[400px]">
            <Calendar className="h-16 w-16 text-primary-blue mb-6" />
            <h3 className="font-heading font-bold text-2xl text-white mb-4">SKIP THE BACK & FORTH</h3>
            <p className="text-secondary-gray mb-8 max-w-xs">
              Ready to talk now? Select a time directly on our calendar to speak with an automation expert.
            </p>
            <button 
              onClick={() => alert('Calendly would open here')}
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-primary font-heading font-bold py-4 px-8 uppercase tracking-widest transition-all"
            >
              Select a Time
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;