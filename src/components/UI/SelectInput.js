import React from 'react'

const SelectInput = (props) => {

  console.log(props)

  return (
    <div>
      <label>{props.label}</label>
      <select onChange={props.onSelectChange} value={value}>
        <option value={props.selectInitialValue}>{props.selectInitialValue}</option>
        {props.selectOptions.map((selectOption) => {
          return <option value={selectOption}>{selectOption}</option>
        })}
      </select>
    </div>
  )
}

export default SelectInput
