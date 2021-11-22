import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import queries from "../graphql/queries";

const useRepository = (variables) => {
    const [repository, setRepository] = useState();
    const {data, loading, fetchMore, ...result} = useQuery(queries.getRepositoryDetails, {
        variables,
        fetchPolicy: "cache-and-network"
    });

    useEffect(() => {
        if(data) {
            setRepository(data.repository);
        }
    }, [data]);
    
    const handleFetchMore = () => {
        const canFetchMore = !loading && repository.reviews.pageInfo.hasNextPage;
        
        if (!canFetchMore) {
            return;
        }
        
        fetchMore({
            variables: {
                after: repository.reviews.pageInfo.endCursor,
                ...variables
            },
        });
    };

    return {repository, fetchMore: handleFetchMore, loading, ...result};
};

export default useRepository;