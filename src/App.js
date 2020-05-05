import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./components/1.homePage/HomePage";
import AboutMe from "./components/2.aboutMePage/AboutMe";
import Hobbies from "./components/6.hobbies/Hobbies";
import Contact from "./components/7.contactPage/Contact";
import Navbar from "./components/Header/Navbar";
import DarkMode from "./styles/DarkMode";
import ScrollToTop from "./ScrollToTop";
import PostsPage from "./components/pages/posts/PostsPage";
import PostPage from "./components/pages/postPage/PostPage";
import Log from "./components/pages/log/Log";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown, faGraduationCap, faFolderOpen, faCalendarAlt, faGlobeAmericas, faChevronCircleUp, faMobileAlt, faPaintBrush, faGlobe,
  faCheckCircle, faHeart, faAward, faSun, faMoon
} from '@fortawesome/free-solid-svg-icons';


library.add(faAngleDoubleDown);
library.add(faGraduationCap);
library.add(faFolderOpen);
library.add(faCalendarAlt);
library.add(faGlobeAmericas);
library.add(faChevronCircleUp);
library.add(faMobileAlt);
library.add(faPaintBrush);
library.add(faGlobe);
library.add(faCheckCircle);
library.add(faHeart);
library.add(faAward);
library.add(faSun);
library.add(faMoon);



class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <BrowserRouter>

          <ScrollToTop>

            <Navbar />

            <DarkMode />

            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/contactPage" component={Contact} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/postsPage" component={PostsPage} />
              <Route path="/postPage" component={PostPage} />
              <Route path="/log" component={Log} />

            </Switch>

            <FontAwesomeIcon></FontAwesomeIcon>

          </ScrollToTop>

        </BrowserRouter>

      </React.Fragment>
    )
  }
}


export default App;