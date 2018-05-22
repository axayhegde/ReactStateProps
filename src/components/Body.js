import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";

class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            filteredProfiles: this.props.userDetails.details || [],
            data: {props}
        };
    }

    render() {
        return (
            <div>
                {/*// TODO: refactor
                    implement more fuzzy filters
                */}
                <header className="jumbotron">
                    <img src={this.props.userDetails.image} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome {this.props.userDetails.firstName}
                        {this.props.userDetails.lastName}</h1>
                </header>
                <div className="container-fluid">
                    <h1>My Social Presence</h1>
                    {/*// TODO: create provider filter */}
                    <input className="form-control" type="text" value={this.state.filter}
                           placeholder="personal/professional" onChange={(e) => this.handleFilterChange(e)}/>
                    <button className="btn btn-outline-primary" onClick={this.changeFilteredProfiles}>Search</button>

                    <ul className="list-group">
                        {this.state.filteredProfiles.map(detail =>
                            <li key={detail.id} className="list-group-item">
                                <SocialDetail socialDetail={detail}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Body;