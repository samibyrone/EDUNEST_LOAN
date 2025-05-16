import React from 'react'
import background from '../../assets/images/Auto Layout Horizontal.png'
import { FaFacebook } from 'react-icons/fa'

export const Footer = () => {
  return (
     <div className="bg-cover bg-center w-full flex items-center justify-center" 
      style={{ backgroundImage: `url(${background})` }}>
        <div className='footer'>
          <div className='footerPage'>
            <h1 className="footerH1 text-white p-5">EDUNE$T</h1>
            <h1 className='footerH2'>
              Our mission is to empower individuals and businesses by providing 
              them with the financial resources they need to achieve their goals.
            </h1>
            <a href="" className='footerA'>
              <img src={FaFacebook} alt="" />
            </a>
          </div>
          <div className='footerPage2'>
            <div className='footer2'>
              <p className='footerP'>OUR SERVICES</p>
              <div className=' bg-white'></div>
              <div className='footer1'>
                <p className='footerP1'>Educational Loan</p>
                <p className='footerP1'>Personal Loan</p>
                <p className='footerP1'>Business Loan</p>
                <p className='footerP1'>Home Loan</p>
              </div>
            </div>
            <div className='footer22'>
              <p className='footerP'>CONTACT US</p>
              <div className=''></div>
              <div className='footer11'>
                <p className='footerP1'>+234 810 0005 9657</p>
                <p className='footerP1'>Edunest@gmail.com</p>
                <p className='footerP1'>312 Herbert Macualay Road,Sabo Yaba, Lagos.</p>
                <p className='footerP1'>5th Avenue Festac Town, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
