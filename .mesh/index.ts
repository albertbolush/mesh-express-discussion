// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  GCMS_Hex: any;
  GCMS_Json: any;
  Long: any;
  GCMS_RGBAHue: any;
  GCMS_RGBATransparency: any;
  GCMS_RichTextAST: any;
  CQL_Json: any;
  CQL_Upload: any;
};

export type Query = {
  /** Fetches an object given its ID */
  GCMS_node?: Maybe<GCMS_Node>;
  /** Retrieve multiple products */
  GCMS_products: Array<GCMS_Product>;
  /** Retrieve a single product */
  GCMS_product?: Maybe<GCMS_Product>;
  /** Retrieve multiple products using the Relay connection interface */
  GCMS_productsConnection: GCMS_ProductConnection;
  /** Retrieve document version */
  GCMS_productVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple reviews */
  GCMS_reviews: Array<GCMS_Review>;
  /** Retrieve a single review */
  GCMS_review?: Maybe<GCMS_Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  GCMS_reviewsConnection: GCMS_ReviewConnection;
  /** Retrieve document version */
  GCMS_reviewVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple assets */
  GCMS_assets: Array<GCMS_Asset>;
  /** Retrieve a single asset */
  GCMS_asset?: Maybe<GCMS_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  GCMS_assetsConnection: GCMS_AssetConnection;
  /** Retrieve document version */
  GCMS_assetVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple votes */
  GCMS_votes: Array<GCMS_Vote>;
  /** Retrieve a single vote */
  GCMS_vote?: Maybe<GCMS_Vote>;
  /** Retrieve multiple votes using the Relay connection interface */
  GCMS_votesConnection: GCMS_VoteConnection;
  /** Retrieve document version */
  GCMS_voteVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple users */
  GCMS_users: Array<GCMS_User>;
  /** Retrieve a single user */
  GCMS_user?: Maybe<GCMS_User>;
  /** Retrieve multiple users using the Relay connection interface */
  GCMS_usersConnection: GCMS_UserConnection;
  /** Retrieve multiple scheduledOperations */
  GCMS_scheduledOperations: Array<GCMS_ScheduledOperation>;
  /** Retrieve a single scheduledOperation */
  GCMS_scheduledOperation?: Maybe<GCMS_ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  GCMS_scheduledOperationsConnection: GCMS_ScheduledOperationConnection;
  /** Retrieve multiple scheduledReleases */
  GCMS_scheduledReleases: Array<GCMS_ScheduledRelease>;
  /** Retrieve a single scheduledRelease */
  GCMS_scheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  GCMS_scheduledReleasesConnection: GCMS_ScheduledReleaseConnection;
  /** Retrieve multiple nextAuthUsers */
  GCMS_nextAuthUsers: Array<GCMS_NextAuthUser>;
  /** Retrieve a single nextAuthUser */
  GCMS_nextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Retrieve multiple nextAuthUsers using the Relay connection interface */
  GCMS_nextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Retrieve document version */
  GCMS_nextAuthUserVersion?: Maybe<GCMS_DocumentVersion>;
  /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
  CQL_cart?: Maybe<CQL_Cart>;
  CQL_node?: Maybe<CQL_Node>;
};


export type QueryGCMS_nodeArgs = {
  id: Scalars['ID'];
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productsArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productArgs = {
  where: GCMS_ProductWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_reviewsArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_assetsArgs = {
  where?: InputMaybe<GCMS_AssetWhereInput>;
  orderBy?: InputMaybe<GCMS_AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetWhereInput>;
  orderBy?: InputMaybe<GCMS_AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_votesArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_voteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_votesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_voteVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_usersArgs = {
  where?: InputMaybe<GCMS_UserWhereInput>;
  orderBy?: InputMaybe<GCMS_UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_userArgs = {
  where: GCMS_UserWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_usersConnectionArgs = {
  where?: InputMaybe<GCMS_UserWhereInput>;
  orderBy?: InputMaybe<GCMS_UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationsArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationArgs = {
  where: GCMS_ScheduledOperationWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationsConnectionArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleasesArgs = {
  where?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleasesConnectionArgs = {
  where?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserWhereInput>;
  orderBy?: InputMaybe<GCMS_NextAuthUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserWhereInput>;
  orderBy?: InputMaybe<GCMS_NextAuthUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUserVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryCQL_cartArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
};


export type QueryCQL_nodeArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
};

export type Mutation = {
  /** Create one product */
  GCMS_createProduct?: Maybe<GCMS_Product>;
  /** Update one product */
  GCMS_updateProduct?: Maybe<GCMS_Product>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  GCMS_deleteProduct?: Maybe<GCMS_Product>;
  /** Upsert one product */
  GCMS_upsertProduct?: Maybe<GCMS_Product>;
  /** Publish one product */
  GCMS_publishProduct?: Maybe<GCMS_Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishProduct?: Maybe<GCMS_Product>;
  /** Update many Product documents */
  GCMS_updateManyProductsConnection: GCMS_ProductConnection;
  /** Delete many Product documents, return deleted documents */
  GCMS_deleteManyProductsConnection: GCMS_ProductConnection;
  /** Publish many Product documents */
  GCMS_publishManyProductsConnection: GCMS_ProductConnection;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyProductsConnection: GCMS_ProductConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  GCMS_updateManyProducts: GCMS_BatchPayload;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  GCMS_deleteManyProducts: GCMS_BatchPayload;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  GCMS_publishManyProducts: GCMS_BatchPayload;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  GCMS_unpublishManyProducts: GCMS_BatchPayload;
  /** Schedule to publish one product */
  GCMS_schedulePublishProduct?: Maybe<GCMS_Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishProduct?: Maybe<GCMS_Product>;
  /** Create one review */
  GCMS_createReview?: Maybe<GCMS_Review>;
  /** Update one review */
  GCMS_updateReview?: Maybe<GCMS_Review>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  GCMS_deleteReview?: Maybe<GCMS_Review>;
  /** Upsert one review */
  GCMS_upsertReview?: Maybe<GCMS_Review>;
  /** Publish one review */
  GCMS_publishReview?: Maybe<GCMS_Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishReview?: Maybe<GCMS_Review>;
  /** Update many Review documents */
  GCMS_updateManyReviewsConnection: GCMS_ReviewConnection;
  /** Delete many Review documents, return deleted documents */
  GCMS_deleteManyReviewsConnection: GCMS_ReviewConnection;
  /** Publish many Review documents */
  GCMS_publishManyReviewsConnection: GCMS_ReviewConnection;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyReviewsConnection: GCMS_ReviewConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  GCMS_updateManyReviews: GCMS_BatchPayload;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  GCMS_deleteManyReviews: GCMS_BatchPayload;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  GCMS_publishManyReviews: GCMS_BatchPayload;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  GCMS_unpublishManyReviews: GCMS_BatchPayload;
  /** Schedule to publish one review */
  GCMS_schedulePublishReview?: Maybe<GCMS_Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishReview?: Maybe<GCMS_Review>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  GCMS_createAsset?: Maybe<GCMS_Asset>;
  /** Update one asset */
  GCMS_updateAsset?: Maybe<GCMS_Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  GCMS_deleteAsset?: Maybe<GCMS_Asset>;
  /** Upsert one asset */
  GCMS_upsertAsset?: Maybe<GCMS_Asset>;
  /** Publish one asset */
  GCMS_publishAsset?: Maybe<GCMS_Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishAsset?: Maybe<GCMS_Asset>;
  /** Update many Asset documents */
  GCMS_updateManyAssetsConnection: GCMS_AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  GCMS_deleteManyAssetsConnection: GCMS_AssetConnection;
  /** Publish many Asset documents */
  GCMS_publishManyAssetsConnection: GCMS_AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyAssetsConnection: GCMS_AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  GCMS_updateManyAssets: GCMS_BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  GCMS_deleteManyAssets: GCMS_BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  GCMS_publishManyAssets: GCMS_BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  GCMS_unpublishManyAssets: GCMS_BatchPayload;
  /** Schedule to publish one asset */
  GCMS_schedulePublishAsset?: Maybe<GCMS_Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishAsset?: Maybe<GCMS_Asset>;
  /** Create one vote */
  GCMS_createVote?: Maybe<GCMS_Vote>;
  /** Update one vote */
  GCMS_updateVote?: Maybe<GCMS_Vote>;
  /** Delete one vote from _all_ existing stages. Returns deleted document. */
  GCMS_deleteVote?: Maybe<GCMS_Vote>;
  /** Upsert one vote */
  GCMS_upsertVote?: Maybe<GCMS_Vote>;
  /** Publish one vote */
  GCMS_publishVote?: Maybe<GCMS_Vote>;
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishVote?: Maybe<GCMS_Vote>;
  /** Update many Vote documents */
  GCMS_updateManyVotesConnection: GCMS_VoteConnection;
  /** Delete many Vote documents, return deleted documents */
  GCMS_deleteManyVotesConnection: GCMS_VoteConnection;
  /** Publish many Vote documents */
  GCMS_publishManyVotesConnection: GCMS_VoteConnection;
  /** Find many Vote documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyVotesConnection: GCMS_VoteConnection;
  /**
   * Update many votes
   * @deprecated Please use the new paginated many mutation (updateManyVotesConnection)
   */
  GCMS_updateManyVotes: GCMS_BatchPayload;
  /**
   * Delete many Vote documents
   * @deprecated Please use the new paginated many mutation (deleteManyVotesConnection)
   */
  GCMS_deleteManyVotes: GCMS_BatchPayload;
  /**
   * Publish many Vote documents
   * @deprecated Please use the new paginated many mutation (publishManyVotesConnection)
   */
  GCMS_publishManyVotes: GCMS_BatchPayload;
  /**
   * Unpublish many Vote documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVotesConnection)
   */
  GCMS_unpublishManyVotes: GCMS_BatchPayload;
  /** Schedule to publish one vote */
  GCMS_schedulePublishVote?: Maybe<GCMS_Vote>;
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishVote?: Maybe<GCMS_Vote>;
  /** Delete and return scheduled operation */
  GCMS_deleteScheduledOperation?: Maybe<GCMS_ScheduledOperation>;
  /** Create one scheduledRelease */
  GCMS_createScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Update one scheduledRelease */
  GCMS_updateScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  GCMS_deleteScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Create one nextAuthUser */
  GCMS_createNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Update one nextAuthUser */
  GCMS_updateNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Delete one nextAuthUser from _all_ existing stages. Returns deleted document. */
  GCMS_deleteNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Upsert one nextAuthUser */
  GCMS_upsertNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Publish one nextAuthUser */
  GCMS_publishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Update many NextAuthUser documents */
  GCMS_updateManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Delete many NextAuthUser documents, return deleted documents */
  GCMS_deleteManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Publish many NextAuthUser documents */
  GCMS_publishManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Find many NextAuthUser documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /**
   * Update many nextAuthUsers
   * @deprecated Please use the new paginated many mutation (updateManyNextAuthUsersConnection)
   */
  GCMS_updateManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Delete many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyNextAuthUsersConnection)
   */
  GCMS_deleteManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Publish many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (publishManyNextAuthUsersConnection)
   */
  GCMS_publishManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Unpublish many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNextAuthUsersConnection)
   */
  GCMS_unpublishManyNextAuthUsers: GCMS_BatchPayload;
  /** Schedule to publish one nextAuthUser */
  GCMS_schedulePublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
  CQL_addItem: CQL_Cart;
  /** Use this to set all the items at once in the cart. This will override any existing items. */
  CQL_setItems: CQL_Cart;
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
  CQL_updateItem: CQL_Cart;
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  CQL_incrementItemQuantity: CQL_Cart;
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  CQL_decrementItemQuantity: CQL_Cart;
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
  CQL_removeItem: CQL_Cart;
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
  CQL_emptyCart: CQL_Cart;
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. */
  CQL_updateCart: CQL_Cart;
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
  CQL_deleteCart: CQL_DeletePayload;
  /** Use this to convert a cart to an unpaid order. */
  CQL_checkout?: Maybe<CQL_Order>;
};


export type MutationGCMS_createProductArgs = {
  data: GCMS_ProductCreateInput;
};


export type MutationGCMS_updateProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  data: GCMS_ProductUpdateInput;
};


export type MutationGCMS_deleteProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
};


export type MutationGCMS_upsertProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  upsert: GCMS_ProductUpsertInput;
};


export type MutationGCMS_publishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  data: GCMS_ProductUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  data: GCMS_ProductUpdateManyInput;
};


export type MutationGCMS_deleteManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
};


export type MutationGCMS_publishManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  to?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_schedulePublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_createReviewArgs = {
  data: GCMS_ReviewCreateInput;
};


export type MutationGCMS_updateReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  data: GCMS_ReviewUpdateInput;
};


export type MutationGCMS_deleteReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
};


export type MutationGCMS_upsertReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  upsert: GCMS_ReviewUpsertInput;
};


export type MutationGCMS_publishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  data: GCMS_ReviewUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  data: GCMS_ReviewUpdateManyInput;
};


export type MutationGCMS_deleteManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
};


export type MutationGCMS_publishManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_createAssetArgs = {
  data: GCMS_AssetCreateInput;
};


export type MutationGCMS_updateAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  data: GCMS_AssetUpdateInput;
};


export type MutationGCMS_deleteAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
};


export type MutationGCMS_upsertAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  upsert: GCMS_AssetUpsertInput;
};


export type MutationGCMS_publishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  data: GCMS_AssetUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  data: GCMS_AssetUpdateManyInput;
};


export type MutationGCMS_deleteManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
};


export type MutationGCMS_publishManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  to?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_schedulePublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_createVoteArgs = {
  data: GCMS_VoteCreateInput;
};


export type MutationGCMS_updateVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  data: GCMS_VoteUpdateInput;
};


export type MutationGCMS_deleteVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
};


export type MutationGCMS_upsertVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  upsert: GCMS_VoteUpsertInput;
};


export type MutationGCMS_publishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  data: GCMS_VoteUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  data: GCMS_VoteUpdateManyInput;
};


export type MutationGCMS_deleteManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
};


export type MutationGCMS_publishManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_deleteScheduledOperationArgs = {
  where: GCMS_ScheduledOperationWhereUniqueInput;
};


export type MutationGCMS_createScheduledReleaseArgs = {
  data: GCMS_ScheduledReleaseCreateInput;
};


export type MutationGCMS_updateScheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  data: GCMS_ScheduledReleaseUpdateInput;
};


export type MutationGCMS_deleteScheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
};


export type MutationGCMS_createNextAuthUserArgs = {
  data: GCMS_NextAuthUserCreateInput;
};


export type MutationGCMS_updateNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  data: GCMS_NextAuthUserUpdateInput;
};


export type MutationGCMS_deleteNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
};


export type MutationGCMS_upsertNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  upsert: GCMS_NextAuthUserUpsertInput;
};


export type MutationGCMS_publishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  data: GCMS_NextAuthUserUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  data: GCMS_NextAuthUserUpdateManyInput;
};


export type MutationGCMS_deleteManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
};


export type MutationGCMS_publishManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationCQL_addItemArgs = {
  input: CQL_AddToCartInput;
};


export type MutationCQL_setItemsArgs = {
  input: CQL_SetCartItemsInput;
};


export type MutationCQL_updateItemArgs = {
  input: CQL_UpdateCartItemInput;
};


export type MutationCQL_incrementItemQuantityArgs = {
  input: CQL_UpdateItemQuantityInput;
};


export type MutationCQL_decrementItemQuantityArgs = {
  input: CQL_UpdateItemQuantityInput;
};


export type MutationCQL_removeItemArgs = {
  input: CQL_RemoveCartItemInput;
};


export type MutationCQL_emptyCartArgs = {
  input: CQL_EmptyCartInput;
};


export type MutationCQL_updateCartArgs = {
  input: CQL_UpdateCartInput;
};


export type MutationCQL_deleteCartArgs = {
  input: CQL_DeleteCartInput;
};


export type MutationCQL_checkoutArgs = {
  input: CQL_CheckoutInput;
};

export type GCMS_Aggregate = {
  count: Scalars['Int'];
};

/** Asset system model */
export type GCMS_Asset = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<GCMS_Asset>;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  productImage: Array<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Asset versions */
  history: Array<GCMS_Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type GCMS_AssetlocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type GCMS_AssetdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type GCMS_AssetcreatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetupdatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetpublishedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetproductImageArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssethistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};


/** Asset system model */
export type GCMS_AsseturlArgs = {
  transformation?: InputMaybe<GCMS_AssetTransformationInput>;
};

export type GCMS_AssetConnectInput = {
  /** Document to connect */
  where: GCMS_AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_AssetEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImage?: InputMaybe<GCMS_ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<GCMS_AssetCreateLocalizationsInput>;
};

export type GCMS_AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetCreateLocalizationInput = {
  /** Localization input */
  data: GCMS_AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<GCMS_AssetCreateLocalizationInput>>;
};

export type GCMS_AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<GCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
};

export type GCMS_AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<GCMS_AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: InputMaybe<GCMS_AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_AssetEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  productImage_every?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_some?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_none?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_AssetOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'width_ASC'
  | 'width_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC';

/** Transformations for Assets */
export type GCMS_AssetTransformationInput = {
  image?: InputMaybe<GCMS_ImageTransformationInput>;
  document?: InputMaybe<GCMS_DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_AssetUpdateInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImage?: InputMaybe<GCMS_ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<GCMS_AssetUpdateLocalizationsInput>;
};

export type GCMS_AssetUpdateLocalizationDataInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetUpdateLocalizationInput = {
  data: GCMS_AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<GCMS_AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<GCMS_AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type GCMS_AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<GCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<GCMS_AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<GCMS_AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<GCMS_AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
};

export type GCMS_AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<GCMS_AssetUpdateManyLocalizationsInput>;
};

export type GCMS_AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetUpdateManyLocalizationInput = {
  data: GCMS_AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_AssetUpdateManyLocalizationInput>>;
};

export type GCMS_AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_AssetWhereInput;
  /** Update many input */
  data: GCMS_AssetUpdateManyInput;
};

export type GCMS_AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<GCMS_AssetCreateInput>;
  /** Update single Asset document */
  update?: InputMaybe<GCMS_AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<GCMS_AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: InputMaybe<GCMS_AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_AssetWhereUniqueInput;
  /** Document to update */
  data: GCMS_AssetUpdateInput;
};

export type GCMS_AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_AssetCreateInput;
  /** Update document if it exists */
  update: GCMS_AssetUpdateInput;
};

export type GCMS_AssetUpsertLocalizationInput = {
  update: GCMS_AssetUpdateLocalizationDataInput;
  create: GCMS_AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_AssetWhereUniqueInput;
  /** Upsert data */
  data: GCMS_AssetUpsertInput;
};

/** Identifies documents */
export type GCMS_AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  productImage_every?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_some?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_none?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Asset record uniquely */
export type GCMS_AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type GCMS_Color = {
  hex: Scalars['GCMS_Hex'];
  rgba: RGBA;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type GCMS_ColorInput = {
  hex?: InputMaybe<Scalars['GCMS_Hex']>;
  rgba?: InputMaybe<GCMS_RGBAInput>;
};

export type GCMS_ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_DocumentFileTypes =
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'pdf'
  | 'html'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

export type GCMS_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<GCMS_DocumentFileTypes>;
};

/** Transformations for Documents */
export type GCMS_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<GCMS_DocumentOutputInput>;
};

export type GCMS_DocumentVersion = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['GCMS_Json']>;
};

export type GCMS_ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max';

export type GCMS_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<GCMS_ImageFit>;
};

/** Transformations for Images */
export type GCMS_ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<GCMS_ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
  /** System locale */
  | 'en'
  | 'de';

/** Representing a geolocation point with latitude and longitude */
export type GCMS_Location = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type GCMS_LocationdistanceArgs = {
  from: GCMS_LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type GCMS_LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GCMS_NextAuthUser = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_NextAuthUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  auth0Id?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of NextAuthUser versions */
  history: Array<GCMS_Version>;
};


export type GCMS_NextAuthUserdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_NextAuthUsercreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserhistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_NextAuthUserConnectInput = {
  /** Document to connect */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_NextAuthUserConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_NextAuthUserEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_NextAuthUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  bio?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  auth0Id?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserCreateManyInlineInput = {
  /** Create and connect multiple existing NextAuthUser documents */
  create?: InputMaybe<Array<GCMS_NextAuthUserCreateInput>>;
  /** Connect multiple existing NextAuthUser documents */
  connect?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
};

export type GCMS_NextAuthUserCreateOneInlineInput = {
  /** Create and connect one NextAuthUser document */
  create?: InputMaybe<GCMS_NextAuthUserCreateInput>;
  /** Connect one existing NextAuthUser document */
  connect?: InputMaybe<GCMS_NextAuthUserWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_NextAuthUserEdge = {
  /** The item at the end of the edge. */
  node: GCMS_NextAuthUser;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_NextAuthUserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0Id_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0Id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  auth0Id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  auth0Id_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0Id_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0Id_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0Id_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0Id_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  auth0Id_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_NextAuthUserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'bio_ASC'
  | 'bio_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'auth0Id_ASC'
  | 'auth0Id_DESC';

export type GCMS_NextAuthUserUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserUpdateManyInlineInput = {
  /** Create and connect multiple NextAuthUser documents */
  create?: InputMaybe<Array<GCMS_NextAuthUserCreateInput>>;
  /** Connect multiple existing NextAuthUser documents */
  connect?: InputMaybe<Array<GCMS_NextAuthUserConnectInput>>;
  /** Override currently-connected documents with multiple existing NextAuthUser documents */
  set?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
  /** Update multiple NextAuthUser documents */
  update?: InputMaybe<Array<GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NextAuthUser documents */
  upsert?: InputMaybe<Array<GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple NextAuthUser documents */
  disconnect?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
  /** Delete multiple NextAuthUser documents */
  delete?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
};

export type GCMS_NextAuthUserUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_NextAuthUserWhereInput;
  /** Update many input */
  data: GCMS_NextAuthUserUpdateManyInput;
};

export type GCMS_NextAuthUserUpdateOneInlineInput = {
  /** Create and connect one NextAuthUser document */
  create?: InputMaybe<GCMS_NextAuthUserCreateInput>;
  /** Update single NextAuthUser document */
  update?: InputMaybe<GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NextAuthUser document */
  upsert?: InputMaybe<GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput>;
  /** Connect existing NextAuthUser document */
  connect?: InputMaybe<GCMS_NextAuthUserWhereUniqueInput>;
  /** Disconnect currently connected NextAuthUser document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected NextAuthUser document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Document to update */
  data: GCMS_NextAuthUserUpdateInput;
};

export type GCMS_NextAuthUserUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_NextAuthUserCreateInput;
  /** Update document if it exists */
  update: GCMS_NextAuthUserUpdateInput;
};

export type GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Upsert data */
  data: GCMS_NextAuthUserUpsertInput;
};

/** Identifies documents */
export type GCMS_NextAuthUserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0Id_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0Id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  auth0Id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  auth0Id_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0Id_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0Id_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0Id_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0Id_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  auth0Id_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References NextAuthUser record uniquely */
export type GCMS_NextAuthUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type GCMS_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: GCMS_Stage;
};

/** Information about pagination in a connection. */
export type GCMS_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type GCMS_Product = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<GCMS_Product>;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Product>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  content?: Maybe<GCMS_RichText>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  reviews: Array<GCMS_Review>;
  votes: Array<GCMS_Vote>;
  image?: Maybe<GCMS_Asset>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Product versions */
  history: Array<GCMS_Version>;
};


export type GCMS_ProductlocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GCMS_ProductdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_ProductcreatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductupdatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductpublishedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductreviewsArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductvotesArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductimageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProducthistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_ProductConnectInput = {
  /** Document to connect */
  where: GCMS_ProductWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ProductConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ProductEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ProductCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  reviews?: InputMaybe<GCMS_ReviewCreateManyInlineInput>;
  votes?: InputMaybe<GCMS_VoteCreateManyInlineInput>;
  image?: InputMaybe<GCMS_AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<GCMS_ProductCreateLocalizationsInput>;
};

export type GCMS_ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type GCMS_ProductCreateLocalizationInput = {
  /** Localization input */
  data: GCMS_ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<GCMS_ProductCreateLocalizationInput>>;
};

export type GCMS_ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<GCMS_ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
};

export type GCMS_ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<GCMS_ProductCreateInput>;
  /** Connect one existing Product document */
  connect?: InputMaybe<GCMS_ProductWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ProductEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ProductManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  reviews_every?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_some?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_none?: InputMaybe<GCMS_ReviewWhereInput>;
  votes_every?: InputMaybe<GCMS_VoteWhereInput>;
  votes_some?: InputMaybe<GCMS_VoteWhereInput>;
  votes_none?: InputMaybe<GCMS_VoteWhereInput>;
  image?: InputMaybe<GCMS_AssetWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_ProductOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC';

