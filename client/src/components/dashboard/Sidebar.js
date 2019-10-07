import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Ui from './Dashboard.styled';

const Sidebar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Ui.Sidebar className={isOpen ? 'collapsed' : ''}>
      <Ui.Ul>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Dashboard</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Profile</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Items</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Bookings</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Saved</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Ratings and Reviews</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li>
          <Ui.A>
            <Ui.Span>Settings</Ui.Span>
          </Ui.A>
        </Ui.Li>
        <Ui.Li onClick={toggle}>
          <Ui.A>
            <Ui.Span>Collapse Menu</Ui.Span>
          </Ui.A>
        </Ui.Li>
      </Ui.Ul>
    </Ui.Sidebar>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
