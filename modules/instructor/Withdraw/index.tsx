'use client'
import React from 'react'
import { ChangeEvent, useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import { GlobalOutlined } from '@ant-design/icons';
import './style.scss'
import { Form } from 'antd';

export function Withdraw() {

  const openConfirm = () => {

  }
  return (

    <div className="Withdraw">      
      <div  className='Withdraw'>
        <Form>
          <div className="UserInfo">
            <div className="top">
              <div className="bigTitle">
              Withdraw Money
              </div>

              <div className='smallerTitle'>Billing address</div>

              <div className="country-zipcode">
                <div>
                  <div className="country-zipcode-top">
                    <div className='title'>Country</div>
                    <div className="required">Required</div>
                  </div>
                  <button className='chooseCountry'><GlobalOutlined />VietNam
                  <DownOutlined></DownOutlined></button>
                </div>
                <div>
                  <div className="country-zipcode-top">
                    <div className='title'>Zip Code</div>
                    <div className="required">Required</div>
                  </div>
                  <input type="text" className='zipcodeBox'/>
                </div>
              </div>

              <div className="note">MegaSkill is required by law to collect applicable transaction or taxes for purchases made in certain tax jurisdictions</div>
            </div>
            
            <div className="body">
              <div className="smallerTitle">Withdraw method</div>
              <div className="creditCard">
                
                <div className="creditCard-grey">
                  <div className='left'>
                    <input type="radio" name='choice' className='choice'/>
                    <img src="/icon/creditcard 1.png" className = 'card1'alt="" />
                    <div className='type'>Credit/Debit Card</div>
                  </div>
                  <img src="/icon/creditcard 2.png" alt="" />
                </div>

                <div className="creditCard-white">
                  <div>Name on card</div>
                  <input type="text" className='boxInfo'/>
                  <div>Card number</div>
                  <input type="text" className='boxInfo'/>
                  <div className='creditCard-white-bottom'>
                    <div>
                      <div className="titleInfo">Security Code</div>
                      <input type="text" className='boxInfo'/>
                    </div>
                    <div>
                      <div className="titleInfo">Expiration Date</div>
                      <input type="text" className='boxInfo'/>
                    </div>
                    
                  </div>
                </div>

                <div className="creditCard-grey">
                  <div className='left'>
                    <input type="radio" name='choice' className='choice'/>
                    <img src="/icon/creditcard 1.png" className = 'card1' alt="" />
                    <div className='type'>Visa</div>
                  </div>
                  
                  <img src="/icon/creditcard 3.png" alt="" />
                </div>
              </div>
              
              <div className="smallerTitle">Total Revenue</div>
              <input type="text"  className='boxInfo-bottom'/>
              <div className="smallerTitle">Withdraw Amount</div>
              <input type="text"  className='boxInfo-bottom'/>
              
                <div className='bottom-button'>
                  <button className='edit'>Edit</button>
                  {/* <button className="save" onClick={LogUserInfo()}>Save</button> */}
              </div>
            </div>

            <p>&nbsp;</p>
          </div>
        </Form>

        <div className="CompleteWithdraw">
          <div className="smallerTitle">Summary</div>
          <div className='withdrawAmount'>
            <div className="original">
              <div>Original: </div><div> $500.00</div>
            </div>
            <div className="original">
              <div>Withdraw Amount: </div><div> -$25.00</div>
            </div>
          </div>

          <div className="original">
            <div className="smallerTitle">Total</div>
            <div className="smallerTitle">$475.00</div>
          </div>

          <div className="agree">By completing your withdraw you agree to our <span className='term'>Terms of Service</span></div>

          <button className='confirmWithdraw' onClick={() => openConfirm() }>Completed Withdraw</button>

          <div className="agree">All your information is keep private</div>
        </div>
      </div>
      
    </div>


  )
}
