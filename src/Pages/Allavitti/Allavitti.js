import React, {useEffect} from "react";
import './style.css';
import Icon1 from './../../Assets/Images/icons/icon1.png';
import Icon2 from './../../Assets/Images/icons/icon2.png';
import Icon3 from './../../Assets/Images/icons/icon3.png';
import Icon4 from './../../Assets/Images/icons/icon4.png';
import Boy from './../../Assets/Images/little-boy.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Allavitti(){
   useEffect(() => {
      AOS.init();
    }, [])
    return(
        <div className="allavitti">
           <div className="all-container">
                <div className="all-text" data-aos-duration="1000">
                     <h2>Allavitti</h2>
                     <p>By Vitiligo</p>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12 order-2 order-lg-1 all-left-text">
                        <div className="absolut-text-all" data-aos-duration="1000">
                           SIzni vitiligo (oq dog’) qiynamoqdami?
                        </div>
                        <ul>
                           <li>
                              <p className="li-text">
                                 stres tuSHkunlikKa tushib qoliSH
                              </p>
                              <div className="li-icons">
                                  <img src={Icon1}/>
                              </div>
                           </li>
                           <li>
                              <p className="li-text">
                                 Odamlarni gap so'zidan uyalish
                              </p>
                              <div className="li-icons">
                                  <img src={Icon2}/>
                              </div>
                           </li>
                           <li>
                              <p className="li-text">
                                 Libos tanlovida no erkinlik
                              </p>
                              <div className="li-icons">
                                  <img src={Icon3}/>
                              </div>
                           </li>
                           <li>
                              <p className="li-text" data-aos-duration="1000">
                                 O'zini boshqalardan farqli his etish
                              </p>
                              <div className="li-icons" data-aos-duration="1000">
                                  <img src={Icon4}/>
                              </div>
                           </li>
                        </ul>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-md-6 col-12 order-1 order-lg-2">
                         <div className="all-right-img">
                            <img src={Boy} data-aos-duration="1000"/>
                         </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Allavitti;