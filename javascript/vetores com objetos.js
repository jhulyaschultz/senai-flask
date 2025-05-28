const usuarios = [
  { nome: 'AYSHA', idade: 26 },
  { nome: 'MARIA', idade: 30 },
  { nome: 'MATTEO', idade: 16 },
  { nome: 'BRYAN', idade: 28 }
]

console.log('\nEXIBINDO TODOS USÚARIOS: ');
usuarios.forEach((usuario => {
  console.log(`${usuario.nome} tem  ${usuario.idade} anos`);
}));

console.log('\nFILTRANDO USÚARIO: ')
console.log('APENAS USÚARIOS ATE 30 ANOS.')
const menorquetrintaanos = usuarios.filter(usuario => usuario.idade < 30);
menorquetrintaanos.forEach(usuario => {
  console.log(`${usuario.nome} tem ${usuario.idade} anos`);
});

console.log('\nEXIBINDO APENAS O NOME DOS USÚARIOS: ');
const nomes = usuarios.map(usuario => usuario.nome);
nomes.forEach(nome => {
  console.log(nome);
});

console.log('\nEXIBINDO O NOME DOS USÚARIOS COM NUMERAÇÃO: ');
nomes.forEach ( (nome,index ) => {
    console.log(`${++index}: ${nome}`);
    });

console.log('\nENCONTRAR UM USÚARIO: ')
const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'AYSHA');
console.log(`Usuário encontrado: ${usuarioEncontrado.nome} tem ${usuarioEncontrado.idade} anos`);

console.log('\nMOSTRA A SOMA DE TODAS IDADES.')
const somaidades = usuarios.reduce((total,usuario) => total + usuario.idade, 0)
console.log('TOTAL: $(somaidades)')