export type GCMS_ProductUpdateInput = {
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  reviews?: InputMaybe<GCMS_ReviewUpdateManyInlineInput>;
  votes?: InputMaybe<GCMS_VoteUpdateManyInlineInput>;
  image?: InputMaybe<GCMS_AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<GCMS_ProductUpdateLocalizationsInput>;
};

export type GCMS_ProductUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type GCMS_ProductUpdateLocalizationInput = {
  data: GCMS_ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<GCMS_ProductCreateLocalizationInput>>;
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<GCMS_ProductUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type GCMS_ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<GCMS_ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<GCMS_ProductConnectInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<GCMS_ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<GCMS_ProductUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
};

export type GCMS_ProductUpdateManyInput = {
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<GCMS_ProductUpdateManyLocalizationsInput>;
};

export type GCMS_ProductUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type GCMS_ProductUpdateManyLocalizationInput = {
  data: GCMS_ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_ProductUpdateManyLocalizationInput>>;
};

export type GCMS_ProductUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ProductWhereInput;
  /** Update many input */
  data: GCMS_ProductUpdateManyInput;
};

export type GCMS_ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<GCMS_ProductCreateInput>;
  /** Update single Product document */
  update?: InputMaybe<GCMS_ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<GCMS_ProductUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Product document */
  connect?: InputMaybe<GCMS_ProductWhereUniqueInput>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ProductUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ProductWhereUniqueInput;
  /** Document to update */
  data: GCMS_ProductUpdateInput;
};

export type GCMS_ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ProductCreateInput;
  /** Update document if it exists */
  update: GCMS_ProductUpdateInput;
};

export type GCMS_ProductUpsertLocalizationInput = {
  update: GCMS_ProductUpdateLocalizationDataInput;
  create: GCMS_ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ProductWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ProductUpsertInput;
};

/** Identifies documents */
export type GCMS_ProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  reviews_every?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_some?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_none?: InputMaybe<GCMS_ReviewWhereInput>;
  votes_every?: InputMaybe<GCMS_VoteWhereInput>;
  votes_some?: InputMaybe<GCMS_VoteWhereInput>;
  votes_none?: InputMaybe<GCMS_VoteWhereInput>;
  image?: InputMaybe<GCMS_AssetWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Product record uniquely */
export type GCMS_ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type GCMS_PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<GCMS_Stage>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RGBA = {
  r: Scalars['GCMS_RGBAHue'];
  g: Scalars['GCMS_RGBAHue'];
  b: Scalars['GCMS_RGBAHue'];
  a: Scalars['GCMS_RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GCMS_RGBAInput = {
  r: Scalars['GCMS_RGBAHue'];
  g: Scalars['GCMS_RGBAHue'];
  b: Scalars['GCMS_RGBAHue'];
  a: Scalars['GCMS_RGBATransparency'];
};

export type GCMS_Review = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Review>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  product?: Maybe<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Review versions */
  history: Array<GCMS_Version>;
};


export type GCMS_ReviewdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_ReviewcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewproductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewhistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_ReviewConnectInput = {
  /** Document to connect */
  where: GCMS_ReviewWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ReviewConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ReviewEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  comment: Scalars['String'];
  product?: InputMaybe<GCMS_ProductCreateOneInlineInput>;
};

export type GCMS_ReviewCreateManyInlineInput = {
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<GCMS_ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
};

export type GCMS_ReviewCreateOneInlineInput = {
  /** Create and connect one Review document */
  create?: InputMaybe<GCMS_ReviewCreateInput>;
  /** Connect one existing Review document */
  connect?: InputMaybe<GCMS_ReviewWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ReviewEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Review;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ReviewManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_ReviewOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'comment_ASC'
  | 'comment_DESC';

export type GCMS_ReviewUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<GCMS_ProductUpdateOneInlineInput>;
};

export type GCMS_ReviewUpdateManyInlineInput = {
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<GCMS_ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<GCMS_ReviewConnectInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<GCMS_ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<GCMS_ReviewUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
};

export type GCMS_ReviewUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type GCMS_ReviewUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ReviewWhereInput;
  /** Update many input */
  data: GCMS_ReviewUpdateManyInput;
};

export type GCMS_ReviewUpdateOneInlineInput = {
  /** Create and connect one Review document */
  create?: InputMaybe<GCMS_ReviewCreateInput>;
  /** Update single Review document */
  update?: InputMaybe<GCMS_ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<GCMS_ReviewUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Review document */
  connect?: InputMaybe<GCMS_ReviewWhereUniqueInput>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ReviewUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ReviewWhereUniqueInput;
  /** Document to update */
  data: GCMS_ReviewUpdateInput;
};

export type GCMS_ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ReviewCreateInput;
  /** Update document if it exists */
  update: GCMS_ReviewUpdateInput;
};

export type GCMS_ReviewUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ReviewWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ReviewUpsertInput;
};

/** Identifies documents */
export type GCMS_ReviewWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Review record uniquely */
export type GCMS_ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type GCMS_RichText = {
  /** Returns AST representation */
  raw: Scalars['GCMS_RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type GCMS_ScheduledOperation = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_ScheduledOperation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['GCMS_Json'];
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  /** The release this operation is scheduled for */
  release?: Maybe<GCMS_ScheduledRelease>;
  /** operation Status */
  status: GCMS_ScheduledOperationStatus;
  affectedDocuments: Array<GCMS_ScheduledOperationAffectedDocument>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationreleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationaffectedDocumentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GCMS_ScheduledOperationAffectedDocument = GCMS_Asset | GCMS_NextAuthUser | GCMS_Product | GCMS_Review | GCMS_Vote;

export type GCMS_ScheduledOperationConnectInput = {
  /** Document to connect */
  where: GCMS_ScheduledOperationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ScheduledOperationConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ScheduledOperationEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
};

export type GCMS_ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<GCMS_ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ScheduledOperationEdge = {
  /** The item at the end of the edge. */
  node: GCMS_ScheduledOperation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ScheduledOperationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  release?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  status?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
};

export type GCMS_ScheduledOperationOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'status_ASC'
  | 'status_DESC';

/** System Scheduled Operation Status */
export type GCMS_ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

export type GCMS_ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<GCMS_ScheduledOperationConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
};

export type GCMS_ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<GCMS_ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GCMS_ScheduledOperationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  release?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  status?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
};

/** References ScheduledOperation record uniquely */
export type GCMS_ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type GCMS_ScheduledRelease = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_ScheduledRelease>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  /** Operations to run with this release */
  operations: Array<GCMS_ScheduledOperation>;
  /** Release Status */
  status: GCMS_ScheduledReleaseStatus;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasedocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasecreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleaseupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasepublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleaseoperationsArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GCMS_ScheduledReleaseConnectInput = {
  /** Document to connect */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ScheduledReleaseConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ScheduledReleaseEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseCreateManyInlineInput = {
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<GCMS_ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
};

export type GCMS_ScheduledReleaseCreateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<GCMS_ScheduledReleaseCreateInput>;
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<GCMS_ScheduledReleaseWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ScheduledReleaseEdge = {
  /** The item at the end of the edge. */
  node: GCMS_ScheduledRelease;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ScheduledReleaseManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  operations_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  status?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
};

export type GCMS_ScheduledReleaseOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'isImplicit_ASC'
  | 'isImplicit_DESC'
  | 'releaseAt_ASC'
  | 'releaseAt_DESC'
  | 'status_ASC'
  | 'status_DESC';

/** System Scheduled Release Status */
export type GCMS_ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

export type GCMS_ScheduledReleaseUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseUpdateManyInlineInput = {
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<GCMS_ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<GCMS_ScheduledReleaseConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
};

export type GCMS_ScheduledReleaseUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ScheduledReleaseWhereInput;
  /** Update many input */
  data: GCMS_ScheduledReleaseUpdateManyInput;
};

export type GCMS_ScheduledReleaseUpdateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<GCMS_ScheduledReleaseCreateInput>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<GCMS_ScheduledReleaseWhereUniqueInput>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Document to update */
  data: GCMS_ScheduledReleaseUpdateInput;
};

export type GCMS_ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: GCMS_ScheduledReleaseUpdateInput;
};

export type GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ScheduledReleaseUpsertInput;
};

/** Identifies documents */
export type GCMS_ScheduledReleaseWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  operations_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  status?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
};

/** References ScheduledRelease record uniquely */
export type GCMS_ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export type GCMS_Stage =
  /** The Draft is the default stage for all your content. */
  | 'DRAFT'
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED';

export type GCMS_SystemDateTimeFieldVariation =
  | 'BASE'
  | 'LOCALIZATION'
  | 'COMBINED';

export type GCMS_UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<GCMS_Stage>;
};

/** User system model */
export type GCMS_User = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: GCMS_UserKind;
};


/** User system model */
export type GCMS_UserdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type GCMS_UserConnectInput = {
  /** Document to connect */
  where: GCMS_UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_UserConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_UserEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
};

export type GCMS_UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<GCMS_UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_UserEdge = {
  /** The item at the end of the edge. */
  node: GCMS_User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export type GCMS_UserKind =
  | 'PAT'
  | 'MEMBER'
  | 'WEBHOOK'
  | 'PUBLIC';

/** Identifies documents */
export type GCMS_UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<GCMS_UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<GCMS_UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
};

export type GCMS_UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'picture_ASC'
  | 'picture_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'kind_ASC'
  | 'kind_DESC';

export type GCMS_UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<GCMS_UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
};

export type GCMS_UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<GCMS_UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GCMS_UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<GCMS_UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<GCMS_UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
};

/** References User record uniquely */
export type GCMS_UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS_Version = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type GCMS_VersionWhereInput = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
};

export type GCMS_Vote = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Vote>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  product?: Maybe<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Vote versions */
  history: Array<GCMS_Version>;
};


export type GCMS_VotedocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_VotecreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VoteupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotepublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VoteproductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotescheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotehistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_VoteConnectInput = {
  /** Document to connect */
  where: GCMS_VoteWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_VoteConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_VoteEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_VoteCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  product?: InputMaybe<GCMS_ProductCreateOneInlineInput>;
};

export type GCMS_VoteCreateManyInlineInput = {
  /** Create and connect multiple existing Vote documents */
  create?: InputMaybe<Array<GCMS_VoteCreateInput>>;
  /** Connect multiple existing Vote documents */
  connect?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
};

export type GCMS_VoteCreateOneInlineInput = {
  /** Create and connect one Vote document */
  create?: InputMaybe<GCMS_VoteCreateInput>;
  /** Connect one existing Vote document */
  connect?: InputMaybe<GCMS_VoteWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_VoteEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Vote;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_VoteManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_VoteOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC';

export type GCMS_VoteUpdateInput = {
  product?: InputMaybe<GCMS_ProductUpdateOneInlineInput>;
};

export type GCMS_VoteUpdateManyInlineInput = {
  /** Create and connect multiple Vote documents */
  create?: InputMaybe<Array<GCMS_VoteCreateInput>>;
  /** Connect multiple existing Vote documents */
  connect?: InputMaybe<Array<GCMS_VoteConnectInput>>;
  /** Override currently-connected documents with multiple existing Vote documents */
  set?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
  /** Update multiple Vote documents */
  update?: InputMaybe<Array<GCMS_VoteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Vote documents */
  upsert?: InputMaybe<Array<GCMS_VoteUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Vote documents */
  disconnect?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
  /** Delete multiple Vote documents */
  delete?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
};

export type GCMS_VoteUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type GCMS_VoteUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_VoteWhereInput;
  /** Update many input */
  data: GCMS_VoteUpdateManyInput;
};

export type GCMS_VoteUpdateOneInlineInput = {
  /** Create and connect one Vote document */
  create?: InputMaybe<GCMS_VoteCreateInput>;
  /** Update single Vote document */
  update?: InputMaybe<GCMS_VoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Vote document */
  upsert?: InputMaybe<GCMS_VoteUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Vote document */
  connect?: InputMaybe<GCMS_VoteWhereUniqueInput>;
  /** Disconnect currently connected Vote document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Vote document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_VoteUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_VoteWhereUniqueInput;
  /** Document to update */
  data: GCMS_VoteUpdateInput;
};

export type GCMS_VoteUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_VoteCreateInput;
  /** Update document if it exists */
  update: GCMS_VoteUpdateInput;
};

export type GCMS_VoteUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_VoteWhereUniqueInput;
  /** Upsert data */
  data: GCMS_VoteUpsertInput;
};

/** Identifies documents */
export type GCMS_VoteWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Vote record uniquely */
export type GCMS_VoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS__FilterKind =
  | 'search'
  | 'AND'
  | 'OR'
  | 'NOT'
  | 'eq'
  | 'eq_not'
  | 'in'
  | 'not_in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'not_starts_with'
  | 'ends_with'
  | 'not_ends_with'
  | 'contains_all'
  | 'contains_some'
  | 'contains_none'
  | 'relational_single'
  | 'relational_every'
  | 'relational_some'
  | 'relational_none';

export type GCMS__MutationInputFieldKind =
  | 'scalar'
  | 'richText'
  | 'richTextWithEmbeds'
  | 'enum'
  | 'relation'
  | 'union'
  | 'virtual';

export type GCMS__MutationKind =
  | 'create'
  | 'publish'
  | 'unpublish'
  | 'update'
  | 'upsert'
  | 'delete'
  | 'updateMany'
  | 'publishMany'
  | 'unpublishMany'
  | 'deleteMany'
  | 'schedulePublish'
  | 'scheduleUnpublish';

export type GCMS__OrderDirection =
  | 'asc'
  | 'desc';

export type GCMS__RelationInputCardinality =
  | 'one'
  | 'many';

export type GCMS__RelationInputKind =
  | 'create'
  | 'update';

export type GCMS__RelationKind =
  | 'regular'
  | 'union';

export type GCMS__SystemDateTimeFieldVariation =
  | 'base'
  | 'localization'
  | 'combined';

export type CQL_CurrencyInput = {
  code?: InputMaybe<CQL_CurrencyCode>;
  symbol?: InputMaybe<Scalars['String']>;
  thousandsSeparator?: InputMaybe<Scalars['String']>;
  decimalSeparator?: InputMaybe<Scalars['String']>;
  decimalDigits?: InputMaybe<Scalars['Int']>;
};

export type CQL_CurrencyCode =
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
export type CQL_Cart = CQL_Node & {
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
  items: Array<CQL_CartItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: CQL_Money;
  /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: CQL_Money;
  /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: CQL_Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: CQL_Money;
  /** A simple helper method to check if the cart is empty. */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Custom key/value attributes array for the cart. */
  attributes: Array<CQL_CustomCartAttribute>;
  /** Custom meta object for the cart */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** Any notes related to the cart/checkout */
  notes?: Maybe<Scalars['String']>;
  /** The date and time the cart was created. */
  createdAt: Scalars['Date'];
  /** The date and time the cart was updated. */
  updatedAt: Scalars['Date'];
};

export type CQL_Node = {
  id: Scalars['ID'];
};

/** Cart and Cart Items use the currency object to format their unit/line totals. */
export type Currency = {
  /** The currency code, e.g. USD, GBP, EUR */
  code?: Maybe<CQL_CurrencyCode>;
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
export type CQL_CartItem = {
  /** A custom unique identifer for the item provided by you. */
  id: Scalars['ID'];
  /** Name for the item. */
  name?: Maybe<Scalars['String']>;
  /** Description for the item. */
  description?: Maybe<Scalars['String']>;
  /** The type of cart item this is. */
  type: CQL_CartItemType;
  /** Array of image URLs for the item. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Unit total for the individual item. */
  unitTotal: CQL_Money;
  /** Line total (quantity * unit price). */
  lineTotal: CQL_Money;
  /** Quantity for the item. */
  quantity: Scalars['Int'];
  /** Custom key/value attributes array for the item. */
  attributes: Array<CQL_CustomCartAttribute>;
  /** Custom metadata for the item. */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** The date and time the item was created. */
  createdAt: Scalars['Date'];
  /** The date and time the item was updated. */
  updatedAt: Scalars['Date'];
  product?: Maybe<GCMS_Product>;
};

/** Use these enums to group cart items. Cart totals will reflect these enums. */
export type CQL_CartItemType =
  | 'SKU'
  | 'TAX'
  | 'SHIPPING';

/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export type CQL_Money = {
  /** The raw amount in cents/pence */
  amount?: Maybe<Scalars['Int']>;
  /** The current currency details of the money amount */
  currency: Currency;
  /** The formatted amount with the cart currency. */
  formatted: Scalars['String'];
};

/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export type CQL_CustomCartAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CQL_AddToCartInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_CustomAttributeInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type CQL_SetCartItemsInput = {
  cartId: Scalars['ID'];
  items: Array<CQL_SetCartItemInput>;
};

export type CQL_SetCartItemInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_UpdateCartItemInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_UpdateItemQuantityInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to update. */
  id: Scalars['ID'];
  /** The amount (as Int) you wish to increment the Cart item quantity by. */
  by: Scalars['Int'];
};

export type CQL_RemoveCartItemInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to remove. */
  id: Scalars['ID'];
};

export type CQL_EmptyCartInput = {
  /** The ID of the Cart you wish to empty. */
  id: Scalars['ID'];
};

export type CQL_UpdateCartInput = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_DeleteCartInput = {
  /** The ID of the Cart you wish to delete. */
  id: Scalars['ID'];
};

