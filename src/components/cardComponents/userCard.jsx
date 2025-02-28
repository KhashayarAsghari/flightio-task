import { useEffect } from "react";
import { useState } from "react";
import UserTemplate from "./userTemplate";

const data = [{
  id: 1,
  title: 'Flower lamp',
  desc: 'Eco friendly diwali lamp',
  price: 50.00,
  img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
},
{
  id: 2,
  title: 'Clay lamp',
  desc: 'Eco friendly diwali lamp',
  price: 50.00,
  img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
},
{
  id: 3,
  title: 'Dung lamp',
  desc: 'Eco friendly diwali lamp',
  price: 50.00,
  img: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
}]

export default function UserCard() {
  return (
    <div>
      {data.map(({ title, id, desc, price, img }) => (<UserTemplate
        key={id}
        name={title}
        desc={desc}
        price={price}
        img={img}
      />))}
    </div>
  )
    ;
}
