import {auth} from "@clerk/nextjs/server"
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handleAuth = () => {
    const {userId} = auth();
    if (!userId) throw new Error("Unauthorized");
    return {userId: userId} 
}
export const ourFileRouter = {
  serverImage: f({
    image: {maxFileSize: "4MB", maxFileCount:1}})
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),
} satisfies FileRouter;
export type OurFileRouter = typeof ourFileRouter;