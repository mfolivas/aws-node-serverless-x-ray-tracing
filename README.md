# aws-node-serverless-x-ray-tracing
Create tracing of spams using the serverlress-plugin-tracing


Enables AWS X-Ray (https://aws.amazon.com/xray/) for the entire Serverless stack or individual functions.

**Update**: as of `2.0.0`, the plugin uses Cloud Formation to update `TracingConfig` and no longer
makes additional AWS SDK calls. No change to YAML contract: stays same as in 1.x. Tested with `serverless@1.22.0`.

Note: this plugin is currently **Beta**.

Note: 1.x was tested to work well with `serverless@1.13.2`. Some older versions of `serverless`
may not work due to outdated Javascript SDK that
does not support `TracingConfig`.

`npm install --save-dev serverless-plugin-tracing`

To deploy do the following:
1. run `sls deploy`
2. run `./execute-hello-multiple-times.sh`

The application run the `sls invoke -f hello` every 5 seconds to show the traces which invokes a request for an empty dynamodb table and publish an event to a topic.