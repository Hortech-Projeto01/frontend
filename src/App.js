import React from "react";
//import LoginLayout from "core/components/LoginLayout";

import MainRouter from "routes/MainRouter";
import { AuthProvider } from "auth/context";

function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

export default App;
