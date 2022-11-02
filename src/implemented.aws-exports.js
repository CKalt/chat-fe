// note that Auth is top-level, whereas the API stuff is not
const awsmobile = {
	Auth: {
		region: 'us-west-2',
        /*
            AuthStack.IdentityPoolId = us-west-2:d14e5f75-6b8b-4844-a4d8-d5f8a9d7752f
            AuthStack.UserPoolClientId = 5eii0p9lt3aq6idaeo2o5a32ki
            AuthStack.UserPoolId = us-west-2_QpxhzL1cU 
        */
		userPoolId: 'us-west-2_QpxhzL1cU',
		// userPoolWebClientId: '6vstsuciYOURCLIENTID',
        //   YOURCLIENTID is from 
		userPoolWebClientId: '6vstsuci5eii0p9lt3aq6idaeo2o5a32ki',
		identityPoolId: 'us-west-2:d14e5f75-6b8b-4844-a4d8-d5f8a9d7752f'
	},
	Storage: {
		AWSS3: {
            //FileStorageStack.BucketName = filestoragestack-s3bucket64cb25af-qwzwdl7rzd0m
			bucket: 'filestoragestack-s3bucket64cb25af-qwzwdl7rzd0m',
		    region: 'us-west-2'
		},
	},

    /*
	aws_project_region: 'your-region',
	aws_appsync_graphqlEndpoint:
		'https://your-api.appsync-api.your-region.amazonaws.com/graphql',
	aws_appsync_region: 'your-region',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    */

    "aws_project_region": "us-west-2",
    "aws_appsync_graphqlEndpoint": "https://ziw5q5atg5e33ow4ka46dwlylq.appsync-api.us-west-2.amazonaws.com/graphql",
    "aws_appsync_region": "us-west-2",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS"
}

export default awsmobile