export type CQL_DeletePayload = {
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type CQL_CheckoutInput = {
  cartId: Scalars['ID'];
  email: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  shipping: CQL_AddressInput;
  billing?: InputMaybe<CQL_AddressInput>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_AddressInput = {
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
export type CQL_Order = {
  id: Scalars['ID'];
  /** The ID of the cart you want to "checkout". */
  cartId: Scalars['ID'];
  /** The email of the recipient. Can be used later for cart recovery emails. */
  email: Scalars['String'];
  /** The orders shipping address. */
  shipping: CQL_Address;
  /** The orders billing address. */
  billing: CQL_Address;
  /** The order items that were in the cart. */
  items: Array<CQL_OrderItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: CQL_Money;
  /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: CQL_Money;
  /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: CQL_Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: CQL_Money;
  /** The total item count. */
  totalItems: Scalars['Int'];
  /** The total unique item count. */
  totalUniqueItems: Scalars['Int'];
  /** The notes set at checkout. */
  notes?: Maybe<Scalars['String']>;
  /** The custom attributes set at checkout */
  attributes: Array<CQL_CustomAttribute>;
  /** The metadata set at checkout */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
  status: CQL_OrderStatus;
  /** The date and time the order was created. */
  createdAt: Scalars['Date'];
  /** The date and time the order status was updated. */
  updatedAt: Scalars['Date'];
};

/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export type CQL_Address = {
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
export type CQL_OrderItem = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type: CQL_CartItemType;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitTotal: CQL_Money;
  lineTotal: CQL_Money;
  quantity: Scalars['Int'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  attributes: Array<CQL_CustomCartAttribute>;
  metadata?: Maybe<Scalars['CQL_Json']>;
};

export type CQL_CustomAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CQL_OrderStatus =
  | 'UNPAID'
  | 'PAID';

export type CQL_CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  GCMS_Aggregate: ResolverTypeWrapper<GCMS_Aggregate>;
  GCMS_Asset: ResolverTypeWrapper<GCMS_Asset>;
  GCMS_AssetConnectInput: GCMS_AssetConnectInput;
  GCMS_AssetConnection: ResolverTypeWrapper<GCMS_AssetConnection>;
  GCMS_AssetCreateInput: GCMS_AssetCreateInput;
  GCMS_AssetCreateLocalizationDataInput: GCMS_AssetCreateLocalizationDataInput;
  GCMS_AssetCreateLocalizationInput: GCMS_AssetCreateLocalizationInput;
  GCMS_AssetCreateLocalizationsInput: GCMS_AssetCreateLocalizationsInput;
  GCMS_AssetCreateManyInlineInput: GCMS_AssetCreateManyInlineInput;
  GCMS_AssetCreateOneInlineInput: GCMS_AssetCreateOneInlineInput;
  GCMS_AssetEdge: ResolverTypeWrapper<GCMS_AssetEdge>;
  GCMS_AssetManyWhereInput: GCMS_AssetManyWhereInput;
  GCMS_AssetOrderByInput: GCMS_AssetOrderByInput;
  GCMS_AssetTransformationInput: GCMS_AssetTransformationInput;
  GCMS_AssetUpdateInput: GCMS_AssetUpdateInput;
  GCMS_AssetUpdateLocalizationDataInput: GCMS_AssetUpdateLocalizationDataInput;
  GCMS_AssetUpdateLocalizationInput: GCMS_AssetUpdateLocalizationInput;
  GCMS_AssetUpdateLocalizationsInput: GCMS_AssetUpdateLocalizationsInput;
  GCMS_AssetUpdateManyInlineInput: GCMS_AssetUpdateManyInlineInput;
  GCMS_AssetUpdateManyInput: GCMS_AssetUpdateManyInput;
  GCMS_AssetUpdateManyLocalizationDataInput: GCMS_AssetUpdateManyLocalizationDataInput;
  GCMS_AssetUpdateManyLocalizationInput: GCMS_AssetUpdateManyLocalizationInput;
  GCMS_AssetUpdateManyLocalizationsInput: GCMS_AssetUpdateManyLocalizationsInput;
  GCMS_AssetUpdateManyWithNestedWhereInput: GCMS_AssetUpdateManyWithNestedWhereInput;
  GCMS_AssetUpdateOneInlineInput: GCMS_AssetUpdateOneInlineInput;
  GCMS_AssetUpdateWithNestedWhereUniqueInput: GCMS_AssetUpdateWithNestedWhereUniqueInput;
  GCMS_AssetUpsertInput: GCMS_AssetUpsertInput;
  GCMS_AssetUpsertLocalizationInput: GCMS_AssetUpsertLocalizationInput;
  GCMS_AssetUpsertWithNestedWhereUniqueInput: GCMS_AssetUpsertWithNestedWhereUniqueInput;
  GCMS_AssetWhereInput: GCMS_AssetWhereInput;
  GCMS_AssetWhereUniqueInput: GCMS_AssetWhereUniqueInput;
  GCMS_BatchPayload: ResolverTypeWrapper<GCMS_BatchPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GCMS_Color: ResolverTypeWrapper<GCMS_Color>;
  GCMS_ColorInput: GCMS_ColorInput;
  GCMS_ConnectPositionInput: GCMS_ConnectPositionInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  GCMS_DocumentFileTypes: GCMS_DocumentFileTypes;
  GCMS_DocumentOutputInput: GCMS_DocumentOutputInput;
  GCMS_DocumentTransformationInput: GCMS_DocumentTransformationInput;
  GCMS_DocumentVersion: ResolverTypeWrapper<GCMS_DocumentVersion>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GCMS_Hex: ResolverTypeWrapper<Scalars['GCMS_Hex']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  GCMS_ImageFit: GCMS_ImageFit;
  GCMS_ImageResizeInput: GCMS_ImageResizeInput;
  GCMS_ImageTransformationInput: GCMS_ImageTransformationInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  GCMS_Json: ResolverTypeWrapper<Scalars['GCMS_Json']>;
  Locale: Locale;
  GCMS_Location: ResolverTypeWrapper<GCMS_Location>;
  GCMS_LocationInput: GCMS_LocationInput;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  GCMS_NextAuthUser: ResolverTypeWrapper<GCMS_NextAuthUser>;
  GCMS_NextAuthUserConnectInput: GCMS_NextAuthUserConnectInput;
  GCMS_NextAuthUserConnection: ResolverTypeWrapper<GCMS_NextAuthUserConnection>;
  GCMS_NextAuthUserCreateInput: GCMS_NextAuthUserCreateInput;
  GCMS_NextAuthUserCreateManyInlineInput: GCMS_NextAuthUserCreateManyInlineInput;
  GCMS_NextAuthUserCreateOneInlineInput: GCMS_NextAuthUserCreateOneInlineInput;
  GCMS_NextAuthUserEdge: ResolverTypeWrapper<GCMS_NextAuthUserEdge>;
  GCMS_NextAuthUserManyWhereInput: GCMS_NextAuthUserManyWhereInput;
  GCMS_NextAuthUserOrderByInput: GCMS_NextAuthUserOrderByInput;
  GCMS_NextAuthUserUpdateInput: GCMS_NextAuthUserUpdateInput;
  GCMS_NextAuthUserUpdateManyInlineInput: GCMS_NextAuthUserUpdateManyInlineInput;
  GCMS_NextAuthUserUpdateManyInput: GCMS_NextAuthUserUpdateManyInput;
  GCMS_NextAuthUserUpdateManyWithNestedWhereInput: GCMS_NextAuthUserUpdateManyWithNestedWhereInput;
  GCMS_NextAuthUserUpdateOneInlineInput: GCMS_NextAuthUserUpdateOneInlineInput;
  GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput: GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput;
  GCMS_NextAuthUserUpsertInput: GCMS_NextAuthUserUpsertInput;
  GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput: GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput;
  GCMS_NextAuthUserWhereInput: GCMS_NextAuthUserWhereInput;
  GCMS_NextAuthUserWhereUniqueInput: GCMS_NextAuthUserWhereUniqueInput;
  GCMS_Node: ResolversTypes['GCMS_Asset'] | ResolversTypes['GCMS_NextAuthUser'] | ResolversTypes['GCMS_Product'] | ResolversTypes['GCMS_Review'] | ResolversTypes['GCMS_ScheduledOperation'] | ResolversTypes['GCMS_ScheduledRelease'] | ResolversTypes['GCMS_User'] | ResolversTypes['GCMS_Vote'];
  GCMS_PageInfo: ResolverTypeWrapper<GCMS_PageInfo>;
  GCMS_Product: ResolverTypeWrapper<GCMS_Product>;
  GCMS_ProductConnectInput: GCMS_ProductConnectInput;
  GCMS_ProductConnection: ResolverTypeWrapper<GCMS_ProductConnection>;
  GCMS_ProductCreateInput: GCMS_ProductCreateInput;
  GCMS_ProductCreateLocalizationDataInput: GCMS_ProductCreateLocalizationDataInput;
  GCMS_ProductCreateLocalizationInput: GCMS_ProductCreateLocalizationInput;
  GCMS_ProductCreateLocalizationsInput: GCMS_ProductCreateLocalizationsInput;
  GCMS_ProductCreateManyInlineInput: GCMS_ProductCreateManyInlineInput;
  GCMS_ProductCreateOneInlineInput: GCMS_ProductCreateOneInlineInput;
  GCMS_ProductEdge: ResolverTypeWrapper<GCMS_ProductEdge>;
  GCMS_ProductManyWhereInput: GCMS_ProductManyWhereInput;
  GCMS_ProductOrderByInput: GCMS_ProductOrderByInput;
  GCMS_ProductUpdateInput: GCMS_ProductUpdateInput;
  GCMS_ProductUpdateLocalizationDataInput: GCMS_ProductUpdateLocalizationDataInput;
  GCMS_ProductUpdateLocalizationInput: GCMS_ProductUpdateLocalizationInput;
  GCMS_ProductUpdateLocalizationsInput: GCMS_ProductUpdateLocalizationsInput;
  GCMS_ProductUpdateManyInlineInput: GCMS_ProductUpdateManyInlineInput;
  GCMS_ProductUpdateManyInput: GCMS_ProductUpdateManyInput;
  GCMS_ProductUpdateManyLocalizationDataInput: GCMS_ProductUpdateManyLocalizationDataInput;
  GCMS_ProductUpdateManyLocalizationInput: GCMS_ProductUpdateManyLocalizationInput;
  GCMS_ProductUpdateManyLocalizationsInput: GCMS_ProductUpdateManyLocalizationsInput;
  GCMS_ProductUpdateManyWithNestedWhereInput: GCMS_ProductUpdateManyWithNestedWhereInput;
  GCMS_ProductUpdateOneInlineInput: GCMS_ProductUpdateOneInlineInput;
  GCMS_ProductUpdateWithNestedWhereUniqueInput: GCMS_ProductUpdateWithNestedWhereUniqueInput;
  GCMS_ProductUpsertInput: GCMS_ProductUpsertInput;
  GCMS_ProductUpsertLocalizationInput: GCMS_ProductUpsertLocalizationInput;
  GCMS_ProductUpsertWithNestedWhereUniqueInput: GCMS_ProductUpsertWithNestedWhereUniqueInput;
  GCMS_ProductWhereInput: GCMS_ProductWhereInput;
  GCMS_ProductWhereUniqueInput: GCMS_ProductWhereUniqueInput;
  GCMS_PublishLocaleInput: GCMS_PublishLocaleInput;
  RGBA: ResolverTypeWrapper<RGBA>;
  GCMS_RGBAHue: ResolverTypeWrapper<Scalars['GCMS_RGBAHue']>;
  GCMS_RGBAInput: GCMS_RGBAInput;
  GCMS_RGBATransparency: ResolverTypeWrapper<Scalars['GCMS_RGBATransparency']>;
  GCMS_Review: ResolverTypeWrapper<GCMS_Review>;
  GCMS_ReviewConnectInput: GCMS_ReviewConnectInput;
  GCMS_ReviewConnection: ResolverTypeWrapper<GCMS_ReviewConnection>;
  GCMS_ReviewCreateInput: GCMS_ReviewCreateInput;
  GCMS_ReviewCreateManyInlineInput: GCMS_ReviewCreateManyInlineInput;
  GCMS_ReviewCreateOneInlineInput: GCMS_ReviewCreateOneInlineInput;
  GCMS_ReviewEdge: ResolverTypeWrapper<GCMS_ReviewEdge>;
  GCMS_ReviewManyWhereInput: GCMS_ReviewManyWhereInput;
  GCMS_ReviewOrderByInput: GCMS_ReviewOrderByInput;
  GCMS_ReviewUpdateInput: GCMS_ReviewUpdateInput;
  GCMS_ReviewUpdateManyInlineInput: GCMS_ReviewUpdateManyInlineInput;
  GCMS_ReviewUpdateManyInput: GCMS_ReviewUpdateManyInput;
  GCMS_ReviewUpdateManyWithNestedWhereInput: GCMS_ReviewUpdateManyWithNestedWhereInput;
  GCMS_ReviewUpdateOneInlineInput: GCMS_ReviewUpdateOneInlineInput;
  GCMS_ReviewUpdateWithNestedWhereUniqueInput: GCMS_ReviewUpdateWithNestedWhereUniqueInput;
  GCMS_ReviewUpsertInput: GCMS_ReviewUpsertInput;
  GCMS_ReviewUpsertWithNestedWhereUniqueInput: GCMS_ReviewUpsertWithNestedWhereUniqueInput;
  GCMS_ReviewWhereInput: GCMS_ReviewWhereInput;
  GCMS_ReviewWhereUniqueInput: GCMS_ReviewWhereUniqueInput;
  GCMS_RichText: ResolverTypeWrapper<GCMS_RichText>;
  GCMS_RichTextAST: ResolverTypeWrapper<Scalars['GCMS_RichTextAST']>;
  GCMS_ScheduledOperation: ResolverTypeWrapper<Omit<GCMS_ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversTypes['GCMS_ScheduledOperationAffectedDocument']> }>;
  GCMS_ScheduledOperationAffectedDocument: ResolversTypes['GCMS_Asset'] | ResolversTypes['GCMS_NextAuthUser'] | ResolversTypes['GCMS_Product'] | ResolversTypes['GCMS_Review'] | ResolversTypes['GCMS_Vote'];
  GCMS_ScheduledOperationConnectInput: GCMS_ScheduledOperationConnectInput;
  GCMS_ScheduledOperationConnection: ResolverTypeWrapper<GCMS_ScheduledOperationConnection>;
  GCMS_ScheduledOperationCreateManyInlineInput: GCMS_ScheduledOperationCreateManyInlineInput;
  GCMS_ScheduledOperationCreateOneInlineInput: GCMS_ScheduledOperationCreateOneInlineInput;
  GCMS_ScheduledOperationEdge: ResolverTypeWrapper<GCMS_ScheduledOperationEdge>;
  GCMS_ScheduledOperationManyWhereInput: GCMS_ScheduledOperationManyWhereInput;
  GCMS_ScheduledOperationOrderByInput: GCMS_ScheduledOperationOrderByInput;
  GCMS_ScheduledOperationStatus: GCMS_ScheduledOperationStatus;
  GCMS_ScheduledOperationUpdateManyInlineInput: GCMS_ScheduledOperationUpdateManyInlineInput;
  GCMS_ScheduledOperationUpdateOneInlineInput: GCMS_ScheduledOperationUpdateOneInlineInput;
  GCMS_ScheduledOperationWhereInput: GCMS_ScheduledOperationWhereInput;
  GCMS_ScheduledOperationWhereUniqueInput: GCMS_ScheduledOperationWhereUniqueInput;
  GCMS_ScheduledRelease: ResolverTypeWrapper<GCMS_ScheduledRelease>;
  GCMS_ScheduledReleaseConnectInput: GCMS_ScheduledReleaseConnectInput;
  GCMS_ScheduledReleaseConnection: ResolverTypeWrapper<GCMS_ScheduledReleaseConnection>;
  GCMS_ScheduledReleaseCreateInput: GCMS_ScheduledReleaseCreateInput;
  GCMS_ScheduledReleaseCreateManyInlineInput: GCMS_ScheduledReleaseCreateManyInlineInput;
  GCMS_ScheduledReleaseCreateOneInlineInput: GCMS_ScheduledReleaseCreateOneInlineInput;
  GCMS_ScheduledReleaseEdge: ResolverTypeWrapper<GCMS_ScheduledReleaseEdge>;
  GCMS_ScheduledReleaseManyWhereInput: GCMS_ScheduledReleaseManyWhereInput;
  GCMS_ScheduledReleaseOrderByInput: GCMS_ScheduledReleaseOrderByInput;
  GCMS_ScheduledReleaseStatus: GCMS_ScheduledReleaseStatus;
  GCMS_ScheduledReleaseUpdateInput: GCMS_ScheduledReleaseUpdateInput;
  GCMS_ScheduledReleaseUpdateManyInlineInput: GCMS_ScheduledReleaseUpdateManyInlineInput;
  GCMS_ScheduledReleaseUpdateManyInput: GCMS_ScheduledReleaseUpdateManyInput;
  GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput: GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput;
  GCMS_ScheduledReleaseUpdateOneInlineInput: GCMS_ScheduledReleaseUpdateOneInlineInput;
  GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput: GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  GCMS_ScheduledReleaseUpsertInput: GCMS_ScheduledReleaseUpsertInput;
  GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput: GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  GCMS_ScheduledReleaseWhereInput: GCMS_ScheduledReleaseWhereInput;
  GCMS_ScheduledReleaseWhereUniqueInput: GCMS_ScheduledReleaseWhereUniqueInput;
  GCMS_Stage: GCMS_Stage;
  String: ResolverTypeWrapper<Scalars['String']>;
  GCMS_SystemDateTimeFieldVariation: GCMS_SystemDateTimeFieldVariation;
  GCMS_UnpublishLocaleInput: GCMS_UnpublishLocaleInput;
  GCMS_User: ResolverTypeWrapper<GCMS_User>;
  GCMS_UserConnectInput: GCMS_UserConnectInput;
  GCMS_UserConnection: ResolverTypeWrapper<GCMS_UserConnection>;
  GCMS_UserCreateManyInlineInput: GCMS_UserCreateManyInlineInput;
  GCMS_UserCreateOneInlineInput: GCMS_UserCreateOneInlineInput;
  GCMS_UserEdge: ResolverTypeWrapper<GCMS_UserEdge>;
  GCMS_UserKind: GCMS_UserKind;
  GCMS_UserManyWhereInput: GCMS_UserManyWhereInput;
  GCMS_UserOrderByInput: GCMS_UserOrderByInput;
  GCMS_UserUpdateManyInlineInput: GCMS_UserUpdateManyInlineInput;
  GCMS_UserUpdateOneInlineInput: GCMS_UserUpdateOneInlineInput;
  GCMS_UserWhereInput: GCMS_UserWhereInput;
  GCMS_UserWhereUniqueInput: GCMS_UserWhereUniqueInput;
  GCMS_Version: ResolverTypeWrapper<GCMS_Version>;
  GCMS_VersionWhereInput: GCMS_VersionWhereInput;
  GCMS_Vote: ResolverTypeWrapper<GCMS_Vote>;
  GCMS_VoteConnectInput: GCMS_VoteConnectInput;
  GCMS_VoteConnection: ResolverTypeWrapper<GCMS_VoteConnection>;
  GCMS_VoteCreateInput: GCMS_VoteCreateInput;
  GCMS_VoteCreateManyInlineInput: GCMS_VoteCreateManyInlineInput;
  GCMS_VoteCreateOneInlineInput: GCMS_VoteCreateOneInlineInput;
  GCMS_VoteEdge: ResolverTypeWrapper<GCMS_VoteEdge>;
  GCMS_VoteManyWhereInput: GCMS_VoteManyWhereInput;
  GCMS_VoteOrderByInput: GCMS_VoteOrderByInput;
  GCMS_VoteUpdateInput: GCMS_VoteUpdateInput;
  GCMS_VoteUpdateManyInlineInput: GCMS_VoteUpdateManyInlineInput;
  GCMS_VoteUpdateManyInput: GCMS_VoteUpdateManyInput;
  GCMS_VoteUpdateManyWithNestedWhereInput: GCMS_VoteUpdateManyWithNestedWhereInput;
  GCMS_VoteUpdateOneInlineInput: GCMS_VoteUpdateOneInlineInput;
  GCMS_VoteUpdateWithNestedWhereUniqueInput: GCMS_VoteUpdateWithNestedWhereUniqueInput;
  GCMS_VoteUpsertInput: GCMS_VoteUpsertInput;
  GCMS_VoteUpsertWithNestedWhereUniqueInput: GCMS_VoteUpsertWithNestedWhereUniqueInput;
  GCMS_VoteWhereInput: GCMS_VoteWhereInput;
  GCMS_VoteWhereUniqueInput: GCMS_VoteWhereUniqueInput;
  GCMS__FilterKind: GCMS__FilterKind;
  GCMS__MutationInputFieldKind: GCMS__MutationInputFieldKind;
  GCMS__MutationKind: GCMS__MutationKind;
  GCMS__OrderDirection: GCMS__OrderDirection;
  GCMS__RelationInputCardinality: GCMS__RelationInputCardinality;
  GCMS__RelationInputKind: GCMS__RelationInputKind;
  GCMS__RelationKind: GCMS__RelationKind;
  GCMS__SystemDateTimeFieldVariation: GCMS__SystemDateTimeFieldVariation;
  CQL_CurrencyInput: CQL_CurrencyInput;
  CQL_CurrencyCode: CQL_CurrencyCode;
  CQL_Cart: ResolverTypeWrapper<CQL_Cart>;
  CQL_Node: ResolversTypes['CQL_Cart'];
  Currency: ResolverTypeWrapper<Currency>;
  CQL_CartItem: ResolverTypeWrapper<CQL_CartItem>;
  CQL_CartItemType: CQL_CartItemType;
  CQL_Money: ResolverTypeWrapper<CQL_Money>;
  CQL_CustomCartAttribute: ResolverTypeWrapper<CQL_CustomCartAttribute>;
  CQL_Json: ResolverTypeWrapper<Scalars['CQL_Json']>;
  CQL_AddToCartInput: CQL_AddToCartInput;
  CQL_CustomAttributeInput: CQL_CustomAttributeInput;
  CQL_SetCartItemsInput: CQL_SetCartItemsInput;
  CQL_SetCartItemInput: CQL_SetCartItemInput;
  CQL_UpdateCartItemInput: CQL_UpdateCartItemInput;
  CQL_UpdateItemQuantityInput: CQL_UpdateItemQuantityInput;
  CQL_RemoveCartItemInput: CQL_RemoveCartItemInput;
  CQL_EmptyCartInput: CQL_EmptyCartInput;
  CQL_UpdateCartInput: CQL_UpdateCartInput;
  CQL_DeleteCartInput: CQL_DeleteCartInput;
  CQL_DeletePayload: ResolverTypeWrapper<CQL_DeletePayload>;
  CQL_CheckoutInput: CQL_CheckoutInput;
  CQL_AddressInput: CQL_AddressInput;
  CQL_Order: ResolverTypeWrapper<CQL_Order>;
  CQL_Address: ResolverTypeWrapper<CQL_Address>;
  CQL_OrderItem: ResolverTypeWrapper<CQL_OrderItem>;
  CQL_CustomAttribute: ResolverTypeWrapper<CQL_CustomAttribute>;
  CQL_OrderStatus: CQL_OrderStatus;
  CQL_CacheControlScope: CQL_CacheControlScope;
  CQL_Upload: ResolverTypeWrapper<Scalars['CQL_Upload']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  GCMS_Aggregate: GCMS_Aggregate;
  GCMS_Asset: GCMS_Asset;
  GCMS_AssetConnectInput: GCMS_AssetConnectInput;
  GCMS_AssetConnection: GCMS_AssetConnection;
  GCMS_AssetCreateInput: GCMS_AssetCreateInput;
  GCMS_AssetCreateLocalizationDataInput: GCMS_AssetCreateLocalizationDataInput;
  GCMS_AssetCreateLocalizationInput: GCMS_AssetCreateLocalizationInput;
  GCMS_AssetCreateLocalizationsInput: GCMS_AssetCreateLocalizationsInput;
  GCMS_AssetCreateManyInlineInput: GCMS_AssetCreateManyInlineInput;
  GCMS_AssetCreateOneInlineInput: GCMS_AssetCreateOneInlineInput;
  GCMS_AssetEdge: GCMS_AssetEdge;
  GCMS_AssetManyWhereInput: GCMS_AssetManyWhereInput;
  GCMS_AssetTransformationInput: GCMS_AssetTransformationInput;
  GCMS_AssetUpdateInput: GCMS_AssetUpdateInput;
  GCMS_AssetUpdateLocalizationDataInput: GCMS_AssetUpdateLocalizationDataInput;
  GCMS_AssetUpdateLocalizationInput: GCMS_AssetUpdateLocalizationInput;
  GCMS_AssetUpdateLocalizationsInput: GCMS_AssetUpdateLocalizationsInput;
  GCMS_AssetUpdateManyInlineInput: GCMS_AssetUpdateManyInlineInput;
  GCMS_AssetUpdateManyInput: GCMS_AssetUpdateManyInput;
  GCMS_AssetUpdateManyLocalizationDataInput: GCMS_AssetUpdateManyLocalizationDataInput;
  GCMS_AssetUpdateManyLocalizationInput: GCMS_AssetUpdateManyLocalizationInput;
  GCMS_AssetUpdateManyLocalizationsInput: GCMS_AssetUpdateManyLocalizationsInput;
  GCMS_AssetUpdateManyWithNestedWhereInput: GCMS_AssetUpdateManyWithNestedWhereInput;
  GCMS_AssetUpdateOneInlineInput: GCMS_AssetUpdateOneInlineInput;
  GCMS_AssetUpdateWithNestedWhereUniqueInput: GCMS_AssetUpdateWithNestedWhereUniqueInput;
  GCMS_AssetUpsertInput: GCMS_AssetUpsertInput;
  GCMS_AssetUpsertLocalizationInput: GCMS_AssetUpsertLocalizationInput;
  GCMS_AssetUpsertWithNestedWhereUniqueInput: GCMS_AssetUpsertWithNestedWhereUniqueInput;
  GCMS_AssetWhereInput: GCMS_AssetWhereInput;
  GCMS_AssetWhereUniqueInput: GCMS_AssetWhereUniqueInput;
  GCMS_BatchPayload: GCMS_BatchPayload;
  Boolean: Scalars['Boolean'];
  GCMS_Color: GCMS_Color;
  GCMS_ColorInput: GCMS_ColorInput;
  GCMS_ConnectPositionInput: GCMS_ConnectPositionInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  GCMS_DocumentOutputInput: GCMS_DocumentOutputInput;
  GCMS_DocumentTransformationInput: GCMS_DocumentTransformationInput;
  GCMS_DocumentVersion: GCMS_DocumentVersion;
  Float: Scalars['Float'];
  GCMS_Hex: Scalars['GCMS_Hex'];
  ID: Scalars['ID'];
  GCMS_ImageResizeInput: GCMS_ImageResizeInput;
  GCMS_ImageTransformationInput: GCMS_ImageTransformationInput;
  Int: Scalars['Int'];
  GCMS_Json: Scalars['GCMS_Json'];
  GCMS_Location: GCMS_Location;
  GCMS_LocationInput: GCMS_LocationInput;
  Long: Scalars['Long'];
  GCMS_NextAuthUser: GCMS_NextAuthUser;
  GCMS_NextAuthUserConnectInput: GCMS_NextAuthUserConnectInput;
  GCMS_NextAuthUserConnection: GCMS_NextAuthUserConnection;
  GCMS_NextAuthUserCreateInput: GCMS_NextAuthUserCreateInput;
  GCMS_NextAuthUserCreateManyInlineInput: GCMS_NextAuthUserCreateManyInlineInput;
  GCMS_NextAuthUserCreateOneInlineInput: GCMS_NextAuthUserCreateOneInlineInput;
  GCMS_NextAuthUserEdge: GCMS_NextAuthUserEdge;
  GCMS_NextAuthUserManyWhereInput: GCMS_NextAuthUserManyWhereInput;
  GCMS_NextAuthUserUpdateInput: GCMS_NextAuthUserUpdateInput;
  GCMS_NextAuthUserUpdateManyInlineInput: GCMS_NextAuthUserUpdateManyInlineInput;
  GCMS_NextAuthUserUpdateManyInput: GCMS_NextAuthUserUpdateManyInput;
  GCMS_NextAuthUserUpdateManyWithNestedWhereInput: GCMS_NextAuthUserUpdateManyWithNestedWhereInput;
  GCMS_NextAuthUserUpdateOneInlineInput: GCMS_NextAuthUserUpdateOneInlineInput;
  GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput: GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput;
  GCMS_NextAuthUserUpsertInput: GCMS_NextAuthUserUpsertInput;
  GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput: GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput;
  GCMS_NextAuthUserWhereInput: GCMS_NextAuthUserWhereInput;
  GCMS_NextAuthUserWhereUniqueInput: GCMS_NextAuthUserWhereUniqueInput;
  GCMS_Node: ResolversParentTypes['GCMS_Asset'] | ResolversParentTypes['GCMS_NextAuthUser'] | ResolversParentTypes['GCMS_Product'] | ResolversParentTypes['GCMS_Review'] | ResolversParentTypes['GCMS_ScheduledOperation'] | ResolversParentTypes['GCMS_ScheduledRelease'] | ResolversParentTypes['GCMS_User'] | ResolversParentTypes['GCMS_Vote'];
  GCMS_PageInfo: GCMS_PageInfo;
  GCMS_Product: GCMS_Product;
  GCMS_ProductConnectInput: GCMS_ProductConnectInput;
  GCMS_ProductConnection: GCMS_ProductConnection;
  GCMS_ProductCreateInput: GCMS_ProductCreateInput;
  GCMS_ProductCreateLocalizationDataInput: GCMS_ProductCreateLocalizationDataInput;
  GCMS_ProductCreateLocalizationInput: GCMS_ProductCreateLocalizationInput;
  GCMS_ProductCreateLocalizationsInput: GCMS_ProductCreateLocalizationsInput;
  GCMS_ProductCreateManyInlineInput: GCMS_ProductCreateManyInlineInput;
  GCMS_ProductCreateOneInlineInput: GCMS_ProductCreateOneInlineInput;
  GCMS_ProductEdge: GCMS_ProductEdge;
  GCMS_ProductManyWhereInput: GCMS_ProductManyWhereInput;
  GCMS_ProductUpdateInput: GCMS_ProductUpdateInput;
  GCMS_ProductUpdateLocalizationDataInput: GCMS_ProductUpdateLocalizationDataInput;
  GCMS_ProductUpdateLocalizationInput: GCMS_ProductUpdateLocalizationInput;
  GCMS_ProductUpdateLocalizationsInput: GCMS_ProductUpdateLocalizationsInput;
  GCMS_ProductUpdateManyInlineInput: GCMS_ProductUpdateManyInlineInput;
  GCMS_ProductUpdateManyInput: GCMS_ProductUpdateManyInput;
  GCMS_ProductUpdateManyLocalizationDataInput: GCMS_ProductUpdateManyLocalizationDataInput;
  GCMS_ProductUpdateManyLocalizationInput: GCMS_ProductUpdateManyLocalizationInput;
  GCMS_ProductUpdateManyLocalizationsInput: GCMS_ProductUpdateManyLocalizationsInput;
  GCMS_ProductUpdateManyWithNestedWhereInput: GCMS_ProductUpdateManyWithNestedWhereInput;
  GCMS_ProductUpdateOneInlineInput: GCMS_ProductUpdateOneInlineInput;
  GCMS_ProductUpdateWithNestedWhereUniqueInput: GCMS_ProductUpdateWithNestedWhereUniqueInput;
  GCMS_ProductUpsertInput: GCMS_ProductUpsertInput;
  GCMS_ProductUpsertLocalizationInput: GCMS_ProductUpsertLocalizationInput;
  GCMS_ProductUpsertWithNestedWhereUniqueInput: GCMS_ProductUpsertWithNestedWhereUniqueInput;
  GCMS_ProductWhereInput: GCMS_ProductWhereInput;
  GCMS_ProductWhereUniqueInput: GCMS_ProductWhereUniqueInput;
  GCMS_PublishLocaleInput: GCMS_PublishLocaleInput;
  RGBA: RGBA;
  GCMS_RGBAHue: Scalars['GCMS_RGBAHue'];
  GCMS_RGBAInput: GCMS_RGBAInput;
  GCMS_RGBATransparency: Scalars['GCMS_RGBATransparency'];
  GCMS_Review: GCMS_Review;
  GCMS_ReviewConnectInput: GCMS_ReviewConnectInput;
  GCMS_ReviewConnection: GCMS_ReviewConnection;
  GCMS_ReviewCreateInput: GCMS_ReviewCreateInput;
  GCMS_ReviewCreateManyInlineInput: GCMS_ReviewCreateManyInlineInput;
  GCMS_ReviewCreateOneInlineInput: GCMS_ReviewCreateOneInlineInput;
  GCMS_ReviewEdge: GCMS_ReviewEdge;
  GCMS_ReviewManyWhereInput: GCMS_ReviewManyWhereInput;
  GCMS_ReviewUpdateInput: GCMS_ReviewUpdateInput;
  GCMS_ReviewUpdateManyInlineInput: GCMS_ReviewUpdateManyInlineInput;
  GCMS_ReviewUpdateManyInput: GCMS_ReviewUpdateManyInput;
  GCMS_ReviewUpdateManyWithNestedWhereInput: GCMS_ReviewUpdateManyWithNestedWhereInput;
  GCMS_ReviewUpdateOneInlineInput: GCMS_ReviewUpdateOneInlineInput;
  GCMS_ReviewUpdateWithNestedWhereUniqueInput: GCMS_ReviewUpdateWithNestedWhereUniqueInput;
  GCMS_ReviewUpsertInput: GCMS_ReviewUpsertInput;
  GCMS_ReviewUpsertWithNestedWhereUniqueInput: GCMS_ReviewUpsertWithNestedWhereUniqueInput;
  GCMS_ReviewWhereInput: GCMS_ReviewWhereInput;
  GCMS_ReviewWhereUniqueInput: GCMS_ReviewWhereUniqueInput;
  GCMS_RichText: GCMS_RichText;
  GCMS_RichTextAST: Scalars['GCMS_RichTextAST'];
  GCMS_ScheduledOperation: Omit<GCMS_ScheduledOperation, 'affectedDocuments'> & { affectedDocuments: Array<ResolversParentTypes['GCMS_ScheduledOperationAffectedDocument']> };
  GCMS_ScheduledOperationAffectedDocument: ResolversParentTypes['GCMS_Asset'] | ResolversParentTypes['GCMS_NextAuthUser'] | ResolversParentTypes['GCMS_Product'] | ResolversParentTypes['GCMS_Review'] | ResolversParentTypes['GCMS_Vote'];
  GCMS_ScheduledOperationConnectInput: GCMS_ScheduledOperationConnectInput;
  GCMS_ScheduledOperationConnection: GCMS_ScheduledOperationConnection;
  GCMS_ScheduledOperationCreateManyInlineInput: GCMS_ScheduledOperationCreateManyInlineInput;
  GCMS_ScheduledOperationCreateOneInlineInput: GCMS_ScheduledOperationCreateOneInlineInput;
  GCMS_ScheduledOperationEdge: GCMS_ScheduledOperationEdge;
  GCMS_ScheduledOperationManyWhereInput: GCMS_ScheduledOperationManyWhereInput;
  GCMS_ScheduledOperationUpdateManyInlineInput: GCMS_ScheduledOperationUpdateManyInlineInput;
  GCMS_ScheduledOperationUpdateOneInlineInput: GCMS_ScheduledOperationUpdateOneInlineInput;
  GCMS_ScheduledOperationWhereInput: GCMS_ScheduledOperationWhereInput;
  GCMS_ScheduledOperationWhereUniqueInput: GCMS_ScheduledOperationWhereUniqueInput;
  GCMS_ScheduledRelease: GCMS_ScheduledRelease;
  GCMS_ScheduledReleaseConnectInput: GCMS_ScheduledReleaseConnectInput;
  GCMS_ScheduledReleaseConnection: GCMS_ScheduledReleaseConnection;
  GCMS_ScheduledReleaseCreateInput: GCMS_ScheduledReleaseCreateInput;
  GCMS_ScheduledReleaseCreateManyInlineInput: GCMS_ScheduledReleaseCreateManyInlineInput;
  GCMS_ScheduledReleaseCreateOneInlineInput: GCMS_ScheduledReleaseCreateOneInlineInput;
  GCMS_ScheduledReleaseEdge: GCMS_ScheduledReleaseEdge;
  GCMS_ScheduledReleaseManyWhereInput: GCMS_ScheduledReleaseManyWhereInput;
  GCMS_ScheduledReleaseUpdateInput: GCMS_ScheduledReleaseUpdateInput;
  GCMS_ScheduledReleaseUpdateManyInlineInput: GCMS_ScheduledReleaseUpdateManyInlineInput;
  GCMS_ScheduledReleaseUpdateManyInput: GCMS_ScheduledReleaseUpdateManyInput;
  GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput: GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput;
  GCMS_ScheduledReleaseUpdateOneInlineInput: GCMS_ScheduledReleaseUpdateOneInlineInput;
  GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput: GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput;
  GCMS_ScheduledReleaseUpsertInput: GCMS_ScheduledReleaseUpsertInput;
  GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput: GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput;
  GCMS_ScheduledReleaseWhereInput: GCMS_ScheduledReleaseWhereInput;
  GCMS_ScheduledReleaseWhereUniqueInput: GCMS_ScheduledReleaseWhereUniqueInput;
  String: Scalars['String'];
  GCMS_UnpublishLocaleInput: GCMS_UnpublishLocaleInput;
  GCMS_User: GCMS_User;
  GCMS_UserConnectInput: GCMS_UserConnectInput;
  GCMS_UserConnection: GCMS_UserConnection;
  GCMS_UserCreateManyInlineInput: GCMS_UserCreateManyInlineInput;
  GCMS_UserCreateOneInlineInput: GCMS_UserCreateOneInlineInput;
  GCMS_UserEdge: GCMS_UserEdge;
  GCMS_UserManyWhereInput: GCMS_UserManyWhereInput;
  GCMS_UserUpdateManyInlineInput: GCMS_UserUpdateManyInlineInput;
  GCMS_UserUpdateOneInlineInput: GCMS_UserUpdateOneInlineInput;
  GCMS_UserWhereInput: GCMS_UserWhereInput;
  GCMS_UserWhereUniqueInput: GCMS_UserWhereUniqueInput;
  GCMS_Version: GCMS_Version;
  GCMS_VersionWhereInput: GCMS_VersionWhereInput;
  GCMS_Vote: GCMS_Vote;
  GCMS_VoteConnectInput: GCMS_VoteConnectInput;
  GCMS_VoteConnection: GCMS_VoteConnection;
  GCMS_VoteCreateInput: GCMS_VoteCreateInput;
  GCMS_VoteCreateManyInlineInput: GCMS_VoteCreateManyInlineInput;
  GCMS_VoteCreateOneInlineInput: GCMS_VoteCreateOneInlineInput;
  GCMS_VoteEdge: GCMS_VoteEdge;
  GCMS_VoteManyWhereInput: GCMS_VoteManyWhereInput;
  GCMS_VoteUpdateInput: GCMS_VoteUpdateInput;
  GCMS_VoteUpdateManyInlineInput: GCMS_VoteUpdateManyInlineInput;
  GCMS_VoteUpdateManyInput: GCMS_VoteUpdateManyInput;
  GCMS_VoteUpdateManyWithNestedWhereInput: GCMS_VoteUpdateManyWithNestedWhereInput;
  GCMS_VoteUpdateOneInlineInput: GCMS_VoteUpdateOneInlineInput;
  GCMS_VoteUpdateWithNestedWhereUniqueInput: GCMS_VoteUpdateWithNestedWhereUniqueInput;
  GCMS_VoteUpsertInput: GCMS_VoteUpsertInput;
  GCMS_VoteUpsertWithNestedWhereUniqueInput: GCMS_VoteUpsertWithNestedWhereUniqueInput;
  GCMS_VoteWhereInput: GCMS_VoteWhereInput;
  GCMS_VoteWhereUniqueInput: GCMS_VoteWhereUniqueInput;
  CQL_CurrencyInput: CQL_CurrencyInput;
  CQL_Cart: CQL_Cart;
  CQL_Node: ResolversParentTypes['CQL_Cart'];
  Currency: Currency;
  CQL_CartItem: CQL_CartItem;
  CQL_Money: CQL_Money;
  CQL_CustomCartAttribute: CQL_CustomCartAttribute;
  CQL_Json: Scalars['CQL_Json'];
  CQL_AddToCartInput: CQL_AddToCartInput;
  CQL_CustomAttributeInput: CQL_CustomAttributeInput;
  CQL_SetCartItemsInput: CQL_SetCartItemsInput;
  CQL_SetCartItemInput: CQL_SetCartItemInput;
  CQL_UpdateCartItemInput: CQL_UpdateCartItemInput;
  CQL_UpdateItemQuantityInput: CQL_UpdateItemQuantityInput;
  CQL_RemoveCartItemInput: CQL_RemoveCartItemInput;
  CQL_EmptyCartInput: CQL_EmptyCartInput;
  CQL_UpdateCartInput: CQL_UpdateCartInput;
  CQL_DeleteCartInput: CQL_DeleteCartInput;
  CQL_DeletePayload: CQL_DeletePayload;
  CQL_CheckoutInput: CQL_CheckoutInput;
  CQL_AddressInput: CQL_AddressInput;
  CQL_Order: CQL_Order;
  CQL_Address: CQL_Address;
  CQL_OrderItem: CQL_OrderItem;
  CQL_CustomAttribute: CQL_CustomAttribute;
  CQL_Upload: Scalars['CQL_Upload'];
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  GCMS_node?: Resolver<Maybe<ResolversTypes['GCMS_Node']>, ParentType, ContextType, RequireFields<QueryGCMS_nodeArgs, 'id' | 'stage' | 'locales'>>;
  GCMS_products?: Resolver<Array<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<QueryGCMS_productsArgs, 'stage' | 'locales'>>;
  GCMS_product?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<QueryGCMS_productArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_productsConnection?: Resolver<ResolversTypes['GCMS_ProductConnection'], ParentType, ContextType, RequireFields<QueryGCMS_productsConnectionArgs, 'stage' | 'locales'>>;
  GCMS_productVersion?: Resolver<Maybe<ResolversTypes['GCMS_DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGCMS_productVersionArgs, 'where'>>;
  GCMS_reviews?: Resolver<Array<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<QueryGCMS_reviewsArgs, 'stage' | 'locales'>>;
  GCMS_review?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<QueryGCMS_reviewArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_reviewsConnection?: Resolver<ResolversTypes['GCMS_ReviewConnection'], ParentType, ContextType, RequireFields<QueryGCMS_reviewsConnectionArgs, 'stage' | 'locales'>>;
  GCMS_reviewVersion?: Resolver<Maybe<ResolversTypes['GCMS_DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGCMS_reviewVersionArgs, 'where'>>;
  GCMS_assets?: Resolver<Array<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<QueryGCMS_assetsArgs, 'stage' | 'locales'>>;
  GCMS_asset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<QueryGCMS_assetArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_assetsConnection?: Resolver<ResolversTypes['GCMS_AssetConnection'], ParentType, ContextType, RequireFields<QueryGCMS_assetsConnectionArgs, 'stage' | 'locales'>>;
  GCMS_assetVersion?: Resolver<Maybe<ResolversTypes['GCMS_DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGCMS_assetVersionArgs, 'where'>>;
  GCMS_votes?: Resolver<Array<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<QueryGCMS_votesArgs, 'stage' | 'locales'>>;
  GCMS_vote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<QueryGCMS_voteArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_votesConnection?: Resolver<ResolversTypes['GCMS_VoteConnection'], ParentType, ContextType, RequireFields<QueryGCMS_votesConnectionArgs, 'stage' | 'locales'>>;
  GCMS_voteVersion?: Resolver<Maybe<ResolversTypes['GCMS_DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGCMS_voteVersionArgs, 'where'>>;
  GCMS_users?: Resolver<Array<ResolversTypes['GCMS_User']>, ParentType, ContextType, RequireFields<QueryGCMS_usersArgs, 'stage' | 'locales'>>;
  GCMS_user?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, RequireFields<QueryGCMS_userArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_usersConnection?: Resolver<ResolversTypes['GCMS_UserConnection'], ParentType, ContextType, RequireFields<QueryGCMS_usersConnectionArgs, 'stage' | 'locales'>>;
  GCMS_scheduledOperations?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryGCMS_scheduledOperationsArgs, 'stage' | 'locales'>>;
  GCMS_scheduledOperation?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, RequireFields<QueryGCMS_scheduledOperationArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_scheduledOperationsConnection?: Resolver<ResolversTypes['GCMS_ScheduledOperationConnection'], ParentType, ContextType, RequireFields<QueryGCMS_scheduledOperationsConnectionArgs, 'stage' | 'locales'>>;
  GCMS_scheduledReleases?: Resolver<Array<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryGCMS_scheduledReleasesArgs, 'stage' | 'locales'>>;
  GCMS_scheduledRelease?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<QueryGCMS_scheduledReleaseArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_scheduledReleasesConnection?: Resolver<ResolversTypes['GCMS_ScheduledReleaseConnection'], ParentType, ContextType, RequireFields<QueryGCMS_scheduledReleasesConnectionArgs, 'stage' | 'locales'>>;
  GCMS_nextAuthUsers?: Resolver<Array<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<QueryGCMS_nextAuthUsersArgs, 'stage' | 'locales'>>;
  GCMS_nextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<QueryGCMS_nextAuthUserArgs, 'where' | 'stage' | 'locales'>>;
  GCMS_nextAuthUsersConnection?: Resolver<ResolversTypes['GCMS_NextAuthUserConnection'], ParentType, ContextType, RequireFields<QueryGCMS_nextAuthUsersConnectionArgs, 'stage' | 'locales'>>;
  GCMS_nextAuthUserVersion?: Resolver<Maybe<ResolversTypes['GCMS_DocumentVersion']>, ParentType, ContextType, RequireFields<QueryGCMS_nextAuthUserVersionArgs, 'where'>>;
  CQL_cart?: Resolver<Maybe<ResolversTypes['CQL_Cart']>, ParentType, ContextType, RequireFields<QueryCQL_cartArgs, 'id'>>;
  CQL_node?: Resolver<Maybe<ResolversTypes['CQL_Node']>, ParentType, ContextType, RequireFields<QueryCQL_nodeArgs, 'id'>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  GCMS_createProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_createProductArgs, 'data'>>;
  GCMS_updateProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_updateProductArgs, 'where' | 'data'>>;
  GCMS_deleteProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteProductArgs, 'where'>>;
  GCMS_upsertProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_upsertProductArgs, 'where' | 'upsert'>>;
  GCMS_publishProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_publishProductArgs, 'where' | 'publishBase' | 'withDefaultLocale' | 'to'>>;
  GCMS_unpublishProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_unpublishProductArgs, 'where' | 'from' | 'unpublishBase'>>;
  GCMS_updateManyProductsConnection?: Resolver<ResolversTypes['GCMS_ProductConnection'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyProductsConnectionArgs, 'data'>>;
  GCMS_deleteManyProductsConnection?: Resolver<ResolversTypes['GCMS_ProductConnection'], ParentType, ContextType, Partial<MutationGCMS_deleteManyProductsConnectionArgs>>;
  GCMS_publishManyProductsConnection?: Resolver<ResolversTypes['GCMS_ProductConnection'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyProductsConnectionArgs, 'from' | 'to' | 'publishBase' | 'withDefaultLocale'>>;
  GCMS_unpublishManyProductsConnection?: Resolver<ResolversTypes['GCMS_ProductConnection'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyProductsConnectionArgs, 'stage' | 'from' | 'unpublishBase'>>;
  GCMS_updateManyProducts?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyProductsArgs, 'data'>>;
  GCMS_deleteManyProducts?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, Partial<MutationGCMS_deleteManyProductsArgs>>;
  GCMS_publishManyProducts?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyProductsArgs, 'to' | 'publishBase' | 'withDefaultLocale'>>;
  GCMS_unpublishManyProducts?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyProductsArgs, 'from' | 'unpublishBase'>>;
  GCMS_schedulePublishProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_schedulePublishProductArgs, 'where' | 'publishBase' | 'withDefaultLocale' | 'to'>>;
  GCMS_scheduleUnpublishProduct?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<MutationGCMS_scheduleUnpublishProductArgs, 'where' | 'from' | 'unpublishBase'>>;
  GCMS_createReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_createReviewArgs, 'data'>>;
  GCMS_updateReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_updateReviewArgs, 'where' | 'data'>>;
  GCMS_deleteReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteReviewArgs, 'where'>>;
  GCMS_upsertReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_upsertReviewArgs, 'where' | 'upsert'>>;
  GCMS_publishReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_publishReviewArgs, 'where' | 'to'>>;
  GCMS_unpublishReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_unpublishReviewArgs, 'where' | 'from'>>;
  GCMS_updateManyReviewsConnection?: Resolver<ResolversTypes['GCMS_ReviewConnection'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyReviewsConnectionArgs, 'data'>>;
  GCMS_deleteManyReviewsConnection?: Resolver<ResolversTypes['GCMS_ReviewConnection'], ParentType, ContextType, Partial<MutationGCMS_deleteManyReviewsConnectionArgs>>;
  GCMS_publishManyReviewsConnection?: Resolver<ResolversTypes['GCMS_ReviewConnection'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyReviewsConnectionArgs, 'from' | 'to'>>;
  GCMS_unpublishManyReviewsConnection?: Resolver<ResolversTypes['GCMS_ReviewConnection'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyReviewsConnectionArgs, 'stage' | 'from'>>;
  GCMS_updateManyReviews?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyReviewsArgs, 'data'>>;
  GCMS_deleteManyReviews?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, Partial<MutationGCMS_deleteManyReviewsArgs>>;
  GCMS_publishManyReviews?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyReviewsArgs, 'to'>>;
  GCMS_unpublishManyReviews?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyReviewsArgs, 'from'>>;
  GCMS_schedulePublishReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_schedulePublishReviewArgs, 'where' | 'to'>>;
  GCMS_scheduleUnpublishReview?: Resolver<Maybe<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<MutationGCMS_scheduleUnpublishReviewArgs, 'where' | 'from'>>;
  GCMS_createAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_createAssetArgs, 'data'>>;
  GCMS_updateAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_updateAssetArgs, 'where' | 'data'>>;
  GCMS_deleteAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteAssetArgs, 'where'>>;
  GCMS_upsertAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_upsertAssetArgs, 'where' | 'upsert'>>;
  GCMS_publishAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_publishAssetArgs, 'where' | 'publishBase' | 'withDefaultLocale' | 'to'>>;
  GCMS_unpublishAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_unpublishAssetArgs, 'where' | 'from' | 'unpublishBase'>>;
  GCMS_updateManyAssetsConnection?: Resolver<ResolversTypes['GCMS_AssetConnection'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyAssetsConnectionArgs, 'data'>>;
  GCMS_deleteManyAssetsConnection?: Resolver<ResolversTypes['GCMS_AssetConnection'], ParentType, ContextType, Partial<MutationGCMS_deleteManyAssetsConnectionArgs>>;
  GCMS_publishManyAssetsConnection?: Resolver<ResolversTypes['GCMS_AssetConnection'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyAssetsConnectionArgs, 'from' | 'to' | 'publishBase' | 'withDefaultLocale'>>;
  GCMS_unpublishManyAssetsConnection?: Resolver<ResolversTypes['GCMS_AssetConnection'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyAssetsConnectionArgs, 'stage' | 'from' | 'unpublishBase'>>;
  GCMS_updateManyAssets?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyAssetsArgs, 'data'>>;
  GCMS_deleteManyAssets?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, Partial<MutationGCMS_deleteManyAssetsArgs>>;
  GCMS_publishManyAssets?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyAssetsArgs, 'to' | 'publishBase' | 'withDefaultLocale'>>;
  GCMS_unpublishManyAssets?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyAssetsArgs, 'from' | 'unpublishBase'>>;
  GCMS_schedulePublishAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_schedulePublishAssetArgs, 'where' | 'publishBase' | 'withDefaultLocale' | 'to'>>;
  GCMS_scheduleUnpublishAsset?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<MutationGCMS_scheduleUnpublishAssetArgs, 'where' | 'from' | 'unpublishBase'>>;
  GCMS_createVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_createVoteArgs, 'data'>>;
  GCMS_updateVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_updateVoteArgs, 'where' | 'data'>>;
  GCMS_deleteVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteVoteArgs, 'where'>>;
  GCMS_upsertVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_upsertVoteArgs, 'where' | 'upsert'>>;
  GCMS_publishVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_publishVoteArgs, 'where' | 'to'>>;
  GCMS_unpublishVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_unpublishVoteArgs, 'where' | 'from'>>;
  GCMS_updateManyVotesConnection?: Resolver<ResolversTypes['GCMS_VoteConnection'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyVotesConnectionArgs, 'data'>>;
  GCMS_deleteManyVotesConnection?: Resolver<ResolversTypes['GCMS_VoteConnection'], ParentType, ContextType, Partial<MutationGCMS_deleteManyVotesConnectionArgs>>;
  GCMS_publishManyVotesConnection?: Resolver<ResolversTypes['GCMS_VoteConnection'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyVotesConnectionArgs, 'from' | 'to'>>;
  GCMS_unpublishManyVotesConnection?: Resolver<ResolversTypes['GCMS_VoteConnection'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyVotesConnectionArgs, 'stage' | 'from'>>;
  GCMS_updateManyVotes?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyVotesArgs, 'data'>>;
  GCMS_deleteManyVotes?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, Partial<MutationGCMS_deleteManyVotesArgs>>;
  GCMS_publishManyVotes?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyVotesArgs, 'to'>>;
  GCMS_unpublishManyVotes?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyVotesArgs, 'from'>>;
  GCMS_schedulePublishVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_schedulePublishVoteArgs, 'where' | 'to'>>;
  GCMS_scheduleUnpublishVote?: Resolver<Maybe<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<MutationGCMS_scheduleUnpublishVoteArgs, 'where' | 'from'>>;
  GCMS_deleteScheduledOperation?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteScheduledOperationArgs, 'where'>>;
  GCMS_createScheduledRelease?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationGCMS_createScheduledReleaseArgs, 'data'>>;
  GCMS_updateScheduledRelease?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationGCMS_updateScheduledReleaseArgs, 'where' | 'data'>>;
  GCMS_deleteScheduledRelease?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteScheduledReleaseArgs, 'where'>>;
  GCMS_createNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_createNextAuthUserArgs, 'data'>>;
  GCMS_updateNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_updateNextAuthUserArgs, 'where' | 'data'>>;
  GCMS_deleteNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_deleteNextAuthUserArgs, 'where'>>;
  GCMS_upsertNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_upsertNextAuthUserArgs, 'where' | 'upsert'>>;
  GCMS_publishNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_publishNextAuthUserArgs, 'where' | 'to'>>;
  GCMS_unpublishNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_unpublishNextAuthUserArgs, 'where' | 'from'>>;
  GCMS_updateManyNextAuthUsersConnection?: Resolver<ResolversTypes['GCMS_NextAuthUserConnection'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyNextAuthUsersConnectionArgs, 'data'>>;
  GCMS_deleteManyNextAuthUsersConnection?: Resolver<ResolversTypes['GCMS_NextAuthUserConnection'], ParentType, ContextType, Partial<MutationGCMS_deleteManyNextAuthUsersConnectionArgs>>;
  GCMS_publishManyNextAuthUsersConnection?: Resolver<ResolversTypes['GCMS_NextAuthUserConnection'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyNextAuthUsersConnectionArgs, 'from' | 'to'>>;
  GCMS_unpublishManyNextAuthUsersConnection?: Resolver<ResolversTypes['GCMS_NextAuthUserConnection'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyNextAuthUsersConnectionArgs, 'stage' | 'from'>>;
  GCMS_updateManyNextAuthUsers?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_updateManyNextAuthUsersArgs, 'data'>>;
  GCMS_deleteManyNextAuthUsers?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, Partial<MutationGCMS_deleteManyNextAuthUsersArgs>>;
  GCMS_publishManyNextAuthUsers?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_publishManyNextAuthUsersArgs, 'to'>>;
  GCMS_unpublishManyNextAuthUsers?: Resolver<ResolversTypes['GCMS_BatchPayload'], ParentType, ContextType, RequireFields<MutationGCMS_unpublishManyNextAuthUsersArgs, 'from'>>;
  GCMS_schedulePublishNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_schedulePublishNextAuthUserArgs, 'where' | 'to'>>;
  GCMS_scheduleUnpublishNextAuthUser?: Resolver<Maybe<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<MutationGCMS_scheduleUnpublishNextAuthUserArgs, 'where' | 'from'>>;
  CQL_addItem?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_addItemArgs, 'input'>>;
  CQL_setItems?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_setItemsArgs, 'input'>>;
  CQL_updateItem?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_updateItemArgs, 'input'>>;
  CQL_incrementItemQuantity?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_incrementItemQuantityArgs, 'input'>>;
  CQL_decrementItemQuantity?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_decrementItemQuantityArgs, 'input'>>;
  CQL_removeItem?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_removeItemArgs, 'input'>>;
  CQL_emptyCart?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_emptyCartArgs, 'input'>>;
  CQL_updateCart?: Resolver<ResolversTypes['CQL_Cart'], ParentType, ContextType, RequireFields<MutationCQL_updateCartArgs, 'input'>>;
  CQL_deleteCart?: Resolver<ResolversTypes['CQL_DeletePayload'], ParentType, ContextType, RequireFields<MutationCQL_deleteCartArgs, 'input'>>;
  CQL_checkout?: Resolver<Maybe<ResolversTypes['CQL_Order']>, ParentType, ContextType, RequireFields<MutationCQL_checkoutArgs, 'input'>>;
}>;

export type GCMS_AggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Aggregate'] = ResolversParentTypes['GCMS_Aggregate']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Asset'] = ResolversParentTypes['GCMS_Asset']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<GCMS_AssetlocalizationsArgs, 'locales' | 'includeCurrent'>>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, RequireFields<GCMS_AssetdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<GCMS_AssetcreatedAtArgs, 'variation'>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<GCMS_AssetupdatedAtArgs, 'variation'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<GCMS_AssetpublishedAtArgs, 'variation'>>;
  handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fileName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_AssetcreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_AssetupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_AssetpublishedByArgs>>;
  productImage?: Resolver<Array<ResolversTypes['GCMS_Product']>, ParentType, ContextType, Partial<GCMS_AssetproductImageArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_AssetscheduledInArgs>>;
  history?: Resolver<Array<ResolversTypes['GCMS_Version']>, ParentType, ContextType, RequireFields<GCMS_AssethistoryArgs, 'limit' | 'skip'>>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType, Partial<GCMS_AsseturlArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_AssetConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_AssetConnection'] = ResolversParentTypes['GCMS_AssetConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_AssetEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_AssetEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_AssetEdge'] = ResolversParentTypes['GCMS_AssetEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_Asset'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_BatchPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_BatchPayload'] = ResolversParentTypes['GCMS_BatchPayload']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ColorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Color'] = ResolversParentTypes['GCMS_Color']> = ResolversObject<{
  hex?: Resolver<ResolversTypes['GCMS_Hex'], ParentType, ContextType>;
  rgba?: Resolver<ResolversTypes['RGBA'], ParentType, ContextType>;
  css?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GCMS_DocumentVersionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_DocumentVersion'] = ResolversParentTypes['GCMS_DocumentVersion']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['GCMS_Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GCMS_HexScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GCMS_Hex'], any> {
  name: 'GCMS_Hex';
}

export interface GCMS_JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GCMS_Json'], any> {
  name: 'GCMS_Json';
}

export type GCMS_LocationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Location'] = ResolversParentTypes['GCMS_Location']> = ResolversObject<{
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<GCMS_LocationdistanceArgs, 'from'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type GCMS_NextAuthUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_NextAuthUser'] = ResolversParentTypes['GCMS_NextAuthUser']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_NextAuthUser']>, ParentType, ContextType, RequireFields<GCMS_NextAuthUserdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  auth0Id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_NextAuthUsercreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_NextAuthUserupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_NextAuthUserpublishedByArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_NextAuthUserscheduledInArgs>>;
  history?: Resolver<Array<ResolversTypes['GCMS_Version']>, ParentType, ContextType, RequireFields<GCMS_NextAuthUserhistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_NextAuthUserConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_NextAuthUserConnection'] = ResolversParentTypes['GCMS_NextAuthUserConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_NextAuthUserEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_NextAuthUserEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_NextAuthUserEdge'] = ResolversParentTypes['GCMS_NextAuthUserEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_NextAuthUser'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_NodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Node'] = ResolversParentTypes['GCMS_Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GCMS_Asset' | 'GCMS_NextAuthUser' | 'GCMS_Product' | 'GCMS_Review' | 'GCMS_ScheduledOperation' | 'GCMS_ScheduledRelease' | 'GCMS_User' | 'GCMS_Vote', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
}>;

export type GCMS_PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_PageInfo'] = ResolversParentTypes['GCMS_PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ProductResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Product'] = ResolversParentTypes['GCMS_Product']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['Locale'], ParentType, ContextType>;
  localizations?: Resolver<Array<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<GCMS_ProductlocalizationsArgs, 'locales' | 'includeCurrent'>>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_Product']>, ParentType, ContextType, RequireFields<GCMS_ProductdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<GCMS_ProductcreatedAtArgs, 'variation'>>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType, RequireFields<GCMS_ProductupdatedAtArgs, 'variation'>>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType, RequireFields<GCMS_ProductpublishedAtArgs, 'variation'>>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['GCMS_RichText']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ProductcreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ProductupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ProductpublishedByArgs>>;
  reviews?: Resolver<Array<ResolversTypes['GCMS_Review']>, ParentType, ContextType, Partial<GCMS_ProductreviewsArgs>>;
  votes?: Resolver<Array<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, Partial<GCMS_ProductvotesArgs>>;
  image?: Resolver<Maybe<ResolversTypes['GCMS_Asset']>, ParentType, ContextType, Partial<GCMS_ProductimageArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_ProductscheduledInArgs>>;
  history?: Resolver<Array<ResolversTypes['GCMS_Version']>, ParentType, ContextType, RequireFields<GCMS_ProducthistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ProductConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ProductConnection'] = ResolversParentTypes['GCMS_ProductConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_ProductEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ProductEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ProductEdge'] = ResolversParentTypes['GCMS_ProductEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_Product'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RGBAResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RGBA'] = ResolversParentTypes['RGBA']> = ResolversObject<{
  r?: Resolver<ResolversTypes['GCMS_RGBAHue'], ParentType, ContextType>;
  g?: Resolver<ResolversTypes['GCMS_RGBAHue'], ParentType, ContextType>;
  b?: Resolver<ResolversTypes['GCMS_RGBAHue'], ParentType, ContextType>;
  a?: Resolver<ResolversTypes['GCMS_RGBATransparency'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GCMS_RGBAHueScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GCMS_RGBAHue'], any> {
  name: 'GCMS_RGBAHue';
}

export interface GCMS_RGBATransparencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GCMS_RGBATransparency'], any> {
  name: 'GCMS_RGBATransparency';
}

export type GCMS_ReviewResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Review'] = ResolversParentTypes['GCMS_Review']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_Review']>, ParentType, ContextType, RequireFields<GCMS_ReviewdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ReviewcreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ReviewupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ReviewpublishedByArgs>>;
  product?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, Partial<GCMS_ReviewproductArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_ReviewscheduledInArgs>>;
  history?: Resolver<Array<ResolversTypes['GCMS_Version']>, ParentType, ContextType, RequireFields<GCMS_ReviewhistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ReviewConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ReviewConnection'] = ResolversParentTypes['GCMS_ReviewConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_ReviewEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ReviewEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ReviewEdge'] = ResolversParentTypes['GCMS_ReviewEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_Review'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_RichTextResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_RichText'] = ResolversParentTypes['GCMS_RichText']> = ResolversObject<{
  raw?: Resolver<ResolversTypes['GCMS_RichTextAST'], ParentType, ContextType>;
  html?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GCMS_RichTextASTScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GCMS_RichTextAST'], any> {
  name: 'GCMS_RichTextAST';
}

export type GCMS_ScheduledOperationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledOperation'] = ResolversParentTypes['GCMS_ScheduledOperation']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, RequireFields<GCMS_ScheduledOperationdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawPayload?: Resolver<ResolversTypes['GCMS_Json'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledOperationcreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledOperationupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledOperationpublishedByArgs>>;
  release?: Resolver<Maybe<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, Partial<GCMS_ScheduledOperationreleaseArgs>>;
  status?: Resolver<ResolversTypes['GCMS_ScheduledOperationStatus'], ParentType, ContextType>;
  affectedDocuments?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperationAffectedDocument']>, ParentType, ContextType, Partial<GCMS_ScheduledOperationaffectedDocumentsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ScheduledOperationAffectedDocumentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledOperationAffectedDocument'] = ResolversParentTypes['GCMS_ScheduledOperationAffectedDocument']> = ResolversObject<{
  __resolveType: TypeResolveFn<'GCMS_Asset' | 'GCMS_NextAuthUser' | 'GCMS_Product' | 'GCMS_Review' | 'GCMS_Vote', ParentType, ContextType>;
}>;

export type GCMS_ScheduledOperationConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledOperationConnection'] = ResolversParentTypes['GCMS_ScheduledOperationConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperationEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ScheduledOperationEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledOperationEdge'] = ResolversParentTypes['GCMS_ScheduledOperationEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_ScheduledOperation'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ScheduledReleaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledRelease'] = ResolversParentTypes['GCMS_ScheduledRelease']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_ScheduledRelease']>, ParentType, ContextType, RequireFields<GCMS_ScheduledReleasedocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  errorMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isImplicit?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  releaseAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledReleasecreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledReleaseupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_ScheduledReleasepublishedByArgs>>;
  operations?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_ScheduledReleaseoperationsArgs>>;
  status?: Resolver<ResolversTypes['GCMS_ScheduledReleaseStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ScheduledReleaseConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledReleaseConnection'] = ResolversParentTypes['GCMS_ScheduledReleaseConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_ScheduledReleaseEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_ScheduledReleaseEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_ScheduledReleaseEdge'] = ResolversParentTypes['GCMS_ScheduledReleaseEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_ScheduledRelease'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_User'] = ResolversParentTypes['GCMS_User']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_User']>, ParentType, ContextType, RequireFields<GCMS_UserdocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['GCMS_UserKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_UserConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_UserConnection'] = ResolversParentTypes['GCMS_UserConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_UserEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_UserEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_UserEdge'] = ResolversParentTypes['GCMS_UserEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_User'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_VersionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Version'] = ResolversParentTypes['GCMS_Version']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  revision?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_VoteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_Vote'] = ResolversParentTypes['GCMS_Vote']> = ResolversObject<{
  stage?: Resolver<ResolversTypes['GCMS_Stage'], ParentType, ContextType>;
  documentInStages?: Resolver<Array<ResolversTypes['GCMS_Vote']>, ParentType, ContextType, RequireFields<GCMS_VotedocumentInStagesArgs, 'stages' | 'includeCurrent' | 'inheritLocale'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_VotecreatedByArgs>>;
  updatedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_VoteupdatedByArgs>>;
  publishedBy?: Resolver<Maybe<ResolversTypes['GCMS_User']>, ParentType, ContextType, Partial<GCMS_VotepublishedByArgs>>;
  product?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType, Partial<GCMS_VoteproductArgs>>;
  scheduledIn?: Resolver<Array<ResolversTypes['GCMS_ScheduledOperation']>, ParentType, ContextType, Partial<GCMS_VotescheduledInArgs>>;
  history?: Resolver<Array<ResolversTypes['GCMS_Version']>, ParentType, ContextType, RequireFields<GCMS_VotehistoryArgs, 'limit' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_VoteConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_VoteConnection'] = ResolversParentTypes['GCMS_VoteConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['GCMS_PageInfo'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['GCMS_VoteEdge']>, ParentType, ContextType>;
  aggregate?: Resolver<ResolversTypes['GCMS_Aggregate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GCMS_VoteEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GCMS_VoteEdge'] = ResolversParentTypes['GCMS_VoteEdge']> = ResolversObject<{
  node?: Resolver<ResolversTypes['GCMS_Vote'], ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_CartResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_Cart'] = ResolversParentTypes['CQL_Cart']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalItems?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalUniqueItems?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['CQL_CartItem']>, ParentType, ContextType>;
  subTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  shippingTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  taxTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  grandTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  isEmpty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  abandoned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['CQL_CustomCartAttribute']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['CQL_Json']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_NodeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_Node'] = ResolversParentTypes['CQL_Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'CQL_Cart', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['CQL_CurrencyCode']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thousandsSeparator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decimalSeparator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  decimalDigits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_CartItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_CartItem'] = ResolversParentTypes['CQL_CartItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CQL_CartItemType'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  unitTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  lineTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['CQL_CustomCartAttribute']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['CQL_Json']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['GCMS_Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_MoneyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_Money'] = ResolversParentTypes['CQL_Money']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  formatted?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_CustomCartAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_CustomCartAttribute'] = ResolversParentTypes['CQL_CustomCartAttribute']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CQL_JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CQL_Json'], any> {
  name: 'CQL_Json';
}

export type CQL_DeletePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_DeletePayload'] = ResolversParentTypes['CQL_DeletePayload']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_OrderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_Order'] = ResolversParentTypes['CQL_Order']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cartId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  shipping?: Resolver<ResolversTypes['CQL_Address'], ParentType, ContextType>;
  billing?: Resolver<ResolversTypes['CQL_Address'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['CQL_OrderItem']>, ParentType, ContextType>;
  subTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  shippingTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  taxTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  grandTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalUniqueItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['CQL_CustomAttribute']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['CQL_Json']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['CQL_OrderStatus'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_AddressResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_Address'] = ResolversParentTypes['CQL_Address']> = ResolversObject<{
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postalCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_OrderItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_OrderItem'] = ResolversParentTypes['CQL_OrderItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CQL_CartItemType'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  unitTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  lineTotal?: Resolver<ResolversTypes['CQL_Money'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  attributes?: Resolver<Array<ResolversTypes['CQL_CustomCartAttribute']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['CQL_Json']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CQL_CustomAttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CQL_CustomAttribute'] = ResolversParentTypes['CQL_CustomAttribute']> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface CQL_UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CQL_Upload'], any> {
  name: 'CQL_Upload';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  GCMS_Aggregate?: GCMS_AggregateResolvers<ContextType>;
  GCMS_Asset?: GCMS_AssetResolvers<ContextType>;
  GCMS_AssetConnection?: GCMS_AssetConnectionResolvers<ContextType>;
  GCMS_AssetEdge?: GCMS_AssetEdgeResolvers<ContextType>;
  GCMS_BatchPayload?: GCMS_BatchPayloadResolvers<ContextType>;
  GCMS_Color?: GCMS_ColorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  GCMS_DocumentVersion?: GCMS_DocumentVersionResolvers<ContextType>;
  GCMS_Hex?: GraphQLScalarType;
  GCMS_Json?: GraphQLScalarType;
  GCMS_Location?: GCMS_LocationResolvers<ContextType>;
  Long?: GraphQLScalarType;
  GCMS_NextAuthUser?: GCMS_NextAuthUserResolvers<ContextType>;
  GCMS_NextAuthUserConnection?: GCMS_NextAuthUserConnectionResolvers<ContextType>;
  GCMS_NextAuthUserEdge?: GCMS_NextAuthUserEdgeResolvers<ContextType>;
  GCMS_Node?: GCMS_NodeResolvers<ContextType>;
  GCMS_PageInfo?: GCMS_PageInfoResolvers<ContextType>;
  GCMS_Product?: GCMS_ProductResolvers<ContextType>;
  GCMS_ProductConnection?: GCMS_ProductConnectionResolvers<ContextType>;
  GCMS_ProductEdge?: GCMS_ProductEdgeResolvers<ContextType>;
  RGBA?: RGBAResolvers<ContextType>;
  GCMS_RGBAHue?: GraphQLScalarType;
  GCMS_RGBATransparency?: GraphQLScalarType;
  GCMS_Review?: GCMS_ReviewResolvers<ContextType>;
  GCMS_ReviewConnection?: GCMS_ReviewConnectionResolvers<ContextType>;
  GCMS_ReviewEdge?: GCMS_ReviewEdgeResolvers<ContextType>;
  GCMS_RichText?: GCMS_RichTextResolvers<ContextType>;
  GCMS_RichTextAST?: GraphQLScalarType;
  GCMS_ScheduledOperation?: GCMS_ScheduledOperationResolvers<ContextType>;
  GCMS_ScheduledOperationAffectedDocument?: GCMS_ScheduledOperationAffectedDocumentResolvers<ContextType>;
  GCMS_ScheduledOperationConnection?: GCMS_ScheduledOperationConnectionResolvers<ContextType>;
  GCMS_ScheduledOperationEdge?: GCMS_ScheduledOperationEdgeResolvers<ContextType>;
  GCMS_ScheduledRelease?: GCMS_ScheduledReleaseResolvers<ContextType>;
  GCMS_ScheduledReleaseConnection?: GCMS_ScheduledReleaseConnectionResolvers<ContextType>;
  GCMS_ScheduledReleaseEdge?: GCMS_ScheduledReleaseEdgeResolvers<ContextType>;
  GCMS_User?: GCMS_UserResolvers<ContextType>;
  GCMS_UserConnection?: GCMS_UserConnectionResolvers<ContextType>;
  GCMS_UserEdge?: GCMS_UserEdgeResolvers<ContextType>;
  GCMS_Version?: GCMS_VersionResolvers<ContextType>;
  GCMS_Vote?: GCMS_VoteResolvers<ContextType>;
  GCMS_VoteConnection?: GCMS_VoteConnectionResolvers<ContextType>;
  GCMS_VoteEdge?: GCMS_VoteEdgeResolvers<ContextType>;
  CQL_Cart?: CQL_CartResolvers<ContextType>;
  CQL_Node?: CQL_NodeResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  CQL_CartItem?: CQL_CartItemResolvers<ContextType>;
  CQL_Money?: CQL_MoneyResolvers<ContextType>;
  CQL_CustomCartAttribute?: CQL_CustomCartAttributeResolvers<ContextType>;
  CQL_Json?: GraphQLScalarType;
  CQL_DeletePayload?: CQL_DeletePayloadResolvers<ContextType>;
  CQL_Order?: CQL_OrderResolvers<ContextType>;
  CQL_Address?: CQL_AddressResolvers<ContextType>;
  CQL_OrderItem?: CQL_OrderItemResolvers<ContextType>;
  CQL_CustomAttribute?: CQL_CustomAttributeResolvers<ContextType>;
  CQL_Upload?: GraphQLScalarType;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace GraphCmsTypes {
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
  Date: any;
  DateTime: any;
  GCMS_Hex: any;
  GCMS_Json: any;
  Long: any;
  GCMS_RGBAHue: any;
  GCMS_RGBATransparency: any;
  GCMS_RichTextAST: any;
};

export type GCMS_Aggregate = {
  count: Scalars['Int'];
};

/** Asset system model */
export type GCMS_Asset = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<GCMS_Asset>;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Asset>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The file handle */
  handle: Scalars['String'];
  /** The file name */
  fileName: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** The file width */
  width?: Maybe<Scalars['Float']>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  productImage: Array<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Asset versions */
  history: Array<GCMS_Version>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
};


/** Asset system model */
export type GCMS_AssetlocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


/** Asset system model */
export type GCMS_AssetdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Asset system model */
export type GCMS_AssetcreatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetupdatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetpublishedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


/** Asset system model */
export type GCMS_AssetcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetproductImageArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssetscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type GCMS_AssethistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};


/** Asset system model */
export type GCMS_AsseturlArgs = {
  transformation?: InputMaybe<GCMS_AssetTransformationInput>;
};

export type GCMS_AssetConnectInput = {
  /** Document to connect */
  where: GCMS_AssetWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_AssetConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_AssetEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImage?: InputMaybe<GCMS_ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<GCMS_AssetCreateLocalizationsInput>;
};

export type GCMS_AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  handle: Scalars['String'];
  fileName: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetCreateLocalizationInput = {
  /** Localization input */
  data: GCMS_AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<GCMS_AssetCreateLocalizationInput>>;
};

export type GCMS_AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<GCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
};

export type GCMS_AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<GCMS_AssetCreateInput>;
  /** Connect one existing Asset document */
  connect?: InputMaybe<GCMS_AssetWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_AssetEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Asset;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  productImage_every?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_some?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_none?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_AssetOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'handle_ASC'
  | 'handle_DESC'
  | 'fileName_ASC'
  | 'fileName_DESC'
  | 'height_ASC'
  | 'height_DESC'
  | 'width_ASC'
  | 'width_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'mimeType_ASC'
  | 'mimeType_DESC';

/** Transformations for Assets */
export type GCMS_AssetTransformationInput = {
  image?: InputMaybe<GCMS_ImageTransformationInput>;
  document?: InputMaybe<GCMS_DocumentTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_AssetUpdateInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  productImage?: InputMaybe<GCMS_ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<GCMS_AssetUpdateLocalizationsInput>;
};

export type GCMS_AssetUpdateLocalizationDataInput = {
  handle?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetUpdateLocalizationInput = {
  data: GCMS_AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<GCMS_AssetCreateLocalizationInput>>;
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<GCMS_AssetUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type GCMS_AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<GCMS_AssetCreateInput>>;
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<GCMS_AssetConnectInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<GCMS_AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<GCMS_AssetUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<GCMS_AssetWhereUniqueInput>>;
};

export type GCMS_AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<GCMS_AssetUpdateManyLocalizationsInput>;
};

export type GCMS_AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
};

export type GCMS_AssetUpdateManyLocalizationInput = {
  data: GCMS_AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_AssetUpdateManyLocalizationInput>>;
};

export type GCMS_AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_AssetWhereInput;
  /** Update many input */
  data: GCMS_AssetUpdateManyInput;
};

export type GCMS_AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: InputMaybe<GCMS_AssetCreateInput>;
  /** Update single Asset document */
  update?: InputMaybe<GCMS_AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<GCMS_AssetUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Asset document */
  connect?: InputMaybe<GCMS_AssetWhereUniqueInput>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_AssetWhereUniqueInput;
  /** Document to update */
  data: GCMS_AssetUpdateInput;
};

export type GCMS_AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_AssetCreateInput;
  /** Update document if it exists */
  update: GCMS_AssetUpdateInput;
};

export type GCMS_AssetUpsertLocalizationInput = {
  update: GCMS_AssetUpdateLocalizationDataInput;
  create: GCMS_AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_AssetWhereUniqueInput;
  /** Upsert data */
  data: GCMS_AssetUpsertInput;
};

/** Identifies documents */
export type GCMS_AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_AssetWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  productImage_every?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_some?: InputMaybe<GCMS_ProductWhereInput>;
  productImage_none?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Asset record uniquely */
export type GCMS_AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS_BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type GCMS_Color = {
  hex: Scalars['GCMS_Hex'];
  rgba: RGBA;
  css: Scalars['String'];
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type GCMS_ColorInput = {
  hex?: InputMaybe<Scalars['GCMS_Hex']>;
  rgba?: InputMaybe<GCMS_RGBAInput>;
};

export type GCMS_ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_DocumentFileTypes =
  | 'jpg'
  | 'odp'
  | 'ods'
  | 'odt'
  | 'png'
  | 'svg'
  | 'txt'
  | 'webp'
  | 'docx'
  | 'pdf'
  | 'html'
  | 'doc'
  | 'xlsx'
  | 'xls'
  | 'pptx'
  | 'ppt';

export type GCMS_DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<GCMS_DocumentFileTypes>;
};

/** Transformations for Documents */
export type GCMS_DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<GCMS_DocumentOutputInput>;
};

export type GCMS_DocumentVersion = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['GCMS_Json']>;
};

export type GCMS_ImageFit =
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  | 'clip'
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  | 'crop'
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  | 'scale'
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  | 'max';

export type GCMS_ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<GCMS_ImageFit>;
};

/** Transformations for Images */
export type GCMS_ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<GCMS_ImageResizeInput>;
};

