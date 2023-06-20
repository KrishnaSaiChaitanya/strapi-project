module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom",
      handler: "custom.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
