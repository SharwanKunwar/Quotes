import React from 'react'
import philosopyQuotes from '../data/philosopyQuotes.json'
import QuoteCard from '../components/QuoteCard';

function Philosopy() {
  return (
    <div className='w-full flex flex-col gap-3'>
      {philosopyQuotes.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Philosopy