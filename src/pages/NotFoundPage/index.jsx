import React from 'react'
import s from './index.module.css'
import notFoundimg from './404.png'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <div className={s.line}>
        <hr class='solid' />
      </div>

      <div className={s.notFoundPage}>
          <div className={s.fourZeroFour}>
              <p>4</p>
              <img src={notFoundimg} alt="imageFromNotFoundPage" />
              <p>4</p>
          </div>
          <h1>Page Not Found</h1>
          <h2>We’re sorry, the page you requested could not be found.<br/>Please go back to the homepage.</h2>
          <Link to={`/`} className={s.link}>
              <button className={s.button}>Go Home</button>
          </Link>
      </div>
    </div>
  )
}