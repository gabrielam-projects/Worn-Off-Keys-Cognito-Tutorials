import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_DVKsvmG6N',
  ClientId: 'k5sarj0k31kuu55mkcr8p9lhp'
};

export default new CognitoUserPool(poolData);