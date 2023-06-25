// Cognito
import { CognitoUser } from 'amazon-cognito-identity-js';
import UserPool from '~/helpers/UserPool';

export async function sendCode(email: string): Promise<any> {
	return await new Promise((resolve, reject) => {
		const user = new CognitoUser({
			Username: email,
			Pool: UserPool,
		});
		user.forgotPassword({
			onSuccess: data => {
				resolve(data);
			},
			onFailure: err => {
				reject(err);
			}
		});
	});
}

export async function resetPassword(
	code: string,
	password: string,
	confirmpassword: string,
    correo: string,
): Promise<any> {
	return await new Promise((resolve, reject) => {
		const user = new CognitoUser({
			Username: correo,
			Pool: UserPool,
		});

		user.confirmPassword(code, password, {
			onSuccess: data => {
                resolve(data)
            },
			onFailure: err => {
                reject(err)
            },
		});
	});
}
