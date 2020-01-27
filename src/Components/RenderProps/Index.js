import React from 'react'
import Hover from './Hover';
import Box from './Box';

export default function Index(props) {
    return (
        <div>
            <h1>Render Props</h1>
            <Hover render={hovering => {
                return (
                    <div>
                        Are you Hovering? 
                        {hovering ? ' yes': ' no'}
                    </div>
                )
            }}/>
            <Hover render={hovering => <Box isHovered={hovering} text='this is tooltip 1'/>}/>
        </div>
    )
}   
