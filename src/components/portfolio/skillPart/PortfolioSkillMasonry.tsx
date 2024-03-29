import { ReactNode } from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = Object.freeze({
  default: 5,
  1400: 5,
  1000: 4,
  700: 2,
});

interface PortfolioSkillMasonryType {
  children: ReactNode;
}

export default function PortfolioSkillMasonry({
  children,
}: PortfolioSkillMasonryType) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='skillsContainer'
      columnClassName='skillsStack'
    >
      {children}
    </Masonry>
  );
}
