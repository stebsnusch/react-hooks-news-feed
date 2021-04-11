import React, { createContext, useReducer } from "react";
import { postReducer, initialState } from "./reducer";

export const NewsFeedContext: any = createContext(null);

export const NewsFeedProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	const providerValue: Object = {
		feedState: state,
		feedDispatch: dispatch,
	};

	return (
		<NewsFeedContext.Provider value={providerValue}>
			{children}
		</NewsFeedContext.Provider>
	);
};
