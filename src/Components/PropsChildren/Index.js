import React from 'react'
import Hover from './Hover';

export default function Index(props) {
    return (
        <div>
            <h1>Props.Children</h1>
            <Hover>
                {hovering => <div>Are you Hovering? {hovering ? 'yes':'no'}</div>}
                {/* {hovering => <div>This is the second child {hovering ? 'yes':'no'}</div>} */}
            </Hover>
        </div>
    )
}   
