import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
import { getGifs } from './helpers/getGifs';


const GifGrid = ({ category }) => {

    const [ images, setImages] = useState([])

    useEffect(  () => {
        getGifs(category)
        .then( setImages)

    }, [category])

    return (
        <div className="card-grid">
            <h3>{category}</h3>

            <ol>
                {images.map( img => (
                    <GifGridItem 
                     key={img.id}
                     {...img}


                    />
                ))}
            </ol>
        </div>
     );
}
 
export default GifGrid;