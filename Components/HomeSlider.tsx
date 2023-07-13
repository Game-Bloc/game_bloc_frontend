import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { motion } from "framer-motion";
import vid from "../Features/Videos/elden.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mortal from "../assets/mortal.jpg"
import gotham from "../assets/gotham-knights.jpeg"

const HomeSlider = ()=>{

  const imgData = [
     {  
        id:'1',
        img:`${gotham}`,
        title:'Gotham Knight',
        description:'Triva actions and fun in playing this marvel game with other game players. Join to win cool prizes.'

     },

     {  
        id:'2',
        img:'https://images5.alphacoders.com/314/thumbbig-314472.webp',
        title:'Play funded tournaments on Call of Duty V',
        description:' Become the first and win cool cash prizes in Battle royale  '

     },

     {  
        id:'3',
        img: `${mortal}`,
        title:'Mortal Kombat 11 finally Here',
        description:'Want a one on one fight off, play mortal kombat and finish off your opponent. '

     }
  ]

  var settings = {
     dots:true,
     infinite:true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true
  }

   return (
    <SliderContainer>
     
     <Title>
           Discover
     </Title>
  
   <Container>

     <Carousel {...settings}>
    
    { imgData.map((data, index)=>{
     return(
         
           <Background key={index}>
               <ImgSlide><img src={data.img} alt={data.title}/></ImgSlide>
               <Details>
                 <h3>{data.title}</h3>
                 <p>{data.description}</p>
                  
                 
               </Details>
                 {/* <Link to="/tournament">
               <ButtonContainer>
                       <div>
                          <p>Join</p><PreOrder>Tournament</PreOrder>
                       </div>  
                  </ButtonContainer>
                 </Link> */}
           </Background>
           
     )
       
    })
    }


</Carousel>

<Wrap>

<video autoPlay loop muted >
  <source src={vid} type="video/mp4" />
</video>

</Wrap>

   </Container>
 
    
    
    </SliderContainer>
   )
}




const Title = styled.h1`
  color: #df78e3;
  @media (max-width: 400px){
    font-size: 1rem;
   }
  @media (min-width: 1000px){
   font-size: 2rem;
   margin-left: .5rem;
  }
  @media (min-width: 600px){
   font-size: 1.3rem;
  }
  @media (min-width: 401px){
   font-size: 1.2rem;
  }
`;



const Carousel = styled(Slider)`
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 36px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
border-radius: 20px;
max-height: 220px;
width: 90%;


@media (max-width: 376px ){
  max-height: 170px;
  width: 100%;
  
}

@media (min-width: 377px ){
  max-height: 220px;
  width: 100%;


}

@media (min-width: 1000px) {
  width: 30rem;
}

.slick-slider img{
  max-height: 320px;
  border-radius: 20px;

   }
   & > button{
     opacity: 0;
     height: 100%;
     width: 5vw;
     z-index: 1; 
   }

  &:hover{
    transition: opacity 0.2s ease 0s;
  }
  .slick-dots li button:before{
     color: #6365bf;
  }
  
`;

const Details = styled.div`
 position: absolute;
 top: 0;
 padding: 1.5rem 0 1rem 1.5rem; 
 h3{
  margin: 0;
  color: #FFFFFF;
  font-size: 1.5rem;
  max-width: 250px;

  @media (max-width: 376px ){
  font-size: 1.2rem;
  
}

 }
 p{
   margin-top: 10px;
   color: #FFFFFF;
   max-width: 300px;

   @media (max-width: 376px ){
  font-size: .8rem;
  
}

 }

`;

const ButtonContainer = styled.div`
position: absolute; 
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 1rem; 
bottom: .5rem;
right: 2px;



div{
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  height: 25px;
  top: 0;
  cursor: pointer;
  p{
     font-size: 16px;
     margin: 2px 10px 2px 6px;
     color: #FFFFFF;

     
  @media (max-width: 376px ){
  font-size: 1rem;
  
}
  }
}
`;


const PreOrder =styled.button`
 outline: none;
 border: none;
 border-radius: 9999px;
 background-color: #df78e3;
 color: #FFFFFF;
 padding: .4rem .6rem; 
 z-index: 1;
`;

const SliderContainer = styled.div`
margin: 4rem 2rem 1rem 2rem;

@media  (max-width: 375px){
margin:4rem 1rem 1rem 1rem;

}
@media (min-width: 686px) and  (max-width: 999px){
margin:4.5rem 2rem 2rem 1rem;

}
@media (min-width: 1000px){
 margin: 4.5rem 0rem 2rem 0;

}
`;
 
const Background = styled.div`
 position: relative;
 z-index: -1; 
 border-radius: 15px;

`;

const ImgSlide = styled(motion.div)`
 
 img{
   width: 100%;
   max-height: 220px;
   transition: opacity 500ms ease-in-out 0s;
   border-radius: 20px;
   opacity: 0.6;
   
   @media  (max-width: 376px){
    max-height: 170px;

   }
    @media (max-width: 768px){
     height: 220px;
    }
    

 }

`;

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const Wrap = styled.div`
display: none;
@media (min-width: 1000px){
 margin: 0 0 0 .5rem;
 display: flex;
 width: 47%;
 max-height: 220px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 36px -10px,
 rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 position: relative;
 cursor: pointer;
 overflow: hidden;
 border-radius: 20px;

video{
 position: absolute;
 width: 100%;
 height: 100%;
 top: 0;
 object-fit: cover;
}
}
`;

export default HomeSlider;