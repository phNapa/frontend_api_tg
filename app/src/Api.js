const BASE_API = 'http://192.168.0.14:3333';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
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
            console.log(req.status);
            return json;
    },
    signUp: async (email, password) => {
        const req = await fetch(`${BASE_API}/user`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": `${email}`,
                "senha": `${password}`
            })
        });
        const json = await req.json();
        return json;
    },
    createUserDetails: async(cpf, dataNasc, genero, name, contato, endereco, cidade, isProfessor, userCredentialsID) => {
        const req = await fetch(`${BASE_API}/userDetails`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cpf": `${cpf}`,
                "dataNasc": `${dataNasc}`,
                "genero": `${genero}`,
                "name": `${name}`,
                "contato": `${contato}`,
                "endereco": `${endereco}`,
                "cidade": `${cidade}`,
                "isProfessor": `${isProfessor}`,
                "userCredentialsID": `${userCredentialsID}`
            })
            
        });
        const json = await req.json();
        return json;
    },
    createProfessor: async(certificacoes, dispoHorario, especialidade, experiencia, userID) => {
        const req = await fetch(`${BASE_API}/prof`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "certificacoes": `${certificacoes}`,
                "dispoHorario": `${dispoHorario}`,
                "especialidade": `${especialidade}`,
                "experiencia": `${experiencia}`,
                "userID": `${userID}`
            })
            
        });
        const json = await req.json();
        return json;
    },
    createAluno: async(altura, nivelExperiencia, objetivos, pesoOrigem, prefHorario, restrMedicas, userID) => {
        const req = await fetch(`${BASE_API}/aluno`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "altura": `${altura}`,
                "nivelExperiencia": `${nivelExperiencia}`,
                "objetivos": `${objetivos}`,
                "pesoOrigem": `${pesoOrigem}`,
                "prefHorario": `${prefHorario}`,
                "restrMedicas": `${restrMedicas}`,
                "userID": `${userID}`
            })
            
        });
        const json = await req.json();
        return json;
    },
    getProfessores: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/prof`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        const json = await req.json();
        return json;
    },
    getProfessoresCidade: async (cidade) => {
        const token = await AsyncStorage.getItem('token');
        console.log(cidade)
        const req = await fetch(`${BASE_API}/prof/cidade/${cidade}`,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        })
        const json = await req.json();
        return json;
    },
};
