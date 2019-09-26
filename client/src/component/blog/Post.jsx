import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import PostForm from './PostForm';

class Post extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render () {
    const { id, title, body, update, deletePost } = this.props
    const { editing } = this.state
    return (
      <Segment style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between'
      }}>
        {
          editing ?
              <PostForm 
                { ...this.props } 
                update={ update } 
                toggleEdit={this.toggleEdit}
              />
            :
              <>
                <Header>{title}</Header>
                <p>{body}</p>
              </>
        }
        <Button icon color='blue' onClick={this.toggleEdit}>
          <Icon name="pencil" />
        </Button>
        <Button icon color='red' onClick={() => deletePost(id)}>
          <Icon name="trash" />
        </Button>
      </Segment>
    )
  }
}


export default Post;