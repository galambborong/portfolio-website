import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Header from './Header';

const About: React.FC = (props: RouteComponentProps) => {
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
