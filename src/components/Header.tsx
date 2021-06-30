import React from 'react';

interface IProps {
  headerContent: IHeading;
}

interface IHeading {
    mainHeader: string;
    subHeader: string;
    imageLink?: imageInfo;
}

interface imageInfo {
  id: string;
  path: string;
  alt: string;
}

const Header: React.FC<IProps> = ({ headerContent }: IProps) => {
  const {
    mainHeader,
    subHeader,
    imageLink: {id, alt, path} 
  } = headerContent;
  
  return (
    <header className="header">
      <h1 className="header__title" data-testid="main">
        {mainHeader}
      </h1>
        { headerContent.imageLink &&
        <img data-testid="image" id={id} src={path} alt={alt} />
        }  
      <h2 className="header__sub" data-testid="sub">
        {subHeader}
      </h2>
    </header>
  );
};

export default Header;
