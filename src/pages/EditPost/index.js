import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Form, Input, Textarea, Select,
} from '@rocketseat/unform';
import { Creators as PostActions } from '../../store/ducks/posts';

import { InputContainer } from './styles';

import {
  Col, Row, Container, PageTitle, Btn, BtnLink,
} from '../../styles/global';

import schema from './validation';

class EditPost extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    categories: PropTypes.shape({}).isRequired,
    post: PropTypes.shape({}).isRequired,
    updatePostRequest: PropTypes.func.isRequired,
  };

  redirect = () => {
    const { history } = this.props;
    history.push('/');
  };

  onSubmit = (data) => {
    const { updatePostRequest, post } = this.props;

    const updatedPost = {
      id: post.id,
      timestamp: Date.now(),
      ...data,
    };

    updatePostRequest(updatedPost, this.redirect);
  };

  render() {
    const { categories, post } = this.props;

    return (
      <Container>
        <PageTitle>Edit the Post</PageTitle>
        <Row>
          <Col>
            <Form schema={schema} onSubmit={this.onSubmit} initialData={post}>
              <InputContainer>
                <Input name="title" label="Title:" className="form-control" />
              </InputContainer>
              <InputContainer>
                <Textarea name="body" label="Body:" className="form-control" />
              </InputContainer>
              <InputContainer>
                <Input name="author" label="Author:" className="form-control" disabled />
              </InputContainer>
              <InputContainer>
                <Select
                  className="custom-select"
                  name="category"
                  label="Category:"
                  options={categories.data.map(({ path, name }) => ({ id: path, title: name }))}
                />
              </InputContainer>
              <Btn addclass="btn btn-primary mt-2">Save</Btn>
              <BtnLink addclass="btn btn-danger mt-2" to="/">
                Cancel
              </BtnLink>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ categories, posts }, ownProps) => ({
  categories,
  post: posts.data.find(post => post.id === ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);
