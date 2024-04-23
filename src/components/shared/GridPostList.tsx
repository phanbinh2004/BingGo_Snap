import { Models } from "appwrite";
import React from "react";
import { useUserContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import PostStats from "./PostStars";

type GridPostListProps = {
  posts?: Models.Document[];
  showUser?: boolean;
  showStars?: boolean;
};

const GridPostList = ({
  posts,
  showUser = true,
  showStars = true,
}: GridPostListProps) => {
  const { user } = useUserContext();
  return (
    <ul className="grid-container">
      {React.Children.toArray(
        posts?.map((post) => (
          <li className="relative min-w-80 h-80">
            <Link to={`/post/${post.$id}`} className="grid-post_link">
              <img
                src={post.imageUrl}
                alt="post"
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="grid-post_user">
              {showUser && (
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={post.creator.imageUrl}
                    alt="creator"
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="line-clamp-1">{post.creator.name}</p>
                </div>
              )}
              {showStars && <PostStats post={post} userId={user.id} />}
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default GridPostList;
