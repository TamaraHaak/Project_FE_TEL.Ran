import React from 'react'
import s from './index.module.css'
import { domen } from '../../domen'
import { Link } from 'react-router-dom'



export default function CategoryCard({ title, image, id}) {
  return (
    <div>
    <Link to={`/categories/${id}`}>
      <div className={s.category_card}>
        <img src={`${domen}${image}`} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  </div>
);
}