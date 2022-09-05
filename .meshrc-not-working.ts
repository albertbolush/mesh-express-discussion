const resolvers = require("./resolvers.ts");
const { types } = require("./types");

module.exports = {
  sources: [
    {
      name: "GraphCMS",
      handler: {
        graphql: {
          endpoint:
            "https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master",
        },
      },
      transforms: [{
        prefix: {
          value: "GCMS_",
          includeRootOperations: true,
        },
      }],
    },
    {
      name: "CartQL",
      handler: {
        graphql: {
          endpoint: "https://api.cartql.com",
        },
      },
      transforms: [{
        prefix: {
          value: "CQL_",
          includeRootOperations: true,
        },
      }],
    },
  ],
  additionalTypeDefs: types,
  additionalResolvers: resolvers,
};
