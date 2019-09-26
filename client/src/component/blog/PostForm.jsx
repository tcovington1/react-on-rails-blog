import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  state = { title: '', body: '' }

  componentDidMount() {
    if (this.props.id) {
      this.setState({ title: this.props.title, body: this.props.body })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.update(this.props.id, this.state)
      this.props.toggleEdit()
    } else {
      this.props.add(this.state)
    }
    this.setState({ title: '', body: ''})
  }

  render() {
    const { title, body } = this.state 
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          required
          placeholder='title'
          label='title'
          name='title'
          value={title}
          onChange={this.handleChange}
        />
        <Form.Input 
          required
          placeholder='body'
          label='body'
          name='body'
          value={body}
          onChange={this.handleChange}
        />
        <Form.Button color='green'>Submit</Form.Button>
      </Form>
    )
  }
}

export default PostForm;