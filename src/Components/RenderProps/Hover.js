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
        return (
            <div 
                className='hover-comp hover-holder'
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                {this.props.render(this.state.hovering)}
            </div>
        )
    }
}

export default Hover;