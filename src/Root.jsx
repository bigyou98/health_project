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
      <Route path="/muscles/chest" component={Chest} />
      <Route path="/muscles/abs" component={Abs} />
      <Route path="/muscles/back" component={Back} />
      <Route path="/muscles/biceps" component={Biceps} />
      <Route path="/muscles/lowerBody" component={LowerBody} />
      <Route path="/muscles/shoulder" component={Shoulder} />
      <Route path="/muscles/triceps" component={Triceps} />
    </BrowserRouter>
  );
};

export default Root;
