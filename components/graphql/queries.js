import {gql} from "@apollo/client";

const getRepositories = gql`
    query GetRepos($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection,
                    $searchKeyword: String) {
        repositories(orderBy: $orderBy, orderDirection: $orderDirection,
                    searchKeyword: $searchKeyword) {
            edges {
                node {
                    id
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

const getRepositoryDetails = gql`
  query RepoDetails($id: ID!, $after: String) {
    repository(id: $id) {
      id
      fullName
      url
      ownerAvatarUrl
      reviewCount
      language
      ratingAverage
      stargazersCount
      forksCount
      reviews(first: 2, after: $after) {
        edges {
          node {
            id
            user {
              username
            }
            rating
            text
            createdAt
          }
          cursor
        }
        pageInfo {
            endCursor
            startCursor
            hasNextPage
        }
      }
    }
  }
`;

const getAuthUser = gql`
    query GetUser($includeReviews: Boolean = false){
        authorizedUser {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        repositoryId
                        user {
                          username
                        }
                        rating
                        text
                        createdAt
                      }
                }
            }
        }
    }
`;

export default { getRepositories, getAuthUser, getRepositoryDetails };