const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const dynamodb = new DynamoDBClient({
    region: 'us-east-1'
});

/*

~/.aws/credentials

[default]
aws_access_key_id=AKIAUE6Z6CIYG46O6YCW
aws_secret_access_key=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

*/

const command = {
                TableName: 'chat-db',
                Item: {
                    id: { S: '1' },
                    name: { S: 'John' },
                },
            };

dynamodb.send(new PutItemCommand(command), (err, data) => {
    if (err) {
        console.error("err", err);
    } else {
        console.log("done", data);
    }
});