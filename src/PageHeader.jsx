import React from 'react';
import propTypes from 'prop-types';

export default function PageHeader(props) {
    return (
        <div>
            <h1>{props.headerText}</h1>
            <hr/>
        </div>
    );
}

PageHeader.propTypes = {
    headerText: propTypes.string.isRequired
}