import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <span>Shop</span>Store
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-secondary-1);
  color: var(--clr-white);
  span {
    color: var(--clr-white);
  }
`;

export default Logo;
