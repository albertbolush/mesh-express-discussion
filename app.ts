const express =require('express');
const { graphqlHTTP } = require('express-graphql');
const { getBuiltMesh } = require('./.mesh')


const app = express();

app.use(
  '/graphql',
  graphqlHTTP(async (req:any, res:any) => {
    const { schema, getEnveloped, plugins } = await getBuiltMesh()
    const { parse, validate, contextFactory, execute } = getEnveloped({ req, res })
    return {
      schema,
      plugins,
      graphiql: true,
      customParseFn: (sdl:any) => parse(sdl.body ?? sdl),
      customValidateFn: validate,
      customExecuteFn: async (args:any) => {
        return execute({
          ...args,
          contextValue: await contextFactory()
        })
      }
    }
  })
);



app.listen(4000);