/** Locale system enumeration */
export type Locale =
  /** System locale */
  | 'en'
  | 'de';

/** Representing a geolocation point with latitude and longitude */
export type GCMS_Location = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type GCMS_LocationdistanceArgs = {
  from: GCMS_LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type GCMS_LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  /** Create one product */
  GCMS_createProduct?: Maybe<GCMS_Product>;
  /** Update one product */
  GCMS_updateProduct?: Maybe<GCMS_Product>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  GCMS_deleteProduct?: Maybe<GCMS_Product>;
  /** Upsert one product */
  GCMS_upsertProduct?: Maybe<GCMS_Product>;
  /** Publish one product */
  GCMS_publishProduct?: Maybe<GCMS_Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishProduct?: Maybe<GCMS_Product>;
  /** Update many Product documents */
  GCMS_updateManyProductsConnection: GCMS_ProductConnection;
  /** Delete many Product documents, return deleted documents */
  GCMS_deleteManyProductsConnection: GCMS_ProductConnection;
  /** Publish many Product documents */
  GCMS_publishManyProductsConnection: GCMS_ProductConnection;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyProductsConnection: GCMS_ProductConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  GCMS_updateManyProducts: GCMS_BatchPayload;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  GCMS_deleteManyProducts: GCMS_BatchPayload;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  GCMS_publishManyProducts: GCMS_BatchPayload;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  GCMS_unpublishManyProducts: GCMS_BatchPayload;
  /** Schedule to publish one product */
  GCMS_schedulePublishProduct?: Maybe<GCMS_Product>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishProduct?: Maybe<GCMS_Product>;
  /** Create one review */
  GCMS_createReview?: Maybe<GCMS_Review>;
  /** Update one review */
  GCMS_updateReview?: Maybe<GCMS_Review>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  GCMS_deleteReview?: Maybe<GCMS_Review>;
  /** Upsert one review */
  GCMS_upsertReview?: Maybe<GCMS_Review>;
  /** Publish one review */
  GCMS_publishReview?: Maybe<GCMS_Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishReview?: Maybe<GCMS_Review>;
  /** Update many Review documents */
  GCMS_updateManyReviewsConnection: GCMS_ReviewConnection;
  /** Delete many Review documents, return deleted documents */
  GCMS_deleteManyReviewsConnection: GCMS_ReviewConnection;
  /** Publish many Review documents */
  GCMS_publishManyReviewsConnection: GCMS_ReviewConnection;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyReviewsConnection: GCMS_ReviewConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  GCMS_updateManyReviews: GCMS_BatchPayload;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  GCMS_deleteManyReviews: GCMS_BatchPayload;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  GCMS_publishManyReviews: GCMS_BatchPayload;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  GCMS_unpublishManyReviews: GCMS_BatchPayload;
  /** Schedule to publish one review */
  GCMS_schedulePublishReview?: Maybe<GCMS_Review>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishReview?: Maybe<GCMS_Review>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  GCMS_createAsset?: Maybe<GCMS_Asset>;
  /** Update one asset */
  GCMS_updateAsset?: Maybe<GCMS_Asset>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  GCMS_deleteAsset?: Maybe<GCMS_Asset>;
  /** Upsert one asset */
  GCMS_upsertAsset?: Maybe<GCMS_Asset>;
  /** Publish one asset */
  GCMS_publishAsset?: Maybe<GCMS_Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishAsset?: Maybe<GCMS_Asset>;
  /** Update many Asset documents */
  GCMS_updateManyAssetsConnection: GCMS_AssetConnection;
  /** Delete many Asset documents, return deleted documents */
  GCMS_deleteManyAssetsConnection: GCMS_AssetConnection;
  /** Publish many Asset documents */
  GCMS_publishManyAssetsConnection: GCMS_AssetConnection;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyAssetsConnection: GCMS_AssetConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  GCMS_updateManyAssets: GCMS_BatchPayload;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  GCMS_deleteManyAssets: GCMS_BatchPayload;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  GCMS_publishManyAssets: GCMS_BatchPayload;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  GCMS_unpublishManyAssets: GCMS_BatchPayload;
  /** Schedule to publish one asset */
  GCMS_schedulePublishAsset?: Maybe<GCMS_Asset>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishAsset?: Maybe<GCMS_Asset>;
  /** Create one vote */
  GCMS_createVote?: Maybe<GCMS_Vote>;
  /** Update one vote */
  GCMS_updateVote?: Maybe<GCMS_Vote>;
  /** Delete one vote from _all_ existing stages. Returns deleted document. */
  GCMS_deleteVote?: Maybe<GCMS_Vote>;
  /** Upsert one vote */
  GCMS_upsertVote?: Maybe<GCMS_Vote>;
  /** Publish one vote */
  GCMS_publishVote?: Maybe<GCMS_Vote>;
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishVote?: Maybe<GCMS_Vote>;
  /** Update many Vote documents */
  GCMS_updateManyVotesConnection: GCMS_VoteConnection;
  /** Delete many Vote documents, return deleted documents */
  GCMS_deleteManyVotesConnection: GCMS_VoteConnection;
  /** Publish many Vote documents */
  GCMS_publishManyVotesConnection: GCMS_VoteConnection;
  /** Find many Vote documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyVotesConnection: GCMS_VoteConnection;
  /**
   * Update many votes
   * @deprecated Please use the new paginated many mutation (updateManyVotesConnection)
   */
  GCMS_updateManyVotes: GCMS_BatchPayload;
  /**
   * Delete many Vote documents
   * @deprecated Please use the new paginated many mutation (deleteManyVotesConnection)
   */
  GCMS_deleteManyVotes: GCMS_BatchPayload;
  /**
   * Publish many Vote documents
   * @deprecated Please use the new paginated many mutation (publishManyVotesConnection)
   */
  GCMS_publishManyVotes: GCMS_BatchPayload;
  /**
   * Unpublish many Vote documents
   * @deprecated Please use the new paginated many mutation (unpublishManyVotesConnection)
   */
  GCMS_unpublishManyVotes: GCMS_BatchPayload;
  /** Schedule to publish one vote */
  GCMS_schedulePublishVote?: Maybe<GCMS_Vote>;
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishVote?: Maybe<GCMS_Vote>;
  /** Delete and return scheduled operation */
  GCMS_deleteScheduledOperation?: Maybe<GCMS_ScheduledOperation>;
  /** Create one scheduledRelease */
  GCMS_createScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Update one scheduledRelease */
  GCMS_updateScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  GCMS_deleteScheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Create one nextAuthUser */
  GCMS_createNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Update one nextAuthUser */
  GCMS_updateNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Delete one nextAuthUser from _all_ existing stages. Returns deleted document. */
  GCMS_deleteNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Upsert one nextAuthUser */
  GCMS_upsertNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Publish one nextAuthUser */
  GCMS_publishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_unpublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Update many NextAuthUser documents */
  GCMS_updateManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Delete many NextAuthUser documents, return deleted documents */
  GCMS_deleteManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Publish many NextAuthUser documents */
  GCMS_publishManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Find many NextAuthUser documents that match criteria in specified stage and unpublish from target stages */
  GCMS_unpublishManyNextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /**
   * Update many nextAuthUsers
   * @deprecated Please use the new paginated many mutation (updateManyNextAuthUsersConnection)
   */
  GCMS_updateManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Delete many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyNextAuthUsersConnection)
   */
  GCMS_deleteManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Publish many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (publishManyNextAuthUsersConnection)
   */
  GCMS_publishManyNextAuthUsers: GCMS_BatchPayload;
  /**
   * Unpublish many NextAuthUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNextAuthUsersConnection)
   */
  GCMS_unpublishManyNextAuthUsers: GCMS_BatchPayload;
  /** Schedule to publish one nextAuthUser */
  GCMS_schedulePublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  GCMS_scheduleUnpublishNextAuthUser?: Maybe<GCMS_NextAuthUser>;
};


