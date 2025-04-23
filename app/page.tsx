

import React from "react";
import Main from "./components/landingpage/main";
import Discusion from "./components/landingpage/dicusion";
import About from "./components/landingpage/about";
import Services from "./components/landingpage/services";
import Team from "./components/landingpage/team";
import Power from "./components/landingpage/power";
import Testimonials from "./components/landingpage/testimonial";
import { News } from "./components/landingpage/news";

const ComplaintPage: React.FC = () => {
  return (
    <div>
      <Main />
      <Discusion />
      <About />
      <Services />
      <Team />
      <Power />
      <Testimonials />
      <News />
    </div>
  );
};

export default ComplaintPage;
