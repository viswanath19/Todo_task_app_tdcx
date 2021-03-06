import React from 'react';
import * as PropTypes from "prop-types";
import '../stylesheets/Header.css';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {loggedIn} = this.props;
        return(
            <div className="App-Component-Header">
		        <img src={this.props.logo}/>
                <p className="user">{loggedIn}</p>
                <p className="right-element"><a href="#" onClick={()=>{this.props.logout()}}>Logout</a></p>
            </div>
        )
    }
}
