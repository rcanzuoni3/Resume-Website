import React, {PureComponent} from 'react';
import {phoneNumber, email} from './constants';
import ContactMe from './ContactMe';

export default class ContactMeContainer extends PureComponent {
    render() {
        return (<ContactMe phoneNumber={phoneNumber} email={email}/>);
    }
}