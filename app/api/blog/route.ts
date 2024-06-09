export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { GetBlogsByIdDocument, GetBlogsByIdQuery } from '../../../generated/graphql';
import { GraphQLClient } from 'graphql-request';
import * as dotenv from 'dotenv';
dotenv.config();

const endpoint = `${process.env.HASURA_GRAPHQL_DATABASE_URL}`;
const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`, 
  },
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id') || '0', 10);

  console.log("Req id: " + id);
  try {
    const variables = { id };
    const data: GetBlogsByIdQuery = await client.request(GetBlogsByIdDocument, variables);

    console.log(JSON.stringify(data));

    return new Response(`${JSON.stringify(data)}`);
  } catch (error) {
    console.log(JSON.stringify(error))
    return new Response(`${JSON.stringify(error)}`);
  }
}