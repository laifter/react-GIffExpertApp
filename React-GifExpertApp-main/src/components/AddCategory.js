import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({setCategories} ) => {

    const[inputValue,SetInputValue] = useState(""); 
    const handleInputChange = ( e ) => {
        SetInputValue(e.target.value)

    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if ( inputValue.trim().length >= 1){
            setCategories(a =>[inputValue,...a ])
            SetInputValue("")
        } 
    } 
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>

    )

}
 