const path = require('path');
const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');

//Combines all files in directory to make one resolver file
const resolversArray = fileLoader(path.join(__dirname, './'));

const resolvers = mergeResolvers(resolversArray);
module.exports = resolvers;
