const Mutation = {
	createTrack: (_, args, ctx, info) =>
		'ctx.prisma.createTrack({ data: args.data })'
};
module.exports = Mutation;
