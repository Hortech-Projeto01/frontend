import React from "react";
import PrivateRoute from "auth/components/PrivateRoute";
import MainLayout from "core/components/MainLayout";
import UrlRouter from "core/constants/UrlRouter";
import { Switch } from "react-router";

import PlantaCreate from "planta/pages/PlantaCreate";
import PlantaIndex from "planta/pages/PlantaIndex";
import PlantacaoIndex from "plantacao/pages/PlantacaoIndex";
import PlantacaoCreate from "plantacao/pages/PlantacaoCreate";
import PlantaView from "planta/pages/PlantaView";
import Home from "core/pages/Home";

export default function PrivateRoutes() {
  return (
    <MainLayout>
      <Switch>
        <PrivateRoute path={UrlRouter.home} component={Home} />
        <PrivateRoute path={UrlRouter.plantas.index} component={PlantaIndex} />
        <PrivateRoute
          exact
          path={UrlRouter.plantas.novo}
          component={PlantaCreate}
        />
        <PrivateRoute
          exact
          path={UrlRouter.plantas.visualizar}
          component={PlantaView}
        />
        <PrivateRoute
          exact
          path={UrlRouter.plantacoes.index}
          component={PlantacaoIndex}
        />
        <PrivateRoute
          exact
          path={UrlRouter.plantacoes.novo}
          component={PlantacaoCreate}
        />
      </Switch>
    </MainLayout>
  );
}
