import { useEffect, useState } from 'react';

export const useData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://reqres.in/api/users?page=1').then((response: any) => {
            response.json().then((json: any) => {
                setData(json);
                setLoading(false);
            });
        });
    }, []);

    return [loading, data];
};
