import MainUrlRoutes from "core/constants/MainUrlRoutes";

const UrlRouter = {
  root: MainUrlRoutes.root,
  home: MainUrlRoutes.home,
  plantas: {
    index: MainUrlRoutes.plantas,
    novo: `${MainUrlRoutes.plantas}/novo`,
    editar: `${MainUrlRoutes.plantas}/editar/:id`,
    visualizar: `${MainUrlRoutes.plantas}/:id`,
  },
  plantacoes: {
    index: MainUrlRoutes.plantacoes,
    novo: `${MainUrlRoutes.plantacoes}/novo`,
    editar: `${MainUrlRoutes.plantacoes}/editar/:id`,
  },
  auth: {
    login: MainUrlRoutes.login,
  },
};

export default UrlRouter;
