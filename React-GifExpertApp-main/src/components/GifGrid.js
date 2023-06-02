import React from "react";
import { useFecthGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";
export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFecthGifs( category );

    
    return(
        <>
            <h3>{ category }</h3>
            {loading && <p className="animate__bounceIn">Loading...</p>  } 
            <div className="card-grid animate__bounceIn"> 
                    {
                        images.map( img => (
                            <GifGridItem 
                                key ={img.id}
                                { ...img } 
                            />
                        )) 
                    }
            </div>
        </>
    )
}