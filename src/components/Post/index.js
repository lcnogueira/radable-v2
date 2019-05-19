import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  Row, Col, BtnLink, Icon, Btn,
} from '../../styles/global';

import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardSubtitle,
  Small,
  ButtonContainer,
} from './styles';


const Post = ({ post }) => (
  <Row>
    <Col>
      <Card>
        <CardHeader>{post.title}</CardHeader>
        <CardBody>
          <CardSubtitle>{post.author}</CardSubtitle>
          <CardText>
            {post.body}
            <Small>{moment(post.timestamp).format('MMM Do YY')}</Small>
          </CardText>
          <Icon name="fa fa-comments"> {post.commentCount} </Icon>
          <Icon name="fa fa-heart"> {post.voteScore} </Icon>
          <Btn addclass="btn btn-outline-success">
            <Icon name="fa fa-thumbs-up" />
          </Btn>
          <Btn addclass="btn btn-outline-danger">
            <Icon name="fa fa-thumbs-down" />
          </Btn>
          <ButtonContainer>
            <BtnLink addclass="btn btn-outline-primary" to={`/post/edit/${post.id}`}>
              <Icon name="fa fa-pencil" /> Edit
            </BtnLink>
            <Btn addclass="btn btn-outline-danger">
              <Icon name="fa fa-trash" /> Delete
            </Btn>
          </ButtonContainer>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
