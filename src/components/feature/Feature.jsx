import React from 'react';
import ecommerce from '../assets/ecommerce.png';
import './Feature.scss';

function Feature() {
  return (
    <div className='feature'>
         <img src={ecommerce} alt="ecommerce" width="100%"/>
    </div>
  )
}

export default Feature;