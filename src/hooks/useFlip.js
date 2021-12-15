import React, { useState } from "react";

const useFlip = (initialVal = true) => {
	const [ isFlipped, setIsFlipped ] = useState(initialVal);
	const flip = () => {
		setIsFlipped(flipped => !flipped);
	};

	return [ isFlipped, flip ];
};

export default useFlip;
