const mainUrlRoutes = {
  home: "/",
  plantas: "/plantas",
  plantacao: "/plantacao",
};

const UrlRouter = {
  home: mainUrlRoutes.home,
  plantas: {
    index: mainUrlRoutes.plantas,
    novo: `${mainUrlRoutes.plantas}/novo`,
    editar: `${mainUrlRoutes.plantas}/editar/:id`,
  },
  plantacao: {
    index: mainUrlRoutes.plantacao,
    novo: `${mainUrlRoutes.plantacao}/novo`,
    editar: `${mainUrlRoutes.plantacao}/editar/:id`,
  },
};

export default UrlRouter;
