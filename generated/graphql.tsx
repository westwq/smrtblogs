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
export type Blog = {
  __typename?: 'blog';
  author?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "blog" */
export type Blog_Aggregate = {
  __typename?: 'blog_aggregate';
  aggregate?: Maybe<Blog_Aggregate_Fields>;
  nodes: Array<Blog>;
};

/** aggregate fields of "blog" */
export type Blog_Aggregate_Fields = {
  __typename?: 'blog_aggregate_fields';
  avg?: Maybe<Blog_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Blog_Max_Fields>;
  min?: Maybe<Blog_Min_Fields>;
  stddev?: Maybe<Blog_Stddev_Fields>;
  stddev_pop?: Maybe<Blog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blog_Stddev_Samp_Fields>;
  sum?: Maybe<Blog_Sum_Fields>;
  var_pop?: Maybe<Blog_Var_Pop_Fields>;
  var_samp?: Maybe<Blog_Var_Samp_Fields>;
  variance?: Maybe<Blog_Variance_Fields>;
};


/** aggregate fields of "blog" */
export type Blog_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Blog_Avg_Fields = {
  __typename?: 'blog_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
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

/** aggregate max on columns */
export type Blog_Max_Fields = {
  __typename?: 'blog_max_fields';
  author?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Blog_Min_Fields = {
  __typename?: 'blog_min_fields';
  author?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
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

/** aggregate stddev on columns */
export type Blog_Stddev_Fields = {
  __typename?: 'blog_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Blog_Stddev_Pop_Fields = {
  __typename?: 'blog_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Blog_Stddev_Samp_Fields = {
  __typename?: 'blog_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "blog" */
export type Blog_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  view_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Blog_Sum_Fields = {
  __typename?: 'blog_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  view_count?: Maybe<Scalars['Int']['output']>;
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

/** aggregate var_pop on columns */
export type Blog_Var_Pop_Fields = {
  __typename?: 'blog_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Blog_Var_Samp_Fields = {
  __typename?: 'blog_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Blog_Variance_Fields = {
  __typename?: 'blog_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  view_count?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "blog_views" */
export type Blog_Views = {
  __typename?: 'blog_views';
  blog_id?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ip_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "blog_views" */
export type Blog_Views_Aggregate = {
  __typename?: 'blog_views_aggregate';
  aggregate?: Maybe<Blog_Views_Aggregate_Fields>;
  nodes: Array<Blog_Views>;
};

/** aggregate fields of "blog_views" */
export type Blog_Views_Aggregate_Fields = {
  __typename?: 'blog_views_aggregate_fields';
  avg?: Maybe<Blog_Views_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Blog_Views_Max_Fields>;
  min?: Maybe<Blog_Views_Min_Fields>;
  stddev?: Maybe<Blog_Views_Stddev_Fields>;
  stddev_pop?: Maybe<Blog_Views_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Blog_Views_Stddev_Samp_Fields>;
  sum?: Maybe<Blog_Views_Sum_Fields>;
  var_pop?: Maybe<Blog_Views_Var_Pop_Fields>;
  var_samp?: Maybe<Blog_Views_Var_Samp_Fields>;
  variance?: Maybe<Blog_Views_Variance_Fields>;
};


/** aggregate fields of "blog_views" */
export type Blog_Views_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blog_Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Blog_Views_Avg_Fields = {
  __typename?: 'blog_views_avg_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
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

/** aggregate max on columns */
export type Blog_Views_Max_Fields = {
  __typename?: 'blog_views_max_fields';
  blog_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Blog_Views_Min_Fields = {
  __typename?: 'blog_views_min_fields';
  blog_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
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

/** aggregate stddev on columns */
export type Blog_Views_Stddev_Fields = {
  __typename?: 'blog_views_stddev_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Blog_Views_Stddev_Pop_Fields = {
  __typename?: 'blog_views_stddev_pop_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Blog_Views_Stddev_Samp_Fields = {
  __typename?: 'blog_views_stddev_samp_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "blog_views" */
export type Blog_Views_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Blog_Views_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Blog_Views_Stream_Cursor_Value_Input = {
  blog_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Blog_Views_Sum_Fields = {
  __typename?: 'blog_views_sum_fields';
  blog_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
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

/** aggregate var_pop on columns */
export type Blog_Views_Var_Pop_Fields = {
  __typename?: 'blog_views_var_pop_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Blog_Views_Var_Samp_Fields = {
  __typename?: 'blog_views_var_samp_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Blog_Views_Variance_Fields = {
  __typename?: 'blog_views_variance_fields';
  blog_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

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
  blog: Array<Blog>;
  /** fetch aggregated fields from the table: "blog" */
  blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "blog" using primary key columns */
  blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table: "blog_views" */
  blog_views: Array<Blog_Views>;
  /** fetch aggregated fields from the table: "blog_views" */
  blog_views_aggregate: Blog_Views_Aggregate;
  /** fetch data from the table: "blog_views" using primary key columns */
  blog_views_by_pk?: Maybe<Blog_Views>;
  /** execute function "search_blogs" which returns "blog" */
  search_blogs: Array<Blog>;
  /** execute function "search_blogs" and query aggregates on result of table type "blog" */
  search_blogs_aggregate: Blog_Aggregate;
};


export type Query_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootBlog_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootBlog_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Query_RootBlog_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Query_RootBlog_Views_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSearch_BlogsArgs = {
  args: Search_Blogs_Args;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Query_RootSearch_Blogs_AggregateArgs = {
  args: Search_Blogs_Args;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};

export type Search_Blogs_Args = {
  search_term?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "blog" */
  blog: Array<Blog>;
  /** fetch aggregated fields from the table: "blog" */
  blog_aggregate: Blog_Aggregate;
  /** fetch data from the table: "blog" using primary key columns */
  blog_by_pk?: Maybe<Blog>;
  /** fetch data from the table in a streaming manner: "blog" */
  blog_stream: Array<Blog>;
  /** fetch data from the table: "blog_views" */
  blog_views: Array<Blog_Views>;
  /** fetch aggregated fields from the table: "blog_views" */
  blog_views_aggregate: Blog_Views_Aggregate;
  /** fetch data from the table: "blog_views" using primary key columns */
  blog_views_by_pk?: Maybe<Blog_Views>;
  /** fetch data from the table in a streaming manner: "blog_views" */
  blog_views_stream: Array<Blog_Views>;
  /** execute function "search_blogs" which returns "blog" */
  search_blogs: Array<Blog>;
  /** execute function "search_blogs" and query aggregates on result of table type "blog" */
  search_blogs_aggregate: Blog_Aggregate;
};


export type Subscription_RootBlogArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBlog_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Blog_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootBlog_ViewsArgs = {
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Subscription_RootBlog_Views_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blog_Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Views_Order_By>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Subscription_RootBlog_Views_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootBlog_Views_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Blog_Views_Stream_Cursor_Input>>;
  where?: InputMaybe<Blog_Views_Bool_Exp>;
};


export type Subscription_RootSearch_BlogsArgs = {
  args: Search_Blogs_Args;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
};


export type Subscription_RootSearch_Blogs_AggregateArgs = {
  args: Search_Blogs_Args;
  distinct_on?: InputMaybe<Array<Blog_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Blog_Order_By>>;
  where?: InputMaybe<Blog_Bool_Exp>;
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

export type CheckViewExistsQueryVariables = Exact<{
  blog_id: Scalars['Int']['input'];
  ip_address: Scalars['String']['input'];
}>;


export type CheckViewExistsQuery = { __typename?: 'query_root', blog_views: Array<{ __typename?: 'blog_views', id: number }> };

export type GetBlogsByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetBlogsByIdQuery = { __typename?: 'query_root', blog_by_pk?: { __typename?: 'blog', id: number, title?: string | null, author?: string | null, view_count?: number | null, created_at?: any | null, updated_at?: any | null, content?: string | null } | null };

export type InsertViewMutationVariables = Exact<{
  blog_id: Scalars['Int']['input'];
  ip_address: Scalars['String']['input'];
  location: Scalars['String']['input'];
}>;


export type InsertViewMutation = { __typename?: 'mutation_root', insert_blog_views_one?: { __typename?: 'blog_views', id: number } | null };

export type SearchBlogsQueryVariables = Exact<{
  search_term: Scalars['String']['input'];
}>;


export type SearchBlogsQuery = { __typename?: 'query_root', search_blogs: Array<{ __typename?: 'blog', id: number, title?: string | null, author?: string | null, created_at?: any | null, view_count?: number | null }> };


export const CheckViewExistsDocument = gql`
    query CheckViewExists($blog_id: Int!, $ip_address: String!) {
  blog_views(where: {blog_id: {_eq: $blog_id}, ip_address: {_eq: $ip_address}}) {
    id
  }
}
    `;

/**
 * __useCheckViewExistsQuery__
 *
 * To run a query within a React component, call `useCheckViewExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckViewExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckViewExistsQuery({
 *   variables: {
 *      blog_id: // value for 'blog_id'
 *      ip_address: // value for 'ip_address'
 *   },
 * });
 */
export function useCheckViewExistsQuery(baseOptions: Apollo.QueryHookOptions<CheckViewExistsQuery, CheckViewExistsQueryVariables> & ({ variables: CheckViewExistsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckViewExistsQuery, CheckViewExistsQueryVariables>(CheckViewExistsDocument, options);
      }
export function useCheckViewExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckViewExistsQuery, CheckViewExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckViewExistsQuery, CheckViewExistsQueryVariables>(CheckViewExistsDocument, options);
        }
export function useCheckViewExistsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CheckViewExistsQuery, CheckViewExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckViewExistsQuery, CheckViewExistsQueryVariables>(CheckViewExistsDocument, options);
        }
export type CheckViewExistsQueryHookResult = ReturnType<typeof useCheckViewExistsQuery>;
export type CheckViewExistsLazyQueryHookResult = ReturnType<typeof useCheckViewExistsLazyQuery>;
export type CheckViewExistsSuspenseQueryHookResult = ReturnType<typeof useCheckViewExistsSuspenseQuery>;
export type CheckViewExistsQueryResult = Apollo.QueryResult<CheckViewExistsQuery, CheckViewExistsQueryVariables>;
export const GetBlogsByIdDocument = gql`
    query GetBlogsById($id: Int!) {
  blog_by_pk(id: $id) {
    id
    title
    author
    view_count
    created_at
    updated_at
    content
  }
}
    `;

/**
 * __useGetBlogsByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogsByIdQuery, GetBlogsByIdQueryVariables> & ({ variables: GetBlogsByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>(GetBlogsByIdDocument, options);
      }
export function useGetBlogsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>(GetBlogsByIdDocument, options);
        }
export function useGetBlogsByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>(GetBlogsByIdDocument, options);
        }
export type GetBlogsByIdQueryHookResult = ReturnType<typeof useGetBlogsByIdQuery>;
export type GetBlogsByIdLazyQueryHookResult = ReturnType<typeof useGetBlogsByIdLazyQuery>;
export type GetBlogsByIdSuspenseQueryHookResult = ReturnType<typeof useGetBlogsByIdSuspenseQuery>;
export type GetBlogsByIdQueryResult = Apollo.QueryResult<GetBlogsByIdQuery, GetBlogsByIdQueryVariables>;
export const InsertViewDocument = gql`
    mutation InsertView($blog_id: Int!, $ip_address: String!, $location: String!) {
  insert_blog_views_one(
    object: {blog_id: $blog_id, ip_address: $ip_address, location: $location}
  ) {
    id
  }
}
    `;
export type InsertViewMutationFn = Apollo.MutationFunction<InsertViewMutation, InsertViewMutationVariables>;

/**
 * __useInsertViewMutation__
 *
 * To run a mutation, you first call `useInsertViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertViewMutation, { data, loading, error }] = useInsertViewMutation({
 *   variables: {
 *      blog_id: // value for 'blog_id'
 *      ip_address: // value for 'ip_address'
 *      location: // value for 'location'
 *   },
 * });
 */
export function useInsertViewMutation(baseOptions?: Apollo.MutationHookOptions<InsertViewMutation, InsertViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertViewMutation, InsertViewMutationVariables>(InsertViewDocument, options);
      }
export type InsertViewMutationHookResult = ReturnType<typeof useInsertViewMutation>;
export type InsertViewMutationResult = Apollo.MutationResult<InsertViewMutation>;
export type InsertViewMutationOptions = Apollo.BaseMutationOptions<InsertViewMutation, InsertViewMutationVariables>;
export const SearchBlogsDocument = gql`
    query SearchBlogs($search_term: String!) {
  search_blogs(args: {search_term: $search_term}) {
    id
    title
    author
    created_at
    view_count
  }
}
    `;

/**
 * __useSearchBlogsQuery__
 *
 * To run a query within a React component, call `useSearchBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchBlogsQuery({
 *   variables: {
 *      search_term: // value for 'search_term'
 *   },
 * });
 */
export function useSearchBlogsQuery(baseOptions: Apollo.QueryHookOptions<SearchBlogsQuery, SearchBlogsQueryVariables> & ({ variables: SearchBlogsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchBlogsQuery, SearchBlogsQueryVariables>(SearchBlogsDocument, options);
      }
export function useSearchBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchBlogsQuery, SearchBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchBlogsQuery, SearchBlogsQueryVariables>(SearchBlogsDocument, options);
        }
export function useSearchBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchBlogsQuery, SearchBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchBlogsQuery, SearchBlogsQueryVariables>(SearchBlogsDocument, options);
        }
export type SearchBlogsQueryHookResult = ReturnType<typeof useSearchBlogsQuery>;
export type SearchBlogsLazyQueryHookResult = ReturnType<typeof useSearchBlogsLazyQuery>;
export type SearchBlogsSuspenseQueryHookResult = ReturnType<typeof useSearchBlogsSuspenseQuery>;
export type SearchBlogsQueryResult = Apollo.QueryResult<SearchBlogsQuery, SearchBlogsQueryVariables>;