import React from "react";
//import LoginLayout from "core/components/LoginLayout";

import { ProvideAuth } from "auth/components/ProvideAuth";
import MainRouter from "routes/MainRouter";

function App() {
  return (
    <ProvideAuth>
      <MainRouter />
    </ProvideAuth>
  );
}

export default App;
