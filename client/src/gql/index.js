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
