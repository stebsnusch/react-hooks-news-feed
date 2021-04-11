import React, { useContext, createRef } from "react";
import { NewsFeedContext } from "../newsFeedContext";
import { Button, TextField, Box } from "@material-ui/core";

const PostInput = () => {
	const { feedDispatch } = useContext(NewsFeedContext);
	const inputRef = createRef<HTMLFormElement>();

	const addPost = (e: React.SyntheticEvent): void => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			content: { value: string };
		};

		if (!target.content.value) return;

		feedDispatch({
			type: "add",
			post: {
				id: Date.now(),
				content: target.content.value,
				favorite: false,
			},
		});

		inputRef.current!.reset();
	};

	return (
		<Box my={2}>
			<form ref={inputRef} onSubmit={addPost}>
				<TextField
					multiline
					variant="outlined"
					name="content"
					rows={4}
					fullWidth
				/>
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
