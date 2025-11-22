import React from 'react';

function QuoteCard({ quote, author }) {
    const copyQuote = () => {
    navigator.clipboard.writeText(quote)
      .then(() => {
        alert("Quote copied to clipboard!"); // optional feedback
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className='bg-linear-to-br from-indigo-100 to-white via-pink-500 w-full h-fit rounded-md shadow p-5'>
      <h1 className='h-[80%] w-full text-xl font-medium tracking-wide'>{quote}</h1>
      <div className='h-[20%] flex justify-between items-center mt-5'>
        <button onClick={copyQuote} className=' bg-white/30 backdrop-blur-sm text-white py-2 px-3 rounded-md'>Copy</button>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default QuoteCard;
