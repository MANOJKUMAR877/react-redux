import React, { Component } from 'react'
import Postform from './Postform';
import Posts from './Posts';
import { Provider } from 'react-redux'
import store from './store.js'
export default class App extends Component {
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

        </div >
      </Provider>
    )
  }
}
