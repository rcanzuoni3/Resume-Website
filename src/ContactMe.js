import React, {Component} from 'react';
import Page from './Page';
import PageHeader from './PageHeader'
import PropTypes from 'prop-types';

export default class ContactMe extends Component {
    render() {
        return (
            <Page>
                <div>
                    <PageHeader headerText="Contact Me"/>
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