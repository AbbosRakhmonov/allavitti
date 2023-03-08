import React, {useEffect} from 'react';
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
    return(
        <>
            <Navbar/>
            <div className='main'>
              <div className='main-container'>
                  <div className='row'>
                     <div className='col-xl-6 col-lg-6 col-12 col-first-6 order-2 order-md-1' >
                        <div className='main-left-box'>
                              <span className='main-left-span'>100% Quality Guranty</span>
                              <div className='text'>
                                 <h2 >VITILIGOni yo'q qilish vaqti kelmadimi?</h2>
                                 <p>Bizning saytimizda siz Vitiligo haqida ma'lumotga ega bo'lishingiz mumkin.</p>
                                 <ul>
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
                                 <div className='more-btn-padding'>
                                    <MainBottom/>
                                 </div>
                                 
                              </div>
                        </div>
                     </div>
                     <div className='col-xl-6 col-lg-6 col-12 col-second-6 swiper-col-style order-1 order-md-2'>
                       <SwiperImg/>
                     </div>
                  </div>
              </div>
            </div>
        </>
    )
}

export default Main;