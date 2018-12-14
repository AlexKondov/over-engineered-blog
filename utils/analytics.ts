import ReactGA from 'react-ga';

export const initAnalytics = (): void => {
  ReactGA.initialize('GOOGLE_ANALYTICS_CODE');
};

export const logPageView = (): void => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
