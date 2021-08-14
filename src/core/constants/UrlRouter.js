import MainUrlRoutes from "core/constants/MainUrlRoutes";

const UrlRouter = {
  home: MainUrlRoutes.home,
  plantas: {
    index: MainUrlRoutes.plantas,
    novo: `${MainUrlRoutes.plantas}/novo`,
    editar: `${MainUrlRoutes.plantas}/editar/:id`,
  },
  plantacoes: {
    index: mainUrlRoutes.plantacoes,
    novo: `${mainUrlRoutes.plantacoes}/novo`,
    editar: `${mainUrlRoutes.plantacoes}/editar/:id`,
  },
  //TODO: Adicionar para plantação
};

export default UrlRouter;
