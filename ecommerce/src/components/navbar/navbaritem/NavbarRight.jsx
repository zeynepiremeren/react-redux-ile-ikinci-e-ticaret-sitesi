import React, { useEffect } from 'react'
import {FiSearch} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBasket} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'


const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {carts} = useSelector(state => state.carts)
  
console.log(carts ,"cardssss");

  useEffect(()=>{
    dispatch(getCartTotal(carts))
  },[dispatch,carts])

  return (
    <div style={{display:"flex",alignItems:"center",}}>
    <div style={{marginLeft:"10px"}}>
        <input type="text" placeholder='Search...' style={{height:"30px",width:"300px",borderRadius:"10px",paddingLeft:"20px",backgroundColor:"white", border:"0.2px solid lightGray",boxShadow:"revert-layer",color:"#FF6F00"}} />
        <FiSearch  style={{fontSize:"25px",position:"relative", top:"8px",right:"35px",color:"#FF6F00"}}/>
    </div>
    <AiOutlineHeart style={{fontSize:"30px",marginRight:"10px",color:"#FF6F00"}}/>
    <div onClick={()=> navigate("cart")} style={{position:"relative"}}>
        <div>
        <div style={{ position:"absolute", left:"35px", bottom:"31px"  , color:"white", borderRadius:"100px",width:"20px",height:"15px",zIndex:"1" }}>{carts.length}</div>
        <div style={ {  position:"absolute", left:"30px", bottom:"25px",backgroundColor:"#FF6F00",borderRadius:"100px",width:"20px",height:"20px"}}></div>
        </div>
        <BsBasket style={{fontSize:"30px",marginLeft:"10px",marginRight:"10px",color:"#FF6F00"}}/>
    </div>
    </div>
  )
}

export default NavbarRight
