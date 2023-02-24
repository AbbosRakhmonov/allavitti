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
import {useTranslation} from 'react-i18next'

function ProductsPage() {
    const animation = useAnimationControls()
    const {ref, inView} = useInView({threshold: 0.5})
    const {t} = useTranslation();

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
            name: t('product_1_name'),
            price: 10000,
            image: P1,
            description: t('product_1_title'),
            bg: 'rgba(36,2,63,0.84)'
        },
        {
            id: 2,
            name:  t('product_2_name'),
            price: 10000,
            image: P2,
            description: t('product_2_title'),
            bg: 'rgba(161,40,3,0.84)'
        },
        {
            id: 3,
            name: t('product_3_name'),
            price: 10000,
            image: P3,
            description: t('product_3_title'),
            bg: 'rgba(0,70,108,0.84)'
        },
        {
            id: 4,
            name: t('product_4_name'),
            price: 10000,
            image: P4,
            description: t('product_4_title'),
            bg: 'rgba(161,171,0,0.84)'
        }
    ]
    return (
        <section ref={ref} className={'h-100 d-flex flex-column productsSection py-4'} id='product_page_id'>
            <ParticlesBg bg={true} type={'circle'}/>
            <h4 className={`productSectionTitle ${inView ? 'productSectionTextsAnimated' : ''}`}><span>{t('our_product')}</span>
            </h4>
            <p className={`mb-4 productSectionText ${inView ? 'productSectionTextsAnimated' : ''}`}>{t('our_product_title')}</p>
            <div className="productsContainer px-md-3 px-lg-5">
                {map(products, (product) => <Product key={uniqueId('product_')} inView={inView} product={product}/>)}
            </div>
        </section>
    )
}

export default ProductsPage