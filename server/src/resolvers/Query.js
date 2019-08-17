module.exports = {
	Query: {
		tracks: (_, args, ctx, info) => {
			return ctx.prisma.tracks();
		},
		track: (_, args, ctx, info) => ctx.prisma.track(args.where),
		sprints: (_, args, ctx, info) => ctx.prisma.sprints(),
		sprint: (_, args, ctx, info) => ctx.prisma.sprint(args.where),
		modules: (_, args, ctx, info) => ctx.prisma.modules(),
		module: (_, args, ctx, info) => ctx.prisma.module(args.where),
		lessons: (_, args, ctx, info) => ctx.prisma.lessons(),
		lesson: (_, args, ctx, info) => ctx.prisma.lesson(args.where)
	},
	Track: {
		sprints: (parent, args, ctx, info) =>
			ctx.prisma.track({ id: parent.id }).sprints()
	},
	Sprint: {
		track: (parent, args, ctx, info) =>
			ctx.prisma.sprint({ id: parent.id }).track(),
		modules: (parent, args, ctx, info) =>
			ctx.prisma.sprint({ id: parent.id }).modules()
	},
	Module: {
		lessons: (parent, args, ctx, info) =>
			ctx.prisma.module({ id: parent.id }).lessons()
	}
};
