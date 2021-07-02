import React from 'react';

interface IProps {
  sectionContent: IContent;
}

interface IContent {
  sectionHeader: string;
  body: JSX.Element;
}

const SectionContent: React.FC<IProps> = ({ sectionContent }: IProps) => {
  const { sectionHeader, body } = sectionContent;
  return (
    <section className="section" data-testid="content">
      <h3 className="section__title">{sectionHeader}</h3>
      <p className="section__blurb">{body}</p>
    </section>
  );
};

export default SectionContent;
