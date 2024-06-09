export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { GetBlogsPageDocument, GetBlogsPageQuery, GetBlogsPageQueryVariables } from '../../../generated/graphqlr';
import { GraphQLClient } from 'graphql-request';
import * as dotenv from 'dotenv';
dotenv.config();

const endpoint = `${process.env.HASURA_GRAPHQL_RELAY_DATABASE_URL}`;
const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`,
  },
});

export async function GET(request: Request) {
    try {
        
        const { searchParams } = new URL(request.url)
        const first = parseInt(searchParams.get('first') || '12', 10);
        const after = (searchParams.get('after') && searchParams.get('after') != "null")?searchParams.get('after'):null;
        const variables: GetBlogsPageQueryVariables = { first, after };

        console.log(`request ${first}, ${after}`);

        const data: GetBlogsPageQuery = await client.request(GetBlogsPageDocument, variables);

        console.log(JSON.stringify(data));

        return new Response(`${JSON.stringify(data)}`);
    } catch (error) {
        console.log(JSON.stringify(error))
        return new Response(`${JSON.stringify(error)}`);
    }
  
}