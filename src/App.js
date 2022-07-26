import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  const colors = [
    '#f72c1e',
    '#f7831e',
    '#148dc9',
    '#106846',
    '#e339e3'
  ]

  const quotes = [
    'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    'If you can dream it, you can achieve it.',
    'It does not matter how slowly you go as long as you do not stop.',
    'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
    'First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end'
  ]

  const authors = [
    'Oprah Winfrey',
    'Zig Ziglar',
    'Confucius',
    'Sheryl Sandberg',
    'Aristotle'
  ]

  let [indexNumber, setIndexNumber] = useState(0);

  function handleClick (colors) {
      document.documentElement.style.setProperty('--theme-color', colors)
      if(indexNumber === 4){
        setIndexNumber(0)
      }else{
        setIndexNumber(indexNumber + 1)
      }
    }

  return(
      <div>
        <div id="quote-box">
            <div id="quote-text">
              <i className = "fa-solid fa-quote-left"></i>
              <span>{quotes[indexNumber]}</span>
            </div>
            <div id="author-name">
              &#8211; {authors[indexNumber]}
            </div>
            <button id="twitter-button"><a href="twitter.com/intent/tweet" target="_blank"><i className = "fa-brands fa-twitter"></i></a></button>
            <button id="tumbler-button"><a href="tumblr.com/widgets/share/" target="_top"><i className = "fa-brands fa-tumblr"></i></a></button>
            <button id="new-quote" onClick = {()=>handleClick(colors[indexNumber])} style = {{transition: "all 1.0s ease"}}>New Quote</button>
        </div>
      </div>
    );
}

export default App;