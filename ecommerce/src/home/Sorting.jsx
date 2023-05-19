import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div style={{backgroundColor:"#FF6F00",marginTop:"25px",padding:"10px",display:"flex",alignItems:"center",justifyContent:"end"}}>
     <select onChange={e => setSort(e.target.value)} style={{width:"100px",height:"40px",borderRadius:"5px",border:" 0.1px solid lightGray",padding:"5px",backroundColor:"lightGray"}} name="" id="">
        <option disabled value="">SEÇİNİZ</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
     </select>
    </div>
  )
}

export default Sorting
