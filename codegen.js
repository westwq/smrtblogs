module.exports = {
    schema: [
        {
            'https://smrt.fly.dev/v1/graphql': {
                headers: {
                    'x-hasura-admin-secret': "S5a6t8o6",
                },
            },
        },
    ],
    documents: ['./graphql/*.graphql'],
    overwrite: true,
    generates: {
        './generated/graphql.tsx': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
