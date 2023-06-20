"use strict";

/**
 * A set of functions called "actions" for `custom`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const body = [
        { name: "chaitanya", class: "btec" },
        { name: "chaitaa", class: "btec" },
      ];
      // const entry = await strapi.entityService.findMany("api::custom.custom");
      // console.log(entry);
      // @ts-ignore
      const data = await strapi.service("api::custom.custom").fun();
      const data2 = [...data, ...body];
      console.log(data2);
      ctx.body = data2;
    } catch (err) {
      ctx.body = err;
    }
  },
};
