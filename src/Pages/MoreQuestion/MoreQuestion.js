import React, {useEffect, useState} from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {useSelector} from 'react-redux'
import {map, uniqueId} from 'lodash'

function MoreQuestion() {
  const [articlesObj, setArticlesObj] = useState([])
  const {t} = useTranslation()
  const {articles} = useSelector(state => state.articles)
  const {language} = useSelector(state => state.language)

  useEffect(() => {
    setArticlesObj(map(articles, (article, index) => {
      return {
        to: article._id,
        title: article.title
      }
    }).slice(0, 7))
  }, [articles])
  return (
      <div className="question-box">
        <div className="question-container">
          <h3 data-aos="fade-up" data-aos-duration="1000">{t('question_text')}</h3>
          <ul>
            {
              map(articlesObj, (article, index) => article.title[language] &&
                  <li key={uniqueId('article__')} data-aos="fade-up" data-aos-duration="1000">
                    <span>{index + 1}.</span><Link to={`articles/${article.to}`}
                                                   className="question-link">{article.title[language]}</Link>
                  </li>)
            }
          </ul>
        </div>
      </div>
  )
}

export default MoreQuestion;
