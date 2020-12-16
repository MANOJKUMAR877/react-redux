import React, { Component } from 'react'

export default class Postform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: ''
        }

    }
    change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Title</label>
                <input type="text"  name="title" onChange={this.change} />
                <br />
                <br/>
                <label>Body</label>
                <textarea type="text"  name="body" onChange={this.change} />
                <button type="submit">submit</button>
            </form>
        )
    }
}
