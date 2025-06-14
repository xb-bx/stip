import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export const handler = async (event) => {
  await new SNSClient().send(
    new PublishCommand({
      TopicArn: "arn:aws:sns:us-east-1:034408411173:TestTopic",
      Message: "Hello, world",
    }));
};
