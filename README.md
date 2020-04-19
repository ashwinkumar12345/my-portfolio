# Test site

This is a test site. It uses Bootstrap and AWS.

AWS services used:

- **Route53**: Registers the domain name.
- **CloudFront**: Distributes site across the globe.
- **S3**: Hosts the site.
- **ACM**: Issues SSL certificates for HTTPS.
- **CodePipeline** and **CodeBuild**: Automates the build and deployment process from Github.
- **Lambda**: Executes function to push the latest release to S3.
- **SNS**: Sends email to notify that the deployment is complete.
