import React from "react"
import './Input.scss'

interface Props {
  onChangeInput: (onChangeInput: string) => void
  value: string
}

const Input = (props: Props) => {
  let rows: number = 6;
  let cols: number = 33;
  return (
    <textarea
      rows={rows}
      cols={cols}
      value={props.value}
      onChange={event => props.onChangeInput(event.target.value)}
    />
  )
}

export default Input