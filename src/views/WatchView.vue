<script setup>
import { reactive, ref, watch } from 'vue'

const contextoCEP = ref();
const enderecoCompleto = reactive({});

watch(contextoCEP, async(cepNovo, cepAntigo) => {
    enderecoCompleto.data = null
    if(cepNovo.length == 8) {
        const request = await fetch('https://viacep.com.br/ws/64218490/json/')
        enderecoCompleto.data = await request.json()
    }
})

</script>

<template>
  <p>
    Infome um CEP:
    <input v-model="contextoCEP" />
  </p>
  <p>{{ enderecoCompleto.data.avenida }}</p>
</template>