export type MutationGCMS_createProductArgs = {
  data: GCMS_ProductCreateInput;
};


export type MutationGCMS_updateProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  data: GCMS_ProductUpdateInput;
};


export type MutationGCMS_deleteProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
};


export type MutationGCMS_upsertProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  upsert: GCMS_ProductUpsertInput;
};


export type MutationGCMS_publishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  data: GCMS_ProductUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyProductsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  data: GCMS_ProductUpdateManyInput;
};


export type MutationGCMS_deleteManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
};


export type MutationGCMS_publishManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  to?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyProductsArgs = {
  where?: InputMaybe<GCMS_ProductManyWhereInput>;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_schedulePublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishProductArgs = {
  where: GCMS_ProductWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_createReviewArgs = {
  data: GCMS_ReviewCreateInput;
};


export type MutationGCMS_updateReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  data: GCMS_ReviewUpdateInput;
};


export type MutationGCMS_deleteReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
};


export type MutationGCMS_upsertReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  upsert: GCMS_ReviewUpsertInput;
};


export type MutationGCMS_publishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  data: GCMS_ReviewUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyReviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  data: GCMS_ReviewUpdateManyInput;
};


export type MutationGCMS_deleteManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
};


export type MutationGCMS_publishManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyReviewsArgs = {
  where?: InputMaybe<GCMS_ReviewManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishReviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_createAssetArgs = {
  data: GCMS_AssetCreateInput;
};


export type MutationGCMS_updateAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  data: GCMS_AssetUpdateInput;
};


