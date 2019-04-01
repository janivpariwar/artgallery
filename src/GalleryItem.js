import React from 'react';
import { GridColumn, Segment, Image, Label } from 'semantic-ui-react';
const GalleryItem = (props)=>{

    return (
    <GridColumn>
        <Segment>
            <Label color="black" attached="bottom" content={props.name} />
            <Image src={require(`./assests/thumbs/${props.thumb}`)} />
        </Segment>
    </GridColumn>
    );

}



export default GalleryItem;