import React from 'react';

import Quote from '../Quote';

const QuoteContainer = () => {
  const { quote, attribution } = getQuote();

  return <Quote quote={quote} attribution={attribution} />;
};

const getQuote = () => {
  const quotes = [
    {
      quote:
        'A good programmer is someone who always looks both ways before crossing a one-way street.',
      attribution: 'Doug Linder'
    },
    {
      quote:
        'The best performance improvement is the transition from the non-working state to the working state.',
      attribution: 'J. Osterhout'
    },
    {
      quote: 'Before software can be reusable, it first has to be usable.',
      attribution: 'Ralph Johnson'
    }
  ];

  return quotes[Math.floor(Math.random() * (quotes.length - 1) + 1)];
};

export default QuoteContainer;
