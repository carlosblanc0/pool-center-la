import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Nossa linha de produtos:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Equipamentos para construção'
              label='Acessórios'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Produtos químicos'
              label='Manutenção'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Móveis externos'
              label='Mobília'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Brinquedos & Playgrounds'
              label='Kids'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
