import React from 'react'
import Slider from 'react-slick';
import image from "../assets/images/image.jpg"
import image1 from "../assets/images/image1.jpg"

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div >
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",marginTop:"20px"}}>
          <div style={{fontSize:"24px",color:"	#FF6F00"}}>ÖNE ÇIKANLAR</div>
          <button style={{width:"180px",height:"40px",marginRight:"10px",borderRadius:"20px",border:"0.2px solid lightGray",marginBottom:"15px",fontSize:"18px",color:"white",backgroundColor:"	#FF6F00",}}>İncele</button>
        </div>
        <Slider {...settings}>
      <div>
        
       
       <img style={{width:"1620px", height:"400px"}} src={image} alt="" />
      
      </div>
      <div>
      
        <img style={{width:"1620px", height:"400px"}} src={image1} alt="" />
      </div>
      </Slider>
    </div>
  )
}

export default SliderComp

