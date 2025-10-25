const dbConfig = {url: 'mongodb://localhost:27017/mydb'}

function conectingDB(){
    console.log("Conectando em: ", dbConfig.url);
}


conectingDB();


function printDB(){
    console.log("URL do banco: ", dbConfig.url);
}

printDB();



//exer2


function registerUser(data){
    if (!data.email){
        const validationError = 'Email e obrigatorio';
        console.log(validationError);
        return;
    }

    {
        const user = {id: 1, email: data.email};
        console.log('Usuario salvo:', user);
    }

    
}