export type MutationGCMS_deleteAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
};


export type MutationGCMS_upsertAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  upsert: GCMS_AssetUpsertInput;
};


export type MutationGCMS_publishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  data: GCMS_AssetUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyAssetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_updateManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  data: GCMS_AssetUpdateManyInput;
};


export type MutationGCMS_deleteManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
};


export type MutationGCMS_publishManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  to?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_unpublishManyAssetsArgs = {
  where?: InputMaybe<GCMS_AssetManyWhereInput>;
  from?: Array<GCMS_Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_schedulePublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishAssetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
};


export type MutationGCMS_createVoteArgs = {
  data: GCMS_VoteCreateInput;
};


export type MutationGCMS_updateVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  data: GCMS_VoteUpdateInput;
};


export type MutationGCMS_deleteVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
};


export type MutationGCMS_upsertVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  upsert: GCMS_VoteUpsertInput;
};


export type MutationGCMS_publishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  data: GCMS_VoteUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyVotesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  data: GCMS_VoteUpdateManyInput;
};


export type MutationGCMS_deleteManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
};


export type MutationGCMS_publishManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyVotesArgs = {
  where?: InputMaybe<GCMS_VoteManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishVoteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_deleteScheduledOperationArgs = {
  where: GCMS_ScheduledOperationWhereUniqueInput;
};


export type MutationGCMS_createScheduledReleaseArgs = {
  data: GCMS_ScheduledReleaseCreateInput;
};


export type MutationGCMS_updateScheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  data: GCMS_ScheduledReleaseUpdateInput;
};


export type MutationGCMS_deleteScheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
};


export type MutationGCMS_createNextAuthUserArgs = {
  data: GCMS_NextAuthUserCreateInput;
};


export type MutationGCMS_updateNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  data: GCMS_NextAuthUserUpdateInput;
};


export type MutationGCMS_deleteNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
};


export type MutationGCMS_upsertNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  upsert: GCMS_NextAuthUserUpsertInput;
};


export type MutationGCMS_publishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_updateManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  data: GCMS_NextAuthUserUpdateManyInput;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_deleteManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_publishManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  from?: InputMaybe<GCMS_Stage>;
  to?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_unpublishManyNextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  stage?: InputMaybe<GCMS_Stage>;
  from?: Array<GCMS_Stage>;
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['ID']>;
  after?: InputMaybe<Scalars['ID']>;
};


export type MutationGCMS_updateManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  data: GCMS_NextAuthUserUpdateManyInput;
};


export type MutationGCMS_deleteManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
};


export type MutationGCMS_publishManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  to?: Array<GCMS_Stage>;
};


export type MutationGCMS_unpublishManyNextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserManyWhereInput>;
  from?: Array<GCMS_Stage>;
};


export type MutationGCMS_schedulePublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  to?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};


export type MutationGCMS_scheduleUnpublishNextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  from?: Array<GCMS_Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUser = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_NextAuthUser>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  bio?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  auth0Id?: Maybe<Scalars['String']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of NextAuthUser versions */
  history: Array<GCMS_Version>;
};


export type GCMS_NextAuthUserdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_NextAuthUsercreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_NextAuthUserhistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_NextAuthUserConnectInput = {
  /** Document to connect */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_NextAuthUserConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_NextAuthUserEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_NextAuthUserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  bio?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  auth0Id?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserCreateManyInlineInput = {
  /** Create and connect multiple existing NextAuthUser documents */
  create?: InputMaybe<Array<GCMS_NextAuthUserCreateInput>>;
  /** Connect multiple existing NextAuthUser documents */
  connect?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
};

export type GCMS_NextAuthUserCreateOneInlineInput = {
  /** Create and connect one NextAuthUser document */
  create?: InputMaybe<GCMS_NextAuthUserCreateInput>;
  /** Connect one existing NextAuthUser document */
  connect?: InputMaybe<GCMS_NextAuthUserWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_NextAuthUserEdge = {
  /** The item at the end of the edge. */
  node: GCMS_NextAuthUser;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_NextAuthUserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0Id_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0Id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  auth0Id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  auth0Id_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0Id_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0Id_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0Id_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0Id_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  auth0Id_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_NextAuthUserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'bio_ASC'
  | 'bio_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'auth0Id_ASC'
  | 'auth0Id_DESC';

export type GCMS_NextAuthUserUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserUpdateManyInlineInput = {
  /** Create and connect multiple NextAuthUser documents */
  create?: InputMaybe<Array<GCMS_NextAuthUserCreateInput>>;
  /** Connect multiple existing NextAuthUser documents */
  connect?: InputMaybe<Array<GCMS_NextAuthUserConnectInput>>;
  /** Override currently-connected documents with multiple existing NextAuthUser documents */
  set?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
  /** Update multiple NextAuthUser documents */
  update?: InputMaybe<Array<GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NextAuthUser documents */
  upsert?: InputMaybe<Array<GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple NextAuthUser documents */
  disconnect?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
  /** Delete multiple NextAuthUser documents */
  delete?: InputMaybe<Array<GCMS_NextAuthUserWhereUniqueInput>>;
};

export type GCMS_NextAuthUserUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type GCMS_NextAuthUserUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_NextAuthUserWhereInput;
  /** Update many input */
  data: GCMS_NextAuthUserUpdateManyInput;
};

export type GCMS_NextAuthUserUpdateOneInlineInput = {
  /** Create and connect one NextAuthUser document */
  create?: InputMaybe<GCMS_NextAuthUserCreateInput>;
  /** Update single NextAuthUser document */
  update?: InputMaybe<GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NextAuthUser document */
  upsert?: InputMaybe<GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput>;
  /** Connect existing NextAuthUser document */
  connect?: InputMaybe<GCMS_NextAuthUserWhereUniqueInput>;
  /** Disconnect currently connected NextAuthUser document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected NextAuthUser document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_NextAuthUserUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Document to update */
  data: GCMS_NextAuthUserUpdateInput;
};

export type GCMS_NextAuthUserUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_NextAuthUserCreateInput;
  /** Update document if it exists */
  update: GCMS_NextAuthUserUpdateInput;
};

export type GCMS_NextAuthUserUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_NextAuthUserWhereUniqueInput;
  /** Upsert data */
  data: GCMS_NextAuthUserUpsertInput;
};

/** Identifies documents */
export type GCMS_NextAuthUserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_NextAuthUserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  bio_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  bio_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  bio_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  bio_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  bio_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  bio_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  bio_not_ends_with?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  password_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  auth0Id_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  auth0Id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  auth0Id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  auth0Id_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  auth0Id_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  auth0Id_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  auth0Id_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  auth0Id_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  auth0Id_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References NextAuthUser record uniquely */
export type GCMS_NextAuthUserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  auth0Id?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type GCMS_Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: GCMS_Stage;
};

/** Information about pagination in a connection. */
export type GCMS_PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
};

export type GCMS_Product = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<GCMS_Product>;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Product>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  content?: Maybe<GCMS_RichText>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  reviews: Array<GCMS_Review>;
  votes: Array<GCMS_Vote>;
  image?: Maybe<GCMS_Asset>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Product versions */
  history: Array<GCMS_Version>;
};


export type GCMS_ProductlocalizationsArgs = {
  locales?: Array<Locale>;
  includeCurrent?: Scalars['Boolean'];
};


export type GCMS_ProductdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_ProductcreatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductupdatedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductpublishedAtArgs = {
  variation?: GCMS_SystemDateTimeFieldVariation;
};


export type GCMS_ProductcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductreviewsArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductvotesArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductimageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProductscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ProducthistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_ProductConnectInput = {
  /** Document to connect */
  where: GCMS_ProductWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ProductConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ProductEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ProductCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** name input for default locale (en) */
  name: Scalars['String'];
  slug: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  reviews?: InputMaybe<GCMS_ReviewCreateManyInlineInput>;
  votes?: InputMaybe<GCMS_VoteCreateManyInlineInput>;
  image?: InputMaybe<GCMS_AssetCreateOneInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<GCMS_ProductCreateLocalizationsInput>;
};

export type GCMS_ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type GCMS_ProductCreateLocalizationInput = {
  /** Localization input */
  data: GCMS_ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<GCMS_ProductCreateLocalizationInput>>;
};

export type GCMS_ProductCreateManyInlineInput = {
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<GCMS_ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
};

export type GCMS_ProductCreateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<GCMS_ProductCreateInput>;
  /** Connect one existing Product document */
  connect?: InputMaybe<GCMS_ProductWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ProductEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ProductManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  reviews_every?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_some?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_none?: InputMaybe<GCMS_ReviewWhereInput>;
  votes_every?: InputMaybe<GCMS_VoteWhereInput>;
  votes_some?: InputMaybe<GCMS_VoteWhereInput>;
  votes_none?: InputMaybe<GCMS_VoteWhereInput>;
  image?: InputMaybe<GCMS_AssetWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_ProductOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'slug_ASC'
  | 'slug_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC';

export type GCMS_ProductUpdateInput = {
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  reviews?: InputMaybe<GCMS_ReviewUpdateManyInlineInput>;
  votes?: InputMaybe<GCMS_VoteUpdateManyInlineInput>;
  image?: InputMaybe<GCMS_AssetUpdateOneInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<GCMS_ProductUpdateLocalizationsInput>;
};

export type GCMS_ProductUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type GCMS_ProductUpdateLocalizationInput = {
  data: GCMS_ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<GCMS_ProductCreateLocalizationInput>>;
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<GCMS_ProductUpsertLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
};

export type GCMS_ProductUpdateManyInlineInput = {
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<GCMS_ProductCreateInput>>;
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<GCMS_ProductConnectInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<GCMS_ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<GCMS_ProductUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<GCMS_ProductWhereUniqueInput>>;
};

export type GCMS_ProductUpdateManyInput = {
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['GCMS_RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<GCMS_ProductUpdateManyLocalizationsInput>;
};

export type GCMS_ProductUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type GCMS_ProductUpdateManyLocalizationInput = {
  data: GCMS_ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<GCMS_ProductUpdateManyLocalizationInput>>;
};

export type GCMS_ProductUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ProductWhereInput;
  /** Update many input */
  data: GCMS_ProductUpdateManyInput;
};

export type GCMS_ProductUpdateOneInlineInput = {
  /** Create and connect one Product document */
  create?: InputMaybe<GCMS_ProductCreateInput>;
  /** Update single Product document */
  update?: InputMaybe<GCMS_ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<GCMS_ProductUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Product document */
  connect?: InputMaybe<GCMS_ProductWhereUniqueInput>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ProductUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ProductWhereUniqueInput;
  /** Document to update */
  data: GCMS_ProductUpdateInput;
};

export type GCMS_ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ProductCreateInput;
  /** Update document if it exists */
  update: GCMS_ProductUpdateInput;
};

export type GCMS_ProductUpsertLocalizationInput = {
  update: GCMS_ProductUpdateLocalizationDataInput;
  create: GCMS_ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type GCMS_ProductUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ProductWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ProductUpsertInput;
};

/** Identifies documents */
export type GCMS_ProductWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ProductWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Int']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  reviews_every?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_some?: InputMaybe<GCMS_ReviewWhereInput>;
  reviews_none?: InputMaybe<GCMS_ReviewWhereInput>;
  votes_every?: InputMaybe<GCMS_VoteWhereInput>;
  votes_some?: InputMaybe<GCMS_VoteWhereInput>;
  votes_none?: InputMaybe<GCMS_VoteWhereInput>;
  image?: InputMaybe<GCMS_AssetWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Product record uniquely */
export type GCMS_ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type GCMS_PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<GCMS_Stage>;
};

export type Query = {
  /** Fetches an object given its ID */
  GCMS_node?: Maybe<GCMS_Node>;
  /** Retrieve multiple products */
  GCMS_products: Array<GCMS_Product>;
  /** Retrieve a single product */
  GCMS_product?: Maybe<GCMS_Product>;
  /** Retrieve multiple products using the Relay connection interface */
  GCMS_productsConnection: GCMS_ProductConnection;
  /** Retrieve document version */
  GCMS_productVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple reviews */
  GCMS_reviews: Array<GCMS_Review>;
  /** Retrieve a single review */
  GCMS_review?: Maybe<GCMS_Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  GCMS_reviewsConnection: GCMS_ReviewConnection;
  /** Retrieve document version */
  GCMS_reviewVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple assets */
  GCMS_assets: Array<GCMS_Asset>;
  /** Retrieve a single asset */
  GCMS_asset?: Maybe<GCMS_Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  GCMS_assetsConnection: GCMS_AssetConnection;
  /** Retrieve document version */
  GCMS_assetVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple votes */
  GCMS_votes: Array<GCMS_Vote>;
  /** Retrieve a single vote */
  GCMS_vote?: Maybe<GCMS_Vote>;
  /** Retrieve multiple votes using the Relay connection interface */
  GCMS_votesConnection: GCMS_VoteConnection;
  /** Retrieve document version */
  GCMS_voteVersion?: Maybe<GCMS_DocumentVersion>;
  /** Retrieve multiple users */
  GCMS_users: Array<GCMS_User>;
  /** Retrieve a single user */
  GCMS_user?: Maybe<GCMS_User>;
  /** Retrieve multiple users using the Relay connection interface */
  GCMS_usersConnection: GCMS_UserConnection;
  /** Retrieve multiple scheduledOperations */
  GCMS_scheduledOperations: Array<GCMS_ScheduledOperation>;
  /** Retrieve a single scheduledOperation */
  GCMS_scheduledOperation?: Maybe<GCMS_ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  GCMS_scheduledOperationsConnection: GCMS_ScheduledOperationConnection;
  /** Retrieve multiple scheduledReleases */
  GCMS_scheduledReleases: Array<GCMS_ScheduledRelease>;
  /** Retrieve a single scheduledRelease */
  GCMS_scheduledRelease?: Maybe<GCMS_ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  GCMS_scheduledReleasesConnection: GCMS_ScheduledReleaseConnection;
  /** Retrieve multiple nextAuthUsers */
  GCMS_nextAuthUsers: Array<GCMS_NextAuthUser>;
  /** Retrieve a single nextAuthUser */
  GCMS_nextAuthUser?: Maybe<GCMS_NextAuthUser>;
  /** Retrieve multiple nextAuthUsers using the Relay connection interface */
  GCMS_nextAuthUsersConnection: GCMS_NextAuthUserConnection;
  /** Retrieve document version */
  GCMS_nextAuthUserVersion?: Maybe<GCMS_DocumentVersion>;
};


