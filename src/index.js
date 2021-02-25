import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomeAppBar from './home/homeAppBar';
import WelcomeMessage from './home/WelcomeMessagePaper';
import AboutUs from './about/AboutUs';


const NotFoundPage = () => {
    return(
        <div>
            <h1>This Page Doesnt Exist....</h1>
        </div>
    );
};
const IndexPage = () => {
    return(
        <WelcomeMessage/>
    )
}
ReactDOM.render(
  <BrowserRouter>
    <HomeAppBar/>
    <Switch>   
      <Route path="/" component={IndexPage} />
      <Route path="/about" component={AboutUs} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);