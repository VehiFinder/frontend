<script>
import { ref , watch} from 'vue'
import SearchInput from 'vue-search-input'
// Optionally import default styling
import 'vue-search-input/dist/styles.css'
import { useStore } from 'vuex'; // Para interactuar con Vuex
const searchVal = ref('')

export default {
    components: {
        SearchInput
    },
    setup() {
        const store = useStore()
        const reloadPage = () => {
            window.location.reload(); // Recarga completa de la página
        };
        const performSearch = () => {
            store.dispatch('getCarByFilters', searchVal.value);
        }
        
        watch(searchVal, (newValue, oldValue) => {
            if (newValue !== oldValue) {
                store.dispatch('updateCarName', newValue); // Despachar acción con el nuevo valor
            }
        });
        return {
            searchVal,
            reloadPage,
            performSearch,
        }
    }
}
</script>

<template>
    <div class="searchinput-div">
        <SearchInput v-model="searchVal" @keyup.enter="performSearch" />
        <div class="back-button">
            <button class="btn-pill" @click="reloadPage">
                <span>Back</span>
            </button>
        </div>
    </div>
</template>


<style>
.search-input-wrapper {
    height: auto;
    /* width: fit-content; */
    width: 30%;
    top: 15%;
    position: relative;
    border-radius: 10%;
    box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
}

.searchinput-div {
    position: absolute;
    top: 8%;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* BUTTON STYLES */
.btn-pill {
    position: relative;
    margin: 0;
    padding: 5px 12px;
    height: auto;
    width: 120px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #ffffff;
    border: 1px solid rgba(22, 76, 167, 0.6);
    border-radius: 10px;
    color: #1d89ff;
    font-weight: 400;
    font-size: 20px;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

    span {
        color: #164ca7;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.7px;
    }

    &:hover {
        animation: rotate 0.7s ease-in-out both;

        span {
            animation: storm 0.7s ease-in-out both;
            animation-delay: 0.06s;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
        transform: rotate(3deg) translate3d(0, 0, 0);
    }

    50% {
        transform: rotate(-3deg) translate3d(0, 0, 0);
    }

    75% {
        transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
}

@keyframes storm {
    0% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }

    25% {
        transform: translate3d(4px, 0, 0) translateZ(0);
    }

    50% {
        transform: translate3d(-3px, 0, 0) translateZ(0);
    }

    75% {
        transform: translate3d(2px, 0, 0) translateZ(0);
    }

    100% {
        transform: translate3d(0, 0, 0) translateZ(0);
    }
}

.back-button {
    position: relative;
    left: 25%;
}

.btn-pill {

    &:before,
    &:after {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #1d89ff;
        content: '';
        opacity: 0;
        transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
        z-index: -1;
        transform: translate(100%, -25%) translate3d(0, 0, 0);
    }

    &:hover {

        &:before,
        &:after {
            opacity: 0.15;
            transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1), opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
        }

        &:before {
            transform: translate3d(50%, 0, 0) scale(0.9);
        }

        &:after {
            transform: translate(50%, 0) scale(1.1);
        }
    }
}
</style>