export type QueryGCMS_nodeArgs = {
  id: Scalars['ID'];
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productsArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productArgs = {
  where: GCMS_ProductWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productsConnectionArgs = {
  where?: InputMaybe<GCMS_ProductWhereInput>;
  orderBy?: InputMaybe<GCMS_ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_productVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_reviewsArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewArgs = {
  where: GCMS_ReviewWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewsConnectionArgs = {
  where?: InputMaybe<GCMS_ReviewWhereInput>;
  orderBy?: InputMaybe<GCMS_ReviewOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_reviewVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_assetsArgs = {
  where?: InputMaybe<GCMS_AssetWhereInput>;
  orderBy?: InputMaybe<GCMS_AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetArgs = {
  where: GCMS_AssetWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetsConnectionArgs = {
  where?: InputMaybe<GCMS_AssetWhereInput>;
  orderBy?: InputMaybe<GCMS_AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_assetVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_votesArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_voteArgs = {
  where: GCMS_VoteWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_votesConnectionArgs = {
  where?: InputMaybe<GCMS_VoteWhereInput>;
  orderBy?: InputMaybe<GCMS_VoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_voteVersionArgs = {
  where: GCMS_VersionWhereInput;
};


export type QueryGCMS_usersArgs = {
  where?: InputMaybe<GCMS_UserWhereInput>;
  orderBy?: InputMaybe<GCMS_UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_userArgs = {
  where: GCMS_UserWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_usersConnectionArgs = {
  where?: InputMaybe<GCMS_UserWhereInput>;
  orderBy?: InputMaybe<GCMS_UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationsArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationArgs = {
  where: GCMS_ScheduledOperationWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledOperationsConnectionArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleasesArgs = {
  where?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleaseArgs = {
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_scheduledReleasesConnectionArgs = {
  where?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUsersArgs = {
  where?: InputMaybe<GCMS_NextAuthUserWhereInput>;
  orderBy?: InputMaybe<GCMS_NextAuthUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUserArgs = {
  where: GCMS_NextAuthUserWhereUniqueInput;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUsersConnectionArgs = {
  where?: InputMaybe<GCMS_NextAuthUserWhereInput>;
  orderBy?: InputMaybe<GCMS_NextAuthUserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  stage?: GCMS_Stage;
  locales?: Array<Locale>;
};


export type QueryGCMS_nextAuthUserVersionArgs = {
  where: GCMS_VersionWhereInput;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RGBA = {
  r: Scalars['GCMS_RGBAHue'];
  g: Scalars['GCMS_RGBAHue'];
  b: Scalars['GCMS_RGBAHue'];
  a: Scalars['GCMS_RGBATransparency'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type GCMS_RGBAInput = {
  r: Scalars['GCMS_RGBAHue'];
  g: Scalars['GCMS_RGBAHue'];
  b: Scalars['GCMS_RGBAHue'];
  a: Scalars['GCMS_RGBATransparency'];
};

export type GCMS_Review = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Review>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  comment: Scalars['String'];
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  product?: Maybe<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Review versions */
  history: Array<GCMS_Version>;
};


export type GCMS_ReviewdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_ReviewcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewproductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewscheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_ReviewhistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_ReviewConnectInput = {
  /** Document to connect */
  where: GCMS_ReviewWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ReviewConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ReviewEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ReviewCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  comment: Scalars['String'];
  product?: InputMaybe<GCMS_ProductCreateOneInlineInput>;
};

export type GCMS_ReviewCreateManyInlineInput = {
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<GCMS_ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
};

export type GCMS_ReviewCreateOneInlineInput = {
  /** Create and connect one Review document */
  create?: InputMaybe<GCMS_ReviewCreateInput>;
  /** Connect one existing Review document */
  connect?: InputMaybe<GCMS_ReviewWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ReviewEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Review;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ReviewManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_ReviewOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'comment_ASC'
  | 'comment_DESC';

export type GCMS_ReviewUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<GCMS_ProductUpdateOneInlineInput>;
};

export type GCMS_ReviewUpdateManyInlineInput = {
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<GCMS_ReviewCreateInput>>;
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<GCMS_ReviewConnectInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<GCMS_ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<GCMS_ReviewUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<GCMS_ReviewWhereUniqueInput>>;
};

export type GCMS_ReviewUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type GCMS_ReviewUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ReviewWhereInput;
  /** Update many input */
  data: GCMS_ReviewUpdateManyInput;
};

export type GCMS_ReviewUpdateOneInlineInput = {
  /** Create and connect one Review document */
  create?: InputMaybe<GCMS_ReviewCreateInput>;
  /** Update single Review document */
  update?: InputMaybe<GCMS_ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<GCMS_ReviewUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Review document */
  connect?: InputMaybe<GCMS_ReviewWhereUniqueInput>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ReviewUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ReviewWhereUniqueInput;
  /** Document to update */
  data: GCMS_ReviewUpdateInput;
};

export type GCMS_ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ReviewCreateInput;
  /** Update document if it exists */
  update: GCMS_ReviewUpdateInput;
};

export type GCMS_ReviewUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ReviewWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ReviewUpsertInput;
};

/** Identifies documents */
export type GCMS_ReviewWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ReviewWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Review record uniquely */
export type GCMS_ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type GCMS_RichText = {
  /** Returns AST representation */
  raw: Scalars['GCMS_RichTextAST'];
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type GCMS_ScheduledOperation = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_ScheduledOperation>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['GCMS_Json'];
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  /** The release this operation is scheduled for */
  release?: Maybe<GCMS_ScheduledRelease>;
  /** operation Status */
  status: GCMS_ScheduledOperationStatus;
  affectedDocuments: Array<GCMS_ScheduledOperationAffectedDocument>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationcreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationpublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationreleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type GCMS_ScheduledOperationaffectedDocumentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GCMS_ScheduledOperationAffectedDocument = GCMS_Asset | GCMS_NextAuthUser | GCMS_Product | GCMS_Review | GCMS_Vote;

export type GCMS_ScheduledOperationConnectInput = {
  /** Document to connect */
  where: GCMS_ScheduledOperationWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ScheduledOperationConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ScheduledOperationEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
};

export type GCMS_ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<GCMS_ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ScheduledOperationEdge = {
  /** The item at the end of the edge. */
  node: GCMS_ScheduledOperation;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ScheduledOperationManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  release?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  status?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
};

export type GCMS_ScheduledOperationOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'status_ASC'
  | 'status_DESC';

/** System Scheduled Operation Status */
export type GCMS_ScheduledOperationStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED'
  | 'CANCELED';

export type GCMS_ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<GCMS_ScheduledOperationConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<GCMS_ScheduledOperationWhereUniqueInput>>;
};

export type GCMS_ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<GCMS_ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GCMS_ScheduledOperationWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledOperationWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  release?: InputMaybe<GCMS_ScheduledReleaseWhereInput>;
  status?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledOperationStatus>>>;
};

/** References ScheduledOperation record uniquely */
export type GCMS_ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type GCMS_ScheduledRelease = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_ScheduledRelease>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  /** Operations to run with this release */
  operations: Array<GCMS_ScheduledOperation>;
  /** Release Status */
  status: GCMS_ScheduledReleaseStatus;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasedocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasecreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleaseupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleasepublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type GCMS_ScheduledReleaseoperationsArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  orderBy?: InputMaybe<GCMS_ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GCMS_ScheduledReleaseConnectInput = {
  /** Document to connect */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_ScheduledReleaseConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_ScheduledReleaseEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseCreateManyInlineInput = {
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<GCMS_ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
};

export type GCMS_ScheduledReleaseCreateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<GCMS_ScheduledReleaseCreateInput>;
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<GCMS_ScheduledReleaseWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_ScheduledReleaseEdge = {
  /** The item at the end of the edge. */
  node: GCMS_ScheduledRelease;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_ScheduledReleaseManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  operations_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  status?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
};

export type GCMS_ScheduledReleaseOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'errorMessage_ASC'
  | 'errorMessage_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'isImplicit_ASC'
  | 'isImplicit_DESC'
  | 'releaseAt_ASC'
  | 'releaseAt_DESC'
  | 'status_ASC'
  | 'status_DESC';

/** System Scheduled Release Status */
export type GCMS_ScheduledReleaseStatus =
  | 'PENDING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'FAILED';

export type GCMS_ScheduledReleaseUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseUpdateManyInlineInput = {
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<GCMS_ScheduledReleaseCreateInput>>;
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<GCMS_ScheduledReleaseConnectInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<GCMS_ScheduledReleaseWhereUniqueInput>>;
};

export type GCMS_ScheduledReleaseUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
};

export type GCMS_ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_ScheduledReleaseWhereInput;
  /** Update many input */
  data: GCMS_ScheduledReleaseUpdateManyInput;
};

export type GCMS_ScheduledReleaseUpdateOneInlineInput = {
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<GCMS_ScheduledReleaseCreateInput>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<GCMS_ScheduledReleaseWhereUniqueInput>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Document to update */
  data: GCMS_ScheduledReleaseUpdateInput;
};

export type GCMS_ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: GCMS_ScheduledReleaseUpdateInput;
};

export type GCMS_ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_ScheduledReleaseWhereUniqueInput;
  /** Upsert data */
  data: GCMS_ScheduledReleaseUpsertInput;
};

/** Identifies documents */
export type GCMS_ScheduledReleaseWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_ScheduledReleaseWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  operations_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  status?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<GCMS_ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<GCMS_ScheduledReleaseStatus>>>;
};

/** References ScheduledRelease record uniquely */
export type GCMS_ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export type GCMS_Stage =
  /** The Draft is the default stage for all your content. */
  | 'DRAFT'
  /** The Published stage is where you can publish your content to. */
  | 'PUBLISHED';

export type GCMS_SystemDateTimeFieldVariation =
  | 'BASE'
  | 'LOCALIZATION'
  | 'COMBINED';

export type GCMS_UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<GCMS_Stage>;
};

/** User system model */
export type GCMS_User = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: GCMS_UserKind;
};


/** User system model */
export type GCMS_UserdocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};

export type GCMS_UserConnectInput = {
  /** Document to connect */
  where: GCMS_UserWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_UserConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_UserEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
};

export type GCMS_UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<GCMS_UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_UserEdge = {
  /** The item at the end of the edge. */
  node: GCMS_User;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** System User Kind */
export type GCMS_UserKind =
  | 'PAT'
  | 'MEMBER'
  | 'WEBHOOK'
  | 'PUBLIC';

/** Identifies documents */
export type GCMS_UserManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<GCMS_UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<GCMS_UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
};

export type GCMS_UserOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'picture_ASC'
  | 'picture_DESC'
  | 'isActive_ASC'
  | 'isActive_DESC'
  | 'kind_ASC'
  | 'kind_DESC';

export type GCMS_UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<GCMS_UserConnectInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<GCMS_UserWhereUniqueInput>>;
};

export type GCMS_UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<GCMS_UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type GCMS_UserWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_UserWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<GCMS_UserKind>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<GCMS_UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<GCMS_UserKind>>>;
};

/** References User record uniquely */
export type GCMS_UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS_Version = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
  createdAt: Scalars['DateTime'];
};

export type GCMS_VersionWhereInput = {
  id: Scalars['ID'];
  stage: GCMS_Stage;
  revision: Scalars['Int'];
};

export type GCMS_Vote = GCMS_Node & {
  /** System stage field */
  stage: GCMS_Stage;
  /** Get the document in other stages */
  documentInStages: Array<GCMS_Vote>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that created this document */
  createdBy?: Maybe<GCMS_User>;
  /** User that last updated this document */
  updatedBy?: Maybe<GCMS_User>;
  /** User that last published this document */
  publishedBy?: Maybe<GCMS_User>;
  product?: Maybe<GCMS_Product>;
  scheduledIn: Array<GCMS_ScheduledOperation>;
  /** List of Vote versions */
  history: Array<GCMS_Version>;
};


export type GCMS_VotedocumentInStagesArgs = {
  stages?: Array<GCMS_Stage>;
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
};


export type GCMS_VotecreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VoteupdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotepublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VoteproductArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotescheduledInArgs = {
  where?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  skip?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GCMS_VotehistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<GCMS_Stage>;
};

export type GCMS_VoteConnectInput = {
  /** Document to connect */
  where: GCMS_VoteWhereUniqueInput;
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<GCMS_ConnectPositionInput>;
};

/** A connection to a list of items. */
export type GCMS_VoteConnection = {
  /** Information to aid in pagination. */
  pageInfo: GCMS_PageInfo;
  /** A list of edges. */
  edges: Array<GCMS_VoteEdge>;
  aggregate: GCMS_Aggregate;
};

export type GCMS_VoteCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  product?: InputMaybe<GCMS_ProductCreateOneInlineInput>;
};

export type GCMS_VoteCreateManyInlineInput = {
  /** Create and connect multiple existing Vote documents */
  create?: InputMaybe<Array<GCMS_VoteCreateInput>>;
  /** Connect multiple existing Vote documents */
  connect?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
};

export type GCMS_VoteCreateOneInlineInput = {
  /** Create and connect one Vote document */
  create?: InputMaybe<GCMS_VoteCreateInput>;
  /** Connect one existing Vote document */
  connect?: InputMaybe<GCMS_VoteWhereUniqueInput>;
};

/** An edge in a connection. */
export type GCMS_VoteEdge = {
  /** The item at the end of the edge. */
  node: GCMS_Vote;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** Identifies documents */
export type GCMS_VoteManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

export type GCMS_VoteOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'publishedAt_ASC'
  | 'publishedAt_DESC';

export type GCMS_VoteUpdateInput = {
  product?: InputMaybe<GCMS_ProductUpdateOneInlineInput>;
};

export type GCMS_VoteUpdateManyInlineInput = {
  /** Create and connect multiple Vote documents */
  create?: InputMaybe<Array<GCMS_VoteCreateInput>>;
  /** Connect multiple existing Vote documents */
  connect?: InputMaybe<Array<GCMS_VoteConnectInput>>;
  /** Override currently-connected documents with multiple existing Vote documents */
  set?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
  /** Update multiple Vote documents */
  update?: InputMaybe<Array<GCMS_VoteUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Vote documents */
  upsert?: InputMaybe<Array<GCMS_VoteUpsertWithNestedWhereUniqueInput>>;
  /** Disconnect multiple Vote documents */
  disconnect?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
  /** Delete multiple Vote documents */
  delete?: InputMaybe<Array<GCMS_VoteWhereUniqueInput>>;
};

export type GCMS_VoteUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type GCMS_VoteUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: GCMS_VoteWhereInput;
  /** Update many input */
  data: GCMS_VoteUpdateManyInput;
};

export type GCMS_VoteUpdateOneInlineInput = {
  /** Create and connect one Vote document */
  create?: InputMaybe<GCMS_VoteCreateInput>;
  /** Update single Vote document */
  update?: InputMaybe<GCMS_VoteUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Vote document */
  upsert?: InputMaybe<GCMS_VoteUpsertWithNestedWhereUniqueInput>;
  /** Connect existing Vote document */
  connect?: InputMaybe<GCMS_VoteWhereUniqueInput>;
  /** Disconnect currently connected Vote document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Delete currently connected Vote document */
  delete?: InputMaybe<Scalars['Boolean']>;
};

export type GCMS_VoteUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_VoteWhereUniqueInput;
  /** Document to update */
  data: GCMS_VoteUpdateInput;
};

export type GCMS_VoteUpsertInput = {
  /** Create document if it didn't exist */
  create: GCMS_VoteCreateInput;
  /** Update document if it exists */
  update: GCMS_VoteUpdateInput;
};

export type GCMS_VoteUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: GCMS_VoteWhereUniqueInput;
  /** Upsert data */
  data: GCMS_VoteUpsertInput;
};

/** Identifies documents */
export type GCMS_VoteWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GCMS_VoteWhereInput>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<GCMS_UserWhereInput>;
  updatedBy?: InputMaybe<GCMS_UserWhereInput>;
  publishedBy?: InputMaybe<GCMS_UserWhereInput>;
  product?: InputMaybe<GCMS_ProductWhereInput>;
  scheduledIn_every?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<GCMS_ScheduledOperationWhereInput>;
};

/** References Vote record uniquely */
export type GCMS_VoteWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GCMS__FilterKind =
  | 'search'
  | 'AND'
  | 'OR'
  | 'NOT'
  | 'eq'
  | 'eq_not'
  | 'in'
  | 'not_in'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte'
  | 'contains'
  | 'not_contains'
  | 'starts_with'
  | 'not_starts_with'
  | 'ends_with'
  | 'not_ends_with'
  | 'contains_all'
  | 'contains_some'
  | 'contains_none'
  | 'relational_single'
  | 'relational_every'
  | 'relational_some'
  | 'relational_none';

export type GCMS__MutationInputFieldKind =
  | 'scalar'
  | 'richText'
  | 'richTextWithEmbeds'
  | 'enum'
  | 'relation'
  | 'union'
  | 'virtual';

export type GCMS__MutationKind =
  | 'create'
  | 'publish'
  | 'unpublish'
  | 'update'
  | 'upsert'
  | 'delete'
  | 'updateMany'
  | 'publishMany'
  | 'unpublishMany'
  | 'deleteMany'
  | 'schedulePublish'
  | 'scheduleUnpublish';

export type GCMS__OrderDirection =
  | 'asc'
  | 'desc';

export type GCMS__RelationInputCardinality =
  | 'one'
  | 'many';

export type GCMS__RelationInputKind =
  | 'create'
  | 'update';

export type GCMS__RelationKind =
  | 'regular'
  | 'union';

export type GCMS__SystemDateTimeFieldVariation =
  | 'base'
  | 'localization'
  | 'combined';

    }
    export type QueryGraphCmsSdk = {
  /** Fetches an object given its ID **/
  GCMS_node: InContextSdkMethod<GraphCmsTypes.Query['GCMS_node'], GraphCmsTypes.QueryGCMS_nodeArgs, MeshContext>,
  /** Retrieve multiple products **/
  GCMS_products: InContextSdkMethod<GraphCmsTypes.Query['GCMS_products'], GraphCmsTypes.QueryGCMS_productsArgs, MeshContext>,
  /** Retrieve a single product **/
  GCMS_product: InContextSdkMethod<GraphCmsTypes.Query['GCMS_product'], GraphCmsTypes.QueryGCMS_productArgs, MeshContext>,
  /** Retrieve multiple products using the Relay connection interface **/
  GCMS_productsConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_productsConnection'], GraphCmsTypes.QueryGCMS_productsConnectionArgs, MeshContext>,
  /** Retrieve document version **/
  GCMS_productVersion: InContextSdkMethod<GraphCmsTypes.Query['GCMS_productVersion'], GraphCmsTypes.QueryGCMS_productVersionArgs, MeshContext>,
  /** Retrieve multiple reviews **/
  GCMS_reviews: InContextSdkMethod<GraphCmsTypes.Query['GCMS_reviews'], GraphCmsTypes.QueryGCMS_reviewsArgs, MeshContext>,
  /** Retrieve a single review **/
  GCMS_review: InContextSdkMethod<GraphCmsTypes.Query['GCMS_review'], GraphCmsTypes.QueryGCMS_reviewArgs, MeshContext>,
  /** Retrieve multiple reviews using the Relay connection interface **/
  GCMS_reviewsConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_reviewsConnection'], GraphCmsTypes.QueryGCMS_reviewsConnectionArgs, MeshContext>,
  /** Retrieve document version **/
  GCMS_reviewVersion: InContextSdkMethod<GraphCmsTypes.Query['GCMS_reviewVersion'], GraphCmsTypes.QueryGCMS_reviewVersionArgs, MeshContext>,
  /** Retrieve multiple assets **/
  GCMS_assets: InContextSdkMethod<GraphCmsTypes.Query['GCMS_assets'], GraphCmsTypes.QueryGCMS_assetsArgs, MeshContext>,
  /** Retrieve a single asset **/
  GCMS_asset: InContextSdkMethod<GraphCmsTypes.Query['GCMS_asset'], GraphCmsTypes.QueryGCMS_assetArgs, MeshContext>,
  /** Retrieve multiple assets using the Relay connection interface **/
  GCMS_assetsConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_assetsConnection'], GraphCmsTypes.QueryGCMS_assetsConnectionArgs, MeshContext>,
  /** Retrieve document version **/
  GCMS_assetVersion: InContextSdkMethod<GraphCmsTypes.Query['GCMS_assetVersion'], GraphCmsTypes.QueryGCMS_assetVersionArgs, MeshContext>,
  /** Retrieve multiple votes **/
  GCMS_votes: InContextSdkMethod<GraphCmsTypes.Query['GCMS_votes'], GraphCmsTypes.QueryGCMS_votesArgs, MeshContext>,
  /** Retrieve a single vote **/
  GCMS_vote: InContextSdkMethod<GraphCmsTypes.Query['GCMS_vote'], GraphCmsTypes.QueryGCMS_voteArgs, MeshContext>,
  /** Retrieve multiple votes using the Relay connection interface **/
  GCMS_votesConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_votesConnection'], GraphCmsTypes.QueryGCMS_votesConnectionArgs, MeshContext>,
  /** Retrieve document version **/
  GCMS_voteVersion: InContextSdkMethod<GraphCmsTypes.Query['GCMS_voteVersion'], GraphCmsTypes.QueryGCMS_voteVersionArgs, MeshContext>,
  /** Retrieve multiple users **/
  GCMS_users: InContextSdkMethod<GraphCmsTypes.Query['GCMS_users'], GraphCmsTypes.QueryGCMS_usersArgs, MeshContext>,
  /** Retrieve a single user **/
  GCMS_user: InContextSdkMethod<GraphCmsTypes.Query['GCMS_user'], GraphCmsTypes.QueryGCMS_userArgs, MeshContext>,
  /** Retrieve multiple users using the Relay connection interface **/
  GCMS_usersConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_usersConnection'], GraphCmsTypes.QueryGCMS_usersConnectionArgs, MeshContext>,
  /** Retrieve multiple scheduledOperations **/
  GCMS_scheduledOperations: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledOperations'], GraphCmsTypes.QueryGCMS_scheduledOperationsArgs, MeshContext>,
  /** Retrieve a single scheduledOperation **/
  GCMS_scheduledOperation: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledOperation'], GraphCmsTypes.QueryGCMS_scheduledOperationArgs, MeshContext>,
  /** Retrieve multiple scheduledOperations using the Relay connection interface **/
  GCMS_scheduledOperationsConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledOperationsConnection'], GraphCmsTypes.QueryGCMS_scheduledOperationsConnectionArgs, MeshContext>,
  /** Retrieve multiple scheduledReleases **/
  GCMS_scheduledReleases: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledReleases'], GraphCmsTypes.QueryGCMS_scheduledReleasesArgs, MeshContext>,
  /** Retrieve a single scheduledRelease **/
  GCMS_scheduledRelease: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledRelease'], GraphCmsTypes.QueryGCMS_scheduledReleaseArgs, MeshContext>,
  /** Retrieve multiple scheduledReleases using the Relay connection interface **/
  GCMS_scheduledReleasesConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_scheduledReleasesConnection'], GraphCmsTypes.QueryGCMS_scheduledReleasesConnectionArgs, MeshContext>,
  /** Retrieve multiple nextAuthUsers **/
  GCMS_nextAuthUsers: InContextSdkMethod<GraphCmsTypes.Query['GCMS_nextAuthUsers'], GraphCmsTypes.QueryGCMS_nextAuthUsersArgs, MeshContext>,
  /** Retrieve a single nextAuthUser **/
  GCMS_nextAuthUser: InContextSdkMethod<GraphCmsTypes.Query['GCMS_nextAuthUser'], GraphCmsTypes.QueryGCMS_nextAuthUserArgs, MeshContext>,
  /** Retrieve multiple nextAuthUsers using the Relay connection interface **/
  GCMS_nextAuthUsersConnection: InContextSdkMethod<GraphCmsTypes.Query['GCMS_nextAuthUsersConnection'], GraphCmsTypes.QueryGCMS_nextAuthUsersConnectionArgs, MeshContext>,
  /** Retrieve document version **/
  GCMS_nextAuthUserVersion: InContextSdkMethod<GraphCmsTypes.Query['GCMS_nextAuthUserVersion'], GraphCmsTypes.QueryGCMS_nextAuthUserVersionArgs, MeshContext>
};

export type MutationGraphCmsSdk = {
  /** Create one product **/
  GCMS_createProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createProduct'], GraphCmsTypes.MutationGCMS_createProductArgs, MeshContext>,
  /** Update one product **/
  GCMS_updateProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateProduct'], GraphCmsTypes.MutationGCMS_updateProductArgs, MeshContext>,
  /** Delete one product from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteProduct'], GraphCmsTypes.MutationGCMS_deleteProductArgs, MeshContext>,
  /** Upsert one product **/
  GCMS_upsertProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_upsertProduct'], GraphCmsTypes.MutationGCMS_upsertProductArgs, MeshContext>,
  /** Publish one product **/
  GCMS_publishProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishProduct'], GraphCmsTypes.MutationGCMS_publishProductArgs, MeshContext>,
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_unpublishProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishProduct'], GraphCmsTypes.MutationGCMS_unpublishProductArgs, MeshContext>,
  /** Update many Product documents **/
  GCMS_updateManyProductsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyProductsConnection'], GraphCmsTypes.MutationGCMS_updateManyProductsConnectionArgs, MeshContext>,
  /** Delete many Product documents, return deleted documents **/
  GCMS_deleteManyProductsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyProductsConnection'], GraphCmsTypes.MutationGCMS_deleteManyProductsConnectionArgs, MeshContext>,
  /** Publish many Product documents **/
  GCMS_publishManyProductsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyProductsConnection'], GraphCmsTypes.MutationGCMS_publishManyProductsConnectionArgs, MeshContext>,
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages **/
  GCMS_unpublishManyProductsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyProductsConnection'], GraphCmsTypes.MutationGCMS_unpublishManyProductsConnectionArgs, MeshContext>,
  /** Update many products **/
  GCMS_updateManyProducts: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyProducts'], GraphCmsTypes.MutationGCMS_updateManyProductsArgs, MeshContext>,
  /** Delete many Product documents **/
  GCMS_deleteManyProducts: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyProducts'], GraphCmsTypes.MutationGCMS_deleteManyProductsArgs, MeshContext>,
  /** Publish many Product documents **/
  GCMS_publishManyProducts: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyProducts'], GraphCmsTypes.MutationGCMS_publishManyProductsArgs, MeshContext>,
  /** Unpublish many Product documents **/
  GCMS_unpublishManyProducts: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyProducts'], GraphCmsTypes.MutationGCMS_unpublishManyProductsArgs, MeshContext>,
  /** Schedule to publish one product **/
  GCMS_schedulePublishProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_schedulePublishProduct'], GraphCmsTypes.MutationGCMS_schedulePublishProductArgs, MeshContext>,
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_scheduleUnpublishProduct: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_scheduleUnpublishProduct'], GraphCmsTypes.MutationGCMS_scheduleUnpublishProductArgs, MeshContext>,
  /** Create one review **/
  GCMS_createReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createReview'], GraphCmsTypes.MutationGCMS_createReviewArgs, MeshContext>,
  /** Update one review **/
  GCMS_updateReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateReview'], GraphCmsTypes.MutationGCMS_updateReviewArgs, MeshContext>,
  /** Delete one review from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteReview'], GraphCmsTypes.MutationGCMS_deleteReviewArgs, MeshContext>,
  /** Upsert one review **/
  GCMS_upsertReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_upsertReview'], GraphCmsTypes.MutationGCMS_upsertReviewArgs, MeshContext>,
  /** Publish one review **/
  GCMS_publishReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishReview'], GraphCmsTypes.MutationGCMS_publishReviewArgs, MeshContext>,
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_unpublishReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishReview'], GraphCmsTypes.MutationGCMS_unpublishReviewArgs, MeshContext>,
  /** Update many Review documents **/
  GCMS_updateManyReviewsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyReviewsConnection'], GraphCmsTypes.MutationGCMS_updateManyReviewsConnectionArgs, MeshContext>,
  /** Delete many Review documents, return deleted documents **/
  GCMS_deleteManyReviewsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyReviewsConnection'], GraphCmsTypes.MutationGCMS_deleteManyReviewsConnectionArgs, MeshContext>,
  /** Publish many Review documents **/
  GCMS_publishManyReviewsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyReviewsConnection'], GraphCmsTypes.MutationGCMS_publishManyReviewsConnectionArgs, MeshContext>,
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages **/
  GCMS_unpublishManyReviewsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyReviewsConnection'], GraphCmsTypes.MutationGCMS_unpublishManyReviewsConnectionArgs, MeshContext>,
  /** Update many reviews **/
  GCMS_updateManyReviews: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyReviews'], GraphCmsTypes.MutationGCMS_updateManyReviewsArgs, MeshContext>,
  /** Delete many Review documents **/
  GCMS_deleteManyReviews: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyReviews'], GraphCmsTypes.MutationGCMS_deleteManyReviewsArgs, MeshContext>,
  /** Publish many Review documents **/
  GCMS_publishManyReviews: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyReviews'], GraphCmsTypes.MutationGCMS_publishManyReviewsArgs, MeshContext>,
  /** Unpublish many Review documents **/
  GCMS_unpublishManyReviews: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyReviews'], GraphCmsTypes.MutationGCMS_unpublishManyReviewsArgs, MeshContext>,
  /** Schedule to publish one review **/
  GCMS_schedulePublishReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_schedulePublishReview'], GraphCmsTypes.MutationGCMS_schedulePublishReviewArgs, MeshContext>,
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_scheduleUnpublishReview: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_scheduleUnpublishReview'], GraphCmsTypes.MutationGCMS_scheduleUnpublishReviewArgs, MeshContext>,
  /** Create one asset **/
  GCMS_createAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createAsset'], GraphCmsTypes.MutationGCMS_createAssetArgs, MeshContext>,
  /** Update one asset **/
  GCMS_updateAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateAsset'], GraphCmsTypes.MutationGCMS_updateAssetArgs, MeshContext>,
  /** Delete one asset from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteAsset'], GraphCmsTypes.MutationGCMS_deleteAssetArgs, MeshContext>,
  /** Upsert one asset **/
  GCMS_upsertAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_upsertAsset'], GraphCmsTypes.MutationGCMS_upsertAssetArgs, MeshContext>,
  /** Publish one asset **/
  GCMS_publishAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishAsset'], GraphCmsTypes.MutationGCMS_publishAssetArgs, MeshContext>,
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_unpublishAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishAsset'], GraphCmsTypes.MutationGCMS_unpublishAssetArgs, MeshContext>,
  /** Update many Asset documents **/
  GCMS_updateManyAssetsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyAssetsConnection'], GraphCmsTypes.MutationGCMS_updateManyAssetsConnectionArgs, MeshContext>,
  /** Delete many Asset documents, return deleted documents **/
  GCMS_deleteManyAssetsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyAssetsConnection'], GraphCmsTypes.MutationGCMS_deleteManyAssetsConnectionArgs, MeshContext>,
  /** Publish many Asset documents **/
  GCMS_publishManyAssetsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyAssetsConnection'], GraphCmsTypes.MutationGCMS_publishManyAssetsConnectionArgs, MeshContext>,
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages **/
  GCMS_unpublishManyAssetsConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyAssetsConnection'], GraphCmsTypes.MutationGCMS_unpublishManyAssetsConnectionArgs, MeshContext>,
  /** Update many assets **/
  GCMS_updateManyAssets: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyAssets'], GraphCmsTypes.MutationGCMS_updateManyAssetsArgs, MeshContext>,
  /** Delete many Asset documents **/
  GCMS_deleteManyAssets: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyAssets'], GraphCmsTypes.MutationGCMS_deleteManyAssetsArgs, MeshContext>,
  /** Publish many Asset documents **/
  GCMS_publishManyAssets: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyAssets'], GraphCmsTypes.MutationGCMS_publishManyAssetsArgs, MeshContext>,
  /** Unpublish many Asset documents **/
  GCMS_unpublishManyAssets: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyAssets'], GraphCmsTypes.MutationGCMS_unpublishManyAssetsArgs, MeshContext>,
  /** Schedule to publish one asset **/
  GCMS_schedulePublishAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_schedulePublishAsset'], GraphCmsTypes.MutationGCMS_schedulePublishAssetArgs, MeshContext>,
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_scheduleUnpublishAsset: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_scheduleUnpublishAsset'], GraphCmsTypes.MutationGCMS_scheduleUnpublishAssetArgs, MeshContext>,
  /** Create one vote **/
  GCMS_createVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createVote'], GraphCmsTypes.MutationGCMS_createVoteArgs, MeshContext>,
  /** Update one vote **/
  GCMS_updateVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateVote'], GraphCmsTypes.MutationGCMS_updateVoteArgs, MeshContext>,
  /** Delete one vote from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteVote'], GraphCmsTypes.MutationGCMS_deleteVoteArgs, MeshContext>,
  /** Upsert one vote **/
  GCMS_upsertVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_upsertVote'], GraphCmsTypes.MutationGCMS_upsertVoteArgs, MeshContext>,
  /** Publish one vote **/
  GCMS_publishVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishVote'], GraphCmsTypes.MutationGCMS_publishVoteArgs, MeshContext>,
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_unpublishVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishVote'], GraphCmsTypes.MutationGCMS_unpublishVoteArgs, MeshContext>,
  /** Update many Vote documents **/
  GCMS_updateManyVotesConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyVotesConnection'], GraphCmsTypes.MutationGCMS_updateManyVotesConnectionArgs, MeshContext>,
  /** Delete many Vote documents, return deleted documents **/
  GCMS_deleteManyVotesConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyVotesConnection'], GraphCmsTypes.MutationGCMS_deleteManyVotesConnectionArgs, MeshContext>,
  /** Publish many Vote documents **/
  GCMS_publishManyVotesConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyVotesConnection'], GraphCmsTypes.MutationGCMS_publishManyVotesConnectionArgs, MeshContext>,
  /** Find many Vote documents that match criteria in specified stage and unpublish from target stages **/
  GCMS_unpublishManyVotesConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyVotesConnection'], GraphCmsTypes.MutationGCMS_unpublishManyVotesConnectionArgs, MeshContext>,
  /** Update many votes **/
  GCMS_updateManyVotes: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyVotes'], GraphCmsTypes.MutationGCMS_updateManyVotesArgs, MeshContext>,
  /** Delete many Vote documents **/
  GCMS_deleteManyVotes: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyVotes'], GraphCmsTypes.MutationGCMS_deleteManyVotesArgs, MeshContext>,
  /** Publish many Vote documents **/
  GCMS_publishManyVotes: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyVotes'], GraphCmsTypes.MutationGCMS_publishManyVotesArgs, MeshContext>,
  /** Unpublish many Vote documents **/
  GCMS_unpublishManyVotes: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyVotes'], GraphCmsTypes.MutationGCMS_unpublishManyVotesArgs, MeshContext>,
  /** Schedule to publish one vote **/
  GCMS_schedulePublishVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_schedulePublishVote'], GraphCmsTypes.MutationGCMS_schedulePublishVoteArgs, MeshContext>,
  /** Unpublish one vote from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_scheduleUnpublishVote: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_scheduleUnpublishVote'], GraphCmsTypes.MutationGCMS_scheduleUnpublishVoteArgs, MeshContext>,
  /** Delete and return scheduled operation **/
  GCMS_deleteScheduledOperation: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteScheduledOperation'], GraphCmsTypes.MutationGCMS_deleteScheduledOperationArgs, MeshContext>,
  /** Create one scheduledRelease **/
  GCMS_createScheduledRelease: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createScheduledRelease'], GraphCmsTypes.MutationGCMS_createScheduledReleaseArgs, MeshContext>,
  /** Update one scheduledRelease **/
  GCMS_updateScheduledRelease: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateScheduledRelease'], GraphCmsTypes.MutationGCMS_updateScheduledReleaseArgs, MeshContext>,
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteScheduledRelease: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteScheduledRelease'], GraphCmsTypes.MutationGCMS_deleteScheduledReleaseArgs, MeshContext>,
  /** Create one nextAuthUser **/
  GCMS_createNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_createNextAuthUser'], GraphCmsTypes.MutationGCMS_createNextAuthUserArgs, MeshContext>,
  /** Update one nextAuthUser **/
  GCMS_updateNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateNextAuthUser'], GraphCmsTypes.MutationGCMS_updateNextAuthUserArgs, MeshContext>,
  /** Delete one nextAuthUser from _all_ existing stages. Returns deleted document. **/
  GCMS_deleteNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteNextAuthUser'], GraphCmsTypes.MutationGCMS_deleteNextAuthUserArgs, MeshContext>,
  /** Upsert one nextAuthUser **/
  GCMS_upsertNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_upsertNextAuthUser'], GraphCmsTypes.MutationGCMS_upsertNextAuthUserArgs, MeshContext>,
  /** Publish one nextAuthUser **/
  GCMS_publishNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishNextAuthUser'], GraphCmsTypes.MutationGCMS_publishNextAuthUserArgs, MeshContext>,
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_unpublishNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishNextAuthUser'], GraphCmsTypes.MutationGCMS_unpublishNextAuthUserArgs, MeshContext>,
  /** Update many NextAuthUser documents **/
  GCMS_updateManyNextAuthUsersConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyNextAuthUsersConnection'], GraphCmsTypes.MutationGCMS_updateManyNextAuthUsersConnectionArgs, MeshContext>,
  /** Delete many NextAuthUser documents, return deleted documents **/
  GCMS_deleteManyNextAuthUsersConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyNextAuthUsersConnection'], GraphCmsTypes.MutationGCMS_deleteManyNextAuthUsersConnectionArgs, MeshContext>,
  /** Publish many NextAuthUser documents **/
  GCMS_publishManyNextAuthUsersConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyNextAuthUsersConnection'], GraphCmsTypes.MutationGCMS_publishManyNextAuthUsersConnectionArgs, MeshContext>,
  /** Find many NextAuthUser documents that match criteria in specified stage and unpublish from target stages **/
  GCMS_unpublishManyNextAuthUsersConnection: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyNextAuthUsersConnection'], GraphCmsTypes.MutationGCMS_unpublishManyNextAuthUsersConnectionArgs, MeshContext>,
  /** Update many nextAuthUsers **/
  GCMS_updateManyNextAuthUsers: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_updateManyNextAuthUsers'], GraphCmsTypes.MutationGCMS_updateManyNextAuthUsersArgs, MeshContext>,
  /** Delete many NextAuthUser documents **/
  GCMS_deleteManyNextAuthUsers: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_deleteManyNextAuthUsers'], GraphCmsTypes.MutationGCMS_deleteManyNextAuthUsersArgs, MeshContext>,
  /** Publish many NextAuthUser documents **/
  GCMS_publishManyNextAuthUsers: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_publishManyNextAuthUsers'], GraphCmsTypes.MutationGCMS_publishManyNextAuthUsersArgs, MeshContext>,
  /** Unpublish many NextAuthUser documents **/
  GCMS_unpublishManyNextAuthUsers: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_unpublishManyNextAuthUsers'], GraphCmsTypes.MutationGCMS_unpublishManyNextAuthUsersArgs, MeshContext>,
  /** Schedule to publish one nextAuthUser **/
  GCMS_schedulePublishNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_schedulePublishNextAuthUser'], GraphCmsTypes.MutationGCMS_schedulePublishNextAuthUserArgs, MeshContext>,
  /** Unpublish one nextAuthUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. **/
  GCMS_scheduleUnpublishNextAuthUser: InContextSdkMethod<GraphCmsTypes.Mutation['GCMS_scheduleUnpublishNextAuthUser'], GraphCmsTypes.MutationGCMS_scheduleUnpublishNextAuthUserArgs, MeshContext>
};

export type SubscriptionGraphCmsSdk = {

};


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
  CQL_Json: any;
  Date: any;
  CQL_Upload: any;
};

export type Query = {
  /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
  CQL_cart?: Maybe<CQL_Cart>;
  CQL_node?: Maybe<CQL_Node>;
};


export type QueryCQL_cartArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
};


