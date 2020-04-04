import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):

    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:726040156820:deploySiteTopic')

    location = {
        "bucketName": 'build.aitopy.com',
        "objectKey": 'aitopybuild.zip'

    }

    try:
        job = event.get('CodePipeline.job')

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "BuildArtifact":
                    location = artifact["location"]["s3Location"]

        print ("Building site from " + str(location))

        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

        site_bucket = s3.Bucket('www.aitopy.com')
        build_bucket = s3.Bucket(location["bucketName"])

        site_zip = StringIO.StringIO()
        build_bucket.download_fileobj(location["objectKey"], site_zip)

        with zipfile.ZipFile(site_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                site_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
                site_bucket.Object(nm).Acl().put(ACL='public-read')

        print 'Job Done!'
        topic.publish(Subject="Site Deployed", Message="Site deployed successfully!")

        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId = job["id"])

    except:
        topic.publish(Subject="Site Deploy Failed", Message="Site was NOT deployed successfully!")
        raise
    return 'Hello from Lambda'
