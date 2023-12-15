'use client'
import React from 'react'
import './style.scss'
import { Checkbox, Select } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import Question from './components/Question';

export function Communication() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    // setActiveTab(value);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className='communication_container'>
      <div className='header'>
        <h2>Communication</h2>
        <Select
          defaultValue="newest"
          style={{ width: 150, height: 49 }}
          onChange={handleChange}
          options={[
            { value: 'newest', label: 'Newest' },
            { value: 'oldest', label: 'Oldest' },
            { value: 'most_popular', label: 'Most popular' },
          ]}
        />
      </div>
      <div>
        <p>Question - Answer between Student and Teacher</p>
      </div>
      <div className='check_box'>
        <Checkbox onChange={onChange}>Unread</Checkbox>
        <Checkbox onChange={onChange}>No answers</Checkbox>
        <Checkbox onChange={onChange}>No teacher answers</Checkbox>
      </div>
      <div className='questions'>
          <Question></Question>
      </div>
    </div>
  )
}