export type QueryCQL_nodeArgs = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
};

export type CQL_CurrencyInput = {
  code?: InputMaybe<CQL_CurrencyCode>;
  symbol?: InputMaybe<Scalars['String']>;
  thousandsSeparator?: InputMaybe<Scalars['String']>;
  decimalSeparator?: InputMaybe<Scalars['String']>;
  decimalDigits?: InputMaybe<Scalars['Int']>;
};

export type CQL_CurrencyCode =
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
export type CQL_Cart = CQL_Node & {
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
  items: Array<CQL_CartItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: CQL_Money;
  /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: CQL_Money;
  /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: CQL_Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: CQL_Money;
  /** A simple helper method to check if the cart is empty. */
  isEmpty?: Maybe<Scalars['Boolean']>;
  /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
  abandoned?: Maybe<Scalars['Boolean']>;
  /** Custom key/value attributes array for the cart. */
  attributes: Array<CQL_CustomCartAttribute>;
  /** Custom meta object for the cart */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** Any notes related to the cart/checkout */
  notes?: Maybe<Scalars['String']>;
  /** The date and time the cart was created. */
  createdAt: Scalars['Date'];
  /** The date and time the cart was updated. */
  updatedAt: Scalars['Date'];
};

export type CQL_Node = {
  id: Scalars['ID'];
};

/** Cart and Cart Items use the currency object to format their unit/line totals. */
export type Currency = {
  /** The currency code, e.g. USD, GBP, EUR */
  code?: Maybe<CQL_CurrencyCode>;
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
export type CQL_CartItem = {
  /** A custom unique identifer for the item provided by you. */
  id: Scalars['ID'];
  /** Name for the item. */
  name?: Maybe<Scalars['String']>;
  /** Description for the item. */
  description?: Maybe<Scalars['String']>;
  /** The type of cart item this is. */
  type: CQL_CartItemType;
  /** Array of image URLs for the item. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Unit total for the individual item. */
  unitTotal: CQL_Money;
  /** Line total (quantity * unit price). */
  lineTotal: CQL_Money;
  /** Quantity for the item. */
  quantity: Scalars['Int'];
  /** Custom key/value attributes array for the item. */
  attributes: Array<CQL_CustomCartAttribute>;
  /** Custom metadata for the item. */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** The date and time the item was created. */
  createdAt: Scalars['Date'];
  /** The date and time the item was updated. */
  updatedAt: Scalars['Date'];
};

/** Use these enums to group cart items. Cart totals will reflect these enums. */
export type CQL_CartItemType =
  | 'SKU'
  | 'TAX'
  | 'SHIPPING';

/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export type CQL_Money = {
  /** The raw amount in cents/pence */
  amount?: Maybe<Scalars['Int']>;
  /** The current currency details of the money amount */
  currency: Currency;
  /** The formatted amount with the cart currency. */
  formatted: Scalars['String'];
};

/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export type CQL_CustomCartAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type Mutation = {
  /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
  CQL_addItem: CQL_Cart;
  /** Use this to set all the items at once in the cart. This will override any existing items. */
  CQL_setItems: CQL_Cart;
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
  CQL_updateItem: CQL_Cart;
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  CQL_incrementItemQuantity: CQL_Cart;
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
  CQL_decrementItemQuantity: CQL_Cart;
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
  CQL_removeItem: CQL_Cart;
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
  CQL_emptyCart: CQL_Cart;
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. */
  CQL_updateCart: CQL_Cart;
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
  CQL_deleteCart: CQL_DeletePayload;
  /** Use this to convert a cart to an unpaid order. */
  CQL_checkout?: Maybe<CQL_Order>;
};


export type MutationCQL_addItemArgs = {
  input: CQL_AddToCartInput;
};


export type MutationCQL_setItemsArgs = {
  input: CQL_SetCartItemsInput;
};


export type MutationCQL_updateItemArgs = {
  input: CQL_UpdateCartItemInput;
};


export type MutationCQL_incrementItemQuantityArgs = {
  input: CQL_UpdateItemQuantityInput;
};


export type MutationCQL_decrementItemQuantityArgs = {
  input: CQL_UpdateItemQuantityInput;
};


export type MutationCQL_removeItemArgs = {
  input: CQL_RemoveCartItemInput;
};


export type MutationCQL_emptyCartArgs = {
  input: CQL_EmptyCartInput;
};


export type MutationCQL_updateCartArgs = {
  input: CQL_UpdateCartInput;
};


export type MutationCQL_deleteCartArgs = {
  input: CQL_DeleteCartInput;
};


export type MutationCQL_checkoutArgs = {
  input: CQL_CheckoutInput;
};

export type CQL_AddToCartInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_CustomAttributeInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type CQL_SetCartItemsInput = {
  cartId: Scalars['ID'];
  items: Array<CQL_SetCartItemInput>;
};

export type CQL_SetCartItemInput = {
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price: Scalars['Int'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  quantity?: InputMaybe<Scalars['Int']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_UpdateCartItemInput = {
  cartId: Scalars['ID'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<CQL_CartItemType>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_UpdateItemQuantityInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to update. */
  id: Scalars['ID'];
  /** The amount (as Int) you wish to increment the Cart item quantity by. */
  by: Scalars['Int'];
};

export type CQL_RemoveCartItemInput = {
  /** The ID of the Cart in which the CartItem belongs to. */
  cartId: Scalars['ID'];
  /** The ID of the CartItem you wish to remove. */
  id: Scalars['ID'];
};

export type CQL_EmptyCartInput = {
  /** The ID of the Cart you wish to empty. */
  id: Scalars['ID'];
};

export type CQL_UpdateCartInput = {
  id: Scalars['ID'];
  currency?: InputMaybe<CQL_CurrencyInput>;
  email?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  attributes?: InputMaybe<Array<InputMaybe<CQL_CustomAttributeInput>>>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_DeleteCartInput = {
  /** The ID of the Cart you wish to delete. */
  id: Scalars['ID'];
};

export type CQL_DeletePayload = {
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
};

export type CQL_CheckoutInput = {
  cartId: Scalars['ID'];
  email: Scalars['String'];
  notes?: InputMaybe<Scalars['String']>;
  shipping: CQL_AddressInput;
  billing?: InputMaybe<CQL_AddressInput>;
  metadata?: InputMaybe<Scalars['CQL_Json']>;
};

export type CQL_AddressInput = {
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
export type CQL_Order = {
  id: Scalars['ID'];
  /** The ID of the cart you want to "checkout". */
  cartId: Scalars['ID'];
  /** The email of the recipient. Can be used later for cart recovery emails. */
  email: Scalars['String'];
  /** The orders shipping address. */
  shipping: CQL_Address;
  /** The orders billing address. */
  billing: CQL_Address;
  /** The order items that were in the cart. */
  items: Array<CQL_OrderItem>;
  /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
  subTotal: CQL_Money;
  /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
  shippingTotal: CQL_Money;
  /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
  taxTotal: CQL_Money;
  /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
  grandTotal: CQL_Money;
  /** The total item count. */
  totalItems: Scalars['Int'];
  /** The total unique item count. */
  totalUniqueItems: Scalars['Int'];
  /** The notes set at checkout. */
  notes?: Maybe<Scalars['String']>;
  /** The custom attributes set at checkout */
  attributes: Array<CQL_CustomAttribute>;
  /** The metadata set at checkout */
  metadata?: Maybe<Scalars['CQL_Json']>;
  /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
  status: CQL_OrderStatus;
  /** The date and time the order was created. */
  createdAt: Scalars['Date'];
  /** The date and time the order status was updated. */
  updatedAt: Scalars['Date'];
};

/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export type CQL_Address = {
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
export type CQL_OrderItem = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type: CQL_CartItemType;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  unitTotal: CQL_Money;
  lineTotal: CQL_Money;
  quantity: Scalars['Int'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  attributes: Array<CQL_CustomCartAttribute>;
  metadata?: Maybe<Scalars['CQL_Json']>;
};

export type CQL_CustomAttribute = {
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type CQL_OrderStatus =
  | 'UNPAID'
  | 'PAID';

export type CQL_CacheControlScope =
  | 'PUBLIC'
  | 'PRIVATE';

    }
    export type QueryCartQlSdk = {
  /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. **/
  CQL_cart: InContextSdkMethod<CartQlTypes.Query['CQL_cart'], CartQlTypes.QueryCQL_cartArgs, MeshContext>,
  /**  **/
  CQL_node: InContextSdkMethod<CartQlTypes.Query['CQL_node'], CartQlTypes.QueryCQL_nodeArgs, MeshContext>
};

export type MutationCartQlSdk = {
  /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. **/
  CQL_addItem: InContextSdkMethod<CartQlTypes.Mutation['CQL_addItem'], CartQlTypes.MutationCQL_addItemArgs, MeshContext>,
  /** Use this to set all the items at once in the cart. This will override any existing items. **/
  CQL_setItems: InContextSdkMethod<CartQlTypes.Mutation['CQL_setItems'], CartQlTypes.MutationCQL_setItemsArgs, MeshContext>,
  /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. **/
  CQL_updateItem: InContextSdkMethod<CartQlTypes.Mutation['CQL_updateItem'], CartQlTypes.MutationCQL_updateItemArgs, MeshContext>,
  /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. **/
  CQL_incrementItemQuantity: InContextSdkMethod<CartQlTypes.Mutation['CQL_incrementItemQuantity'], CartQlTypes.MutationCQL_incrementItemQuantityArgs, MeshContext>,
  /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. **/
  CQL_decrementItemQuantity: InContextSdkMethod<CartQlTypes.Mutation['CQL_decrementItemQuantity'], CartQlTypes.MutationCQL_decrementItemQuantityArgs, MeshContext>,
  /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. **/
  CQL_removeItem: InContextSdkMethod<CartQlTypes.Mutation['CQL_removeItem'], CartQlTypes.MutationCQL_removeItemArgs, MeshContext>,
  /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. **/
  CQL_emptyCart: InContextSdkMethod<CartQlTypes.Mutation['CQL_emptyCart'], CartQlTypes.MutationCQL_emptyCartArgs, MeshContext>,
  /** Use this to update the cart currency or metadata. If the cart doesn't exist, it'll throw an error. **/
  CQL_updateCart: InContextSdkMethod<CartQlTypes.Mutation['CQL_updateCart'], CartQlTypes.MutationCQL_updateCartArgs, MeshContext>,
  /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. **/
  CQL_deleteCart: InContextSdkMethod<CartQlTypes.Mutation['CQL_deleteCart'], CartQlTypes.MutationCQL_deleteCartArgs, MeshContext>,
  /** Use this to convert a cart to an unpaid order. **/
  CQL_checkout: InContextSdkMethod<CartQlTypes.Mutation['CQL_checkout'], CartQlTypes.MutationCQL_checkoutArgs, MeshContext>
};

export type SubscriptionCartQlSdk = {

};

export type GraphCmsContext = {
      ["GraphCMS"]: { Query: QueryGraphCmsSdk, Mutation: MutationGraphCmsSdk, Subscription: SubscriptionGraphCmsSdk },
      
    };

export type CartQlContext = {
      ["CartQL"]: { Query: QueryCartQlSdk, Mutation: MutationCartQlSdk, Subscription: SubscriptionCartQlSdk },
      
    };

export type MeshContext = GraphCmsContext & CartQlContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/GraphCMS/introspectionSchema":
      return import("./sources/GraphCMS/introspectionSchema");
    
    case ".mesh/sources/CartQL/introspectionSchema":
      return import("./sources/CartQL/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import { parse } from 'graphql';
import StitchingMerger from "@graphql-mesh/merger-stitching";
import PrefixTransform from "@graphql-mesh/transform-prefix";
import { resolveAdditionalResolversWithoutImport } from '@graphql-mesh/utils';
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const graphCmsTransforms = [];
const cartQlTransforms = [];
const graphCmsHandler = new GraphqlHandler({
              name: "GraphCMS",
              config: {"endpoint":"https://api-eu-central-1.graphcms.com/v2/ck8sn5tnf01gc01z89dbc7s0o/master"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("GraphCMS"),
              logger: logger.child("GraphCMS"),
              importFn
            });
const cartQlHandler = new GraphqlHandler({
              name: "CartQL",
              config: {"endpoint":"https://api.cartql.com"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("CartQL"),
              logger: logger.child("CartQL"),
              importFn
            });
const additionalTypeDefs = [parse("extend type CQL_CartItem {\n  product: GCMS_Product\n}"),] as any[];
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
graphCmsTransforms[0] = new PrefixTransform({
                  apiName: "GraphCMS",
                  config: {"value":"GCMS_","includeRootOperations":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                });
cartQlTransforms[0] = new PrefixTransform({
                  apiName: "CartQL",
                  config: {"value":"CQL_","includeRootOperations":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                });
sources[0] = {
          name: 'GraphCMS',
          handler: graphCmsHandler,
          transforms: graphCmsTransforms
        }
sources[1] = {
          name: 'CartQL',
          handler: cartQlHandler,
          transforms: cartQlTransforms
        }
const additionalResolvers = await Promise.all([
        import("../resolvers")
            .then(m => m.resolvers || m.default || m)
      ]);

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));