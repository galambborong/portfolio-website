import { RouteComponentProps } from '@reach/router';
import React from 'react';

const AnotherPage = (props: RouteComponentProps): JSX.Element => {
  console.log(props);
  return <p>another page</p>;
};

export default AnotherPage;
