import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from './Header';
import SectionContent from './SectionContent';
import { keyFormatter } from '../utils/keyFormatter';
import ContactForm from './ContactForm';

const Contact: React.FC<RouteComponentProps> = () => {
  const [header] = useState({
    mainHeader: 'Contact',
    subHeader: 'How to get in touch'
  });
  const [sections] = useState([
    {
      sectionHeader: 'Contact form',
      body: (
        <>
          Fill out the contact form details below and I will respond as soon as
          possible.
        </>
      )
    },
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

  return (
    <main>
      <Header headerContent={header} />
      <p>
        If you want to get in touch, I&apos;d be delighted to hear from you!
      </p>
      <ContactForm  />
      {sections.map((section, idx) => {
        return (
          <SectionContent
            key={keyFormatter(idx, section.sectionHeader)}
            sectionContent={section}
          />
        );
      })}
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

export default Contact;
