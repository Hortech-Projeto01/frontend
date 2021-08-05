import MainLayout from "core/components/MainLayout";
import UrlRouter from "core/constants/UrlRouter";
import PlantaIndex from "planta/pages/PlantaIndex";
import PlantacaoIndex from "planta/pages/PlantacaoIndex";
import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          {/* TODO: Trocar por component Home */}
          <Route exact path={UrlRouter.home}>
            <h1>Home</h1>
          </Route>
          <Route path={UrlRouter.plantas.index} component={PlantaIndex} />
          <Route path={UrlRouter.plantacao.index} component={PlantacaoIndex} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
