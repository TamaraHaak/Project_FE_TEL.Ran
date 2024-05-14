import React from 'react';
import s from './index.module.css';
import inst_icon from './images/ic-instagram.png';
import whatsapp_icon from './images/ic-whatsapp.png';


export default function Footer() {
  return (
    <footer>

        <h1>Contact</h1>

        <div className={s.info_container}>
            <div className={s.info_card}>
                <h2>Phone</h2>
                <h3>+49 999 999 99 99</h3>
            </div>
            <div className={s.info_card}>
                <h2>Socials</h2>
                <div className={s.images}>
                    <a href="https://www.instagram.com"><img src={inst_icon} alt="Instagram" /></a>
                    <a href="https://web.whatsapp.com"><img src={whatsapp_icon} alt="WhatsApp" /></a>
                </div>
            </div>
            <div className={s.info_card}>
                <h2>Address</h2> 
                <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
            </div>
            <div className={s.info_card}>
                <h2>Working Hours</h2>
                <h3>24 hours a day</h3>
            </div>
        </div>

        <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4092231856716!2d13.372464412345053!3d52.507932871941506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1711279781662!5m2!1sru!2sde"></iframe>
        </div>
    </footer>
  )
}