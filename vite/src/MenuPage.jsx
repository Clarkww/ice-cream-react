import React from 'react'

import kinderImg from './assets/img/homemade-kinder-brownie.webp'

import mouseImg from './assets/img/mouse.webp'

import nachosImg from './assets/img/traditional-nachos.webp'

import pizzaImg from './assets/img/pizza-loaded-fries.webp'

export default function MenuPage() {
  return (
    <div className='menu-page'>
      <h2>Our Menu</h2>

      <div className='menu-cat'>
        <h3>Nachos and Loaded Fries</h3>

        <div className='menu-item'>
          <h4>Traditional Nachos</h4>
          <p>
            Tortilla chips with melted cheddar cheese, soured cream, chunky salsa, guacamole and jalapeños
          </p>
          <img src={nachosImg} alt="" className='menu-page-img' />
        </div>
        

        <div className='menu-item'>
          <h4>Pizza Loaded Fries</h4>
          <p>
            Skin on fries loaded with pepperoni, ham, American sausage, pizza sauce and grated cheese.
          </p>
          <img src={pizzaImg} alt="" className='menu-page-img' />
        </div>
      </div>

      <div className='menu-cat'>
        <h3>Homemade and Specials</h3>

        <div className='menu-item'>
          <h4>Homemade Kinder Brownie</h4>
          <p>
            Homemade Kinder bar stuffed chocolate brownie topped with luxury white hazelnut sauce,
            hazelnut sauce, crushed kinder bars and kinder beuno pieces
          </p>
          <img src={kinderImg} alt="" className='menu-page-img' />
        </div>

      </div>

      <div className='menu-cat'>
        <h3>Mickey Mouse Waffle</h3>

        <div className='menu-item'>
          <h4>Micky Mouse Waffle</h4>
          <p>
            Create your own mickey mouse waffle with a choice of 2 standard
            toppings & 1 premium topping & served with
            soft ice cream or whipped cream
          </p>
          <img src={mouseImg} alt="" className='menu-page-img' />
        </div>
      </div>

      
    </div>
  )
}
