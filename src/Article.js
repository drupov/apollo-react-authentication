import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ARTICLE } from './common';

const Article = () => {
  const { data, loading, error } = useQuery(ARTICLE, {variables: {id: 1}});

  if (error) {
    return error.message;
  }

  return (
    <React.Fragment>
      <h1>Article data</h1>
      {
        loading
        ?
        <p>Loading...</p>
        :
        data.article ?  <p>Title: {data.article.title}</p> : <p>nothing found</p>
      }
    </React.Fragment>
  );
}

export default Article;