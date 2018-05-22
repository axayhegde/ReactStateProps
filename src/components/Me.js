import React, {Component} from 'react';
import Body from "./Body";

class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            filteredProfiles: this.props.userDetails.details || [],
            data: {props}
        }
    }

    handleFilterChange = (event) => {
        let value = event.target.value;
        this.setState(currentState => {
            return {filter: value}
        });
    };

    filterSocialDetailsByEngagement = ({details: userDetails}) => {
        let filteredProfiles = userDetails.filter((profile) => {
            return profile.engagement.includes(this.state.filter)
        });

        if (filteredProfiles.length === 0) filteredProfiles = [...userDetails];
        return filteredProfiles;
    };

    changeFilteredProfiles = () => {
        this.setState((currentState, currentProps) => {
            return {filteredProfiles: this.filterSocialDetailsByEngagement(currentProps.userDetails)}
        })
    };

    render() {
        return (
            <Body userDetails={this.state.data}/>
        )
    }
}

export default Me