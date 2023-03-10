import React, {useEffect} from 'react'
import ProductComponent from '../../Components/ProductComponent/ProductComponent'
import ProductImg1 from './../../Assets/Images/product1.png'
import ProductImg2 from './../../Assets/Images/product2.png'
import ProductImg3 from './../../Assets/Images/product3.png'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useTranslation} from 'react-i18next'

function Products() {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init()
    }, [])
    const productData = [
        {
            productName: 'Allavitti 100ml',
            productText: 'Yillardan beri sotayotgan va minglab odamlarning tabassumiga sabab bo\'lgan Allavitti kremi maxsus tayyorlangan formulasi bilan sizni qo\'llab-quvvatlash uchun ishlab chiqarilgan qo\'shimcha yordam mahsulotidir.  U sog\'lom tarkibi, terini oziqlantirish formulasi va to\'g\'ri foydalanish natijasida sizga beradigan hissasi bilan sog\'lom teri tuzilishiga ega bo\'lishingizga yordam beradi.',
            productImg: ProductImg1,
            reverseBlock: false
        },
        {
            productName: 'Viticolor',
            productText: 'Vitiligo kabi kasalliklarga qarshi kurashish uchun dunyoning yetakchi pozitsiyasini egallab turgan ASM fransuz dermatologiya laboratoriyasi bizga keng tarqalgan bo\'lib ma\'lum bo\'lib, bu jiddiy kasallik tufayli paydo bo\'lgan kamchiliklarni yashirishga yordam beradigan yangi mahsulotni taqdim etdi. Endi ko\'zgu oldida bir necha soat turishingiz shart emas, terida muammoli joylar bo\'ylab qanday va qanday qilib bo\'yash mumkinligini aniqlang. Va u qo\'llar bilan bog\'liqmi? Bu erda faqatgina vaqt yordam bermaydi. Va u qo\'llar bilan bog\'liqmi? Bu erda faqatgina vaqt yordam bermaydi.',
            productImg: ProductImg2,
            reverseBlock: true
        },
        {
            productName: 'B12 500 mcg',
            productText: 'O’tkazilgan ilmiy tadqiqotlar ma’lum vitaminlar (masalan, E, C, alfa-lipoik kislota) qabul qilish kasallikning kechishiga ta’sir qilishi va terapevtik samarani kuchaytirishi mumkinligini isbotladi. Shuning uchun shifokorlar bu teri kasalligi bilan og’rigan bemorlarga ko’pincha  ushbu guruhdan ma’lum preparatlarni buyuradilar. Eng mashhurlari orasida tiamin, askorbin kislota, pantoten kislota va riboflavinni ajratib ko’rsatish mumkin.\n' +
                '\n' +
                'Foliy kislotaning roli\n' +
                '\n' +
                'Shvetsiyada foliy kislota va vitamin B12`ning vitiligoga ta’siri bo’yicha tadqiqotlar o’tkazildi. Tadqiqotda vitiligo bilan kasallangan 100 bemor ishtirok etdi, ularning barchasi kuniga 2 marta 5 mg foliy kislotasi va 1 mg miqdorda kuniga 1 marta B12 vitamini qabul qilishdi. Shartli muolaja terigahar kuni ultrabinafsha nurlarini ta’sir ettirish edi. 3 oydan keyin natijalar umumlashtirildi. Barcha ishtirokchilarning yarmidan ortig’i ijobiy natijalarga erishdi',
            productImg: ProductImg3,
            reverseBlock: false
        }
    ]
    return(
        <div className='products'>
              <div className='pattern-left-box product-pattern-left'></div> 
               <div className='pattern-right-box product-pattern-right'></div> 
               <div className='pattern-left-box product-pattern-left'></div> 
               <div className='pattern-right-box product-pattern-right'></div> 
               <div className='pattern-center-box'></div> 
            <div className='product-container'>
                <div className='general-div-style' data-aos="fade-up" data-aos-duration="1000">
                     {t('our_product')}
                </div>
               <ul className='our-products'>
                    {
                       productData?.map((item,index)=>{
                           return(
                            <li key={index} data-aos="fade-up" data-aos-duration="1000">
                             <ProductComponent productName={item.productName} productText={item.productText} productImg={item.productImg} reverseBlok={item.reverseBlock}/> 
                            </li> 
                           )
                       }) 
                    }
                    
                </ul>      
            </div>
        </div>
    )
}

export default Products;