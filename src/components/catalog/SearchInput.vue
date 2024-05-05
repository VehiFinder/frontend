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
    /* width: fit-content; */
    width: 30%;
    top: 15%;
    position: relative;
}
.searchinput-div {
    position: absolute;
    top: 11%;
    width: 100%;
    display: flex;
    justify-content: center;
}

</style>
