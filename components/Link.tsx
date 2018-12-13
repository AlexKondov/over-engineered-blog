import React, { Children, ReactNode } from 'react';
import Link from 'next/link';
import { withRouter, SingletonRouter } from 'next/router';

type Props = {
  router: SingletonRouter;
  children: ReactNode;
  href: string;
  prefetch?: boolean;
};

const ActiveLink = withRouter(({ router, children, ...props }: Props) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null,
    })}
  </Link>
));

export default ActiveLink;
