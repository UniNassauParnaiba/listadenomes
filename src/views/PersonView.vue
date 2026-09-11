<template>
    <div>
     <h1>Meu endereço</h1>
     <input type="text" v-model="contextoCEP">
     <p>
        {{ enderecoCompleto }}
     </p>
    </div>
</template>

<script setup>

import { reactive, watch, ref } from 'vue';

const contextoCEP = ref();
const enderecoCompleto = ref();

watch(contextoCEP, async (dataNew, dataOld) => {
    if(dataNew.length == 8) {
        try {
            const res = await fetch('https://viacep.com.br/ws/'+ contextoCEP.value +'/json/')

                    .then(response => {
                        return response.json()
                    })

                    .then(data => {
                        return data
                    })

            enderecoCompleto.value = res

        } catch (error) {
            console.error('Algum erro fulerage....')
        }
    }
})

</script>

<style lang="scss" scoped>

</style>