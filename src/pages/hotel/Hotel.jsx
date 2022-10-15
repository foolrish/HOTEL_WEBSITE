import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/navbar';
import "./hotel.css"
const Hotel = () => {

   const[slideNumber, setSlideNumber] = useState(0);
   const [open, setOpen] = useState(false);

   const photos = [
      {
         src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/380671436.jpg?k=41938ca9ca2bb846f35a200b4391bce83799808d7f6640440d8a1c73385fd5ca&o=&hp=1"
      },
      {
         src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/376242484.jpg?k=c4b41b201eaea63327eb29adc397b91d609c235e2084079ea7bc83c932396398&o=&hp=1"
      },
      {
         src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/380675649.jpg?k=724bfec88cb8987d22c6c22cdedcb66dfb61cb673eb03f47fc3c73f2a395abe0&o=&hp=1"
      },
      {
         src:"https://t-cf.bstatic.com/xdata/images/landmark/max1024/187097.webp?k=8d8b84bae9c90f71625033cb1be83d5948fc58fc47adc93c407903a7bbffb9ad&o="
      },
      {
         src:"https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/229600230.jpg?k=7ea4cb70ae1a79f52c9a5c4415e4a0eafc5c6345e553cb44001186bde24ea5ce&o=&hp=1"
      },
      {
         src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/380671443.jpg?k=2197219be1f10d2b76b36bb2b5c7eb45a9e01f736aff77061dfe0083a166480e&o=&hp=1"
      }
   ]

   const handleOpen = (i) =>{
      setSlideNumber(i);
      setOpen(true);
   };

   const handleMove = (direction) => {
      let newSlideNumber;

      if(direction ==="l"){
         newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else{
         newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      

      setSlideNumber(newSlideNumber)
      };
   

     return (
        <div> 
         <Navbar/>
         <Header type="list"/>
         <div className="hotelContainer">
            {open && <div className="slider">
               <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
               <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper">
                  <img className="sliderImg" src={photos[slideNumber].src} alt="" />
               </div>
               <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
            </div>}
            <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
               <h1 className="hotelTitle">Grand Hotel</h1>
               
               <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot}/>
                  <span> Elton St 125 New York</span>
               </div>
               <span className="hotelDistance">
                  Excellent location ~ 500m from center
               </span>
               <span className="hotelPriceHighlight">
                  Book a stay over $114 at this property and get a free airport taxi
               </span>
               <div className="hotelImages">
                  {photos.map((photo,i)=>(
                     <div className="hotelImgWrapper">
                           <img onClick={()=>handleOpen(i)}
                            src={photo.src} 
                            alt=""
                            className="hotelImg" />
                     </div>
                  ))}
               </div>
               <div className="hotelDetails">
                  <div className="hotelDesc">
                     <h1 className="hotelTitle">
                        Stay in the heart of Madrid
                     </h1>
                     <p className="hotelDesc">
                     Situated opposite Madrid’s Royal Palace, these design suites include free Wi-Fi, flat-screen satellite TV and a well-equipped kitchenette. Apartosuites Jardines de Sabatini has a sun terrace with great views of Madrid.
                     Each studio and suite at the Jardines de Sabatini features elegant modern décor. The stylish kitchenettes include a ceramic hob, a fridge and microwave.

                     Guests can enjoy a varied buffet breakfast in the Apartosuites' bright dining room. There is also a 24-hour reception with a tour desk.

                     Apartosuites Jardines de Sabatini is located right in front of the Sabatini Gardens, in the centre of Madrid. Plaza de España Square and Gran Vía Avenue are within a 5-minute walk, and Principe Pío Station is 400 m away.

                     This is our guests' favourite part of Madrid, according to independent reviews.

                     Couples particularly like the location — they rated it 9.3 for a two-person trip.

                     Apartosuites Jardines de Sabatini has been welcoming Booking.com guests since 7 Oct 2009.
                     </p>
                     
                  </div>
                  <div className="hotelPrice">
                     <h1 className="priceDetail">
                     Perfect for a 2-week stay!
                     </h1>

                     <span>
                     Situated in the best rated area in Madrid, this property has an excellent location score of 9.4
                     Want a great night's sleep? This property was highly rated for its very comfy beds.
                     </span>

                     <h2>
                     <b>$945</b> (9 nights)
                     </h2>

                     <button>
                        Reserve
                     </button>
                  </div>
               </div>

            </div>
         <MailList/>
         <Footer/>
         </div>
        </div>
     )
}

export default Hotel