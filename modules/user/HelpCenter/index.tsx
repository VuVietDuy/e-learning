'use client'
import React from 'react'
import {QuestionCircleOutlined} from '@ant-design/icons';
import {MinusOutlined } from '@ant-design/icons';
import HelpCenterQuestion from './component/HelpCenterQuestion';

import './index.scss'

export function HelpCenter() {
  // function turnSP(){
  //   // if(!spwindow_OnorOff){
  //   //   document.getElementById('supportWindow').style.display = 'block'
  //   //   document.getElementById('spButton')!.style.display = 'none'
  //   // }
  //   // else{
  //   //   document.getElementById('supportWindow')!.style.display = 'none'
  //   //   document.getElementById('spButton')!.style.display = 'block'
  //   // }
  // }

  // function stuortecher(){
  //   // if(isStudent) {
  //   //   document.getElementById('teachers')!.style.backgroundColor = '#ffffff';
  //   //   document.getElementById('students')!.style.backgroundColor = '#2CFF99';
  //   // }else{
  //   //   document.getElementById('teachers')!.style.backgroundColor = '#2CFF99';
  //   //   document.getElementById('students')!.style.backgroundColor = '#ffffff';
  //   // }
  // }

  // function teacherOn(){
  //   // isStudent = false;
  // }
  // function studentOn(){
  //   // isStudent = true;
  // }
  // // document.getElementById('teachers')!.style.backgroundColor = '#ffffff';

  return (
    <div className='HelpCenter'>
      <div className="support">
        <div className="supportWindow" id='supportWindow'>
          <div className="title">Support <span className='minus'><MinusOutlined /></span></div>

          <div className="result">
            <div className="search">
              <img src="/images/searchIcon.png" alt="" className='searchIcon'/>
              <input type="text" className='searchbox' placeholder='How can we help?'/>
            </div>
            <div className="topresult">
              <div className="toprestext">Top results</div>
              <ul>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
                <li>How to train your dragon?</li>
              </ul>
            </div>
          </div>

          <div className="chat">
            <div className='chatLeft'>Hello. How can I help you?</div>
            <div className='chatRight'>I’m considering to get my money back</div>
            <div className='chatLeft'>Ok. What is your main problems?</div>
          </div>

          <div className="sendtext">
            <input type="text" className="chatBox" placeholder='How can I get...'/>
            
            <button className="sendButton"><img src="/images/sendIcon.png" alt="" className='sendIcon'/></button>
          </div>
        </div>

        <button className='spButton' id='spButton' ><QuestionCircleOutlined /> Support</button>
      </div>
      <div className="Top">
        <div className="search">
            <div className="searchTitle">
              MegaSkills Help Center
            </div>
            <div className="box-button">
              <input type="text" className='searchBox'/>
              <button className="searchButton">Search</button>
            </div>
        </div>
        <div className="alpha">&nbsp;</div>
        <img src="/images/helpcenter.png" alt="" className='titleImage'/>
      </div>
      <div className="default_container Body">
        <div className="top">
          <button className="chooseSide active" id='students'>
            Students
          </button>
          <button className="chooseSide" id='teachers'>
            Teachers
          </button>
        </div>
        <div className="bottom">
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
          <HelpCenterQuestion></HelpCenterQuestion>
        </div>
      </div>
      
    </div>
  )
}
