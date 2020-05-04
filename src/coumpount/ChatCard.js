import React from 'react'
import moment from 'moment'
import './ChatCard.css'
import { Comment,Tooltip,Avatar } from 'antd'
export function ChatCard(props){
    return(
        <div>
           <Comment
           avatar={
             <Avatar>
               <span class="dot100a"></span>
             </Avatar>
           }
          content={
            <p id="chatmessange"> {props.message}</p>
          }
          datetime={
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span id="xaxa">{moment().fromNow()}</span>
            </Tooltip>
          }
           />
        </div>
    )
}
