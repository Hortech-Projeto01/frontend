const mainUrlRoutes = {
  home: "/",
  plantas: "/plantas",
};

const UrlRouter = {
  home: mainUrlRoutes.home,
  plantas: {
    index: mainUrlRoutes.plantas,
    novo: `${mainUrlRoutes.plantas}/novo`,
    editar: `${mainUrlRoutes.plantas}/editar/:id`,
  },
  //TODO: Adicionar para plantação
};

export default UrlRouter;
