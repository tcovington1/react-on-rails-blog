import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Post from './Post';
import PostForm from './PostForm';

class Blog extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  renderPost = () => {
    return this.state.posts.map( post => <Post key={post.id} {...post} update={this.updatePost} deletePost={this.deletePost} />)
  }

  addPost = (post) => {
    // {post: { title: 'food', body: 'yummy'}}
    axios.post('/api/posts', { post })
      .then( res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updatePost = (id, post) => {
    axios.put(`/api/posts/${id}`, { post } )
      .then( res => {
        const posts = this.state.posts.map( p => {
          if (p.id === id)
            return res.data
          return p
        })
        this.setState({ posts })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: posts.filter( p => p.id !== id) })
      })
  }

  render() {
    return (
      <>
        <Header>Blog</Header>
        <PostForm add={this.addPost} />
        { this.renderPost() }
      </>
    )
  }
}

export default Blog;