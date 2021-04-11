import { useContext } from "react";
import { NewsFeedContext } from "../newsFeedContext";
import { Post } from "../reducer";
import PostBox from "./components/PostBox";
import { Grid } from "@material-ui/core";

const Timeline = () => {
	const { feedState } = useContext(NewsFeedContext);

	return (
		<Grid spacing={2} container direction="column">
			{feedState.posts.length > 0 &&
				feedState.posts
					.sort((a: Post, b: Post) => b.id - a.id)
					.map((post: Post, index: number) => (
						<PostBox key={index} post={post} />
					))}
		</Grid>
	);
};

export default Timeline;
