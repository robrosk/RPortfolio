/* === RR: BEGIN ms-accordion === */
import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {title}
        <span className="accordion-icon">{isOpen ? '▼' : '►'}</span>
      </button>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
/* === RR: END ms-accordion === */
