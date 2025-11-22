import React from 'react'
import sucessQuotes from '../data/sucessQuotes.json'
import QuoteCard from '../components/QuoteCard';

function Sucess() {
return (
    <div className='w-full flex flex-col gap-3'>
      {sucessQuotes.map(q => (
        <QuoteCard key={q.id} quote={q.quote} author={q.author}/>
      ))}
    </div>
  );
}

export default Sucess