import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FeedItem from './FeedItem'

const FEEDS_QUERY = gql`
    query GetAllFeeds($username: String!) {
        feeds(username: $username) {
            id
            key
            name
     }
 }
`


export default class Feeds extends Component {
    render() {

        return (
           <Fragment>
               <h1 className="display-4 my-3">Feeds</h1>
               <Query query={FEEDS_QUERY} variables={{username: 'ViralCipher'}}>
                    {
                        ({loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>
                            if(error) console.log(error);
                            
                            return <Fragment>
                                {
                                    data.feeds.map(feed => (
                                        <FeedItem key={feed.id} feed={feed} />
                                    ))
                              }
                            </Fragment>
                        }
                    }
                </Query>
           </Fragment>

         
        )
    }
}
