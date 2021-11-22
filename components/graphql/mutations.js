import {gql} from "@apollo/client";

const signInMutation = gql`
    mutation SignIn($username: String!, $password: String!){
        authorize(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

const createReviewMutation = gql`
    mutation CreateReview($review: CreateReviewInput) {
        createReview(review: $review) {
            text
            createdAt
        }
    }
`;

const signUpMutation = gql`
    mutation CreateUser($user: CreateUserInput) {
        createUser(user: $user) {
            username
            createdAt
        }
    }
`;

const deleteReviewMutation = gql`
    mutation DeleteReview($reviewId: ID!){
        deleteReview(id: $reviewId)
    }
`;

export default {signInMutation, createReviewMutation, signUpMutation, deleteReviewMutation};