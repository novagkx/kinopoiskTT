import {useState} from "react";


const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        }
        catch (e) {
            setError(e.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error]
};

export default useFetching;