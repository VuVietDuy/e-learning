import { Drawer } from 'antd'
import React from 'react'
import NoticeItem from './componet/NoticeItem';

function Notice(props: any) {
    const {
        onClose,
        isOpenNotice,
    } = props;
  return (
    <div>
        <Drawer title="My Activity" placement="right" onClose={onClose} open={isOpenNotice}>
            <NoticeItem></NoticeItem>
        </Drawer>
        <Drawer title="My Activity" placement="right" onClose={onClose} open={isOpenNotice}>
            <NoticeItem></NoticeItem>
            <NoticeItem></NoticeItem>
        </Drawer>
    </div>
  )
}

export default Notice