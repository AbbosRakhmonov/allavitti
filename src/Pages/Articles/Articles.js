import React, {useEffect, useRef, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import {useParams} from 'react-router-dom'
import './style.css'
import {motion} from 'framer-motion'
import {filter, map, uniqueId} from 'lodash'
import ArticlesMenu from '../../Components/ArticlesMenu/ArticlesMenu'
import {useDispatch, useSelector} from 'react-redux'
import {getArticle, getArticles} from '../Admin/articlesSlice'
import {changeLanguage} from '../Navbar/navbarSlice'

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
    const dispatch = useDispatch()
    const {article} = useSelector(state => state.articles)
    const [activeArticles, setActiveArticles] = useState([])
    const [activeArticle, setActiveArticle] = useState(null)
    const {articles} = useSelector(state => state.articles)
    const {language} = useSelector(state => state.language)
    const ref = useRef()
    const contentRef = useRef()
    const {id} = useParams()
    useEffect(() => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }, [id])
    useEffect(() => {
        if (id) dispatch(getArticle(id))
    }, [id, dispatch])
    useEffect(() => {
        if (articles.length > 0) {
            if (!id) {
                dispatch(getArticle(articles[0]._id))
            }
            const filtered = filter(articles, (article) => {
                return article.title[language].trim() !== ''
            })
            const res = map(filtered, (article) => {
                return {
                    id: article._id,
                    title: article.title[language],
                    text: article.description[language]
                }
            })
            setActiveArticles(res.slice(0, 7))
        }
    }, [articles, language, dispatch])
    useEffect(() => {
        const parser = new DOMParser()
        if (article) {
            setActiveArticle({
                id: article._id,
                title: article.title[language],
                text: parser.parseFromString(article.description[language], 'text/html').body.textContent
            })
        }
    }, [article, language])

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])
    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) {
            dispatch(changeLanguage(lang))
        }
    }, [dispatch])
    return (
        <section className={'d-flex flex-column min-vh-100 bg-lightWhite article-box'}>
            <Navbar numberView={true} articles={true}/>
            <div className="pattern-left-box main-pattern-left"></div>
            <div className={`bottomOfSection`}>
                <div className="leftOfBottomSection position-absolute vh-100">
                    <div className="articles-content p-md-5" ref={ref}>
                        <motion.h1
                            key={uniqueId('article_title_')}
                            initial={'hidden'}
                            animate={'visible'}
                            variants={variants}
                            transition={{duration: 0.5}}
                            className={'article-title mb-4'}>{activeArticle && activeArticle?.title}</motion.h1>
                        <motion.div
                            initial={'hidden'}
                            animate={'visible'}
                            variants={variants}
                            transition={{delay: 0.2, duration: 0.5}}
                            key={uniqueId('article_text_')}
                            ref={contentRef}
                            dangerouslySetInnerHTML={{__html: activeArticle && activeArticle?.text}}
                            className={'article-text'}>
                        </motion.div>
                    </div>
                </div>
                <ArticlesMenu id={id || (articles.length > 0 ? articles[0]._id : 1)} articles={activeArticles}/>
            </div>
        </section>
    )
}

export default Articles