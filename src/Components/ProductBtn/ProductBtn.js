import React from 'react'
import {MDBBtn} from 'mdb-react-ui-kit'
import {SlBasket} from 'react-icons/sl'
import {IoEyeOutline, IoHeartOutline} from 'react-icons/io5'
import './style.css'
import {useTranslation} from 'react-i18next'
import {HashLink} from 'react-router-hash-link'

function ProductBtn({likes=false, views=false, sell=false}){
    const {t} = useTranslation();
    const btnData = {
      selling: {
        btnName: t('product_btn'),
        btnIcon: <SlBasket size={`1.25rem`} color="green" fontWeight={`700`}/>,
      },
      // like: {
      //   btnName: 3333,
      //   btnIcon: <IoHeartOutline size={`1.25rem`} color="red" fontWeight={`700`}/>,
      // },
      // view: {
      //   btnName: 9999,
      //   btnIcon: <IoEyeOutline size={`1.25rem`} color="blue" fontWeight={`700`}/>,
      // },
    }
    return(
      <>
      {
         sell === true ? (
          <HashLink className="product-btn-style product-order-link" smooth to="https://t.me/turkiye_saliha">
          <span className="product-btn-icon">
                {
                  btnData.selling.btnIcon
                }
            </span>
            <span>
            {
                btnData.selling.btnName 
            }
            </span>
          </HashLink>
         ):""
      }
      {
         sell === false ? (
         <MDBBtn className="product-btn-style">
           <span className="product-btn-icon">
               {
                 likes === true ? btnData.like.btnIcon : views === true ? btnData.view.btnIcon: ''
               }
           </span>
           <span>
           {
                 likes === true ? btnData.like.btnName : views === true ? btnData.view.btnName: ''
               }
           </span>
        </MDBBtn>
         ): ""
      }
      </>
        
    )
}

export default ProductBtn;