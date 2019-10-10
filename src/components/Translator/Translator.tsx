import React, { useState } from "react"
import Input from "../Input/Input"
import "./Translator.scss"

const Translator = () => {
  const [value, setValue] = useState("")
  const [rövarValue, setRövarValue] = useState("")

  const onChangeValue = value => {
    setValue(value)
    setRövarValue(
      value.replace(
        /([bcdfghjklmnpqrstvwxz])/gi,
        consonants => consonants + "o" + consonants
      )
    )
  }

  const onChangeRövarValue = value => {
    setValue(
      value.replace(/([bcdfghjklmnpqrstvwxz])o\1/gi, consonants =>
        consonants.substring(0, 1)
      )
    )
    setRövarValue(value)
  }

  const updateAllValues = (value, rövarValue) => {
    setValue(
      value.replace(/([bcdfghjklmnpqrstvwxz])o\1/gi, consonants =>
        consonants.substring(0, 1)
      )
    )
    setRövarValue(
      rövarValue
        .replace(/([bcdfghjklmnpqrstvwxz])o\1/gi, consonants =>
          consonants.substring(0, 1)
        )
        .replace(
          /([bcdfghjklmnpqrstvwxz])/gi,
          consonants => consonants + "o" + consonants
        )
    )
  }

  return (
    <div className="container">
      <div className="inputs">
        <div className="inputs-container">
          <div>
            <label>Vanlig text:</label>
            <Input
              value={value}
              onChangeInput={inputValue => onChangeValue(inputValue)}
            />
          </div>
          <div>
          <label>Rövar text:</label>
          <Input
            value={rövarValue}
            onChangeInput={rövarValue => onChangeRövarValue(rövarValue)}
          />
          </div>
        </div>
        <button onClick={() => updateAllValues(value, rövarValue)}>
          Update both
        </button>
      </div>
    </div>
  )
}

export default Translator
