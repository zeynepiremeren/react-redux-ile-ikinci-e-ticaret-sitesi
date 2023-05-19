import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {

  const dispatch =useDispatch();
  const [ quantity, setQuantity] = useState(0)
 
  const decrement = ()=>{
   if(quantity > 0) setQuantity(quantity -1)
  }

  const increment =()=>{
    if( quantity < 9)
    setQuantity( quantity +1)
  }

  const addBasket = () => {
    
   dispatch(addToCart({id: productDetail.id , title:productDetail.title , image: productDetail.image, price: productDetail.price, quantity: quantity}))
    
  };

  console.log(addBasket,"fjdhgf");
  
  return (
    <div style={{display:"flex"}}>
      <img  style={{width:"450px",height:"550px",backgroundColor:"white",marginTop:"30px",padding:"70px"}} src={productDetail.image} alt="" />
      <div>
      <div style={{position:"relative", top:"60px",left:"30px",fontSize:"28px",fontWeight:"bold",textTransform:"capitalize",color:"#FF6F00"}}> {productDetail.category} </div>
        <div style={{position:"relative", top:"80px",left:"30px",fontSize:"28px",fontWeight:"revert",}}> {productDetail.title} </div>
        <div style={{position:"relative", top:"100px",left:"30px",fontSize:"22px",fontWeight:"lighter",width:"720px",color:"	#757575"}}> {productDetail.description} </div>
        {/* <div style={{position:"relative", top:"100px",left:"30px",fontSize:"22px",fontWeight:"inherit",width:"720px"}}>Değerlendirmeler: {productDetail.rating.rate}</div> */}
        {/* <div style={{position:"relative", top:"100px",left:"30px",fontSize:"22px",fontWeight:"inherit",width:"720px"}}>Satın Alımlar: {productDetail.rating.count}</div> */}
        <div style={{position:"relative", top:"150px",left:"600px",fontSize:"32px",fontWeight:"bolder",width:"720px",color:"#FF6F00"}}>{productDetail.price} TL</div>

        <div  style={{position:"relative", top:"150px",left:"30px",fontSize:"32px",fontWeight:"initial",width:"720px",color:"#FF6F00"}}>
           <div style={{position:"relative",top:"50px", left:"600px",backgroundColor:"#FF6F00",color:"white",width:"100px",display:"flex", alignItems:"center", justifyContent:"center",height:"45px",borderRadius:"4px"}} >
           <div onClick={decrement} style={{padding:"5px"}}>-</div>
            <span style={{padding:"10px", width:"8px" ,border:"none",color:"none"}} > {quantity} </span>
            <div onClick={increment} style={{padding:"5px"}}>+</div>
           </div>

            <div onClick={addBasket} style={{backgroundColor:"#FF6F00", color:"white",display:"flex", alignItems:"center", justifyContent:"center",padding:"10px",position:"relative", top:"100px",borderRadius:"10px",fontWeight:"initial"}}> SEPETE EKLE </div>
        </div>
      </div>
    </div>
  )
}

export default DetailComp
