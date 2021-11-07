#! /bin/bash

BUCKET=$(aws s3 ls | grep phirmware-lambda-test)
if [ $BUCKET != 'phirmware-lambda-test' ]; then
    aws s3 mb s3://phirmware-lambda-test --region=us-east-2
fi

pushd functions
zip -r ../archive.zip .
popd

aws s3 cp ./archive.zip s3://phirmware-lambda-test
echo "Done"