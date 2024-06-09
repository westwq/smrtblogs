module.exports = {
    schema: [
        {
            'https://smrt.fly.dev/v1beta1/relay': {
                headers: {
                    'x-hasura-admin-secret': "S5a6t8o6",
                },
            },
        },
    ],
    documents: ['./graphqlr/*.graphql'],
    overwrite: true,
    generates: {
        './generated/graphqlr.tsx': {
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
        './graphqlr.schema.json': {
            plugins: ['introspection'],
        },
    },
};
