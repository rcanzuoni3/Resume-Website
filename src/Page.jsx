import React, {Component} from 'react';
import propTypes from 'prop-types';

export default class Page extends Component {
    render() {
        return (
            <div className="container page">
                {this.props.children}
            </div>
        );
    }
}

Page.propTypes = {
    children: propTypes.element.isRequired
}