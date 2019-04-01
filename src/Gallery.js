import React from 'react'
import { Grid, Segment, Image, Table, Label } from 'semantic-ui-react'
import GalleryRow from './GalleryRow';
const pd = [
  {
      "thumb": "1_tn.jpg",
      "painting":"./assests/thumbs/1_tn.jpg",
      "name": "Rohit Belsare"
  },
  {
      "thumb": "2_tn.jpg",
      "painting":"./assests/thumbs/1_tn.jpg",
      "name": "Rohit Belsare"
  },    {
      "thumb": "3_tn.jpg",
      "painting":"./assests/thumbs/1_tn.jpg",
      "name": "Rohit Belsare"
  },
  {
      "thumb": "4_tn.jpg",
      "painting":"./assests/thumbs/1_tn.jpg",
      "name": "Rohit Belsare"
  },
  {
    "thumb": "2_tn.jpg",
    "painting":"./assests/thumbs/2_tn.jpg",
    "name": "Rohit Belsare"
},
{
    "thumb": "5_tn.jpg",
    "painting":"./assests/thumbs/5_tn.jpg",
    "name": "Rohit Belsare"
},    {
    "thumb": "7_tn.jpg",
    "painting":"./assests/thumbs/7_tn.jpg",
    "name": "Rohit Belsare"
},
{
    "thumb": "8_tn.jpg",
    "painting":"./assests/thumbs/8_tn.jpg",
    "name": "Rohit Belsare"
}
];

class Gallery extends React.Component {
  
  

  render(){
  return (
    <Grid columns={4} stackable>
      <GalleryRow items={pd.slice(0,4)}/>
      <GalleryRow items={pd.slice(4,8)}/>
    </Grid>
  );

  }

}

export default Gallery;