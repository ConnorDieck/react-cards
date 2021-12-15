import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = async url => {
	const [ data, setData ] = useState([]);
	const response = await axios.get(url);
	const addData = () => {
		setData(data => [ ...data, { ...response.data, id: uuid() } ]);
	};
	return [ data, addData ];
};

export default useAxios;
