import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql';

const orders = [
  {
    id: 'order_id_0',
    name: 'Some order 0',
    attribute_id: 'attribute_id_0',
    contract_id: 'contract_id_0',
  },
];

const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    attribute_id: {
        type: GraphQLString,
    },
    contract_id: {
        type: GraphQLString,
    },
  },
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      order: {
        type: OrderType,
        args: {
          id: {
            type: GraphQLID,
          },
        },
        resolve: (_, { id }) => orders.find(order => order.id === id),
      },
    },
  }),
});