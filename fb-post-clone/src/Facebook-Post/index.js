import React from 'react';

function FacebookPost({ postData }) {
  return (
    <div className="facebook-post">
      <img src={postData.thumbnail} alt={postData.title} />
      <h2>{postData.title}</h2>
      <p>{postData.description}</p>
      <span>Price: ${postData.price}</span>
      {/* Additional fields as needed */}
    </div>
  );
}

export default FacebookPost;
