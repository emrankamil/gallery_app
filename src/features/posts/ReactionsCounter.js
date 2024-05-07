import React, { useState } from 'react';
import {useDispatch,  useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';
import { reactionAdded } from './postSlice';

const ReactionsCounter = ({ postId }) => {
    const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const post = posts.find((post) => post.id === postId);
  const { thumbsUp, wow, heart, rocket, coffee } = post.reactions;

  const handleReactionClick = (reaction) => {
    dispatch(reactionAdded({ postId, reaction }));
  };

  return (
    <div>
      <div>
        <span>Thumbs Up: {thumbsUp}</span>
        <button onClick={() => handleReactionClick('thumbsUp')}>👍</button>
      </div>
      <div>
        <span>Wow: {wow}</span>
        <button onClick={() => handleReactionClick('wow')}>😮</button>
      </div>
      <div>
        <span>Heart: {heart}</span>
        <button onClick={() => handleReactionClick('heart')}>❤️</button>
      </div>
      <div>
        <span>Rocket: {rocket}</span>
        <button onClick={() => handleReactionClick('rocket')}>🚀</button>
      </div>
      <div>
        <span>Coffee: {coffee}</span>
        <button onClick={() => handleReactionClick('coffee')}>☕</button>
      </div>
    </div>
  );
};

export default ReactionsCounter;
