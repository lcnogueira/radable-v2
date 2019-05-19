import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as PostActions } from '../../store/ducks/posts';

import { BtnLink, PageTitle, Icon } from '../../styles/global';

import Post from '../../components/Post';

class CategoryPage extends Component {
  static propTypes = {
    loadPostsRequest: PropTypes.func.isRequired,
    posts: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }).isRequired,
  };

  componentDidMount() {
    const { loadPostsRequest, match } = this.props;
    const { category } = match.params;

    loadPostsRequest(category);
  }

  componentDidUpdate(prevProps) {
    const { loadPostsRequest, match } = this.props;
    const { category } = match.params;
    const { category: prevCategory } = prevProps.match.params;

    if (category !== prevCategory) {
      loadPostsRequest(category);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Fragment>
        <PageTitle>Posts</PageTitle>
        <BtnLink addclass="btn btn-primary" to="/post/create">
          <Icon name="fa fa-plus" />
          New Post
        </BtnLink>
        {posts.data.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

const mapDispatchToProps = dispatch => bindActionCreators(PostActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryPage);
