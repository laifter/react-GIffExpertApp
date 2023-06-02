import React from "react";

export const GifGridItem = ( {id,title,url} ) => {
    return(
        <div className="card animate__bounceIn">
            <img src={url} alt={ title } className="cards-white"/>
            <p>{title}</p>
        </div>
    )
} 