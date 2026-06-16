import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is the walk score of Residencial Piedra Linda?",
    answer: "Residencial Piedra Linda has a walk score of 12, it's car-dependent."
  },
  {
    id: 2,
    question: "What schools are assigned to Residencial Piedra Linda?",
    answer: "The schools assigned to Residencial Piedra Linda include Colegio San Judas, Liceo Pedro Henríquez Ureña, and Colegio Calasanz."
  },
  {
    id: 3,
    question: "Does Residencial Piedra Linda have in-unit laundry?",
    answer: "Yes, Residencial Piedra Linda has in-unit laundry for some or all of the units."
  },
  {
    id: 4,
    question: "What neighborhood is Residencial Piedra Linda in?",
    answer: "Residencial Piedra Linda is in the Ensanche Naco neighborhood in Santo Domingo, Distrito Nacional."
  },
  {
    id: 5,
    question: "What are Residencial Piedra Linda's policies on pets?",
    answer: "A maximum of 1 cat is allowed per unit. This building has a one time fee of $300 and monthly fee of $60 for cats. A maximum of 1 dog is allowed per unit. This building has a one time fee of $300 and monthly fee of $60 for dogs."
  }
];

export default function FrequentlyAskedQuestions() {

  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#0f0f0f] space-y-6 pt-6 pb-4 border-t border-[#1f1f1f]">
      
      {/* --- Section Heading --- */}
      <h2 className="text-white text-[22px] font-extrabold tracking-tight">
        Frequently asked questions
      </h2>

      {/* --- FAQ Accordion List --- */}
      <div className="divide-y divide-[#1f1f1f]">
        {faqData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="py-4 first:pt-0 last:pb-0">
              
              {/* FAQ Accordion Trigger Button */}
              <button
                onClick={() => toggleFaq(item.id)}
                className="flex w-full items-center justify-between text-left gap-4 group cursor-pointer py-1"
              >
                <span className="text-white font-bold text-[15px] sm:text-[16px] tracking-tight transition-colors duration-200 group-hover:text-[#c5913b]">
                  {item.question}
                </span>
                {/* Elegant Gold Chevron Icon */}
                <ChevronDown 
                  size={18} 
                  className={`text-[#c5913b] shrink-0 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Smooth Dynamic Height Content Transition */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed font-normal pr-4">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}