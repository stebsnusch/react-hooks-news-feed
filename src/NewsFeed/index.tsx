import PostInput from "./PostInput";
import Timeline from "./Timeline";
import { NewsFeedProvider } from "./newsFeedContext";
import { Box, Container, Link, Typography } from "@material-ui/core";

const NewsFeed = () => (
	<Container maxWidth="sm">
		<NewsFeedProvider>
			<Box mt={2}>
				<Typography align="center" variant="h4" component="h1" gutterBottom>
					News Feed Example
				</Typography>
			</Box>
			<Typography
				align="center"
				color="textSecondary"
				component="p"
				gutterBottom
			>
				This project uses React Hooks in order to render and manage the state of
				a simple news feed and its posts.
			</Typography>
			<Typography
				align="center"
				color="textSecondary"
				variant="overline"
				component="p"
				gutterBottom
			>
				Visit my{" "}
				<Link href="https://github.com/stebsnusch" target="_blank">
					Github
				</Link>{" "}
				for more projects.
			</Typography>
			<PostInput />
			<Timeline />
		</NewsFeedProvider>
	</Container>
);

export default NewsFeed;
