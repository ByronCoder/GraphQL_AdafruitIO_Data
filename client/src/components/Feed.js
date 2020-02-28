import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const FEEDDATA_QUERY = gql`
    query GetFeedData($username: String!, $feed_key: String!) {
        feed(username:$username, feed_key:$feed_key) {
            id
            value
            feed_id
            created_at
            
        } 
    }
`


export default class Feed extends Component {
    render() {
        let {feed_key} = this.props.match.params;
        return (
           <Fragment>
               <Query query={FEEDDATA_QUERY} variables={{username: 'ViralCipher', feed_key}}>
                {

                    ({loading, error, data}) => {
                        if(loading) return <h4>Loading...</h4>
                        if(error) console.log(error)
                        
                    
                        return (
                        
                        <div className="container">
                            <h4>Feed: {feed_key}</h4>
                                <table className="table">
                                    <tr>
                                        <th>ID</th>
                                        <th>Value</th>
                                        <th>Feed ID</th>
                                        <th>Created At</th>
                                    </tr>
                                   {
                                       data.feed.map(feed => (
                                        <tr>
                                            <td>{feed.id}</td>
                                            <td>{feed.value}</td>
                                            <td>{feed.feed_id}</td>
                                            <td> <Moment format="YYYY-MM-DD HH:mm">{feed.created_at}</Moment></td>
                                        </tr>
                                       ))
                                   }
                                   
                                 </table>

                                 <hr />
                                <Link to="/" className="btn btn-primary">Back</Link>
                            </div>
                        )
                        
                    }
             }
               </Query>
           </Fragment>
        )
    }
}
