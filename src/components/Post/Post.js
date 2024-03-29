// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">Projects</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Author />
      </div>
    </div>
  );
};

export default Post;
