import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import queries from '../graphql/queries';

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const {data, loading} = useQuery(queries.getRepositories);

    useEffect(() => {
        if(data) {
            setRepositories(data.repositories);
        }
    }, [data]);

    return {repositories, loading};
};

export default useRepositories;