import { useApolloClient, useMutation } from "@apollo/client";
import mutations from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
    const [login, result] = useMutation(mutations.signInMutation);
    const asyncStorageContext = useAuthStorage();
    const client = useApolloClient();

    const signIn = async ({username, password}) => {
        const res = await login({
            variables: {
                username,
                password
            }
        });
        await asyncStorageContext.setAccessToken(res.data.authorize.accessToken);
        client.resetStore();
        return res;
    };
    return [signIn, result];
};

export default useSignIn;