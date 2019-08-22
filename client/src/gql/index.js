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
export const GET_SPRINTS = gql`
	{
		sprints {
			id
			name
		}
	}
`;
export const GET_MODULES = gql`
	{
		modules {
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

export const CREATE_TRACK = gql`
	mutation createTrack($data: TrackCreateInput!) {
		createTrack(data: $data) {
			id
			name
		}
	}
`;
export const CREATE_SPRINT = gql`
	mutation createSprint($data: SprintCreateInput!) {
		createSprint(data: $data) {
			id
			name
		}
	}
`;

export const CREATE_MODULE = gql`
	mutation createModule($data: ModuleCreateInput!) {
		createModule(data: $data) {
			id
			name
		}
	}
`;

export const CREATE_LESSON = gql`
	mutation createLesson($data: LessonCreateInput!) {
		createLesson(data: $data) {
			id
			name
		}
	}
`;
