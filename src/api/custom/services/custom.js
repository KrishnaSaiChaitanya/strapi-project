"use strict";

/**
 * custom service
 */

module.exports = () => ({
  fun: async () => {
    const entries = await strapi.entityService.findMany(
      "api::test-kit.test-kit"
    );
    // const entrie = await strapi.entityService.findMany("api::custom.custom");
    // const data = { name: "dis" };
    return entries;
  },
});
