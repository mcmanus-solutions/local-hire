import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DashboardLayout = styled.div`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'sidebar dashboard';
`;
//   grid-gap: 1rem;

export const Sidebar = styled.div`
  grid-area: sidebar;
  height: stretch;
  background: #000;
  color: #fff;
  width: 250px;

  &.collapsed {
    margin: 0;
    width: 4em;

    ul {
      margin-top: auto;
    }

    ul li span {
      opacity: 1;
    }
  }
`;
//   position: relative;
//   transition: width ease 100ms;
//   display: block;

export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column nowrap
    overflow: hidden;
`;

export const Li = styled.li`
  display: block;
  padding: 0;
  margin: 0

    &:focus {
    background: #1c262b;
  }
  &:hover {
    background: #3a4f59;
  }
`;

export const Dashboard = styled.div`
  grid-area: dashboard;
  margin: 0;
  margin-left: 1rem;
  margin-top: 1rem;
`;

export const LinkButton = styled(Link)`
  color: purple;
`;

export const A = styled.a`
  display: flex;
  padding: 0.65em 0;
  color: #fff;
  font-weight: 3000;
  text-decoration: none;
  line-height: 1.5em;
  width: 250px;
`;

export const Span = styled.span`
  display: inline-block;
  line-height: 1.4em;
  vertical-align: middle;
  backface-visibility: hidden;
  perspective: 1000;
  transition: opacity ease 150ms;
  padding-left: 1.1em;
  margin-left: 1em;
  color: #e6e6e6;
`;
