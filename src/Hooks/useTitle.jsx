import { useEffect } from "react";

const useTitle = (title) => {
	useEffect(() => {
		document.title = `${title} - Car Doctor`;
	}, [title]);
};

export default useTitle;
