import React from 'react';
import './Messages.css';

export default function Messages(props){
    const badge = props.unread ? <div className="unread_count badge">{props.unread}</div> : null;
    return (
        <div className="message">
            {props.name}
            {badge}
        </div>
    );
}