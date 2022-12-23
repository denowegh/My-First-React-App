import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ErrorLoading, setErrorLoading] = useState("");

    const fetching = async () => {
        try {
            await setIsLoading(true);
            await callback();
        } catch (e) {
            setErrorLoading(e.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [fetching, isLoading, ErrorLoading];
};
