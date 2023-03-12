import React, {useEffect} from 'react'
import ProductBtn from '../ProductBtn/ProductBtn'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProductComponent({
  productName,
  productText,
  productImg,
  reverseBlok = false,
}) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="products-component-style">
      <div className="row">
        {reverseBlok === true ? (
          <>
            <div className="col-xl-9 col-lg-9 col-12 product-text order-2 order-lg-1">
              <div className="product-text-head">
                <h3>{productName}</h3>
                <p>{productText}</p>
              </div>
              <div className="product-btns">
                <ProductBtn sell={true} />
                <ProductBtn views={true} />
                <ProductBtn likes={true} />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-12 product-img order-1 order-lg-2">
              <img src={productImg} alt={'product image by allaviti'}/>
            </div>
          </>
        ) : (
          <>
            <div className="col-xl-4 col-lg-4 col-12 product-img">
              <img src={productImg} />
            </div>
            <div className="col-xl-8 col-lg-8 col-12 product-text">
              <div className="product-text-head">
              <h3 >{productName}</h3>
                <p>{productText}</p>
              </div>
              <div className="product-btns product-btns-false" >
                <ProductBtn sell={true} />
                <ProductBtn views={true} />
                <ProductBtn likes={true} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
