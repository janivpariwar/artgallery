import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Container, Divider} from 'semantic-ui-react';
import GridExampleColumnCount from './Gallery';
import Heading from './Heading';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Heading />
        </div>

        <Container style={{marginTop:'20px'}}>
          <GridExampleColumnCount />

        <Divider/>

          All the images are for presentational purpose please read the offer document carefully.
        </Container>
      <br/>
      </React.Fragment>
    );
  }
}

export default App;
