export const dynamic = 'force-dynamic'; // static by default, unless reading the request
import { gql, GraphQLClient } from 'graphql-request';
import { SearchBlogsDocument, SearchBlogsQuery, SearchBlogsQueryVariables } from '@/generated/graphql';
import * as dotenv from 'dotenv';
dotenv.config();

const endpoint = `${process.env.HASURA_GRAPHQL_DATABASE_URL}`;
const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': `${process.env.HASURA_GRAPHQL_ADMIN_SECRET}`, 
  },
});


const SEARCH_BLOGS = gql`
  query SearchBlogs($search_term: String!) {
    search_blogs(args: { search_term: $search_term }) {
      id
      title
      content
      author
      created_at
      updated_at
      view_count
    }
  }
`;

export async function POST(request: Request) {
  const { search_term } = await request.json();
  const variables: SearchBlogsQueryVariables = { search_term };

  console.log("search term: " + search_term);
  try {
    const data: SearchBlogsQuery = await client.request(SearchBlogsDocument, variables);

    console.log(JSON.stringify(data));

    return new Response(`${JSON.stringify(data)}`);
  } catch (error) {
    console.log(JSON.stringify(error))
    return new Response(`${JSON.stringify(error)}`);
  }
}

