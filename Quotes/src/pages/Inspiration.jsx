import React from 'react';
import QuoteCard from '../components/QuoteCard';
import inspirationQuotes from '../data/inspirationQuote.json'

function Inspiration() {
  return (
    <div className='w-full flex flex-col gap-3'>
      {inspirationQuotes.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Inspiration;