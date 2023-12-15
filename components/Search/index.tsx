import React from 'react';
import './index.scss'

function Search(props: any) {
    const {
        className,
        placeholder,
        type
    } = props;

  return (
    <input className={`${className} search-component`} placeholder={placeholder} type={type} ></input>
  )
}

export default Search;