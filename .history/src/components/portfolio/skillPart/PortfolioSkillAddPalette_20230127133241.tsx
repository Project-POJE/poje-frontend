import styled from 'styled-components';
const test = require.context(
  '/public/public_assets/skill_icon/frontend',
  false
);

console.log(
  test
    .keys()
    .map((i: __WebpackModuleApi.RequireContext) => console.log(test[i]))
);
export default function PortfolioSkillAddPalette() {
  console.log(`${process.env.PUBLIC_URL}/public_assets/`);
  return (
    <Container>
      <CategoryList></CategoryList>
    </Container>
  );
}

const Container = styled.section`
  background: white;
`;

const CategoryList = styled.ul``;

const CategoryItem = styled.li``;
