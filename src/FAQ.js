import React, { useState } from 'react'
import icon_plus from './images/icon-plus.svg'
import icon_minus from './images/icon-minus.svg'

function FAQ(props) {
    const [isShowen,setIsShowen] = useState(false)
    function toggleFAQ(){
        setIsShowen(!isShowen)
    }
  return (
    <div onClick={toggleFAQ} className='FAQ'>
        <div className='question'>
          <h2>{props.question}</h2>
          <img width={'30px'} src={isShowen ? icon_minus : icon_plus} alt="icon_minus" />
        </div>
        {isShowen && <p>{props.reponse}</p>}
      </div>
  )
}

export default FAQ