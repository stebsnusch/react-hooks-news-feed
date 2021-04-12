import React, { createContext, useReducer } from "react";
import { postReducer, initialState } from "./reducer";
import { ContextType } from "./types";

export const NewsFeedContext = createContext<Partial<ContextType>>({});

export const NewsFeedProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	const providerValue: ContextType = {
		feedState: state,
		feedDispatch: dispatch,
	};

	return (
		<NewsFeedContext.Provider value={providerValue}>
			{children}
		</NewsFeedContext.Provider>
	);
};
