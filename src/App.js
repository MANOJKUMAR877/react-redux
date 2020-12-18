import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store.js'
import Posts from './Posts'
import Postform from './Postform';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }




  render() {
    return (
      <Provider store={store}>
        <div>
          <Postform />
          <Posts />
        </div>
      </Provider>
    )
  }
}
export default App;