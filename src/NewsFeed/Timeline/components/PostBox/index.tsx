import { useContext } from "react";
import { NewsFeedContext } from "../../../newsFeedContext";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import {
	Grid,
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Divider,
	Typography,
	IconButton,
} from "@material-ui/core";
import { Post } from "../../../types";

const PostBox = (props: { post: Post }) => {
	const { feedDispatch } = useContext(NewsFeedContext);
	const { content } = props.post;

	const deleteAction = (
		<IconButton
			onClick={() =>
				feedDispatch && feedDispatch({ type: "delete", post: props.post })
			}
		>
			<DeleteIcon />
		</IconButton>
	);

	return (
		<Grid item>
			<Card variant="outlined">
				<CardHeader action={deleteAction} />
				<CardContent>
					<Typography align="left">{content}</Typography>
				</CardContent>
				<Divider />
				<CardActions>
					<IconButton
						onClick={() =>
							feedDispatch &&
							feedDispatch({ type: "toggleFavorite", post: props.post })
						}
					>
						{props.post.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default PostBox;
