import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql';

const contracts = [
  {
    id: 'contract_id_0',
    name: 'Some contract 0',
  },
];

const ContractType = new GraphQLObjectType({
  name: 'Contract',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      contract: {
        type: ContractType,
        args: {
          id: {
            type: GraphQLID,
          },
        },
        resolve: (_, { id }) => contracts.find(c => c.id === id),
      },
    },
  }),
});