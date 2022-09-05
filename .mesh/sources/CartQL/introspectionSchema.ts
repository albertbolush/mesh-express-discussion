// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        },
        {
          "kind": "OperationTypeDefinition",
          "operation": "mutation",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Mutation"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "cacheControl"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "maxAge"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "scope"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CacheControlScope"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        },
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "INTERFACE"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cart"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ID"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "currency"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "CurrencyInput"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Cart"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "node"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ID"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "currency"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "CurrencyInput"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Node"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CurrencyInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrencyCode"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "symbol"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "thousandsSeparator"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "decimalSeparator"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "decimalDigits"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CurrencyCode"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AED"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AFN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ALL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AMD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ANG"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AOA"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ARS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AUD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AWG"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "AZN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BAM"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BBD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BDT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BGN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BHD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BIF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BMD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BND"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BOB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BRL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BSD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BTC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BTN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BWP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BYR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "BZD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CDF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CHF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CLP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CNY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "COP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CRC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CUC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CUP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CVE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CZK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DJF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DKK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DOP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DZD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "EGP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ERN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ETB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "EUR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "FJD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "FKP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GBP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GEL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GHS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GIP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GMD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GNF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GTQ"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GYD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HKD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HNL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HRK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HTG"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HUF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "IDR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ILS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "INR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "IQD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "IRR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ISK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "JMD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "JOD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "JPY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KES"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KGS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KHR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KMF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KPW"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KRW"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KWD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KYD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "KZT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LAK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LBP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LKR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LRD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LSL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "LYD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MDL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MGA"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MKD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MMK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MNT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MOP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MRO"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MTL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MUR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MVR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MWK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MXN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MYR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "MZN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NGN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NIO"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NOK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NPR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "NZD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "OMR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PAB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PEN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PGK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PHP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PKR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PLN"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PYG"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "QAR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "RON"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "RSD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "RUB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "RWF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SAR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SBD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SCR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SDD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SDG"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SEK"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SGD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SHP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SLL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SOS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SRD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "STD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SVC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SYP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SZL"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "THB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TJS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TMT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TND"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TOP"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TRY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TTD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TVD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TWD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TZS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UAH"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UGX"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "USD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UYU"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UZS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "VEB"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "VEF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "VND"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "VUV"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "WST"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "XAF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "XCD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "XBT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "XOF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "XPF"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "YER"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ZAR"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ZMW"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "WON"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Cart"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A custom unique identifer for the cart provided by you.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The current currency details of the cart.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "currency"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Currency"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The customer for the cart",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of total items in the cart",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalItems"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The number of total unique items in the cart.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalUniqueItems"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The items currently in the cart.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "items"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CartItem"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "shippingTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The cart total for all items with type TAX, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "taxTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The grand total for all items, including shipping, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "grandTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A simple helper method to check if the cart is empty.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A simple helper method to check if the cart hasn't been updated in the last 2 hours.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "abandoned"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom key/value attributes array for the cart.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CustomCartAttribute"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom meta object for the cart",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Any notes related to the cart/checkout",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notes"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the cart was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the cart was updated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Node"
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "InterfaceTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Node"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": [],
      "interfaces": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Cart and Cart Items use the currency object to format their unit/line totals.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Currency"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The currency code, e.g. USD, GBP, EUR",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrencyCode"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The currency smybol, e.g. $, £, €",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "symbol"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The thousand separator, e.g. ',', '.'",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "thousandsSeparator"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The decimal separator, e.g. '.'",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "decimalSeparator"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The decimal places for the currency",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "decimalDigits"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CartItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "A custom unique identifer for the item provided by you.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Name for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Description for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The type of cart item this is.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CartItemType"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Array of image URLs for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "images"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unit total for the individual item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "unitTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Line total (quantity * unit price).",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lineTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Quantity for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "quantity"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom key/value attributes array for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CustomCartAttribute"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Custom metadata for the item.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the item was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the item was updated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Use these enums to group cart items. Cart totals will reflect these enums.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CartItemType"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SKU"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TAX"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "SHIPPING"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The Money type is used when describing the Cart and Cart Item unit/line totals.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Money"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The raw amount in cents/pence",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "amount"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The current currency details of the money amount",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "currency"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Currency"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The formatted amount with the cart currency.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "formatted"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "CustomCartAttribute"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "key"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Json"
      },
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Date"
      },
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Mutation"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "addItem"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AddToCartInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to set all the items at once in the cart. This will override any existing items.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "setItems"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "SetCartItemsInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateItem"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UpdateCartItemInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "incrementItemQuantity"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UpdateItemQuantityInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "decrementItemQuantity"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UpdateItemQuantityInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to remove any items from the cart. If it doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "removeItem"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "RemoveCartItemInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to empty the cart. If the cart doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "emptyCart"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "EmptyCartInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateCart"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "UpdateCartInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Cart"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to delete a cart. If the cart doesn't exist, it'll throw an error.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "deleteCart"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "DeleteCartInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "DeletePayload"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to convert a cart to an unpaid order.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "checkout"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "input"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CheckoutInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AddToCartInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CartItemType"
            }
          },
          "directives": [],
          "defaultValue": {
            "kind": "EnumValue",
            "value": "SKU"
          }
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "images"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "price"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "currency"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrencyInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "quantity"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": [],
          "defaultValue": {
            "kind": "IntValue",
            "value": "1"
          }
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CustomAttributeInput"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CustomAttributeInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "key"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SetCartItemsInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "items"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "SetCartItemInput"
                  }
                }
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SetCartItemInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CartItemType"
            }
          },
          "directives": [],
          "defaultValue": {
            "kind": "EnumValue",
            "value": "SKU"
          }
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "images"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "price"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "currency"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrencyInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "quantity"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": [],
          "defaultValue": {
            "kind": "IntValue",
            "value": "1"
          }
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CustomAttributeInput"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdateCartItemInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CartItemType"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "images"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "price"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "quantity"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdateItemQuantityInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the Cart in which the CartItem belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the CartItem you wish to update.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The amount (as Int) you wish to increment the Cart item quantity by.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "by"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "RemoveCartItemInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the Cart in which the CartItem belongs to.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the CartItem you wish to remove.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "EmptyCartInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the Cart you wish to empty.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "UpdateCartInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "currency"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrencyInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notes"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CustomAttributeInput"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DeleteCartInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the Cart you wish to delete.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DeletePayload"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "success"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CheckoutInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notes"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "shipping"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AddressInput"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "billing"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "AddressInput"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AddressInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "company"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "line1"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "line2"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "city"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "postalCode"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "country"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Order"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The ID of the cart you want to \"checkout\".",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cartId"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The email of the recipient. Can be used later for cart recovery emails.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The orders shipping address.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "shipping"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Address"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The orders billing address.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "billing"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Address"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The order items that were in the cart.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "items"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OrderItem"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total for all items with type SHIPPING, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "shippingTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total for all items with type TAX, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "taxTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The grand total for all items, including shipping, including the raw/formatted amounts and currency details.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "grandTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total item count.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalItems"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The total unique item count.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "totalUniqueItems"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The notes set at checkout.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notes"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The custom attributes set at checkout",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CustomAttribute"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The metadata set at checkout",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The current order status. This will reflect the current payment status. The first stage is 'unpaid'.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "status"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "OrderStatus"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the order was created.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "The date and time the order status was updated.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Addresses are associated with Orders. They can either be shipping or billing addresses.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Address"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep an optional company name for addresses.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "company"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the name of the recipient.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the first line of the address.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "line1"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the apartment, door number, etc.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "line2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the city/town name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the state/county name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the post/postal/zip code.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "postalCode"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Use this to keep the country name.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Orders contain items that were converted from the Cart at 'checkout'.\n\nOrder items are identical to the CartItem type.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "OrderItem"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CartItemType"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "images"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "unitTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "lineTotal"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Money"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "quantity"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "createdAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "updatedAt"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Date"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "attributes"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "CustomCartAttribute"
                  }
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "metadata"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Json"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CustomAttribute"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "key"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "OrderStatus"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "UNPAID"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PAID"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CacheControlScope"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PUBLIC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PRIVATE"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The `Upload` scalar type represents a file upload.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Upload"
      },
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});