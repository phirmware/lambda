#! /bin/bash

aws cloudformation package --template-file template.yml --s3-bucket phirmware-lambda-test --output-template-file out.yml 

aws cloudformation deploy --template-file /Users/phirmware/Documents/projects/study-projects/aws/lambdas/out.yml --stack-name phirmware-lambda-stack --region=us-east-2