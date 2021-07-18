import { RouteComponentProps } from '@reach/router';
import React from 'react';
import Header from './Header';

const AboutPage: React.FC<RouteComponentProps> = () => {
  const temporaryHeader = {
    mainHeader: 'About me',
    subHeader: 'Musician-turned-coder',
    imageLink: {
      id: 'pk',
      path: '/images/peter-keenan.jpeg',
      alt: 'Photograph of Peter Keenan in a wood'
    }
  };

  return (
    <>
      <main>
        <Header headerContent={temporaryHeader} />
        <section className="section" id="about-me">
          <p className="section__blurb">
            I trained as a musician and musicologist and am now changing career
            path and pursuing my interest in coding. I recently completed a full
            stack developer course with{' '}
            <a
              href="https://northcoders.com/"
              className="external"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northcoders.
            </a>
          </p>
          <p className="section__blurb">
            I&apos;m a fairly longstanding Linux user (Arch Linux, by the way)
            and suppose that was my &apos;gateway&apos; to coding. I&apos;m a
            big supporter of free and open source software and believe that
            software developers can play a major role in improving the world we
            live in.
          </p>
          <p className="section__blurb">
            I like making things, bringing elements together into something
            practical and meaningful. I also like making things happen; I
            founded a professional opera company and have a lot of project
            management experience.
          </p>
          <p className="section__blurb">
            Although I am very early on in my coding journey, I feel most drawn
            towards full stack web development and DevOps, and am currently
            looking for a role where I can continue to develop and challenge
            myself.
          </p>
          <p className="section__blurb">
            I fuel my coding with plenty of freshly brewed coffee from my
            Bialetti Moka Express (there is no better way to make coffee!), and
            &ndash; when possible &ndash; like long distance cycling.
          </p>
          <p className="section__blurb">
            Since getting into coding, I&apos;ve explored the languages and
            technologies below. Where applicable, I&apos;ve included my{' '}
            <a
              href="https://app.pluralsight.com/profile/galambborong"
              className="external"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pluralsight Skill IQs
            </a>
            :
          </p>
          <ul className="section__list">
            <li>
              JavaScript&ensp;<small>(225)</small>
            </li>
            <li>
              Python&ensp;<small>(179, proficient)</small>
            </li>
            <li>
              C#&ensp;<small>(173, proficient)</small>
            </li>
            <li>
              Rust&ensp;<small>(newly learning)</small>
            </li>
          </ul>
          <p className="section__blurb">
            I&apos;ve also worked with the following technologies to some
            degree:
          </p>
          <ul className="section__list">
            <li>
              Git&ensp;<small>(245)</small>
            </li>
            <li>
              GitHub&ensp;<small>(194, proficient)</small>
            </li>
            <li>React</li>
            <li>React Native</li>
            <li>SQL (postgres)</li>
            <li>NoSQL (firebase)</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Bootstrap</li>
            <li>Nginx</li>
            <li>
              ASP.NET&ensp;<small>(131, proficient)</small>
            </li>
            <li>
              Docker&ensp;<small>(124, proficient)</small>
            </li>
          </ul>
        </section>
      </main>
      <aside id="music-info">
        <p>
          If you&apos;re interested, here&apos;s a little{' '}
          <a href="/music">overview</a> of some of my musical activities.
        </p>
      </aside>
    </>
  );
};

export default AboutPage;
