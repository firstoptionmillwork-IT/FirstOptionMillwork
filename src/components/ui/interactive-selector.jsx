"use client";
import React, { useState, useEffect } from 'react';
import { FaHammer, FaCouch, FaUtensils, FaBoxOpen, FaLayerGroup } from 'react-icons/fa';
import SectionHeader from '@/components/ui/section-header';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "Custom Millwork",
      description: "Precision-crafted architectural woodwork",
      image: "/what-we-offer/1.avif",
      icon: <FaHammer size={22} className="text-white" />
    },
    {
      title: "Fine Cabinets",
      description: "Bespoke cabinetry built to last",
      image: "/what-we-offer/2.avif",
      icon: <FaBoxOpen size={22} className="text-white" />
    },
    {
      title: "Custom Kitchens",
      description: "Tailored kitchens, refined to detail",
      image: "/what-we-offer/3.avif",
      icon: <FaUtensils size={22} className="text-white" />
    },
    {
      title: "Custom Furniture",
      description: "Handcrafted pieces for every space",
      image: "/what-we-offer/4.avif",
      icon: <FaCouch size={22} className="text-white" />
    },
    {
      title: "Interior Trim & Doors",
      description: "Elegant finishing for premium interiors",
      image: "/what-we-offer/5.avif",
      icon: <FaLayerGroup size={22} className="text-white" />
    }
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
    timers.push(timer);
    });
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center py-12 font-sans text-white"
      style={{
        backgroundImage: "url('/background/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Header Section */}
      <div className="relative z-10 w-full max-w-3xl mb-12">
        <SectionHeader
          eyebrow="Our Services"
          titleBefore="Bespoke"
          titleHighlight="Millwork"
          titleAfter="& Cabinetry"
          subtitle="Crafted with precision and built to endure"
          dark={true}
        />
      </div>

      {/* Options Container */}
      <div className="relative z-10 flex w-full max-w-[1100px] min-w-[600px] h-[500px] mx-auto items-stretch overflow-hidden px-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index
                ? '0 20px 60px rgba(0,0,0,0.50)'
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex-grow, box-shadow, background-size',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div
              className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '140px',
                boxShadow: activeIndex === index
                  ? 'inset 0 -140px 140px -140px #000, inset 0 -140px 140px -80px #000'
                  : 'inset 0 -140px 0px -140px #000, inset 0 -140px 0px -80px #000'
              }}
            />

            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 pointer-events-none px-4 gap-3 w-full" style={{ zIndex: 2 }}>
              <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="text-white whitespace-pre relative">
                <div
                  className="font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.title}
                </div>
                <div
                  className="text-base text-gray-300 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default InteractiveSelector;