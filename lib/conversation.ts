import { db } from "@/lib/db";


export const getOrCreateConversation = async (
    memberOneId: string,
    memberTwoId: string
) => {
    let conversation =
        (await findConversations(memberOneId, memberTwoId)) ||
        (await findConversations(memberTwoId, memberOneId));

    if (!conversation) {
        conversation = await createConversations(memberOneId, memberTwoId);
    }
    return conversation;
};

const findConversations = async (memberOneId: string, memberTwoId: string) => {
    try{
        return await db.conversation.findFirst({
            where: {
                AND: [
                    {
                        memberOneId: memberOneId,
                    },
                    {
                        memberTwoId: memberTwoId,
                    },
                ],
            },
            include: {
                memberOne: {
                    include: {
                        profile: true
                    }
                },
                memberTwo: {
                    include: {
                        profile: true
                    }
                }
            }
        });
    }catch(error) {
        console.log("find err", error);
        return null;
    }
}

const createConversations = async (
    memberOneId: string,
    memberTwoId: string
) => {
    try {
        return await db.conversation.create({
            data: {
                memberOneId,
                memberTwoId,
            },
            include: {
                memberOne: {
                    include: {
                        profile: true,
                    },
                },
                memberTwo: {
                    include: {
                        profile: true,
                    },
                },
            },
        });
    } catch (err) {
        console.log("create err", err);

        return null;
    }
};