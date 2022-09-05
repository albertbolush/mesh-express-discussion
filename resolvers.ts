import { Resolvers } from "./.mesh";
const resolvers: Resolvers = {
  CQL_CartItem: {
    product: {
      selectionSet: /* */ `
        {
          id
        }
      `,
      resolve: async (root:any, args:any, context:any, info:any) =>
        await context.GraphCMS.Query.GCMS_product({
          root,
          context,
          info,
          args: {
            where: {
              id: root.id,
            },
          },
        }),
    },
  },
  }

module.exports = resolvers;
