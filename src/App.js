import React from 'react';
import MainLayout from "core/components/MainLayout";
import UrlRouter from "core/constants/UrlRouter";
import PlantaCreate from "planta/pages/PlantaCreate";
import PlantaIndex from "planta/pages/PlantaIndex";
import PlantacaoIndex from "plantacao/pages/PlantacaoIndex";
import PlantacaoCreate from "plantacao/pages/PlantacaoCreate";
import PlantaView from "planta/pages/PlantaView";
import LoginPage from "auth/pages/LoginPage";
//import LoginLayout from "core/components/LoginLayout";

import { Switch, BrowserRouter} from "react-router-dom";
import { ProvideAuth } from "auth/components/ProvideAuth";
import PrivateRoute from "auth/components/PrivateRoute";
import PublicRoute from "auth/components/PublicRoute";

import history from "core/utils/history.js";

function App() {
  return ( 
    <ProvideAuth>
    <BrowserRouter history={history}>
      <MainLayout>
        <Switch>
          {/* TODO: Trocar por component Home */}
          <PublicRoute restricted={false} exact path={UrlRouter.home}>
            <h1>Home</h1>
          </PublicRoute>
          {/* Rotas de login */}
          <PublicRoute restricted={true} exact path={UrlRouter.auth.login} component={LoginPage} />
          <PrivateRoute path={UrlRouter.plantas.index} component={PlantaIndex} />
          <PrivateRoute exact path={UrlRouter.plantas.novo} component={PlantaCreate} />
          <PrivateRoute exact path={UrlRouter.plantas.visualizar} component={PlantaView} />
          <PrivateRoute exact path={UrlRouter.plantacoes.index} component={PlantacaoIndex} />
          <PrivateRoute exact path={UrlRouter.plantacoes.novo} component={PlantacaoCreate} />

        </Switch>
      </MainLayout>
    </BrowserRouter>
    </ProvideAuth>
  );
}


export default App;
