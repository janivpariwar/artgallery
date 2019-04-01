import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

class Heading extends React.Component {
    state = {
        height:0
    }

    updateDimensions = ()=>{
        this.setState({height: window.innerHeight});
    } 

    componentWillMount(){
        this.updateDimensions();
    } 
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }
    
    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() {
        return (
            <div style={{height:this.state.height }} className="mainPage">
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Baloo|Palanquin+Dark');
                </style>
                <Grid columns={1}  >
                    <Grid.Row stretched>
                        <Grid.Column>

                            <Segment textAlign="center" className="headingBox">
                                <Header size='huge' className="headingMainText">
                                    || जाणीव परिवार ||
                    <Header.Subheader>
                                        Chitrakala Mohotsav
                    </Header.Subheader>
                                </Header>
                            </Segment>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Heading;
