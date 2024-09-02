import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"

export const createUser = async (user: CreateUserParams) => {
    console.log("user in actions", user);
    
    try {
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        )

        console.log("New user created:", newUser);

    } catch (error: any) {
        console.log("Error creating user:", error);
        if (error && error?.code === 409) {
            const documents = await users.list([
                Query.equal('email', [user.email])
            ])
            return documents?.users[0];
        }
        throw error;
    }
}