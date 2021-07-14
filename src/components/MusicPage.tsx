import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Header from './Header';
import { useState } from 'react';
import SectionContent from './SectionContent';
import { keyFormatter } from '../utils/keyFormatter';

const MusicPage: React.FC<RouteComponentProps> = () => {
  const [headers] = useState({
    mainHeader: 'My musical activities',
    subHeader: 'A brief summary'
  });

  const [sections] = useState([
    {
      sectionHeader: 'Performing',
      body: (
        <>
          I work in various contexts as a conductor/music director. I founded{' '}
          <a
            href="https://operadeilumi.org.uk"
            className="external"
            target="_blank"
            rel="noopener noreferrer"
          >
            Opera dei Lumi
          </a>{' '}
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
        </>
      )
    },
    {
      sectionHeader: 'Research',
      body: (
        <>
          I researched Mozart&apos;s temporal strategies as part of my MMus(R)
          degree. I have written reviews and articles for a number of
          organisations, recently the <i>Eighteenth-Century Music</i> journal,
          published by Cambridge University Press. I am assisting Mozart scholar
          Clemens Kemme with his upcoming monograph publication on the C-minor
          Mass K427, with a particular emphasis on the English translation.
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
        </>
      )
    },
    {
      sectionHeader: 'Music engraving',
      body: (
        <>
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
        </>
      )
    }
  ]);

  return (
    <main>
      <Header headerContent={headers} />
      {sections.map((section, idx) => {
        return (
          <SectionContent
            key={`${keyFormatter(idx, section.sectionHeader)}`}
            sectionContent={section}
          />
        );
      })}
    </main>
  );
};

export default MusicPage;
