import React from 'react'
import SliderComp from '../home/SliderComp'
import Sorting from '../home/Sorting'
import Category from '../home/Category'
import Products from '../home/Products'
import { useState } from 'react'

const Home = () => {

    const [sort, setSort]= useState("");
    const [category, setCategory]= useState("")

  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div style={{display:"flex"}}>
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
