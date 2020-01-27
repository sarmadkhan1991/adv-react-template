import React, {Component} from 'react'
import './App.css'
import DisplayAndContainer from './Components/DC/Index'
import HigherOrder from './Components/HOC/Index'
import RenderProps from './Components/RenderProps/Index'
import PropsChildren from './Components/PropsChildren/Index'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: ''
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle(str) {
    this.setState({display: str})
  }

  render() {
    let {display} = this.state
    return (
      <div className='app'>
        <div className='btns'>
          <button onClick={() => this.toggle('dc')}>display and container</button>
          <button onClick={() => this.toggle('hoc')}>higher-order</button>
          <button onClick={() => this.toggle('rp')}>render props</button>
          <button onClick={() => this.toggle('pc')}>props.children</button>
        </div>

        {display === 'dc' && <DisplayAndContainer/>}
        {display === 'hoc' && <HigherOrder/>}
        {display === 'rp' && <RenderProps/>}
        {display === 'pc' && <PropsChildren/>}

      </div>
    )
  }
}

export default App
