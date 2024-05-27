import { useSocket } from "@/components/providers/socket-provider";
import { Member, Message, Profile } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type ChatSocketProps = {
    addKey: string;
    updateKey: string;
    queryKey: string;
};

type MessageWithMemberWithUser = Message & {
    member: Member & {
        profile: Profile;
    };
};

export const useChatSocket = ({
    addKey,
    updateKey,
    queryKey,
}: ChatSocketProps) => {
    const { socket } = useSocket();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!socket) {
        return;
        }

    socket.on(updateKey, (message: MessageWithMemberWithUser) => {
        queryClient.setQueryData([queryKey], (oldData: any) => {
                if (!oldData || !oldData.pages || oldData.pages.length === 0) {
                    return oldData;
                }

                const newData = oldData.pages.map((page: any) => {
                return {
                    ...page,
                    items: page.items.map((item: MessageWithMemberWithUser) => {
                        if (item.id === message.id) {
                            return message;
                        }
                        return item;
                    }),
                };
            });

                return { ...oldData, pages: newData };
            });
        });

        socket.on(addKey, (message: MessageWithMemberWithUser) => {
            queryClient.setQueryData([queryKey], (oldData: any) => {
                if (!oldData || !oldData.pages || oldData.pages.length === 0) {
                    return {
                        pages: [{ items: [message] }],
                    };
                }

                const newData = [...oldData.pages];

                newData[0] = {
                    ...newData[0],
                    items: [message, ...newData[0].items],
                };

                return {
                    ...oldData,
                    pages: newData,
                };
            });
        });

        return () => {
        socket.off(addKey);
        socket.off(updateKey);
        };
    }, [queryClient, addKey, updateKey, queryKey, socket]);
};