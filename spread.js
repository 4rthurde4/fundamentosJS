const defaults = {
    page:1,
    limit:10,
    //sort:'asc'
};//por que aqui tem ponto e virgula e em lugares como o fim de uma funcao nao tem? No caso

const userOptions = {
    page:2,
    limit:20,
    //sort:
    //filter: 'active'
};


const objetoTeste = {
    page:3,
    limit:30,
    //sort:'csa',
    //filter: 'inactive'
}

const nums = [1, 2, 3];

numsCopy = [1, 2, 3, 4];

options = {...userOptions, ...defaults, ...objetoTeste}

allNums = [...nums, ...numsCopy]

console.log(options);

//console.log(nums);

//console.log(numsCopy);

console.log(allNums);