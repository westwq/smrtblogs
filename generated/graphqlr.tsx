import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** An object with globally unique ID */
export type Node = {
  /** A globally unique identifier */
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "blog" */
export type Blog = Node & {
  __typename?: 'blog';
  author?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
};

/** A Relay connection object on "blog" */
export type BlogConnection = {
  __typename?: 'blogConnection';
  edges: Array<BlogEdge>;
  pageInfo: PageInfo;
};

export type BlogEdge = {
  __typename?: 'blogEdge';
  cursor: Scalars['String']['output'];
  node: Blog;
};

/** Boolean expression to filter rows from the table "blog". All fields are combined with a logical 'AND'. */
export type Blog_Bool_Exp = {
  _and?: InputMaybe<Array<Blog_Bool_Exp>>;
  _not?: InputMaybe<Blog_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  view_count?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "blog" */
export enum Blog_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlogPkey = 'blog_pkey'
}

/** input type for incrementing numeric columns in table "blog" */
export type Blog_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "blog" */
export type Blog_Insert_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

/** response of any mutation on the table "blog" */
export type Blog_Mutation_Response = {
  __typename?: 'blog_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog>;
};

/** on_conflict condition type for table "blog" */
export type Blog_On_Conflict = {
  constraint: Blog_Constraint;
  update_columns?: Array<Blog_Update_Column>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

/** Ordering options when selecting data from "blog". */
export type Blog_Order_By = {
  author?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  view_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blog */
export type Blog_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "blog" */
export enum Blog_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewCount = 'view_count'
}

/** input type for updating data in table "blog" */
export type Blog_Set_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

/** update columns of table "blog" */
export enum Blog_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ViewCount = 'view_count'
}

export type Blog_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blog_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blog_Bool_Exp;
};

