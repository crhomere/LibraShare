import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import UserProfile from '../../components/UserProfile/UserProfile';
import AddBook from '../../components/AddBook/AddBook';

import './Dash.css';

const Dash = () => {
  return (
    <Row className="h-100">
      <Col
        xs={3}
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: '65vh' }}
      >
        <SideNavbar />
      </Col>
      <Col xs={9}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="user-profile/:userId/*" element={<UserProfile />} />
          <Route path="add-book" element={<AddBook />} />
        </Routes>
      </Col>
    </Row>
  );
};

export default Dash;
