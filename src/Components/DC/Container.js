import React, {Component} from 'react';
import axios from 'axios';
import Display from './Display'

export default class CharacterListContainer extends Component {
    constructor(props) {
        super (props)

        this.state = {
            characters:[]
        }
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people`).then(chars => {
            this.setState({
                characters: chars.data.results
            })
        })
    }

    render() {
        return (
            <Display characters={this.state.characters}/>
        )
    }
}