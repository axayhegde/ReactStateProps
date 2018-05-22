import React, {Component} from 'react';
import Me from "./Me"
import Wrapper from './Wrapper';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {props}
        };
    }

    render() {
        return (
            <Wrapper>
                <Me userDetails={this.state.data}/>
            </Wrapper>
        );
    }
}

export default App;