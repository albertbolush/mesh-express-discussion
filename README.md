Is it possible to extend Contract so i can run query like this:

```
query MyQuery {
  attribute(id: "attribute_id_0") {
    id
    name
  }
  contract(id: "contract_id_0") {
    id
    name
  }
  order(id: "order_id_0") {
    attribute {
      id
      name
    }
    contract {
      id
      name
       attribute { // extract attribute_id from order_attribute_id field ?
        id
        name
        }
    }
    id
    name
    attribute_id
    contract_id
  }
}
```