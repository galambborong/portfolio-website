import { RouteComponentProps } from '@reach/router';
import React from 'react';

const AboutMe = (props: RouteComponentProps): JSX.Element => {
  console.log(props);
  return <p>another page</p>;
};

export default AboutMe;
