import { Post, Action, NewsFeedState } from "./types";

export const initialState: NewsFeedState = {
	posts: [],
};

export const postReducer = (state: NewsFeedState, action: Action): any => {
	switch (action.type) {
		case "add":
			return { ...state, posts: [...state.posts, action.post] };
		case "delete":
			const newArray = state.posts.filter(
				(post: Post) => post.id !== action.post.id
			);
			return { ...state, posts: newArray };
		case "toggleFavorite":
			const currentPost = state.posts.filter(
				(post: Post) => post.id === action.post.id
			);
			let favProp = currentPost[0].favorite;
			currentPost[0].favorite = !favProp;
			return { ...state };
		default:
			return state;
	}
};
