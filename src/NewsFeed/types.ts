export type Post = {
	id: number;
	content: String;
	favorite: Boolean;
};

export type Action = {
	type: String;
	post: {
		id: number;
		content: String;
	};
};

export type NewsFeedState = {
	posts: Array<Post>,
}