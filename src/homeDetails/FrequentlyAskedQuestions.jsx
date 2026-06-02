import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What is the walk score of Boulder Pointe Apartments?",
    answer: "Boulder Pointe Apartments has a walk score of 12, it's car-dependent."
  },
  {
    id: 2,
    question: "What schools are assigned to Boulder Pointe Apartments?",
    answer: "The schools assigned to Boulder Pointe Apartments include William A Carter School, Middletown Twin Towers Middle School, and Middletown High School."
  },
  {
    id: 3,
    question: "Does Boulder Pointe Apartments have in-unit laundry?",
    answer: "Yes, Boulder Pointe Apartments has in-unit laundry for some or all of the units."
  },
  {
    id: 4,
    question: "What neighborhood is Boulder Pointe Apartments in?",
    answer: "Boulder Pointe Apartments is in the Mechanicstown neighborhood in Middletown, NY."
  },
  {
    id: 5,
    question: "What are Boulder Pointe Apartments's policies on pets?",
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