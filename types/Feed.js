const {
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType
} = require('graphql')

module.exports = new GraphQLObjectType({
    name: 'Feed',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        key: {type: GraphQLString}


    })
})
