"use strict";

/**
 * test-kit controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test-kit.test-kit", {
  //   prefix: "",
  config: {
    find: {
      auth: true,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: { auth: false, policies: [], middlewares: [] },
    delete: {},
  },
});
