import React, { useState, useEffect } from "react"
import Input from "../Input/input"
import InputRovar from "../Input/InputRovar"

const Translator = () => {
  const [value, setValue] = useState("")
  const [rövarValue, setRövarValue] = useState("")
  // const [renderValue, setRenderValue] = useState("")

  const onChangeValue = value => {
    setValue(value)
    setRövarValue(value.replace(/([bcdfghjklmnpqrstvwxz])/gi, "$1o$1"))
  }

  const onChangeRövarValue = value => {
    setValue(value.replace(/([bcdfghjklmnpqrstvwxz])o\1/gi, "$1"))
    setRövarValue(value)
  }

  // useEffect(() => {
  //   setRenderValue(value.replace(/([bcdfghjklmnpqrstvwxz])o\1/gi, "$1"))
  // }, [value])

  // const onChange = (value: string) => {
  //   console.log(value)
  //   // Inserts the 1st parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed.

  //   //console.log(value.replace(/([bcdfghjklmnpqrstvwxz])/gi, '$1o$1'))
  //   const toNormal = /([bcdfghjklmnpqrstvwxz])o\1/gi
  //   const toRövar = /([bcdfghjklmnpqrstvwxz])/gi

  //   setValue(value.replace(rövarInput ? toNormal : toRövar, rövarInput ? '$1' : '$1o$1'))
  // }

  return (
    <>
      <Input
        value={value}
        onChangeInput={inputValue => onChangeValue(inputValue)}
        rovar={false}
      />
      <Input
        value={rövarValue}
        onChangeInput={rövarValue => onChangeRövarValue(rövarValue)}
        rovar={true}
      />
    </>
  )
}

export default Translator
