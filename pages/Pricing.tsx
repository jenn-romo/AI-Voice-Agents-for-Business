import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-20 px-4">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-6">
          SIMPLE, STRAIGHTFORWARD <span className="text-primary-blue">PRICING</span>
        </h1>
        <p className="text-xl text-secondary-gray">
          Pay for an AI voice assistant that answers your calls and books appointments—without hiring more people.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* INBOUND RECEPTIONIST */}
        <div className="border border-white/10 bg-black/40 p-8 flex flex-col hover:border-primary-blue/30 transition-colors">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">INBOUND RECEPTIONIST</h3>
          <p className="text-secondary-gray text-base mb-6">Never miss a call again.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$997</span>
            <span className="text-secondary-gray text-lg"> / month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              1 AI Agent
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              24/7 AI Answering
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              500 calls
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              1,000 minutes
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              $0.10 per additional minute
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Appointment Scheduling
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Real-time Insights
            </li>
          </ul>
          <Link to="/contact" className="w-full block text-center border border-white text-white hover:bg-white hover:text-primary font-heading font-bold py-4 transition-all">
            GET STARTED
          </Link>
        </div>

        {/* INBOUND SALES REP - (Formerly Featured) */}
        <div className="border border-white/10 bg-black/40 p-8 flex flex-col hover:border-primary-blue/30 transition-colors">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">INBOUND SALES REP</h3>
          <p className="text-secondary-gray text-base mb-6">Complete sales automation.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$1,897</span>
            <span className="text-secondary-gray text-lg"> / month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              1 AI Agent
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              24/7 AI Answering
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              1,000 calls
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              2,000 minutes
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              $0.10 per additional minute
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Schedules Qualified Leads
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Sales Closing
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Product Knowledge
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Answering FAQs
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Real-time Insights
            </li>
          </ul>
          <Link to="/contact" className="w-full block text-center border border-white text-white hover:bg-white hover:text-primary font-heading font-bold py-4 transition-all">
            HIRE YOUR REP
          </Link>
        </div>

        {/* OUTBOUND SALES AGENT */}
        <div className="border border-white/10 bg-black/40 p-8 flex flex-col hover:border-primary-blue/30 transition-colors">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">OUTBOUND SALES AGENT</h3>
          <p className="text-secondary-gray text-base mb-6">Aggressive lead generation.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$3,997</span>
            <span className="text-secondary-gray text-lg"> / month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              1 AI Agent
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              2,000 calls (100 calls per day)
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              4,000 minutes
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              $0.20 per additional minute
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Custom Onboard Script Training
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              CRM Integration
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Calendar Integration
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Instant Market Insight
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Booked Sales Meetings
            </li>
            <li className="flex items-start text-base text-secondary-gray">
              <Check className="h-6 w-6 text-primary-blue mr-3 flex-shrink-0" />
              Real-time Insights
            </li>
          </ul>
          
          <Link to="/contact" className="w-full block text-center border border-white text-white hover:bg-white hover:text-primary font-heading font-bold py-4 transition-all">
            START CALLING
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pricing;