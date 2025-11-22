import React from 'react'
import humorQuotes from '../data/humorQuotes.json'
import QuoteCard from '../components/QuoteCard';


function Humor() {
  return (
    <div className='w-full flex flex-col gap-3'>
      {humorQuotes.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Humor