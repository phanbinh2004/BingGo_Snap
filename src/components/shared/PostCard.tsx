import { Models } from "appwrite";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/AuthContext";
import PostStars from "./PostStars";
type PostCardProps = {
  post: Models.Document;
};
const PostCard = ({ post }: PostCardProps) => {
  const dateCreated = moment(post.$createdAt).fromNow();
  const { user } = useUserContext();
  if (!post.creator) {
    return;
  }
  console.log(post);
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className=" items-center gap-2 flex">
          <Link to={`/profile/${post.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                "assets/icons/profile-placeholder.svg"
              }
              alt="creator"
              className="rounded-full w-12 lg-h-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtitle-semibold lg:small-regular">
                {dateCreated}
              </p>
              -
              <p className="subtitle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"} `}>
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <Link to={`/post/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag: string) => (
              <li key={tag} className="text-light-3">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
      <img
        src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
        className="post-card_img"
        alt="post- image"
      />
      <PostStars post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;
