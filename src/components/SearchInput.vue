<template>
    <div class ="searchinput-div">
        <SearchInput v-model="searchVal" />
    </div>
</template>

<script>
import { ref } from 'vue'
import SearchInput from 'vue-search-input'
// Optionally import default styling
import 'vue-search-input/dist/styles.css'

const searchVal = ref('')

export default {
    components: {
        SearchInput
    },
    setup() {
        return {
            searchVal
        }
    }
}
</script>

<style>
.search-input-wrapper {
    height: auto;
    width: fit-content;
    top: 15%;
    position: relative;
}
.searchinput-div{
    position: relative;
    display: flex;
    top: 15%;
    justify-content: center;
}
</style>
