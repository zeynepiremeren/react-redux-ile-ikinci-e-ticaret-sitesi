import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

    const navigate = useNavigate();


  return (
    <div onClick={()=> navigate(`products/${product.id}`)} style={{width:"400px", backgroundColor:"white",height:"650px",margin:"30px"}}>
    <img style={{width:"300px",height:"400px",backgroundColor:"white",marginTop:"30px",padding:"20px"}}  src={product?.image} alt="" />  
    <h4 style={{fontSize:"18px", marginLeft:"20px",color:"#546E7A" }}> {(product?.title).substring(0,20)} </h4>
    

    <div style={{marginLeft:"20px", fontSize:"24px",color:"#546E7A"}}>  {product?.price} TL</div>
    </div>
  )
}

export default Product
