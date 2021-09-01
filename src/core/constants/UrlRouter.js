import MainUrlRoutes from "core/constants/MainUrlRoutes";

const UrlRouter = {
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
};

export default UrlRouter;
