import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, TrendingUp, ShieldCheck, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const buttonBaseClass = "w-full sm:w-80 flex items-center justify-center font-heading font-bold text-lg py-5 px-6 rounded-none transition-all";

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* IDENTITY SECTION */}
      <section className="relative py-24 md:py-32 px-4 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-blue/10 rounded-full blur-[100px] -z-10"></div>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter text-white mb-8">
          AI Voice Assistant for Business That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">Books Appointments Automatically</span>.
        </h1>
        <p className="text-lg md:text-2xl text-secondary-gray/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          We install an AI voice assistant for business: inbound + outbound calling agents that answer in seconds, qualify real buyers, and book appointments directly on your calendar—without hiring more staff.
        </p>
        
        {/* HERO BUTTONS */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="tel:5612643614" className={`${buttonBaseClass} bg-accent-red text-white hover:bg-white hover:text-accent-red transform hover:-translate-y-1 gap-2 shadow-lg`}>
              <Phone className="w-5 h-5" />
              CALL FOR DEMO
            </a>
            <Link to="/pricing" className={`${buttonBaseClass} border border-white/20 text-white hover:border-primary-blue hover:text-primary-blue`}>
              SEE PRICING
            </Link>
          </div>
          
          <Link to="/contact" className={`${buttonBaseClass} bg-primary-blue text-black hover:bg-white hover:text-black`}>
            BOOK MORE APPOINTMENTS
          </Link>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-accent-red mb-8">
            Why Businesses Lose High-Intent Leads Every Day
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                Missed calls. <span className="text-gray-500">Slow follow-ups. Lost revenue.</span>
              </p>
              <p className="text-secondary-gray leading-relaxed text-lg">
                Your marketing works. Your phone rings. But if you don’t answer within seconds, the lead is gone. They don’t leave voicemails—they tap back to Google and call the next company.
              </p>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-accent-red/30 pl-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                "MISSED CALLS ARE SILENT REVENUE KILLERS."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAILED ATTEMPTS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">Why Traditional Call Handling Fails Modern Businesses</h2>
          <p className="text-secondary-gray">You’ve tried to patch the problem. It keeps coming back.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "VOICEMAIL (DEAD END)", desc: "Where leads disappear. Most buyers won’t leave a message—they move on." },
            { title: "RECEPTIONISTS (LIMITED HOURS)", desc: "They get overwhelmed, take breaks, and clock out—while your phone keeps ringing." },
            { title: "SDRs (EXPENSIVE & INCONSISTENT)", desc: "High payroll. Requires management. High churn." },
            { title: "OVERSEAS VAs (FRICTION & GAPS)", desc: "Accent friction. Connection issues. Context gaps." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:border-primary-blue/50 transition-colors">
              <X className="text-accent-red mb-4 h-8 w-8" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-lg text-secondary-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW MECHANISM */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-blue font-heading font-bold tracking-widest text-sm mb-2 block">Introducing</span>
              <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-8">
                The Revenue Hunter AI Voice System™
              </h2>
              <p className="text-lg text-secondary-gray mb-8 leading-relaxed">
                We install a complete AI voice system that answers, qualifies, and books—24/7. It doesn’t sleep, doesn’t take breaks, and follows your call logic consistently every time.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Intelligent Answering (Under 2 Seconds)",
                  "Instant Missed-Call Recovery (Instant Call Back)",
                  "Outbound Appointment Booking (Warm Leads + Follow-Ups)",
                  "Automated Call Summaries (CRM-Ready)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-white font-bold text-lg">
                    <Check className="text-primary-blue mr-4 h-6 w-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-blue blur-[100px] opacity-20"></div>
              <div className="relative bg-black border border-white/10 p-8 rounded-lg shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-auto text-xs font-mono text-gray-500">SYSTEM_ACTIVE</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-4 text-green-400">
                    <span>[10:42:01]</span>
                    <span>Incoming Call Detected...</span>
                  </div>
                  <div className="flex gap-4 text-primary-blue">
                    <span>[10:42:02]</span>
                    <span>AI Agent Assigned. Answering.</span>
                  </div>
                  <div className="flex gap-4 text-white">
                    <span>[10:42:45]</span>
                    <span>Lead Qualified: High Intent.</span>
                  </div>
                  <div className="flex gap-4 text-white">
                    <span>[10:43:10]</span>
                    <span>Appointment Booked: Thursday 2 PM.</span>
                  </div>
                  <div className="flex gap-4 text-gray-500">
                    <span>[10:43:12]</span>
                    <span>CRM Updated. Owner Notified.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">&lt; 2s</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Hold Time</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">Higher</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Capture Rate</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">24/7</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Availability</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">Sales-Ready</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Hand-Off Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-4xl text-white mb-16">How We Install Your AI Voice Assistant</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Audit", desc: "We analyze your current call flow and missed opportunities." },
            { step: "02", title: "Build Logic", desc: "We build your call flows to qualify leads, handle objections, and route the right calls." },
            { step: "03", title: "Connect", desc: "We connect your phone lines, calendar, and CRM so bookings land instantly." },
            { step: "04", title: "Test", desc: "We stress-test edge cases so conversations stay smooth and on-brand." },
            { step: "05", title: "Go Live", desc: "Your AI voice assistant goes live. Missed calls drop immediately." },
            { step: "06", title: "Optimize", desc: "Weekly call reviews to improve booking rate and lead quality." }
          ].map((item, i) => (
            <div key={i} className="relative p-8 border border-white/10 group hover:bg-white/5 transition-all">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary-blue/10 transition-colors">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-lg text-secondary-gray relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div>
            <h3 className="font-heading font-bold text-3xl text-primary mb-8">
              "We used to miss calls on weekends. Now every call is answered—and qualified leads get booked."
            </h3>
            <p className="font-bold text-primary/80">— Plumbing Owner, Florida</p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <ShieldCheck className="mx-auto h-20 w-20 text-white mb-8" />
        <h2 className="font-heading font-black text-4xl text-white mb-6">The Guarantee</h2>
        <p className="text-2xl md:text-3xl font-medium text-secondary-gray leading-relaxed border-2 border-white/20 p-8 md:p-12 bg-white/5">
          "If we don’t increase booked opportunities in the first 30 days, we work for free until we do."
        </p>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 text-center">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">Ready to Deploy Your AI Voice Assistant?</h2>
        <p className="text-secondary-gray mb-12 max-w-2xl mx-auto">
          Transparent pricing. No hidden fees. Systems that scale with you.
        </p>
        <Link to="/pricing" className="inline-flex items-center font-heading font-bold text-primary-blue hover:text-white transition-colors text-xl group">
          VIEW FULL PRICING <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary-gray text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-5xl md:text-6xl mb-8 leading-tight">
            STOP LOSING LEADS.<br />START BOOKING APPOINTMENTS.
          </h2>
          
          {/* CTA BUTTONS - SAME AS HERO */}
          <div className="flex flex-col items-center gap-4 w-full mt-12">
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <a href="tel:5612643614" className={`${buttonBaseClass} bg-accent-red text-white hover:bg-white hover:text-accent-red transform hover:-translate-y-1 gap-2 shadow-xl`}>
                <Phone className="w-5 h-5" />
                CALL FOR DEMO
              </a>
              <Link to="/pricing" className={`${buttonBaseClass} border-2 border-primary text-primary hover:bg-primary hover:text-white`}>
                SEE PRICING
              </Link>
            </div>

            <Link to="/contact" className={`${buttonBaseClass} bg-primary-blue text-black hover:bg-white hover:text-black`}>
              BOOK MORE APPOINTMENTS
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;