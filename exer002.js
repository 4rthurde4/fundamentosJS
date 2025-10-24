const userFromDB = {
    id: 1,
    name:'Arthur',
    email:'arthur@email.com',
    role:'user',
    active:'true',
    passwordHash:'abcdef123456'
}

const requestBody = {
    name:'Arthur A',
    email:'novo@email.com',
    role:'admin',
    passwordHash:'tentando burlar',
    active: false
}

function updateUserSafe (userFromDB, newData) {
const {name, email, role, active}=newData;

updatedUser = {...userFromDB, name, email, role, active};

console.log(updatedUser);

return updatedUser;
}

updateUserSafe(userFromDB, requestBody)