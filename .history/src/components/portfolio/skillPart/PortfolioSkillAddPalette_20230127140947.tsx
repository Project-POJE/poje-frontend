import styled from 'styled-components';
const test = require.context(
  '/public/public_assets/skill_icon/frontend',
  false
);
const test2: { front: string[] } = { front: [] };
type q = { a: string };
console.log();
//console.log(test.keys().map((i) => test2.front.push(test(i))));
export default function PortfolioSkillAddPalette() {
  console.log(test2);
  return (
    <Container>
      <CategoryList>
        <img src={test2.front[0]} alt='' />
      </CategoryList>
    </Container>
  );
}

const Container = styled.section`
  background: white;
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;
