const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql');

const FeedType = require('./types/Feed');
const FeedData = require('./types/FeedData');

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

const AddFeedDataMutation = require('./mutations/add-feeddata');

const RootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',

    fields: () => ({
        AddFeedData: AddFeedDataMutation
       
    })
})

const aioSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutationType
})
module.exports = aioSchema;
    
