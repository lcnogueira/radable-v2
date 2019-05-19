import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as CategoryActions } from '../../store/ducks/categories';

import {
  Nav, NavbarNav, NavbarBrand, NavItem, NavLink, StyledLink,
} from './styles';

class NavBar extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;
    loadCategoriesRequest();
  }

  render() {
    const { categories } = this.props;
    return (
      <Nav>
        <NavbarNav>
          <NavbarBrand>Readable</NavbarBrand>
          <NavItem>
            <StyledLink to="/">
              <NavLink>Home</NavLink>
            </StyledLink>
          </NavItem>
          {categories.data.map(category => (
            <NavItem key={category.path}>
              <StyledLink to={`/${category.path}`}>
                <NavLink>{category.name}</NavLink>
              </StyledLink>
            </NavItem>
          ))}
        </NavbarNav>
      </Nav>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => bindActionCreators(CategoryActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
