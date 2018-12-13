import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter, SingletonRouter } from 'next/router';

const StyledSearch = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  z-index: 9999;
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Input = styled.input`
  text-align: center;
  border: 0;
  font-size: 80px;
  font-weight: bold;
  width: 100%;
  outline: none;
`;

type StyledProps = {
  visible: boolean;
};

const Hint = styled.p`
  font-family: 'Montserrat', sans-serif;
  transition: 0.3s;
  opacity: ${(props: StyledProps) => (props.visible ? 1 : 0)};
`;

const Error = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #ed4337;
`;

type Props = {
  open: boolean;
  router: SingletonRouter;
};

type State = {
  query: string;
  error: boolean;
};

class Search extends Component<Props, State> {
  state = { query: '', error: false };

  input = React.createRef<HTMLInputElement>();

  componentDidUpdate(prevProps: Props) {
    if (this.input.current && prevProps.open !== this.props.open) {
      this.input.current.focus();
    }
  }

  handleSearch = () => {
    if (!this.state.query) {
      this.setState({ error: true });
    } else {
      this.props.router.push(`/search?q=${this.state.query}`);
    }
  };

  render() {
    const { open } = this.props;

    return open ? (
      <StyledSearch>
        <Input
          innerRef={this.input}
          placeholder="Търсене..."
          onChange={e => this.setState({ query: e.target.value, error: false })}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              this.handleSearch();
            }
          }}
          value={this.state.query}
        />
        <Hint visible={this.state.query ? true : false}>Натисни Enter</Hint>
        {this.state.error && <Error>Трябва да напишеш нещо...</Error>}
      </StyledSearch>
    ) : null;
  }
}

export default withRouter(Search);
