import React from 'react';
import Footer from '../../common/Footer';
import HeaderBlack from '../../common/HeaderBlack';

const AboutUs = () => {
    return (
        <div>
           <HeaderBlack ></HeaderBlack>
           <div
            style={{ backgroundImage: `url("https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/themes/panpie/assets/img/banner.png") `, backgroundRepeat: 'no-repeat', height: '50vh', marginTop: "-250px" }}
            className='lg:pb-44 sm:pb-40 '>
                </div>
               <h2 style={{marginTop:'-150px',marginBottom:'150px'}} className='text-3xl font-bold flex justify-center'>ABout Us</h2>

              <div className='flex container  justify-center'>
                  <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about01.jpg" alt="" />
                  <div className='ml-20'>
                        <p style={{color:'#F43127'}} className='text-1xl font-bold mb-5'>PANPIE HISTORY</p>
                        <p className='text-3xl font-bold mb-5'>Serving Pizzas By The <br />
                        <span style={{color:'#FDB702'}}>Slice Since 1987</span></p>
                        <p style={{color:'#646464'}} className='text-1xl'>Our Pizzahen an unknown printer took a galley type and scrambled make type <br /> specimen book. It has survived not only five centuries, but also the leap into <br />electronic typesetting, remaining essentially unchanged. It was <br /> popularisedsheets containing.</p>
                  </div>
              </div>
              <div style={{alignItems: 'flex-end'}} className='flex justify-evenly mt-8 mb-20'>
                  <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape24.png" alt="" />
                  <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about02.jpg" alt="" />
                  <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/about03.jpg" alt="" />
                  <img src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/01/shape23.png" alt="" />
              </div>
             
               
             <Footer></Footer>
        </div>
    );
};

export default AboutUs;