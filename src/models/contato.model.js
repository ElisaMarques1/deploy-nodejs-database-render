const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const criarContato = async (nome, sobrenome, email) => {
  const novoContato = await prisma.contato.create({
     data:
    { nome: nome,
      sobrenome: sobrenome,
      email: email
    }
  });
  return novoContato;
};

const listarContatos = async () => {
  const  procurarContato = await prisma.contato.findMany();
  return procurarContato;
};

module.exports = { 
criarContato, 
listarContatos
};
