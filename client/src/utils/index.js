export const urlName = string => {
	return string.split(' ').join('-');
};
export const pageName = string => {
	return string.split('-').join(' ');
};
