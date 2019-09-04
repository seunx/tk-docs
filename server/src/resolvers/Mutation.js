module.exports = {
	Mutation: {
		createTrack: (_, args, ctx, info) => ctx.prisma.createTrack(args.data),
		createSprint: (_, args, ctx, info) => ctx.prisma.createSprint(args.data),
		createModule: (_, args, ctx, info) => ctx.prisma.createModule(args.data),
		createLesson: (_, args, ctx, info) => ctx.prisma.createLesson(args.data),
		deleteTrack: (_, args, ctx, info) => ctx.prisma.deleteTrack(args.where),
		deleteSprint: (_, args, ctx, info) => ctx.prisma.deleteSprint(args.where),
		deleteModule: (_, args, ctx, info) => ctx.prisma.deleteModule(args.where),
		deleteLesson: (_, args, ctx, info) => ctx.prisma.deleteLesson(args.where),
		updateLesson: (_, args, ctx, info) =>
			ctx.prisma.updateLesson({
				where: args.where,
				data: args.data
			})
	}
};
