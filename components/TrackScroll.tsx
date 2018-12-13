import { Component } from 'react';
import throttle from 'lodash/throttle';

type Props = {
  children: (progress: number) => Element | JSX.Element | Node;
};

class TrackScroll extends Component<Props> {
  state = { progress: 0 };

  componentDidMount() {
    window.addEventListener('scroll', this.updateProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateProgress);
  }

  updateProgress = throttle(() => {
    const currentScroll = window.top.pageYOffset;
    // $FlowFixMe
    const totalScroll = document.body.scrollHeight - window.screen.availHeight;
    const progress = Math.min(currentScroll / totalScroll, 1);

    this.setState({ progress });
  }, 100);

  render() {
    return this.props.children(this.state.progress);
  }
}

export default TrackScroll;
