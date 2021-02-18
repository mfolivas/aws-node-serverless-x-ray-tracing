'use strict';
const AWS = require('aws-sdk');
const awsXRay = require('aws-xray-sdk');
const awsSdk = awsXRay.captureAWS(require('aws-sdk'));

const DynamoDBService = new AWS.DynamoDB.DocumentClient();
const SnsService = new AWS.SNS()
module.exports.hello = async (event) => {
  const dbResponse = await DynamoDBService.get({
    TableName: process.env.notes_table_name,
    Key: { id: 'some-random-id'}
  }).promise() 
  
  console.log('db response', dbResponse)

  const snsResponse = await SnsService.publish({
    Message: 'test',
    TopicArn: process.env.event_topic_arn
  }).promise()

  console.log('sns response', snsResponse)

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

