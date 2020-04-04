import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):


    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    site_bucket = s3.Bucket('www.aitopy.com')
    build_bucket = s3.Bucket('build.aitopy.com')

    site_zip = StringIO.StringIO()
    build_bucket.download_fileobj('aitopybuild.zip', site_zip)

    with zipfile.ZipFile(site_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            site_bucket.upload_fileobj(obj, nm,
              ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]})
            site_bucket.Object(nm).Acl().put(ACL='public-read')

    return 'Hello from Lambda!'
