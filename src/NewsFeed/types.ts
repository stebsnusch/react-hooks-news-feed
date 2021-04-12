import { Dispatch } from "react";

export type Post = {
	id: number;
	content: String;
	favorite: Boolean;
};

export type Action = {
	type: String;
	post: Post;
};

export type NewsFeedState = {
	posts: Array<Post>,
}

export type ContextType = {
	feedState: NewsFeedState,
	feedDispatch: Dispatch<Action>,
}