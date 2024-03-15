import React from 'react';
import './card.css';
import icon_star from './images/icon-star.svg'
import icon_plus from './images/icon-plus.svg'
import icon_minus from './images/icon-minus.svg'
import data_FAQ from './dataCard'

function Card() {
  return (
    <main>
      <div className='FAQs'>
        <img width={'24px'} src={icon_star} alt="icon_star" />
        <h1>FAQs</h1>
      </div>
      {/* q1 */}
      <div className='FAQ'> 
        <div className='question'>
          <h2>{data_FAQ[0].question}</h2>
          <img width={'30px'} src={icon_minus} alt="icon_minus" />
        </div>
        <p>{data_FAQ[0].reponse}</p>
      </div>
      {/* q2 */}
      <div className='FAQ'> 
        <div className='question'>
          <h2>{data_FAQ[1].question}</h2>
          <img width={'30px'} src={icon_plus} alt="icon_plus" />
        </div>
      </div>
      <div className='FAQ'> 
        <div className='question'>
          <h2>{data_FAQ[2].question}</h2>
          <img width={'30px'} src={icon_plus} alt="icon_plus" />
        </div>
      </div>
      <div className='FAQ'> 
        <div className='question'>
          <h2>{data_FAQ[3].question}</h2>
          <img width={'30px'} src={icon_plus} alt="icon_plus" />
        </div>
      </div>
    </main>
  )
}

export default Card