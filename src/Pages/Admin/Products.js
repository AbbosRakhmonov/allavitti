import React, {useEffect} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import AdminTable from '../../Components/AdminTable'
import ProductEdit from './ProductEdit'
import {MDBBtn, MDBRow} from 'mdb-react-ui-kit'
import {useDispatch, useSelector} from 'react-redux'
import {getProducts} from './productsSlice'

function Products() {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <Routes>
                <Route path="/" element={<>
                    <MDBRow>
                        <h3 className={'text-center my-3'}>Mahsulotlar</h3>
                        <div className={'mb-3 text-end'}>
                            <Link to={'add'}>
                                <MDBBtn color={'primary'}>Mahsulot yaratish</MDBBtn>
                            </Link>
                        </div>
                    </MDBRow>
                    <AdminTable page={'product'} data={products}/>
                </>}/>
                <Route path="/:id" element={<ProductEdit page={'edit'}/>}/>
                <Route path="/add" element={<ProductEdit/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </>
    )
}

export default Products