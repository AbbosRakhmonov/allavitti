import React, {useState} from 'react'
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdb-react-ui-kit'
import {useDispatch, useSelector} from 'react-redux'
import {signIn} from './loginSlice'
import {useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const {error, loading} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        login: '',
        password: ''
    })
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        dispatch(signIn(data)).then(({error, payload: {products}}) => {
            if (!error) {
                navigate('/dashboard', {replace: true})
            }
        })
    }
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6" className="mx-auto text-center min-vh-100 d-flex flex-column justify-content-center">
                    <h4 className="mb-4">Allavitti.com</h4>
                    {/*Alert*/}
                    {error && <div className="alert alert-danger" role="alert">
                        <strong>{error}</strong>
                    </div>}
                    <MDBInput wrapperClass="mb-4" label={'Login'} name={'login'} type="text" onChange={handleChange}/>
                    <MDBInput wrapperClass="mb-4" label={'Parol'} name={'password'} type="password"
                              onChange={handleChange}/>
                    <MDBBtn className="mb-4" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Loading...' : 'Kirish'}
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Login