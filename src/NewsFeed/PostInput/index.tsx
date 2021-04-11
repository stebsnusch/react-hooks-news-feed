import React, { useContext } from "react";
import { NewsFeedContext } from "../newsFeedContext";
import { Button, TextField, Box } from "@material-ui/core";

const PostInput = () => {
	const { feedState, feedDispatch } = useContext(NewsFeedContext);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		feedDispatch({
			type: "add",
			post: {
				id: feedState.posts.length,
				content: e.target[0].value,
				favorite: false,
			},
		});
	};

	return (
		<Box my={2}>
			<form onSubmit={(e) => handleSubmit(e)}>
				<TextField multiline variant="outlined" rows={4} fullWidth />
				<Box mt={1} display="flex" justifyContent="flex-end">
					<Button color="primary" type="reset">
						Reset
					</Button>
					<Button
						color="primary"
						variant="contained"
						type="submit"
						disableElevation
					>
						Publish
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default PostInput;
