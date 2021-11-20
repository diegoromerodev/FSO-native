import {gql} from "@apollo/client";

const getRepositories = gql`
    query {
        repositories {
            edges {
                node {
                    ownerAvatarUrl
                    fullName
                    description
                    language
                    forksCount
                    stargazersCount
                    reviewCount
                    ratingAverage
                }
            }
        }
    }
`;

const getAuthUser = gql`
    query {
        authorizedUser {
            id
            username
        }
    }
`;

export default { getRepositories, getAuthUser };