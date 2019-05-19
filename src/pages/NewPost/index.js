import React, { Component } from 'react';
import uuid from 'uuid';
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

class NewPost extends Component {
  static propTypes = {
    history: PropTypes.shape({}).isRequired,
    categories: PropTypes.shape({}).isRequired,
    addPostRequest: PropTypes.func.isRequired,
  };

  onSubmit = (data, { resetForm }) => {
    const { addPostRequest } = this.props;

    const newPost = {
      id: uuid(),
      timestamp: Date.now(),
      ...data,
    };

    addPostRequest(newPost, resetForm);
  };

  render() {
    const { categories } = this.props;
    return (
      <Container>
        <PageTitle>Create a New Post</PageTitle>
        <Row>
          <Col>
            <Form schema={schema} onSubmit={this.onSubmit}>
              <InputContainer>
                <Input name="title" label="Title:" className="form-control" />
              </InputContainer>
              <InputContainer>
                <Textarea name="body" label="Body:" className="form-control" />
              </InputContainer>
              <InputContainer>
                <Input name="author" label="Author:" className="form-control" />
              </InputContainer>
              <InputContainer>
                <Select
                  className="custom-select"
                  name="category"
                  label="Category:"
                  options={categories.data.map(({ path, name }) => ({ id: path, title: name }))}
                />
              </InputContainer>
              <Btn addclass="btn btn-primary mt-2">Send</Btn>
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

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPost);
