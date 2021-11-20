const _ = require('lodash')
const alunos = [{
    nome: 'Isis',
    nota: 9.2
}, {
    nome: 'Maria',
    nota: 8.0
}, {
    nome: 'Pedro',
    nota: 6.3
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)