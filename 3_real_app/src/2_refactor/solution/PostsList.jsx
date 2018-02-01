import React from 'react';
import PropTypes from 'prop-types';
import { Cell } from 'react-mdl';
import PostItem from './PostItem';

const postList = (props) => {
  const { posts } = props;

  return (
    <Cell col={12}>
      {posts.length > 0 ?
        posts.map(post => <PostItem key={post.id} {...post} />) :
        <div>No results</div>
      }
    </Cell>
  );
};

postList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default postList;

