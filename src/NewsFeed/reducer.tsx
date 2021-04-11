export type Post = {
	id: number;
	content: String;
	favorite: Boolean;
};

type Action = {
	type: String;
	post: {
		id: number;
		content: String;
	};
};

export const initialState: Object = {
	posts: [],
};

export const postReducer = (state: any, action: Action) => {
	switch (action.type) {
		case "add":
			return { ...state, posts: [...state.posts, action.post] };
		case "delete":
			const newArray = state.posts.filter(
				(post: any) => post.id !== action.post.id
			);
			return { ...state, posts: newArray };
		case "toggleFavorite":
			let favProp = state.posts[action.post.id].favorite;
			state.posts[action.post.id].favorite = !favProp;
			return { ...state };
		default:
			return state;
	}
};
