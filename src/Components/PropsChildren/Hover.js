import React, {Component} from 'react';

class Hover extends Component {
    constructor (props) {
        super(props)

        this.state ={
            hovering: false
        }
    }

    handleMouseOver = () => this.setState({hovering: true})

    handleMouseOut = () => this.setState({hovering: false})

    render () {
        // const mappedChildren = this.props.children.map = child => child(this.state.hovering);
        return (
            <div 
                className='hover-comp hover-holder'
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                {this.props.children(this.state.hovering)}
            </div>
        )
    }
}

export default Hover;