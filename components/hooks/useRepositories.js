import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import queries from '../graphql/queries';

const useRepositories = (variables) => {
    const [repositories, setRepositories] = useState();
    const {data, loading, fetchMore, ...result} = useQuery(queries.getRepositories, {
            variables,
            fetchPolicy: "cache-and-network"
    });

    
    useEffect(() => {
        if(data) {
            setRepositories(data.repositories);
        }
    }, [data]);
    
    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
        return;
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables
        },
        });
    };

    return {
        repositories,
        fetchMore: handleFetchMore,
        loading,
        ...result,
    };

};

export default useRepositories;