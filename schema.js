const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');


const FeedType = new GraphQLObjectType({
    name: 'Feed',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        key: {type: GraphQLString}


    })
})

const FeedData = new GraphQLObjectType({
    name: "FeedData",
    fields: () => ({
        id: {type: GraphQLString},
        value: {type: GraphQLString},
        feed_id: {type: GraphQLInt},
        created_at: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        feeds: {
            args: {
                username: {type: GraphQLString},
            },
            type: new GraphQLList(FeedType),
            resolve(parent, args) {
                return axios.get(`https://io.adafruit.com/api/v2/${args.username}/feeds`)
                .then(res => res.data)
            }
        },
        feed: {
            args: {
                username: {type: GraphQLString},
                feed_key: {type: GraphQLString}
            },
            type: new GraphQLList(FeedData),
            resolve(parent, args) {
                return axios.get(`https://io.adafruit.com/api/v2/${args.username}/feeds/${args.feed_key}/data`)
                .then(res => res.data)
            }

        
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
