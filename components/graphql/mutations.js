import {gql} from "@apollo/client";

const signInMutation = gql`
    mutation SignIn($username: String!, $password: String!){
        authorize(credentials: { username: $username, password: $password }) {
            accessToken
        }
    }
`;

export default {signInMutation};