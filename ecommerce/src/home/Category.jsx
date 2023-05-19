import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../redux/categorySlice';


const Category = ({setCategory}) => {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    console.log(categories, "categories");

  useEffect(()=>{
    dispatch(getCategories())
  },[dispatch])

  return (
    <div style={{width:"15%",backgroundColor:"	#FF6F00", marginTop:"30px",padding:"10px"}}>
      <div style={{fontSize:"24px", fontWeight:"inherit",marginLeft:"5px",borderBottom:"0.3px solid white",paddingBottom:"10px",paddingLeft:"15px",color:"white" }}>KATEGORİLER</div>
      {
        categories?.map((category,i)=>(
            <div  onClick={()=> setCategory(category) }   key={i} style={{marginTop:"10px", marginLeft:"5px",height:"40px", display:"flex" ,  alignItems:"center",paddingLeft:"10px",width:"170px",marginRight:"5px",borderBottom:"0.3px solid white" ,color:"white",textTransform:"capitalize"}} > {category} </div>
        ))
      }
    </div>
  )
}

export default Category
