import { gql } from 'apollo-boost';

export const GET_TRACK = gql`
	query track($where: TrackWhereUniqueInput!) {
		track(where: $where) {
			id
			name
			sprints {
				id
				name
				modules {
					id
					name
					lessons {
						id
						name
					}
				}
			}
		}
	}
`;

export const GET_TRACKS = gql`
	{
		tracks {
			id
			name
		}
	}
`;

export const GET_MODULE = gql`
	query module($where: ModuleWhereUniqueInput!) {
		module(where: $where) {
			id
			name
			description
			lessons {
				id
				name
				description
				objectives
				details
			}
		}
	}
`;

export const GET_LESSON = gql`
	query lesson($where: LessonWhereUniqueInput!) {
		lesson(where: $where) {
			id
			name
			description
			objectives
			details
		}
	}
`;
