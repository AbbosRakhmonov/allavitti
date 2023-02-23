import React, {useEffect, useRef} from 'react'
import Navbar from '../Navbar/Navbar'
import {useParams} from 'react-router-dom'
import './style.css'
import {motion} from 'framer-motion'
import {map, uniqueId} from 'lodash'
import ArticlesMenu from '../../Components/ArticlesMenu/ArticlesMenu'
import { useTranslation } from "react-i18next";

const variants = {
    'hidden': {
        opacity: 0,
        x: -100
    },
    'visible': {
        opacity: 1,
        x: 0
    }
}

function Articles() {
    const {t} = useTranslation();
    const articles = [
        {
            id: 1,
            title: t('articles_title1'),
            texts: [
                t('articles_text1_arr1'),
                t('articles_text1_arr2'),
                t('articles_text1_arr3')
            ]
        },
        {
            id: 2,
            title: t('articles_title2'),
            texts: [
                t('articles_text2_arr1'),
                t('articles_text2_arr2'),
                t('articles_text2_arr3')
            ]
        },
        {
            id: 3,
            title: t('articles_title3'),
            texts: [
                t('articles_text3_arr1'),
                t('articles_text3_arr2'),
            ]
        },
        {
            id: 4,
            title: t('articles_title4'),
            texts: [
                t('articles_text4_arr1'),
                t('articles_text4_arr2'),
            ]
        },
        {
            id: 5,
            title: t('articles_title5'),
            texts: [
                t('articles_text5_arr1'),
            ]
        },
        {
            id: 6,
            title: t('articles_title6'),
            texts: [
                t('articles_text6_arr1'),
            ]
        },
        {
            id: 7,
            title: t('articles_title7'),
            texts: [
                t('articles_text7_arr1'),
                t('articles_text7_arr2'),
                t('articles_text7_arr3')
            ]
        },
        {
            id: 8,
            title: t('articles_title8'),
            texts: [t('articles_text8_arr1')]
        },
        {
            id: 9,
            title: t('articles_title9'),
            texts: [
                t('articles_text9_arr1'),
                t('articles_text9_arr2'),
            ]
        },
        {
            id: 10,
            title: t('articles_title10'),
            texts: [
                t('articles_text10_arr1'),
                t('articles_text10_arr2'),
                t('articles_text10_arr3')
            ]
        },
        {
            id: 11,
            title: t('articles_title11'),
            texts: [
                t('articles_text11_arr1'),
                t('articles_text11_arr2'),
                t('articles_text11_arr3')
            ]
        },
        {
            id: 12,
            title: t('articles_title12'),
            texts: [
                t('articles_text12_arr1'),
                t('articles_text12_arr2'),
            ]
        },
        {
            id: 13,
            title: t('articles_title13'),
            texts: [
                t('articles_text13_arr1')
            ]
        },
        {
            id: 14,
            title: t('articles_title14'),
            texts: [
                t('articles_text14_arr1'),
            ]
        },
        {
            id: 15,
            title: t('articles_title15'),
            texts: [
                t('articles_text15_arr1'),
                t('articles_text15_arr2'),
            ]
        }
    ]
    console.log(articles)
    const ref = useRef()
    const {id = 1} = useParams()
    const {title, texts} = articles[Number(id) - 1]
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }, [id])
    return (
        <section className={'d-flex flex-column min-vh-100 bg-lightWhite'}>
            <Navbar/>
            <div className={`bottomOfSection`}>
                <div className="leftOfBottomSection position-absolute vh-100">
                    <div className="articles-content p-md-5" ref={ref}>
                        <motion.h1
                            key={title}
                            initial={'hidden'}
                            animate={'visible'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            className={'article-title mb-4'}>{title}</motion.h1>
                        {
                            map(texts, (text) =>
                                <motion.p
                                    initial={'hidden'}
                                    animate={'visible'}
                                    variants={variants}
                                    transition={{delay: 0.2, duration: 0.5}}
                                    key={uniqueId('article_text_')}
                                    className={'article-text'}>{text}</motion.p>)
                        }
                    </div>
                </div>
                <ArticlesMenu id={id} articles={articles}/>
            </div>
        </section>
    )
}

export default Articles