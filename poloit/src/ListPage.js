import React from 'react';
import Post from './Post';

const ListPage = ({searchResults}) => {
    const results = searchResults.map(post => <Post key={post.id} post={post}/>)
    const content = results?.length ? results : <article><p>La empresa no pertenece al Polo IT.</p></article>
  return (
    <main>{content}</main>
  )
}

export default ListPage