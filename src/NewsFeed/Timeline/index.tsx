import { useContext } from "react";
import { NewsFeedContext } from "../newsFeedContext";
import PostBox from "./components/PostBox";
import { Grid } from "@material-ui/core";

const Timeline = () => {
	const { feedState } = useContext(NewsFeedContext);

	return (
		<Grid spacing={2} container direction="column">
			{feedState &&
				feedState.posts.length > 0 &&
				feedState.posts
					.sort((a, b) => b.id - a.id)
					.map((post, index) => <PostBox key={index} post={post} />)}
		</Grid>
	);
};

export default Timeline;
