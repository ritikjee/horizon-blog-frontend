import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  profileImageUploader: f({ image: { maxFileSize: "4MB" } }).onUploadComplete(
    async ({ file }) => {
      console.log("Upload complete for userId:");

      console.log("file url", file.url);
      return file.url;
    }
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
