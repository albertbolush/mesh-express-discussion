// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace CartQlTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Json: any;
  Date: any;
  Upload: any;
};

export type Query = {
  /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
  cart?: Maybe<Cart>;
  node?: Maybe<Node>;
};


export type QuerycartArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CurrencyInput>;
};


export type QuerynodeArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CurrencyInput>;
};

export type CurrencyInput = {
  code?: InputMaybe<CurrencyCode>;
  symbol?: InputMaybe<Scalars['String']>;
  thousandsSeparator?: InputMaybe<Scalars['String']>;
  decimalSeparator?: InputMaybe<Scalars['String']>;
  decimalDigits?: InputMaybe<Scalars['Int']>;
};

export type CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTC'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MTL'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDD'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TVD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEB'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XBT'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'WON';

/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export type Cart = Node & {
  /** A custom unique identifer for the cart provided by you. */
  id: Scalars['ID'];
  /** The current currency details of the cart. */
  currency: Currency;
  /** The customer for the cart */
  email?: Maybe<Scalars['String']>;
  /** The number of total items in the cart */
  totalItems?: Maybe<Scalars['Int']>;
  /** The number of total unique items in the cart. */
  totalUniqueItems?: Maybe<Scalars['Int']>;
  /** The items currently in the cart. */
  items: Array<CartItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: Money;
  /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: Money;
  /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: Money;
  /** A simple helper method to check if the cart is empty. */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Custom key/value attributes array for the cart. */
  attributes: Array<CustomCartAttribute>;
  /** Custom meta object for the cart */
  metadata?: Maybe<Scalars['Json']>;
  /** Any notes related to the cart/checkout */
  notes?: Maybe<Scalars['String']>;
  /** The date and time the cart was created. */
  createdAt: Scalars['Date'];
  /** The date and time the cart was updated. */
  updatedAt: Scalars['Date'];
};

export type Node = {
  id: Scalars['ID'];
};

/** Cart and Cart Items use the currency object to format their unit/line totals. */
export type Currency = {
  /** The currency code, e.g. USD, GBP, EUR */
  code?: Maybe<CurrencyCode>;
  /** The currency smybol, e.g. $, £, € */
  symbol?: Maybe<Scalars['String']>;
  /** The thousand separator, e.g. ',', '.' */
  thousandsSeparator?: Maybe<Scalars['String']>;
  /** The decimal separator, e.g. '.' */
  decimalSeparator?: Maybe<Scalars['String']>;
  /** The decimal places for the currency */
  decimalDigits?: Maybe<Scalars['Int']>;
};

/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export type CartItem = {
  /** A custom unique identifer for the item provided by you. */
  id: Scalars['ID'];
  /** Name for the item. */
  name?: Maybe<Scalars['String']>;
  /** Description for the item. */
  description?: Maybe<Scalars['String']>;
  /** The type of cart item this is. */
  type: CartItemType;
  /** Array of image URLs for the item. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Unit total for the individual item. */
  unitTotal: Money;
  /** Line total (quantity * unit price). */
  lineTotal: Money;
  /** Quantity for the item. */
  quantity: Scalars['Int'];
  /** Custom key/value attributes array for the item. */
  attributes: Array<CustomCartAttribute>;
  /** Custom metadata for the item. */
  metadata?: Maybe<Scalars['Json']>;
  /** The date and time the item was created. */
  createdAt: Scalars['Date'];
  /** The date and time the item was updated. */
  updatedAt: Scalars['Date'];
};

/** Use these enums to group cart items. Cart totals will reflect these enums. */
export type CartItemType =
  | 'SKU'
  | 'TAX'
  | 'SHIPPING';

/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export type Money = {
  /** The raw amount in cents/pence */
  amount?: Maybe<Scalars['Int']>;
  /** The current currency details of the money amount */
  currency: Currency;
  /** The formatted amount with the cart currency. */
  formatted: Scalars['String'];
};

/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export type CustomCartAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
  addItem: Cart;
  /** Use this to set all the items at once in the cart. This will override any existing items. */
  setItems: Cart;
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
  updateItem: Cart;
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  incrementItemQuantity: Cart;
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  decrementItemQuantity: Cart;
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
  removeItem: Cart;
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
  emptyCart: Cart;
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. */
  updateCart: Cart;
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
  deleteCart: DeletePayload;
  /** Use this to convert a cart to an unpaid order. */
  checkout?: Maybe<Order>;
};


export type MutationaddItemArgs = {
  input: AddToCartInput;
};


export type MutationsetItemsArgs = {
  input: SetCartItemsInput;
};


export type MutationupdateItemArgs = {
  input: UpdateCartItemInput;
};


export type MutationincrementItemQuantityArgs = {
  input: UpdateItemQuantityInput;
};


export type MutationdecrementItemQuantityArgs = {
  input: UpdateItemQuantityInput;
};


export type MutationremoveItemArgs = {
  input: RemoveCartItemInput;
};


export type MutationemptyCartArgs = {
  input: EmptyCartInput;
};


export type MutationupdateCartArgs = {
  input: UpdateCartInput;
};


export type MutationdeleteCartArgs = {
  input: DeleteCartInput;
};


export type MutationcheckoutArgs = {
  input: CheckoutInput;
};

