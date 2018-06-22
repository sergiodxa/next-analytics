import withGA from "next-ga";
import withFBQ from "next-fbq";

export default ({ ga, fbq } = {}) => Page => {
  const hocs = [];

  // add withGA (passing GA code) to list of HOCs
  if (ga) hocs.push(withGA(ga));
  
  // add withFBQ (passing FBQ code) to list of HOCs
  if (fbq) hocs.push(withFBQ(fbq));

  // apply each HOC to the Page
  return hocs.reduce((WrappedPage, hoc) => hoc(WrappedPage), Page);
};
