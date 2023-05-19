import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../redux/productSlice'
import Loading from '../components/Loading'
import Product from './Product'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

const Products = ({category,sort}) => {
    const dispatch = useDispatch()
    const {products, productsStatus} = useSelector(state=> state.products)

    const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



 
 

   console.log(sort, "fjhwdff")

   useEffect(()=>{
   if(category){
    dispatch(getCategoryProducts(category))
   } else{
    dispatch(getProducts())
   }

    
   },[dispatch, category])

  return (
    <div>
      {
        productsStatus === "LOADİNG" ? <Loading/> : 
        <>  
        <div style={{display:"flex" ,flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
            {
                currentItems?.sort((a,b)=>sort ==="inc"? a.price- b.price :sort === "dec" ? b.price-a.price : null).map((product, i )=>(  
                     <Product key={i} product={product} />
                ))
            }
        </div>
        <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
        </>
        }
    </div>
  )
}

export default Products
