-- DropForeignKey
ALTER TABLE "public"."message_attachments" DROP CONSTRAINT "message_attachments_messageId_fkey";

-- AddForeignKey
ALTER TABLE "public"."message_attachments" ADD CONSTRAINT "message_attachments_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "public"."messages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
