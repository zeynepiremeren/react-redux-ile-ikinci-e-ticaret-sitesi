import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div style={{marginLeft:"100px", marginRight:"100px", marginTop:"30px", marginBottom:"20px"}}>
      {children}
    </div>
  )
}

export default PageContainer
