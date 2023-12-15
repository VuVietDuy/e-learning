import { Card } from 'antd'
import React from 'react'

function Question() {

  return (
    <div>
        <Card title={<>
                <img src='/images/card1.png' width={55}></img>
                <span>Question in Zbrush for Character Artist</span>
            </>} bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </div>
  )
}

export default Question