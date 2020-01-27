import React, {Component} from 'react';
import axios from 'axios';

function myHOC (MyComponent, url) {
    return class extends Component {
        constructor (props) {
            super(props)

            this.state = {
                data: null
            }
        }

        getData = () => {
            axios.get(url).then(res => {
                this.setState({
                    data: res.data
                })
            })
        }

        render () {
            return (
                <>
                    {this.state.data ? (
                        <MyComponent 
                            {...this.props}
                            data={this.state.data}
                        />
                    ) : (
                        this.getData()
                    )}
                </>
            )
        }
    }
}

export default myHOC;