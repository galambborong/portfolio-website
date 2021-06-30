import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Header from './Header';

const About = (props: RouteComponentProps): JSX.Element => {
  // console.log(props);

  const temporaryHeader = {
    mainHeader: 'Temporary header',
    subHeader: 'Not so important'
  };

  return (
    <main>
      <Header headerContent={temporaryHeader} />
      <p>ABOUT PAGE</p>
    </main>
  );
};

export default About;
