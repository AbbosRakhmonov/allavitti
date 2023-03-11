import React, {useRef, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import MainBottom from '../../Components/MainBottom/MainBottom';
import SwiperImg from '../SwiperImg/SwiperImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
function Main(){
    useEffect(() => {
        AOS.init();
      }, [])

      const mainRef = useRef(null);
     window.addEventListener("scroll",function(){
        mainRef.current.classList.toggle("sticy",window.scrollY>0)         
     })
    return(
        <>
            <Navbar/>
            <div className='main' ref={mainRef}>
                <div className='pattern-left-box main-pattern-left' data-aos="fade-up" data-aos-duration="1000"></div> 
               <div className='pattern-right-box main-pattern-right' data-aos="fade-up" data-aos-duration="1000"></div>  
              <div className='main-container'>
                  <div className='row'>
                     <div className='col-xl-6 col-lg-6 col-12 col-first-6 order-2 order-md-1' >
                        <div className='main-left-box'>
                              <span className='main-left-span' data-aos="fade-up" data-aos-duration="1000">100% Quality Guranty</span>
                              <div className='text'>
                                 <h2 data-aos="fade-up" data-aos-duration="1000">VITILIGOni yo'q qilish vaqti kelmadimi?</h2>
                                 <p data-aos="fade-up" data-aos-duration="1000">Bizning saytimizda siz Vitiligo haqida ma'lumotga ega bo'lishingiz mumkin.</p>
                                 <ul data-aos="fade-up" data-aos-duration="1000">
                                    <li>
                                        <p>Vitiligo nima?</p>
                                    </li>
                                    <li>
                                        <p>Vitiligo tashxisi qanday qoyiladi?</p>
                                    </li>
                                    <li>
                                        <p>Vitiligo qanday kasallik haqida va bizning unga qarshi maxsulotlarimiz haqida ma'lumotga ma'lumotga ega bo'lishingiz mumkin</p>
                                    </li>
                                 </ul>
                                 <div className='more-btn-padding' data-aos="fade-up" data-aos-duration="1000">
                                    <MainBottom/>
                                 </div>
                                 
                              </div>
                        </div>
                     </div>
                     <div className='col-xl-6 col-lg-6 col-12 col-second-6 swiper-col-style order-1 order-md-2' data-aos="fade-up" data-aos-duration="1000">
                       <SwiperImg/>
                     </div>
                  </div>
              </div>
            </div>
        </>
    )
}

export default Main;