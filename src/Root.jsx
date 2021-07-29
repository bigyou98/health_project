import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import {
  Chest,
  Abs,
  Back,
  Biceps,
  LowerBody,
  Shoulder,
  Triceps,
} from "./pages/Muscles";

const Root = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/chest" component={Chest} />
      <Route path="/abs" component={Abs} />
      <Route path="/back" component={Back} />
      <Route path="/biceps" component={Biceps} />
      <Route path="/lowerBody" component={LowerBody} />
      <Route path="/shoulder" component={Shoulder} />
      <Route path="/triceps" component={Triceps} />
    </BrowserRouter>
  );
};

export default Root;
