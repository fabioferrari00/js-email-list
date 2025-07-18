const emailList = document.getElementById('email-list');

const email = `https://flynn.boolean.careers/exercises/api/random/mail`;

//creo un ciclo per generare 10 email
for (let i = 0; i < 10; i++) {
  //effettuo la chiamata ajax
  axios.get(email).then((resp) => {
    emailList.innerHTML += `<li class="list-unstyled">${resp.data.response}</li>`
  });
};