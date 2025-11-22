import React from 'react'
import wishdom from '../data/wisdomQuotes.json'
import QuoteCard from '../components/QuoteCard';

function Wisdom() {
return (
    <div className='w-full flex flex-col gap-3'>
      {wishdom.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Wisdom