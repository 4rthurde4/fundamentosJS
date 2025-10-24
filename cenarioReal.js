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
    passwordHash: 'Tentando burlar o sistema',
    active: false
}


function updateUser(user, newData){

    const {name, email, role, active} = newData;

    const updatedUser={...user, name, email, role, active}

    console.log(updatedUser);

    return updatedUser
}

updateUser(userFromDB, requestBody);
