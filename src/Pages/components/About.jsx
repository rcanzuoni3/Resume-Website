import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Page from "../../Page";
import { PageHeader } from "react-bootstrap";
import {
  reactCreateAppLink,
  reactBootstrapLink,
  reactRouterLink,
  myGithubLink
} from "../../constants";

export default class About extends PureComponent {
  createListItemLink = (linkText, link) => (
    <a target="_blank" href={link}>{` ${linkText}`}</a>
  );

  render() {
    return (
      <Page>
        <div>
          <PageHeader>About</PageHeader>
          <h2>What is this website?</h2>
          {
            "The purpose of this website is to give a comprehensive view into what my technical skills are.  The website itself doubles as a demostration of my front end development skills."
          }
          <h2>Technology</h2>
          <ul>
            <li>
              This website was bootstrapped with{" "}
              {this.createListItemLink("React Create App", reactCreateAppLink)}
            </li>
            <li>
              With appearances from{" "}
              {this.createListItemLink("React-Bootstrap", reactBootstrapLink)}
            </li>
            <li>
              And navigation by{" "}
              {this.createListItemLink("React Router", reactRouterLink)}
            </li>
            <li>
              This websites source code can be viewed on{" "}
              {this.createListItemLink("My Github", myGithubLink)}
            </li>
          </ul>
        </div>
      </Page>
    );
  }
}

About.propTypes = {};
