import React, { useState, useRef } from "react"
import { get } from "lodash"
import "./Input.css"

interface Props {
  onChangeInput: (onChangeInput: string) => void
  value: string
}

const InputRovar = (props: Props) => {
  const [focus, setFocus] = useState(false)
  const textarea = useRef()
  console.log(props.value, "1", get(textarea, "current.value"), "2", "hello")
  return (
    <textarea
      value={props.value}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onChange={event => props.onChangeInput(event.target.value)}
      ref={textarea}
    />
  )
}

export default InputRovar
