import webPush from 'web-push';
const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');
// import AWS from "aws-sdk";

// AWS.config.update({
//   region: 'us-west-1',
//   accessKeyId: 'AKIAUE6Z6CIYG46O6YCW',
//   secretAccessKey: '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'
// });

const dynamodb = new DynamoDBClient({
    region: 'us-east-1'
});

/*

export as variable:
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY

~/.aws/credentials

[default]
aws_access_key_id=AKIAUE6Z6CIYG46O6YCW
aws_secret_access_key=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

*/


const publicVapidKey = "BHJLAPYKNyifC6Fz3KVihUxlimbzLWwQwmVFJRaMkgbSkjSIajpNJTwCfH91_wIPgNKczT9h2Y3EkFjvK_IkmJA";
const privateVapidKey = "PxV58gu_UepxpHBVypJvkSdo_MFy5LwlPC2X_WMqp10";
webPush.setVapidDetails("mailto:akhilesh@ayzom.com", publicVapidKey, privateVapidKey);



export default async function handler(req, res) {

  const subscription = req.body;
  res.status(200).json({ message: 'Message Sent' });
  console.log({subscription});


/*

{
    "endpoint":"https://fcm.googleapis.com/fcm/send/ddv9SwJgXY0:APA91bG-wJe4Nmv_ZZ8TmjJcF0ciUT-jXWVtIIA7bLO--CjadVUmcAavbrbrM6JbpmxsCyEidHlHhto9yluFg30H0PazOHSIRAaE6uo0y93eGbxwQJ--HjYM5syQJqiNnv9HNX9Cu49d",
    "expirationTime":null,
    "keys":{"p256dh":"BJIzQTb5rEweVKahiTOCtmCYxr3JMv7bV6wbg8fFgMMRk3K7Ah9SxvB2jkWOiM7OCwKvZyESD9sHCBkoqq009wI","auth":"9KToshlqvyovyXgd6YWnAg"}
}


*/


  const command = {
    TableName: 'chat-db',
    Item: {
            id: { S: subscription.endpoint },
            keys: { S: JSON.stringify(subscription.keys) },
        },
    };

    dynamodb.send(new PutItemCommand(command), (err, data) => {
    if (err) {
    console.error("err", err);
    } else {
    console.log("done", data);
    }
    });


  const payload = JSON.stringify({ title: "Hello World", body: "This is your first push notification" });
  webPush.sendNotification(subscription, payload).catch(console.log);

}