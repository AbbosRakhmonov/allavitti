import React, {useEffect} from 'react'
import P1 from '../../Assets/Images/p1.jpg'
import P2 from '../../Assets/Images/p2.jpg'
import P3 from '../../Assets/Images/p3.jpg'
import P4 from '../../Assets/Images/p4.jpg'
import {map, uniqueId} from 'lodash'
import Product from '../../Components/Product/Product'
import './style.css'
import {useAnimationControls} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import ParticlesBg from 'particles-bg'

function ProductsPage() {
    const animation = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } else {
            animation.start('hidden')
        }
    }, [animation, inView])
    const products = [
        {
            id: 1,
            name: 'ACM Viticolor gel',
            price: 10000,
            image: P1,
            description: 'Ushbu tuzatuvchi jel uzoq vaqt davomida (3 dan 5 kungacha) depigmentatsiyalangan joylarni bo\'yaydi',
            bg: 'rgba(36,2,63,0.84)'
        },
        {
            id: 2,
            name: 'ACM Vitix gel',
            price: 10000,
            image: P2,
            description: 'Yuz va tana uchun bu kundalik parvarishlash depigmentatsiyalangan joylar (Vitiligo) bilan terini tartibga soladi.',
            bg: 'rgba(161,40,3,0.84)'
        },
        {
            id: 3,
            name: 'ACM Viticolor gel',
            price: 10000,
            image: P3,
            description: 'Vitix planshetlari hujayralarni oksidlovchi stressdan himoya qilishga yordam beradi.',
            bg: 'rgba(0,70,108,0.84)'
        },
        {
            id: 4,
            name: 'ACM Viticolor gel',
            price: 10000,
            image: P4,
            description: 'Oziq-ovqatning hujayra energiyasiga aylanishiga yordam beradi va yurak-qon tomir, qon aylanish va asab tizimining sog\'lig\'iga hissa qo\'shadi.',
            bg: 'rgba(161,171,0,0.84)'
        }
    ]
    return (
        <section ref={ref} className={'h-100 d-flex flex-column productsSection py-4'}>
            <ParticlesBg bg={true} type={'circle'}/>
            <h4 className={`productSectionTitle ${inView ? 'productSectionTextsAnimated' : ''}`}><span>Bizning Maxsulotlarimiz</span>
            </h4>
            <p className={`mb-4 productSectionText ${inView ? 'productSectionTextsAnimated' : ''}`}>Har bir maxsulotimiz
                o`ziga xos sifat va mos kafolatga ega !</p>
            <div className="productsContainer px-5">
                {map(products, (product) => <Product key={uniqueId('product_')} inView={inView} product={product}/>)}
            </div>
        </section>
    )
}

export default ProductsPage