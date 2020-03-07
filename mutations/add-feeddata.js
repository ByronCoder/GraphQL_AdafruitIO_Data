const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const axios = require ('axios');
const FeedData = require('../types/FeedData');

const FeedDataInputType = new GraphQLInputObjectType({
    name: "FeedDataInput",

    fields: {
        value: {type: GraphQLNonNull(GraphQLString)}
    }
})

module.exports = {
    type: FeedData,
    args: {
        input: {type: GraphQLNonNull(FeedDataInputType)}
    },
    resolve(args, {input}) {
        return axios.post(`https://io.adafruit.com/api/v2/webhooks/feed/aAR4ekRoDQjcFT9hu5zimyohNkQa`, input)
        .then(res => res.data)
    }
}