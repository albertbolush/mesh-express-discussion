# Steps to reproduce:
```bash
npm i
Rename .meshrc-working.yml to .meshrc.yml
npx mesh build
px ts-node  app.ts
```
Than in playground run this query:
```graphql
{
  GCMS_products {
    id
    name
  }
  CQL_cart(id:"mesh")
   {
    id
    items{
      id
      product {
        id
        name
      }
    }
  }
}
```
Expect answer:
```json
{
  "data": {
    "GCMS_products": [
      {
        "id": "ck8snb68g015q01582eneqegi",
        "name": "Long Sleeve Tee 2"
      },
      {
        "id": "ck8snbwgw015n015710srq03g",
        "name": "Short Sleeve Tee"
      },
      {
        "id": "ckckfm4io04460165s8q38b4h",
        "name": "Cap"
      }
    ],
    "CQL_cart": {
      "id": "mesh",
      "items": [
        {
          "id": "ck8snb68g015q01582eneqegi",
          "product": {
            "id": "ck8snb68g015q01582eneqegi",
            "name": "Long Sleeve Tee 2"
          }
        }
      ]
    }
  }
}
```
Now try same query rebuilding mesh with typescript mesh config, response will be null:
```json
{
  "data": {
    "GCMS_products": [
      {
        "id": "ck8snb68g015q01582eneqegi",
        "name": "Long Sleeve Tee 2"
      },
      {
        "id": "ck8snbwgw015n015710srq03g",
        "name": "Short Sleeve Tee"
      },
      {
        "id": "ckckfm4io04460165s8q38b4h",
        "name": "Cap"
      }
    ],
    "CQL_cart": {
      "id": "mesh",
      "items": [
        {
          "id": "ck8snb68g015q01582eneqegi",
          "product": null
        }
      ]
    }
  }
}
```
