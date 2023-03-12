import React, {useEffect} from 'react'
import AboutProductImg from './../../Assets/Images/bargliopa.jpg'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutProduct() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className="about-product-style">
            <div className="pattern-left-box about-pattern-left"></div>
            <div className="pattern-right-box about-pattern-right"></div>
            <div className="about-product-container">
                <div className="general-div-style" data-aos="fade-up" data-aos-duration="1000">
                    Bizning Maxsulotlarimiz <br/>
                    Har bir maxsulotimiz o`ziga xos sifatga ega !
                </div>
                <div className="row about-box">
                    <div className="col-xl-3 col-lg-3 col-12 order-2 order-lg-1 about-left-text">
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li><span></span> 100% tabiiy</li>
                            <li><span></span> ishonchli</li>
                            <li><span></span> davolovchi</li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-10 col-12 order-1 order-lg-2 about-center-img"
                         data-aos="fade-up" data-aos-duration="1000">
                        <img src={AboutProductImg} alt={'allavitti krem dori tabletka'}/>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-12 order-3 about-right-text">
                        <ul data-aos="fade-up" data-aos-duration="1000">
                            <li><span></span> Sinovdan o'tgan</li>
                            <li><span></span> 8 yillik tajriba</li>
                            <li><span></span> 30-40 kunda natija</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutProduct