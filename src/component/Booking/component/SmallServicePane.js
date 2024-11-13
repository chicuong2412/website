import React from 'react'
import style from './SmallServicePane.module.scss'

export default function SmallServicePane(props) {
  return (
    <div className={style.paneHolder}>{props.heading}</div>
  )
}
