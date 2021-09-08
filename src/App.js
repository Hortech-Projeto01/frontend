import React, { useState } from 'react';
import MainLayout from "core/components/MainLayout";
import UrlRouter from "core/constants/UrlRouter";
import PlantaCreate from "planta/pages/PlantaCreate";
import PlantaIndex from "planta/pages/PlantaIndex";
import PlantacaoIndex from "plantacao/pages/PlantacaoIndex";
import PlantacaoCreate from "plantacao/pages/PlantacaoCreate";
import PlantaView from "planta/pages/PlantaView";
import LoginPage from "auth/pages/LoginPage";
import LoginLayout from "core/components/LoginLayout";

import { Switch, BrowserRouter, Route } from "react-router-dom";


function App() {
  //temporario para verificar se ja está logado
  const [isLoggedIn] = useState(false);

  const switchComponent = <Switch>
      {/* TODO: Trocar por component Home */}
      <Route exact path={UrlRouter.home}>
        <h1>Home</h1>
      </Route>
      <Route exact path={UrlRouter.plantas.index} component={PlantaIndex} />
      <Route exact path={UrlRouter.plantas.novo} component={PlantaCreate} />
      <Route exact path={UrlRouter.plantas.visualizar} component={PlantaView} />
      <Route exact path={UrlRouter.plantacoes.index} component={PlantacaoIndex} />
      <Route exact path={UrlRouter.plantacoes.novo} component={PlantacaoCreate} />
      <Route exact path={UrlRouter.auth.login} component={LoginPage} />
    {/* Rotas de login */}
    </Switch>;

  return (
    <BrowserRouter>
    { isLoggedIn
       ? <MainLayout>{switchComponent}</MainLayout>
       : <LoginLayout>{switchComponent}</LoginLayout>

    }
    </BrowserRouter>

  );
}

export default App;
