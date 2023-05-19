import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft'
import NavbarRight from './navbaritem/NavbarRight'

const Nabvar = () => {
  return (
    <div style={{display:"flex" ,alignItems:"center", justifyContent:"space-between"}}>
     <NavbarLeft/>
     <NavbarRight/>
    </div>
  )
}

export default Nabvar
