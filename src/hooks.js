import React, { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = (initialVal = true) => {
	const [ isFlipped, setIsFlipped ] = useState(initialVal);
	const flip = () => {
		setIsFlipped(flipped => !flipped);
	};

	return [ isFlipped, flip ];
};

const useAxios = url => {
	const [ data, setData ] = useState([]);

	const addData = async name => {
		const APIurl = name ? `${url}${name}/` : url;

		const response = await axios.get(APIurl);

		setData(data => [ ...data, { ...response.data, id: uuid() } ]);
	};

	return [ data, addData ];
};

export { useFlip, useAxios };
