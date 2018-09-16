import React, {PureComponent} from 'react';
import Page from '../../Page';
import {PageHeader} from "react-bootstrap";

export default class TechnicalSkills extends PureComponent {
    render() {
        return (
            <Page>
                <PageHeader>
                    Technical Skills
                </PageHeader>
                <h2>Front End</h2>
                <ul>
                    <li>Javascript</li>
                    <li>ES6</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>
                <h2>Back End</h2>
                <ul>
                    <li>C#</li>
                    <li>.Net</li>
                    <li>SQL(basic SQL)</li>
                    <li>RESTful APIs</li>
                    <li>SOAP/WFC</li>
                </ul>
                <h2>Other Relevant Skills</h2>
                <ul>
                    <li></li>
                </ul>
            </Page>
        )
    }
}