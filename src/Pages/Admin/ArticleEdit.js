import React, {useEffect, useState} from 'react'
import {
    MDBBadge,
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTabs,
    MDBTabsContent,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane
} from 'mdb-react-ui-kit'
import RichTextEditor from '../../Components/RichTextEditor'
import UZ from '../../Assets/Images/flags/uzb.png'
import RU from '../../Assets/Images/flags/rus.png'
import EN from '../../Assets/Images/flags/usa.png'
import TR from '../../Assets/Images/flags/tr.png'
import PrevLink from '../../Components/PrevLink'
import {useDispatch, useSelector} from 'react-redux'
import {addArticle, editArticle, getArticle, getArticles, resetArticle, resetError} from './articlesSlice'
import {useParams} from 'react-router-dom'

function ArticleEdit({page = 'add'}) {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {article, loading, error} = useSelector(state => state.articles)
    const [currentArticle, setCurrentArticle] = useState(null)
    const [titleUz, setTitleUz] = useState('')
    const [titleRu, setTitleRu] = useState('')
    const [titleEn, setTitleEn] = useState('')
    const [titleTr, setTitleTr] = useState('')
    const [articleUz, setArticleUz] = useState('')
    const [articleRu, setArticleRu] = useState('')
    const [articleEn, setArticleEn] = useState('')
    const [articleTr, setArticleTr] = useState('')
    const [basicActive, setBasicActive] = useState('tab1')
    const navigateBack = ({error}) => {
        if (!error) {
            dispatch(getArticles())
            window.history.back()
        }
    }
    const handleBasicClick = (tab) => {
        if (basicActive !== tab) {
            setBasicActive(tab)
        }
    }

    const submitHandler = () => {
        const obj = {
            title: {
                uz: titleUz,
                ru: titleRu,
                en: titleEn,
                tr: titleTr
            },
            description: {
                uz: articleUz,
                ru: articleRu,
                en: articleEn,
                tr: articleTr
            }
        }
        if (page === 'add') {
            dispatch(addArticle(obj)).then(navigateBack)
        } else {
            dispatch(editArticle({id: id, obj})).then(navigateBack)
        }
    }

    useEffect(() => {
        if (id) dispatch(getArticle(id))
    }, [id, dispatch])

    useEffect(() => {
        dispatch(resetArticle())
        dispatch(resetError())
        if (article) {
            setTitleUz(article?.title?.uz)
            setTitleRu(article?.title?.ru)
            setTitleEn(article?.title?.en)
            setTitleTr(article?.title?.tr)
            const parser = new DOMParser()
            const htmlUz = parser.parseFromString(article.description.uz, 'text/html')
            const htmlRu = parser.parseFromString(article.description.ru, 'text/html')
            const htmlEn = parser.parseFromString(article.description.en, 'text/html')
            const htmlTr = parser.parseFromString(article.description.tr, 'text/html')
            setArticleUz(htmlUz.body.textContent)
            setArticleRu(htmlRu.body.textContent)
            setArticleEn(htmlEn.body.textContent)
            setArticleTr(htmlTr.body.textContent)
        }
    }, [article, dispatch])
    return (
        <MDBContainer>
            <MDBRow className={'mb-4'}>
                <MDBCol className={'mt-3'}>
                    <PrevLink/>
                </MDBCol>
                {error && <MDBCol size={12} className={'mt-3'}>
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                </MDBCol>}
                <MDBTabs justify className="my-4">
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                            <img src={UZ} width={20} alt="uzbekistan flag"/>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                            <img src={RU} width={20} alt="russia flag"/>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                            <img src={EN} width={20} alt="england flag"/>
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                            <img src={TR} width={20} alt="turkey flag"/>
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>
                <MDBTabsContent>
                    <MDBTabsPane show={basicActive === 'tab1'}>
                        <MDBInput label="Maqola nomi (UZ)" id="article-name" type="text" className={'my-4'}
                                  value={titleUz} onChange={(e) => setTitleUz(e.target.value)}/>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <MDBBadge color={'primary'} className={'mb-3'}>
                                <h6 className={'m-0 h6'}>Maqola matni (UZ)</h6>
                            </MDBBadge>
                        </div>
                        <RichTextEditor value={articleUz} onChange={setArticleUz}/>
                        <hr/>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab2'}>
                        <MDBInput label="Maqola nomi (RU)" id="article-name" type="text" className={'my-4'}
                                  value={titleRu} onChange={(e) => setTitleRu(e.target.value)}/>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <MDBBadge color={'primary'} className={'mb-3'}>
                                <h6 className={'m-0 h6'}>Maqola matni (RU)</h6>
                            </MDBBadge>
                        </div>
                        <RichTextEditor value={articleRu} onChange={setArticleRu}/>
                        <hr/>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab3'}>
                        <MDBInput label="Maqola nomi (EN)" id="article-name" type="text" className={'my-4'}
                                  value={titleEn} onChange={(e) => setTitleEn(e.target.value)}/>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <MDBBadge color={'primary'} className={'mb-3'}>
                                <h6 className={'m-0 h6'}>Maqola matni (EN)</h6>
                            </MDBBadge>
                        </div>
                        <RichTextEditor value={articleEn} onChange={setArticleEn}/>
                        <hr/>
                    </MDBTabsPane>
                    <MDBTabsPane show={basicActive === 'tab4'}>
                        <MDBInput label="Maqola nomi (TR)" id="article-name" type="text" className={'my-4'}
                                  value={titleTr} onChange={(e) => setTitleTr(e.target.value)}/>
                        <div className={'d-flex align-items-center justify-content-center'}>
                            <MDBBadge color={'primary'} className={'mb-3'}>
                                <h6 className={'m-0 h6'}>Maqola matni (TR)</h6>
                            </MDBBadge>
                        </div>
                        <RichTextEditor value={articleTr} onChange={setArticleTr}/>
                        <hr/>
                    </MDBTabsPane>
                </MDBTabsContent>
                <MDBCol size={12} className={'mt-3 text-end'}>
                    <MDBBtn
                        disabled={loading}
                        color={page !== 'add' ? 'warning' : 'success'} onClick={submitHandler}>{
                        page !== 'add' ? 'Saqlash' : 'Qo`shish'
                    }</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default ArticleEdit