import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLSchema } from 'graphql';

const attributes = [
  {
    id: 'attribute_id_0',
    name: 'Some attribute 0',
  },
  {
    id: 'attribute_id_1',
    name: 'Some attribute 1',
  },
];

const AttributeType = new GraphQLObjectType({
  name: 'Attribute',
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
      attribute: {
        type: AttributeType,
        args: {
          id: {
            type: GraphQLID,
          },
        },
        resolve: (_, { id }) => attributes.find(attribute => attribute.id === id),
      },
    },
  }),
});