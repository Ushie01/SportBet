const baseUrl = "https://legitxbackend.onrender.com/api/v1";

export interface payloadProps {
  phoneNumber: string;
  password: string;
}

export const signUp: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.log(error)
    }
};


export const signIn: (payload: payloadProps) => Promise<any> = async (payload) => {
    try {
        return await (await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload)
        })).json()
    } catch (error) {
        console.log(error)
    }
};