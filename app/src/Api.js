const BASE_API = 'http://192.168.0.14:3333';

export default {
    checkToken: async (token) => {
        // const req = await fetch(`${BASE_API}/auth/refresh`,{
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({token})
        // });
        // const json = await req.json();
        // return json;
    },
    signIn: async (email, password) => {
            const req = await fetch(`${BASE_API}/auth/login`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "email": `${email}`,
                "senha": `${password}`
            }),
            });
          
            const json = await req.json();
            console.log(json);
            return json;
    },
    signUp: async (email, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await req.json();
        return json;
    }
};
