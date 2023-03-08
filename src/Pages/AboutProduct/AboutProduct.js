import React, {useEffect} from "react";
import AboutProductImg from './../../Assets/Images/about-product.png';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutProduct(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div className="about-product-style">
            <div className="about-product-container">
            <div className='general-div-style'>
            Bizning Maxsulotlarimiz <br/>
Har bir maxsulotimiz o`ziga xos sifatga ega !
                </div>
                 <div className="row about-box">
                     <div className="col-xl-3 col-lg-3 col-12 order-2 order-lg-1 about-left-text">
                         <ul>
                            <li><span></span> 100% tabiiy</li>
                            <li><span></span> ishonchli</li>
                            <li><span></span> davolovchi</li>
                         </ul>
                     </div>
                     <div className="col-xl-4 col-lg-4 col-md-8 col-sm-10 col-12 order-1 order-lg-2 about-center-img">
                        <img src={AboutProductImg}/>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-12 order-3 about-left-text about-right-text">
                         <ul>
                            <li><span></span> Sinovdan o'tgan</li>
                            <li><span></span> 8 yillik tajriba</li>
                            <li><span></span> 30-40 da natija</li>
                         </ul>
                     </div>
                </div> 
            </div>
        </div>
    )
}

export default AboutProduct;