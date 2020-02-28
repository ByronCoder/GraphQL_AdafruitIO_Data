import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default function FeedItem({feed: {id, key, name}}) {

        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h4>Feed Name: {name}</h4>
                        <p>Feed Id: {id}</p>
                        <p>Feed Key: {key}</p>
                    </div>
                    <div className="col-md-3">
                      <Link to={`/feed/${key}`} className="btn btn-primary">Feed Data</Link>
                    </div>
                </div>
                
            </div>
        )
    
}
