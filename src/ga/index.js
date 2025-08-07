import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-93NMHBGDX0";

export const initGA = (): void => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = (): void => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};
