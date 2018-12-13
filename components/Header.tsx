/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';

import Link from './Link';
import Search from './Search';
import media from '../utils/media';

const Nav = styled.header`
  padding: 0px 40px;
  box-sizing: border-box;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
  height: 70px;
  background-color: #fff;
  z-index: 999999999;
  position: relative;
  width: 100%;
`;

const Inner = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;

const Logo = styled.h1`
  float: left;
  line-height: 40px;
  margin: 15px 0px 0px 0px;
  ${media.phone`display: none;`};
`;

const Links = styled.nav`
  display: flex;
  align-items: center;
  float: right;
  height: 70px;
  ${media.phone`float: none; justify-content: center;`};
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #5c616a;
    padding: 20px 0px;
    width: 120px;
    font-family: 'Montserrat', sans-serif;
    span:first-child {
      margin-right: 5px;
    }
    ${media.phone`font-size: 14px; width: 80px; flex-direction: column;`};
    &.active {
      color: #f47555;
    }
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-left: 40px;
`;

type Props = {};

type State = {
  open: boolean;
};

class Header extends Component<Props, State> {
  state = {
    open: false,
  };

  toggleSearch = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { open } = this.state;
    return (
      <header>
        <Search open={open} />
        <Nav>
          <Inner>
            <Logo>
              <Link href="/">
                <a>
                  <img
                    src="https://res.cloudinary.com/papaio-live/image/upload/v1520700216/tsm-logo.png"
                    alt="Home"
                    width="75"
                  />
                </a>
              </Link>
            </Logo>
            <Links>
              <Link href="/" prefetch>
                <a>
                  <span>✏️</span> <span>БЛОГ</span>
                </a>
              </Link>
              <Link href="/podcast" prefetch>
                <a>
                  <span>🎤</span> <span>ПОДКАСТ</span>
                </a>
              </Link>
              <Link href="/about" prefetch>
                <a>
                  <span>👨‍🚀</span> <span>НИЕ</span>
                </a>
              </Link>
              {open ? (
                <SearchIcon
                  onClick={this.toggleSearch}
                  src="../static/img/close.png"
                />
              ) : (
                <SearchIcon
                  onClick={this.toggleSearch}
                  src="../static/img/search.png"
                />
              )}
            </Links>
          </Inner>
        </Nav>
      </header>
    );
  }
}

export default Header;
