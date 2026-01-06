import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneOff, AlertTriangle, Shield, PhoneCall } from 'lucide-react';

const Plumbers: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* IDENTITY */}
      <section className="relative py-24 md:py-32 px-4 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-primary-blue/5 rounded-full blur-[80px] -z-10"></div>
        <span className="inline-block py-1 px-3 border border-primary-blue/50 rounded-full text-primary-blue text-sm font-bold tracking-widest mb-6">
          FOR PLUMBING BUSINESSES
        </span>
        <h1 className="font-heading font-black text-5xl md:text-7xl leading-tight text-white mb-8">
          THE MISSED CALL <br />
          <span className="text-primary-blue">RECOVERY SYSTEM</span>
        </h1>
        <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-12">
          Stop letting $500 jobs slip through your fingers because you were under a sink.
        </p>
        <Link to="/contact" className="bg-accent-red text-white hover:bg-white hover:text-accent-red font-heading font-bold text-lg py-4 px-10 rounded-none transition-all inline-block">
          GET MORE REVENUE
        </Link>
      </section>

      {/* PAIN */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl text-accent-red mb-6">THE PLUMBER'S DILEMMA</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <PhoneOff className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-lg block mb-1">Missed Calls on the Job</strong>
                    <p className="text-secondary-gray">You can't answer while working. They hang up.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-lg block mb-1">Voicemail = Lost Revenue</strong>
                    <p className="text-secondary-gray">Homeowners with leaks don't leave voicemails. They panic dial the next guy.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <PhoneCall className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white text-lg block mb-1">Old Estimates Die</strong>
                    <p className="text-secondary-gray">You sent the quote 3 days ago. No follow up. They went with the cheaper guy who called them back.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black border border-white/10 p-8">
              <div className="text-center">
                <p className="text-6xl font-heading font-black text-white mb-4">62%</p>
                <p className="text-secondary-gray text-lg">
                  Of calls to plumbing businesses go unanswered or to voicemail during peak hours.
                </p>
                <div className="w-full h-2 bg-white/10 mt-8 rounded-full overflow-hidden">
                  <div className="w-[62%] h-full bg-accent-red"></div>
                </div>
                <p className="text-xs text-right mt-2 text-white/40">Industry Average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MECHANISM */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-4xl text-white mb-16">HOW WE FIX IT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-primary-blue/30 bg-primary-blue/5">
            <h3 className="font-heading font-bold text-xl text-white mb-4">1. Instant Pickup</h3>
            <p className="text-secondary-gray">
              AI answers instantly. "Thanks for calling [Your Company], are you calling about a plumbing emergency or a scheduled visit?"
            </p>
          </div>
          <div className="p-8 border border-primary-blue/30 bg-primary-blue/5">
            <h3 className="font-heading font-bold text-xl text-white mb-4">2. Text Back</h3>
            <p className="text-secondary-gray">
              If the line is busy, the AI instantly texts them: "Saw we missed you. Do you have a leak?" Engaging the lead immediately.
            </p>
          </div>
          <div className="p-8 border border-primary-blue/30 bg-primary-blue/5">
            <h3 className="font-heading font-bold text-xl text-white mb-4">3. Booking</h3>
            <p className="text-secondary-gray">
              The AI gathers address and issue details, then books a slot on your calendar or alerts your dispatch team.
            </p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 bg-gradient-to-r from-primary-blue to-blue-500 text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Shield className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="font-heading font-black text-4xl text-white mb-8">NO-RISK GUARANTEE</h2>
          <p className="text-2xl font-bold bg-white/90 p-8 md:p-12 shadow-2xl leading-relaxed">
            "If we do not recover or book at least five jobs in the first thirty days we continue optimizing at no charge until we do."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="font-heading font-bold text-3xl text-white mb-12">STOP FLUSHING LEADS</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/contact" className="bg-accent-red hover:bg-white hover:text-accent-red text-white font-heading font-bold text-lg py-4 px-10 rounded-none transition-all">
            GET MORE REVENUE
          </Link>
          <Link to="/contact" className="border border-white hover:border-primary-blue hover:text-primary-blue text-white font-heading font-bold text-lg py-4 px-10 rounded-none transition-all">
            GET A FREE MISSED CALL AUDIT
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Plumbers;