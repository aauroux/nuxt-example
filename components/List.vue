<template>
    <div class="list-items">
        <nuxt-link class="list-item" v-for="item in items" :key="$extractId(item)" :to="{ name: routeName, params: { id: $extractId(item) } }" v-touchfeedback>
            {{ item.name || item.title }}
            <i class="fas fa-chevron-right"></i>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array,
            routeName: String,
        },
    }
</script>

<style>

    .list-items {

    }

    .list-item {
        padding:          20px;
        background-color: #FFF;
        border-top:       1px solid #EDEDED;
        display:          block;
        position:         relative;
    }

    .list-item.is-touch {
        background-color: #F2F2F2;
    }


    .list-item:first-child {
        border-top-left-radius:  6px;
        border-top-right-radius: 6px;
        border-top:              none;
    }

    .list-item:last-child {
        border-bottom-left-radius:  6px;
        border-bottom-right-radius: 6px;
    }

    .list-item i {
        float:       right;
        line-height: 21px;
        transform:   translateX(0px);
        transition:  all 300ms;
    }

    .list-item.is-touch i {
        transform: translateX(-6px);
        color:     #727272;
    }

</style>
