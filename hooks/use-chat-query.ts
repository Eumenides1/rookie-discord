import qs from "query-string";
import { useInfiniteQuery } from "@tanstack/react-query";

import { useSocket } from "@/components/providers/socket-provider";
import { useParams } from "next/navigation";

interface ChatQueryProps {
    queryKey: string;
    apiUrl: string;
    paramKey: "channelId" | "conversationId";
    paramValue: string;
}

export const useChatQuery = ({
    apiUrl,
    paramKey,
    paramValue,
    queryKey,
}: ChatQueryProps) => {

    const { isConnected } = useSocket();
    const params = useParams()

    const fetchMessages = async ({ pageParam = undefined }) => {
        const url = qs.stringifyUrl(
            {
                url: apiUrl,
                query: {
                    cursor: pageParam,
                    [paramKey]: paramValue,
                },
            },
            { skipNull: true }
        );

        const res = await fetch(url);
        return res.json();
    }

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
        useInfiniteQuery({
            queryKey: [queryKey],
            queryFn: fetchMessages,
            getNextPageParam: (lastPage) => lastPage?.nextCursor,
            refetchInterval: isConnected ? false : 1000,
            initialPageParam: undefined,
    });

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    };

}