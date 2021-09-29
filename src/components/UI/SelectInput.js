import React from 'react'

const SelectInput = (props) => {

  console.log(props)

  return (
    <select>
      <option value={props.selectLabel}>{props.selectLabel}</option>
      {props.selectOptions.map((selectOption) => {
        return <option value={selectOption}>{selectOption}</option>
      })}
    </select>
  )
}

export default SelectInput
