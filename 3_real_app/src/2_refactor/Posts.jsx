/* eslint-disable */
import React, { PropTypes } from 'react';
import SomeUnusedClass from '../5_todo_app/index';
import Box from '../5_todo_app/index';
import fetch from 'isomorphic-fetch';

export default class BadNameForClassYouCanCreateBetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: undefined || [],
      value: false || '',
    };
  }

  componentDidMount()       {
    const that = this;

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        that.setState({
          posts:stories
        })
      });

    console.log(document.querySelector('h1'))
    document.querySelector('h1').innerText = 'MY NEW HEADING'
  }
  onChange(e){
    var value = e.target.value || '';
    this.setState({
      value: e.target.value
    });
  }

  onChangeAgain(e){
    this.setState({
      value: e.target.value
    });
  }

  // componentWillUpdate() {
  //   console.log('------------- Working?');
  // }

  filter() {
    // TODO: create filter feature
  }

  componentDidMount() {
    console.log('Delete me!!');
  }

  render() {
    var posts = this.state.posts || [];
    var value = this.state.value || '';
    return (
      <div>
        <div>
          <h1>My posts</h1>
        </div>
        <div><label>Search</label><input onChange={this.onChange} value={value} /></div>
        <div><button onClick={this.filter}>Filter</button></div>
        <div> {posts.map(function (post) {
          return (<div><h2>{post.title}</h2><p>{post.body}</p></div>)
        })}
        </div>
      </div>
    );
  }
}

