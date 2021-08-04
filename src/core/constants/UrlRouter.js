const mainUrlRoutes = {
  home: "/",
  planta: "/plantas",
};

const UrlRouter = {
  home: mainUrlRoutes.home,
  planta: {
    index: mainUrlRoutes.planta,
    novo: `${mainUrlRoutes}/novo`,
    editar: `${mainUrlRoutes}/editar/:id`,
  },
  //TODO: Adicionar para plantação
};

export default UrlRouter;
