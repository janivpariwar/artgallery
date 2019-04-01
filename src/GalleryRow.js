import React from 'react';
import { GridRow } from 'semantic-ui-react';
import GalleryItem from './GalleryItem';
const GalleryRow = (props)=>{

    return <GridRow stretched>
            {
                props.items.map((item,index)=>{
                    return <GalleryItem key={index} name={item.name} thumb={item.thumb}/>
                })
            }
    </GridRow>

}

export default GalleryRow;