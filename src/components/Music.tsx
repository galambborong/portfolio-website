import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Music: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const [headers] = useState({
    mainHeader: 'My musical activities',
    subHeader: 'A brief summary'
  });
  return (
    <main>
      <Header headerContent={headers} />
      <section className="section" id="performer">
        <h3 className="section__title">Performing</h3>
        <p className="section__blurb">
          I work in various contexts as a conductor/music director. I founded{' '}
          <a
            href="https://operadeilumi.org.uk"
            className="external"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opera dei Lumi
          </a>
          and am Music Director of{' '}
          <a
            href="https://northernpraeclassica.weebly.com/index.html"
            className="external"
            target="_blank"
            rel="noopener noreferrer"
          >
            Northern Praeclassica
          </a>
          .
        </p>
      </section>
      <section className="section" id="research">
        <h3 className="section__title">Research</h3>
        <p className="section__blurb">
          I researched Mozart&apos;s temporal strategies as part of my MMus(R)
          degree. I have written reviews and articles for a number of
          organisations, recently the <i>Eighteenth-Century Music</i> journal,
          published by Cambridge University Press. I am assisting Mozart scholar
          Clemens Kemme with his upcoming monograph publication on the C-minor
          Mass K427, with a particular emphasis on the English translation.
        </p>
        <p>
          <a
            href="https://orcid.org/0000-0001-6603-7920"
            className="external"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my ORCID profile here
          </a>
        </p>
      </section>
      <section className="section" id="engraver">
        <h3 className="section__title">Music engraving</h3>
        <p className="section__blurb">
          I previously worked as a music engraver using{' '}
          <a
            className="external"
            href="https://en.wikipedia.org/wiki/SCORE_(software)"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCORE
          </a>
          , working for a range of individuals, including composers Thomas
          Simaku and Nigel Osborne, as well as publishers such as Edition
          Wilhelm Hansen and Ricordi.
        </p>
      </section>
    </main>
  );
};

export default Music;
