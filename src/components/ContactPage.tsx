import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from './Header';
import SectionContent from './SectionContent';
import ReactEmbedGist from 'react-embed-gist';
import { keyFormatter } from '../utils/keyFormatter';

const ContactPage: React.FC<RouteComponentProps> = () => {
  const [header] = useState({
    mainHeader: 'Contact',
    subHeader: 'How to get in touch'
  });
  const [sections] = useState([
    {
      sectionHeader: 'Email',
      body: (
        <>
          If you&apos;d prefer not to use the contact form, you should be able
          to figure out my email address from the information below (provided
          you&apos;re not a machine).
          <br />
          <b>Hint!</b> This is JavaScript syntax.
        </>
      )
    },
    {
      sectionHeader: 'Across the web',
      body: <>You can also find me on the following platforms:</>
    }
  ]);
  const [socialMedia] = useState([
    { url: 'https://linuxrocks.online/@galambborong', name: 'Mastodon' },
    { url: 'https://github.com/galambborong', name: 'GitHub' },
    { url: 'https://gitlab.com/galambborong', name: 'GitLab' },
    { url: 'https://www.linkedin.com/in/p-keenan', name: 'LinkedIn' }
  ]);

  const [email, socialM] = sections;

  return (
    <main>
      <Header headerContent={header} />
      <p>
        If you want to get in touch, I&apos;d be delighted to hear from you!
      </p>

      <SectionContent sectionContent={email} />
      <ReactEmbedGist
        gist="galambborong/dc9c91031f90f74278edd81242f7f44f"
        titleClass=""
      />
      <SectionContent sectionContent={socialM} />
      <ul className="section__list">
        {socialMedia.map(({ name, url }, idx) => {
          return (
            <li key={keyFormatter(idx, name)}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="external"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ContactPage;
