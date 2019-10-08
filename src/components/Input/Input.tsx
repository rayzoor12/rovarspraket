import React, { useState, useRef } from "react"
import { get } from "lodash"
import './Input.css'

interface Props {
  onChangeInput: (onChangeInput: string) => void
  value: string
  rovar: boolean
}

const Input = (props: Props) => {
  return (
    <textarea
      value={props.value}
      onChange={event => props.onChangeInput(event.target.value)}
    />
  )
}

export default Input