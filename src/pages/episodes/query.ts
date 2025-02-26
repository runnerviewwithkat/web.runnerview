import { useQuery } from "@tanstack/react-query";

const fetchEpisodes = async () => {
    const response = await fetch(
        "http://ec2-18-218-203-195.us-east-2.compute.amazonaws.com/api/product/product/",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};

export const useEpisodes = () => {
    return useQuery({
        queryKey: ["episodes"],
        queryFn: fetchEpisodes,
    });
};
