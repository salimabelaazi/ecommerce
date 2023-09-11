import React from 'react';
import Layout from '../components/layout/Layout';
import {BiMailSend,BiPhoneCall,BiSupport} from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={'Contacts'}>
      <div className='row contactus'>
      <div className='col-md-6'>
       <img 
       src='data:image/jpeg;base64,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'
       alt='contactas'
       style={{width:"100%"}}/>

      </div>
      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
        <p className='teext-justify mt-2'>
          any query and info about product feel free to call anytime we 24*7 vaialible
        </p>
        <p className='mt-3'>
          <BiMailSend/> : www.help@ecommerceapp.com
        </p>
        <p className='mt-3'>
          <BiPhoneCall/>: 216020100500
        </p>
        <p className='mt-3'>
          <BiSupport />: 1800-0000-0000 (toll free)
        </p>
      </div>
      </div>
    </Layout>
  )
}

export default Contact