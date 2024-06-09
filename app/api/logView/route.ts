export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { CheckViewExistsDocument, CheckViewExistsQuery, CheckViewExistsQueryVariables, InsertViewDocument, InsertViewMutation, InsertViewMutationVariables } from '../../../generated/graphql';
import { gql, GraphQLClient } from 'graphql-request';
import * as dotenv from 'dotenv';
dotenv.config();

const endpoint = `${process.env.HASURA_GRAPHQL_DATABASE_URL}`;
const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`, 
  },
});

const INSERT_VIEW = gql`
mutation InsertView($blog_id: Int!, $ip: String!, $location: String!) {
    insert_blog_views_one(object: { blog_id: $blog_id, ip_address: $ip, location: $location }) {
        id
    }
}`;
export async function POST(request: Request) {
  console.log(">>>>>>>>>>>>>>>");

  const { id } = await request.json();
  const ip_address = request.headers.get('x-forwarded-for') ?? '0.0.0.0';
  const location = "a city name";
  const variables: InsertViewMutationVariables = { blog_id:id, ip_address, location }

  const checkVar: CheckViewExistsQueryVariables = { blog_id:id, ip_address }

  console.log("===Req bid: " + id + "@" + ip_address);
  try {
    const existView: CheckViewExistsQuery = await client.request(CheckViewExistsDocument, checkVar);

    console.log("=== view count: "+ existView.blog_views.length);
    if(existView.blog_views.length > 0)
        return new Response();

    await client.request(InsertViewDocument, variables);

    return new Response();
  } catch (error) {
    console.log(JSON.stringify(error))
    return new Response(`${JSON.stringify(error)}`);
  }
}