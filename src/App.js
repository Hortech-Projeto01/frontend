import MainLayout from "core/components/MainLayout";
import UrlRouter from "core/constants/UrlRouter";
import PlantaCreate from "planta/pages/PlantaCreate";
import PlantaIndex from "planta/pages/PlantaIndex";
import PlantacaoIndex from "plantacao/pages/PlantacaoIndex";
import PlantacaoCreate from "plantacao/pages/PlantacaoCreate";
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
          <Route exact path={UrlRouter.plantas.index} component={PlantaIndex} />
          <Route exact path={UrlRouter.plantas.novo} component={PlantaCreate} />
          <Route path={UrlRouter.plantacoes.index} component={PlantacaoIndex} />
          <Route path={UrlRouter.plantacoes.novo} component={PlantacaoCreate} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
