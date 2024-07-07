import axios from "axios"
export async function getRequests() {
    const data = axios.get('http://localhost:4000/api/v1/requests').then((res) => {
        const requestList = res.data.data
        return requestList
    }) 
    return await data
}

export async function postRequest(ob) {
    const zapros = axios.post('http://localhost:4000/api/v1/requests', {
            "request": {
                "name": ob.name,
                "subject_id": 1,
                "type": +ob.type,
                "due_date": ob.date,
                "contact": ob.contact,
                "price": +ob.price,
                "description": ob.description
            }
})
return zapros
}
export async function postLogin(LoginData) {
    const zapros = axios.post('http://localhost:4000/api/v1/sign_up', {
        "email": LoginData.email,
        "password": LoginData.password
}) .catch ((error) => {
    if (error.response.status == 422) {
    console.log("Почта уже занята");
    result.value = true
  }})
return await zapros
}

export const result = {value: ''}


export async function postSignIn(SignInData) {
    const zapros = axios.post('http://localhost:4000/api/v1/sign_in', {
        "email": SignInData.email,
        "password": SignInData.password
}).then((res) => {
    const feedback = res.data.data.token.token
    console.log(feedback)
    const options = {
        method: 'GET',
        url: 'http://localhost:4000/api/v1/restricted',
        headers: {
          Authorization: 'Bearer ' + feedback
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
    return feedback
})
return await zapros
}

