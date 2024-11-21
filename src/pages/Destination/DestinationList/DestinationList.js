import React from 'react';
import classNames from 'classnames/bind';
import styles from "./DestinationList.module.scss";


const cx = classNames.bind(styles);
export default function DestinationList({content, flag}) {
  return (
    <>
     {flag && (<p style={{marginBottom:"10px"}}>{content}</p>)}
    </>
    
  )
}

