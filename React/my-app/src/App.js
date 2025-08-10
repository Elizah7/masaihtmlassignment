import React, { useState } from "react";
import ThemeApp from "./Theme";
import DailyQuote from "./dailyQoute";
import UserProfiles from "./userProfile";
import Stopwatch from "./stopWatch";

const App = () => {
  


  return (
    <div>
     <ThemeApp/>
<DailyQuote/>
<UserProfiles/>
<Stopwatch/>
    </div>
  );
};

export default App;
