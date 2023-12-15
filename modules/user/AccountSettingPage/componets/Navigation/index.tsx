import React from 'react'
import Link from 'next/link'
import './index.scss'

function Navigaton(props:any) {
  const {
    activeTab,
  } = props;
  
  return (
    <div className='navigation-container'>
        <p className='title'>ACCOUNT SETTING</p>
        <Link href={"/user/profile"} >
            <div className='option'><span>View Profile</span></div>
        </Link>
          <div className={`option ${activeTab ? "active" : ""}`}><span>Email Address</span></div>
          <div className={`option ${activeTab ? "active" : ""}`}><span>Password</span></div>
          <div className={`option ${activeTab ? "active" : ""}`}><span>Language</span></div>
          <div className={`option ${activeTab ? "active" : ""}`}><span>Purchased Courses</span></div>
    </div>
  )
}

export default Navigaton