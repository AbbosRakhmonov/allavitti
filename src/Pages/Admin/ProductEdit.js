import React, {useEffect, useState} from 'react'
import PrevLink from '../../Components/PrevLink'
import {MDBBtn, MDBCol, MDBInput, MDBRow, MDBTextArea} from 'mdb-react-ui-kit'
import DragAndDrop from '../../Components/DragAndDrop'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {addProduct, editProduct, getProduct, getProducts, resetError, resetProduct} from './productsSlice'

function ProductEdit({page = 'add'}) {
    const {product, error, loading} = useSelector(state => state.products)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState({
        uz: '',
        ru: '',
        en: '',
        tr: ''
    })
    const [files, setFiles] = useState([])
    const [img, setImg] = useState('')
    const {id} = useParams()
    const dispatch = useDispatch()

    const navigateBack = ({error}) => {
        if (!error) {
            dispatch(getProducts())
            window.history.back()
        }
    }

    const handleChangeDescription = (e) => {
        setDescription({
            ...description,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', JSON.stringify(description))
        formData.append('file', files[0])
        if (page === 'add') {
            dispatch(addProduct(formData)).then(navigateBack)
        } else {
            formData.append('image', product?.image)
            dispatch(editProduct({id: id, formData: formData})).then(navigateBack)
        }
    }

    useEffect(() => {
        if (id) dispatch(getProduct(id))
    }, [id, dispatch])

    useEffect(() => {
        dispatch(resetError())
        dispatch(resetProduct())
        if (product) {
            setTitle(product.title)
            setImg('http://localhost:5000/uploads/' + product.image)
            setDescription(product.description)
        }
    }, [product, dispatch])
    return (
        <MDBRow>
            <MDBCol className={'mt-3'}>
                <PrevLink/>
            </MDBCol>
            {error && <MDBCol size={12} className={'mt-3'}>
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </MDBCol>}
            <MDBCol size={12} className={'mt-5'}>
                <MDBRow className={'gap-md-0 gap-3'}>
                    <MDBCol md={6}>
                        <DragAndDrop img={img} files={files} setFiles={setFiles}/>
                    </MDBCol>
                    <MDBCol md={6}>
                        <MDBInput label="Maxsulot nomi" id="form1" type="text" value={title}
                                  onChange={(e) => setTitle(e.target.value)}/>
                        <MDBTextArea label="Maxsulot haqida (UZ)" id="textAreaExample" name={'uz'}
                                     value={description.uz} onChange={handleChangeDescription} rows={8}
                                     className={'mt-4'}/>
                        <MDBTextArea label="Maxsulot haqida (RU)" id="textAreaExample" name={'ru'}
                                     value={description.ru} onChange={handleChangeDescription} rows={8}
                                     className={'mt-4'}/>
                        <MDBTextArea label="Maxsulot haqida (EN)" id="textAreaExample" name={'en'}
                                     value={description.en} onChange={handleChangeDescription} rows={8}
                                     className={'mt-4'}/>
                        <MDBTextArea label="Maxsulot haqida (TR)" id="textAreaExample" name={'tr'}
                                     value={description.tr} onChange={handleChangeDescription} rows={8}
                                     className={'mt-4'}/>
                    </MDBCol>
                    <MDBCol size={12} className={'my-4 text-end'}>
                        <MDBBtn color={page === 'add' ? 'success' : 'warning'} disabled={loading} type={'submit'}
                                onClick={handleSubmit}>
                            {page === 'add' ? 'Saqlash' : 'O`zgartirish'}
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    )
}

export default ProductEdit