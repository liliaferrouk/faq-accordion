import React from 'react';
import './card.css';
import icon_star from './images/icon-star.svg'
import data_FAQ from './dataCard'
import FAQ from './FAQ';

function Card(props) {
  const dataElem = data_FAQ.map(elem=>{
    return(
      <FAQ
        key={elem.id}
        question={elem.question}
        reponse={elem.reponse}
        isMobile={props.isMobile}
      />
    )
  })
  return (
    <main>
      <div className='FAQs'>
        <img width={props.isMobile ? '24px': '40px'} src={icon_star} alt="icon_star" />
        <h1>FAQs</h1>
      </div>
      {dataElem}
    </main>
  )
}

export default Card