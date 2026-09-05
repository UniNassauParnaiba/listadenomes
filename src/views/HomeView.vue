<script setup>
import { ref } from 'vue';

const title = ref('Página Principal');

const nomes = ref([
  {contexto: 'Luiz Lins', concluido: false},
  {contexto: 'Laura Lívia', concluido: true},
  {contexto: 'Maria Silva', concluido: false},
  {contexto: 'João Souza', concluido: true},
]);

const auxiliar = ref('');
const valorIndice = ref('');

const manipularNome = (auxiliar, numero) => {
  nomes.value.push({contexto: auxiliar, concluido: false});
  console.log(numero ? 'editar' : 'salvar')
};

const excluirNome = (numero) => {
  nomes.value.splice(numero,1);
}

const tacharNome = (numero) => {
  nomes.value[numero].concluido = !nomes.value[numero].concluido
}

const editarNome = (numero) => {
  auxiliar.value = nomes.value[numero].contexto;
  valorIndice.value = numero
}
</script>

<template>
  <main>
    <h1>{{ title }}</h1>
    <input type="text" v-model="auxiliar" />
    <button @click="manipularNome(auxiliar, valorIndice)">Manipular Nome</button>
    <p>Bem-vindo à nossa aplicação!</p>
    
    Lista de nomes:
    <ul>
      <li v-for="(nome, id) in nomes" :key="id">
        <a @click="tacharNome(id)" :class="{ tachado: nome.concluido}">
          {{ nome.contexto }}
        </a>
        <button @click="editarNome(id)">E</button>
        <button @click="excluirNome(id)">X</button>
      </li>
    </ul>

  </main>
</template>

<style scoped>
.tachado {
  text-decoration: line-through;
  color: #ff0000;
}
</style>