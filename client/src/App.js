import React from "react";
import { drizzleReactHooks } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";

import drizzleOptions from "./drizzleOptions";
import LandingPage from "./pages/LandingPage";
import LoadingDrizzle from "./components/LoadingDrizzle";

const drizzle = new Drizzle(drizzleOptions);
const { DrizzleProvider } = drizzleReactHooks;

const App = () => {
 
  return ( 
    <DrizzleProvider drizzle={drizzle}>
      <div className="App">
        <LoadingDrizzle>
          <LandingPage />
        </LoadingDrizzle>
      </div>
    </DrizzleProvider>
  );
}

export default App;
