## Readme
Simple NextJS app deployed on Vercel. Display a grid of blog post, track view and fuzzy search.

Try on [https://smrtblog-2a9wqyeti-wes-projects-44477454.vercel.app/](https://smrtblog-m3hizm25t-wes-projects-44477454.vercel.app/)

## API route 
| URL | Verb | Parameter | Request Body | Description |
|-|-|-|-|-|
|..\api\blog\[id]|GET|||Retrieve blog information with ID [id]|
|..\api\blogs|GET|```?first=[first]&after=[after]```||Returns a paginated list of blog articles|
|..\api\logView|POST||```{id:[id]}```|Insert IP & location data of each view every time a blog article is viewed|
|..\api\pricing|GET|||Retrieve pricing computed|
|..\api\search|POST||```{search_term: [searchTerm]}```|Fuzzy search for title and content that matches [searchTerm] |

## Config, CodeGen files
- GraphQL in ./graphql*
- CodeGen configuration files in ./codegen*.js
- CodeGen generated src in ./generated/*.tsx
- CodeGen generated schemas in ./*.schema.json
- DB DDL in ./postgres.sql
- DB DML in ./blog.sql
