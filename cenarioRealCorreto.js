const userFromDB = {
  id: 1,
  name: 'Arthur',
  email: 'arthur@gmail.com',
  role: 'user',
  active: true,
  passwordHash: 'abcdef123456'
}

const requestBody = {
  name: 'Arthur A.',
  email:'novo@email.com',
  role: 'admin',
  passwordHash: 'Tentando burlar o sistema'
}

// 👇 Aqui o destructuring pega só os campos permitidos
function updateUserSecure(user, newData) {
  const { name, email, role } = newData; // só pegamos o que pode mudar

  // 👇 O spread cria um novo objeto, mantendo o hash original
  const updatedUser = { ...user, name, email, role }; //Comentário Arthur: como o JS vai saber que esses name, email, role são de requestBody?
                                                      //Não tem nada identificando isso aqui, pelo menos eu não vi
                                                      //fora que, ali em cima você já limitou newData a apenas os atributos que queremos
                                                      //então não faz muito sentido para mim 
                                                      //se o spread espalha tudo de qualquer jeito, por que fazer o destructuring?
                                                      //faz apenas a separação de apenas o que você quiser no spread então, pois fazer
                                                      //o destructuring assim, parece apenas trabalho em vão

  console.log(updatedUser);
  return updatedUser;
}

updateUserSecure(userFromDB, requestBody);