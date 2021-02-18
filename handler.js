'use strict';
const AWS = require('aws-sdk');
const awsXRay = require('aws-xray-sdk');
const awsSdk = awsXRay.captureAWS(AWS);

const DynamoDBService = new AWS.DynamoDB.DocumentClient();
const SnsService = new AWS.SNS()
module.exports.hello = async (event) => {
  await DynamoDBService.get({
    TableName: process.env.notes_table_name,
    Key: { id: 'some-random-id'}
  }).promise() 

  await SnsService.publish({
    Message: 'test',
    TopicArn: process.env.notes_topic_arn
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  }
}

