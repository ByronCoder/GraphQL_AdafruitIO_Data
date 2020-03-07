import gql from 'graphql-tag';

import React from 'react'
import { Mutation } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';

export default function AddData() {
    const ADD_DATA = gql`
    mutation AddNewDataPoint($input: FeedDataInput!) {
        AddFeedData(input: $input) {
          id
          value
          feed_id
        }
      }
    `
    let input;
    const [addDataPoint, { data }] = useMutation(ADD_DATA);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addDataPoint({ variables: { input: {value:input.value} } });
            input.value = '';
          }}
        >
         <div className="form-group">
          <input className="form-control"
            ref={node => {
              input = node;
            }}
          />
          <button className="btn btn-secondary" type="submit">Add Data</button>
          </div>
        </form>
      </div>
    );
        
}

