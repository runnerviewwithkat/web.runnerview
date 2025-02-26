import React from "react";

import { AnimatedRoutes } from "./components";
import { withLayout } from "./layout/Layout";

const App = () => <AnimatedRoutes />;

export default withLayout(App);