export type AddToCartInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['Json']>;
};

export type CustomAttributeInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type SetCartItemsInput = {
  cartId: Scalars['ID'];
  items: Array<SetCartItemInput>;
};

export type SetCartItemInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['Json']>;
};

export type UpdateCartItemInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['Json']>;
};

export type UpdateItemQuantityInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to update. */
  id: Scalars['ID'];
  /** The amount (as Int) you wish to increment the Cart item quantity by. */
  by: Scalars['Int'];
};

export type RemoveCartItemInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to remove. */
  id: Scalars['ID'];
};

export type EmptyCartInput = {
  /** The ID of the Cart you wish to empty. */
  id: Scalars['ID'];
};

export type UpdateCartInput = {
  id: Scalars['ID'];
  currency?: InputMaybe<CurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<InputMaybe<CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['Json']>;
};

export type DeleteCartInput = {
  /** The ID of the Cart you wish to delete. */
  id: Scalars['ID'];
};

export type DeletePayload = {
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type CheckoutInput = {
  cartId: Scalars['ID'];
  email: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  shipping: AddressInput;
  billing?: InputMaybe<AddressInput>;
  metadata?: InputMaybe<Scalars['Json']>;
};

export type AddressInput = {
  company?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  state?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  country: Scalars['String'];
};

/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export type Order = {
  id: Scalars['ID'];
  /** The ID of the cart you want to "checkout". */
  cartId: Scalars['ID'];
  /** The email of the recipient. Can be used later for cart recovery emails. */
  email: Scalars['String'];
  /** The orders shipping address. */
  shipping: Address;
  /** The orders billing address. */
  billing: Address;
  /** The order items that were in the cart. */
  items: Array<OrderItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: Money;
  /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: Money;
  /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: Money;
  /** The total item count. */
  totalItems: Scalars['Int'];
  /** The total unique item count. */
  totalUniqueItems: Scalars['Int'];
  /** The notes set at checkout. */
  notes?: Maybe<Scalars['String']>;
  /** The custom attributes set at checkout */
  attributes: Array<CustomAttribute>;
  /** The metadata set at checkout */
  metadata?: Maybe<Scalars['Json']>;
  /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
  status: OrderStatus;
  /** The date and time the order was created. */
  createdAt: Scalars['Date'];
  /** The date and time the order status was updated. */
  updatedAt: Scalars['Date'];
};

/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export type Address = {
  /** Use this to keep an optional company name for addresses. */
  company?: Maybe<Scalars['String']>;
  /** Use this to keep the name of the recipient. */
  name: Scalars['String'];
  /** Use this to keep the first line of the address. */
  line1: Scalars['String'];
  /** Use this to keep the apartment, door number, etc. */
  line2?: Maybe<Scalars['String']>;
  /** Use this to keep the city/town name. */
  city: Scalars['String'];
  /** Use this to keep the state/county name. */
  state?: Maybe<Scalars['String']>;
  /** Use this to keep the post/postal/zip code. */
  postalCode: Scalars['String'];
  /** Use this to keep the country name. */
  country: Scalars['String'];
};

/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 *
 * Order items are identical to the CartItem type.
 */
export type OrderItem = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type: CartItemType;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitTotal: Money;
  lineTotal: Money;
  quantity: Scalars['Int'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  attributes: Array<CustomCartAttribute>;
  metadata?: Maybe<Scalars['Json']>;
};

export type CustomAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type OrderStatus =
  | 'UNPAID'
  | 'PAID';

export type CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

  export type QuerySdk = {
      /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. **/
  cart: InContextSdkMethod<Query['cart'], QuerycartArgs, MeshContext>,
  /**  **/
  node: InContextSdkMethod<Query['node'], QuerynodeArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. **/
  addItem: InContextSdkMethod<Mutation['addItem'], MutationaddItemArgs, MeshContext>,
  /** Use this to set all the items at once in the cart. This will override any existing items. **/
  setItems: InContextSdkMethod<Mutation['setItems'], MutationsetItemsArgs, MeshContext>,
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. **/
  updateItem: InContextSdkMethod<Mutation['updateItem'], MutationupdateItemArgs, MeshContext>,
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. **/
  incrementItemQuantity: InContextSdkMethod<Mutation['incrementItemQuantity'], MutationincrementItemQuantityArgs, MeshContext>,
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. **/
  decrementItemQuantity: InContextSdkMethod<Mutation['decrementItemQuantity'], MutationdecrementItemQuantityArgs, MeshContext>,
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. **/
  removeItem: InContextSdkMethod<Mutation['removeItem'], MutationremoveItemArgs, MeshContext>,
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. **/
  emptyCart: InContextSdkMethod<Mutation['emptyCart'], MutationemptyCartArgs, MeshContext>,
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. **/
  updateCart: InContextSdkMethod<Mutation['updateCart'], MutationupdateCartArgs, MeshContext>,
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. **/
  deleteCart: InContextSdkMethod<Mutation['deleteCart'], MutationdeleteCartArgs, MeshContext>,
  /** Use this to convert a cart to an unpaid order. **/
  checkout: InContextSdkMethod<Mutation['checkout'], MutationcheckoutArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["CartQL"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
