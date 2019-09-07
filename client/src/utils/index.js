export const urlName = string => {
	return string.split(' ').join('-');
};
export const pageName = string => {
	return string.split('-').join(' ');
};

export const excerpt = (string, length = 100) => {
	return string.slice(0, length).concat(' . . .');
};