/** columns and relationships of "blog_views" */
export type Blog_Views = Node & {
  __typename?: 'blog_views';
  blog_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

/** A Relay connection object on "blog_views" */
export type Blog_ViewsConnection = {
  __typename?: 'blog_viewsConnection';
  edges: Array<Blog_ViewsEdge>;
  pageInfo: PageInfo;
};

export type Blog_ViewsEdge = {
  __typename?: 'blog_viewsEdge';
  cursor: Scalars['String']['output'];
  node: Blog_Views;
};

/** Boolean expression to filter rows from the table "blog_views". All fields are combined with a logical 'AND'. */
export type Blog_Views_Bool_Exp = {
  _and?: InputMaybe<Array<Blog_Views_Bool_Exp>>;
  _not?: InputMaybe<Blog_Views_Bool_Exp>;
  _or?: InputMaybe<Array<Blog_Views_Bool_Exp>>;
  blog_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ip_address?: InputMaybe<String_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "blog_views" */
export enum Blog_Views_Constraint {
  /** unique or primary key constraint on columns "id" */
  BlogViewsPkey = 'blog_views_pkey'
}

/** input type for incrementing numeric columns in table "blog_views" */
export type Blog_Views_Inc_Input = {
  blog_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "blog_views" */
export type Blog_Views_Insert_Input = {
  blog_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};

/** response of any mutation on the table "blog_views" */
export type Blog_Views_Mutation_Response = {
  __typename?: 'blog_views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Blog_Views>;
};

/** on_conflict condition type for table "blog_views" */
export type Blog_Views_On_Conflict = {
  constraint: Blog_Views_Constraint;
  update_columns?: Array<Blog_Views_Update_Column>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};

/** Ordering options when selecting data from "blog_views". */
export type Blog_Views_Order_By = {
  blog_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip_address?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blog_views */
export type Blog_Views_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "blog_views" */
export enum Blog_Views_Select_Column {
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Location = 'location'
}

/** input type for updating data in table "blog_views" */
export type Blog_Views_Set_Input = {
  blog_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "blog_views" */
export enum Blog_Views_Update_Column {
  /** column name */
  BlogId = 'blog_id',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  Location = 'location'
}

export type Blog_Views_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Blog_Views_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Blog_Views_Set_Input>;
  /** filter the rows which have to be updated */
  where: Blog_Views_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "blog" */
  delete_blog?: Maybe<Blog_Mutation_Response>;
  /** delete single row from the table: "blog" */
  delete_blog_by_pk?: Maybe<Blog>;
  /** delete data from the table: "blog_views" */
  delete_blog_views?: Maybe<Blog_Views_Mutation_Response>;
  /** delete single row from the table: "blog_views" */
  delete_blog_views_by_pk?: Maybe<Blog_Views>;
  /** insert data into the table: "blog" */
  insert_blog?: Maybe<Blog_Mutation_Response>;
  /** insert a single row into the table: "blog" */
  insert_blog_one?: Maybe<Blog>;
  /** insert data into the table: "blog_views" */
  insert_blog_views?: Maybe<Blog_Views_Mutation_Response>;
  /** insert a single row into the table: "blog_views" */
  insert_blog_views_one?: Maybe<Blog_Views>;
  /** update data of the table: "blog" */
  update_blog?: Maybe<Blog_Mutation_Response>;
  /** update single row of the table: "blog" */
  update_blog_by_pk?: Maybe<Blog>;
  /** update multiples rows of table: "blog" */
  update_blog_many?: Maybe<Array<Maybe<Blog_Mutation_Response>>>;
  /** update data of the table: "blog_views" */
  update_blog_views?: Maybe<Blog_Views_Mutation_Response>;
  /** update single row of the table: "blog_views" */
  update_blog_views_by_pk?: Maybe<Blog_Views>;
  /** update multiples rows of table: "blog_views" */
  update_blog_views_many?: Maybe<Array<Maybe<Blog_Views_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BlogArgs = {
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blog_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Blog_ViewsArgs = {
  where: Blog_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blog_Views_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_BlogArgs = {
  objects: Array<Blog_Insert_Input>;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_OneArgs = {
  object: Blog_Insert_Input;
  on_conflict?: InputMaybe<Blog_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_ViewsArgs = {
  objects: Array<Blog_Views_Insert_Input>;
  on_conflict?: InputMaybe<Blog_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blog_Views_OneArgs = {
  object: Blog_Views_Insert_Input;
  on_conflict?: InputMaybe<Blog_Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BlogArgs = {
  _inc?: InputMaybe<Blog_Inc_Input>;
  _set?: InputMaybe<Blog_Set_Input>;
  where: Blog_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_By_PkArgs = {
  _inc?: InputMaybe<Blog_Inc_Input>;
  _set?: InputMaybe<Blog_Set_Input>;
  pk_columns: Blog_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_ManyArgs = {
  updates: Array<Blog_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_ViewsArgs = {
  _inc?: InputMaybe<Blog_Views_Inc_Input>;
  _set?: InputMaybe<Blog_Views_Set_Input>;
  where: Blog_Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_Views_By_PkArgs = {
  _inc?: InputMaybe<Blog_Views_Inc_Input>;
  _set?: InputMaybe<Blog_Views_Set_Input>;
  pk_columns: Blog_Views_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blog_Views_ManyArgs = {
  updates: Array<Blog_Views_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "blog" */
  blog_connection: BlogConnection;
  /** fetch data from the table: "blog_views" */
  blog_views_connection: Blog_ViewsConnection;
  node?: Maybe<Node>;
};


export type Query_RootBlog_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_Views_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Query_RootNodeArgs = {
  id: Scalars['ID']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "blog" */
  blog_connection: BlogConnection;
  /** fetch data from the table: "blog_views" */
  blog_views_connection: Blog_ViewsConnection;
  node?: Maybe<Node>;
};


export type Subscription_RootBlog_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_Views_ConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Subscription_RootNodeArgs = {
  id: Scalars['ID']['input'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

export type GetBlogsPageQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetBlogsPageQuery = { __typename?: 'query_root', blog_connection: { __typename?: 'blogConnection', edges: Array<{ __typename?: 'blogEdge', cursor: string, node: { __typename?: 'blog', id: string, title?: string | null, author?: string | null, created_at?: any | null, view_count?: number | null } }>, pageInfo: { __typename?: 'PageInfo', endCursor: string, hasNextPage: boolean } } };


export const GetBlogsPageDocument = gql`
    query GetBlogsPage($first: Int, $after: String) {
  blog_connection(
    first: $first
    after: $after
    order_by: {created_at: desc, view_count: desc}
  ) {
    edges {
      node {
        id
        title
        author
        created_at
        view_count
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useGetBlogsPageQuery__
 *
 * To run a query within a React component, call `useGetBlogsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsPageQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetBlogsPageQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogsPageQuery, GetBlogsPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogsPageQuery, GetBlogsPageQueryVariables>(GetBlogsPageDocument, options);
      }
export function useGetBlogsPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsPageQuery, GetBlogsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogsPageQuery, GetBlogsPageQueryVariables>(GetBlogsPageDocument, options);
        }
export function useGetBlogsPageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsPageQuery, GetBlogsPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogsPageQuery, GetBlogsPageQueryVariables>(GetBlogsPageDocument, options);
        }
export type GetBlogsPageQueryHookResult = ReturnType<typeof useGetBlogsPageQuery>;
export type GetBlogsPageLazyQueryHookResult = ReturnType<typeof useGetBlogsPageLazyQuery>;
export type GetBlogsPageSuspenseQueryHookResult = ReturnType<typeof useGetBlogsPageSuspenseQuery>;
export type GetBlogsPageQueryResult = Apollo.QueryResult<GetBlogsPageQuery, GetBlogsPageQueryVariables>;