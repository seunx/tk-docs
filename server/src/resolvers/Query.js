const Query = {
	tracks: (_, args, ctx, info) => ctx.prisma.tracks()
};
module.exports = Query;
