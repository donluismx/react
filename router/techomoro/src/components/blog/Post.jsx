import React, { useEffect }  from 'react';
import { useParams } from 'react-router';

const Post = () => {
  let { postSlug } = useParams();

  useEffect(() => {
    //fetch post using the postslug
  }, [postSlug]);

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">This is a Post Title</h1>
        <h6 className="mb-5">The post slug is, {postSlug}</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus asperiores repellat officiis quisquam, obcaecati at eos sit nisi inventore maiores enim dignissimos esse explicabo, ab eveniet suscipit! Explicabo, corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus asperiores repellat officiis quisquam, obcaecati at eos sit nisi inventore maiores enim dignissimos esse explicabo, ab eveniet suscipit! Explicabo, corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique possimus asperiores repellat officiis quisquam, obcaecati at eos sit nisi inventore maiores enim dignissimos esse explicabo, ab eveniet suscipit! Explicabo, corrupti.</p>
      </div>
    </div>
  );
}

export default Post;