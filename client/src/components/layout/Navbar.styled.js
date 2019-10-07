import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
  color: #fff;
  background: green;
  height: 3em;
`;
//   background: var(--dark-color);

export const Ul = styled.ul`
  list-style: none;
  display: flex;
`;

export const Li = styled.li``;

export const A = styled.a`
  color: purple;
  text-decoration: none;
  color: #fff;
  padding: 0.45rem;
  margin: 0 0.25rem;

  &:hover {
    color: red;
  }
`;

export const Span = styled.span`
  display: none;
  color: yellow;
  background: purple;
`;
