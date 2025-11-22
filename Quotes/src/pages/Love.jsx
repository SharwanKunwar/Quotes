import React from 'react'
import loveQuotes from '../data/loveQuotes.json'
import QuoteCard from '../components/QuoteCard';

function Love() {
return (
    <div className='w-full flex flex-col gap-3'>
      {loveQuotes.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Love