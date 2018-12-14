import React, { ReactNode, useEffect, useState } from 'react';
import { initAnalytics, logPageView } from '../utils/analytics';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [analyticsStatus, setAnalyticsStatus] = useState(false);

  useEffect(() => {
    if (!analyticsStatus) {
      initAnalytics();
      setAnalyticsStatus(true);
    }

    logPageView();
  });

  return <div>{children}</div>;
};

export default Layout;
