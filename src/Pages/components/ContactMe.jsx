import React, {Component} from 'react';
import Page from '../../Page';
import PropTypes from 'prop-types';
import {PageHeader} from "react-bootstrap";

export default class ContactMe extends Component {
    render() {
        return (
            <Page>
                <div>
                    <PageHeader>
                        Contact Me
                    </PageHeader>
                    <div>
                        Phone: {this.props.phoneNumber}
                    </div>
                    <div>
                        Email: {this.props.email}
                    </div>
                </div>
            </Page>
        );
    }
}

ContactMe.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}