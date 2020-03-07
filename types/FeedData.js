const {GraphQLString, GraphQLInt, GraphQLObjectType} = require('graphql');

module.exports = new GraphQLObjectType({
    name: "FeedData",
    fields: () => ({
        id: {type: GraphQLString},
        value: {type: GraphQLString},
        feed_id: {type: GraphQLInt},
        created_at: {type: GraphQLString}
    })
})