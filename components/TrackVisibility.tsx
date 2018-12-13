import React, { Component, ReactNode } from 'react';

type Props = {
  onVisible: () => any;
  children: ReactNode;
};

class TrackVisibility extends Component<Props> {
  ref = React.createRef<HTMLDivElement>();

  async componentDidMount() {
    if (!('IntersectionObserver' in window)) {
      // This is specifically for Safari
      // The Intersection Observer is not supported and needs to be pollyfilled
      await import('intersection-observer');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          // Item is fully in view
          this.props.onVisible();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (this.ref.current) {
      observer.observe(this.ref.current);
    }
  }

  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}

export default TrackVisibility;
