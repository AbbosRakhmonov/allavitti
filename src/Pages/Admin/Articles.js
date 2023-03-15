import React, {useEffect} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import AdminTable from '../../Components/AdminTable'
import {MDBBtn, MDBRow} from 'mdb-react-ui-kit'
import ArticleEdit from './ArticleEdit'
import {useDispatch, useSelector} from 'react-redux'
import {getArticles} from './articlesSlice'

function Articles() {
    const dispatch = useDispatch()
    const {articles} = useSelector(state => state.articles)
    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch])
    return (
        <>
            <Routes>
                <Route path="/" element={<>
                    <MDBRow>
                        <h3 className={'text-center my-3'}>Maqolalar</h3>
                        <div className={'mb-3 text-end'}>
                            <Link to={'maqolalar/add'}>
                                <MDBBtn color={'primary'}>Maqola yaratish</MDBBtn>
                            </Link>
                        </div>
                    </MDBRow>
                    <AdminTable data={articles}/>
                </>}/>
                <Route path="/maqolalar/add" element={<ArticleEdit/>}/>
                <Route path="/maqolalar/:id" element={<ArticleEdit page={'edit'}/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </>
    )
}

export default Articles