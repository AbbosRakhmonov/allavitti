import React from 'react'
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from 'mdb-react-ui-kit'
import {useNavigate} from 'react-router-dom'
import {map, uniqueId} from 'lodash'
import {useDispatch} from 'react-redux'
import {deleteProduct} from '../Pages/Admin/productsSlice'
import {deleteArticle} from '../Pages/Admin/articlesSlice'

function AdminTable({data, page = 'article'}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigateTo = (id) => {
        navigate(id)
    }
    const deleteArt = (id) => {
        dispatch(deleteArticle(id))
    }
    const deleteProd = (id) => {
        dispatch(deleteProduct(id))
    }
    return (
        <MDBTable align="middle" hover responsive>
            <MDBTableHead>
                {
                    page === 'article' ?
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col" colSpan={2}>Title</th>
                        </tr> :
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Image</th>
                            <th scope="col" colSpan={2}>Title</th>
                        </tr>
                }
            </MDBTableHead>
            <MDBTableBody>
                {
                    page === 'article' ? map(data, (item, index) => <tr key={uniqueId('article_')}>
                        <td>{index + 1}</td>
                        <td>
                            <p className="fw-normal mb-1">{item?.title?.uz || item?.title?.ru || item?.title?.en || item?.title?.tr}</p>
                        </td>
                        <td width={'10%'}>
                            <div className={'d-flex align-items-center justify-content-end gap-2'}>
                                <MDBBtn color="warning" rounded size="sm"
                                        onClick={() => navigateTo(`maqolalar/${item?._id}`)}>
                                    Edit
                                </MDBBtn>
                                <MDBBtn color="danger" rounded size="sm" onClick={() => deleteArt(item?._id)}>
                                    Delete
                                </MDBBtn>
                            </div>
                        </td>
                    </tr>) : map(data, (item, index) => <tr key={uniqueId('product_')}>
                        <td>{index + 1}</td>
                        <td>
                            <p className="text-muted mb-0">
                                <img width={100} crossOrigin="anonymous"
                                     src={'http://localhost:5000/uploads/' + item?.image} alt={item?.image}/>
                            </p>
                        </td>
                        <td>
                            <p className="fw-normal mb-1">{item.title}</p>
                        </td>
                        <td width={'10%'}>
                            <div className={'d-flex align-items-center justify-content-end gap-2'}>
                                <MDBBtn color="warning" rounded size="sm" onClick={() => navigateTo(item?._id)}>
                                    Edit
                                </MDBBtn>
                                <MDBBtn color="danger" rounded size="sm" onClick={() => deleteProd(item?._id)}>
                                    Delete
                                </MDBBtn>
                            </div>
                        </td>
                    </tr>)
                }
            </MDBTableBody>
        </MDBTable>
    )
}

export default AdminTable