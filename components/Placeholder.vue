<template>
    <div class="placeholder" :class="'placeholder-' + size">
        <div v-if="icon !== ''" class="placeholder-icon">
            <i class="fas" :class="'fa-' + icon"></i>
        </div>
        <div v-if="title !== ''" class="placeholder-title">{{ title }}</div>
        <div class="placeholder-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            icon: { type: String, default: '' },
            title: { type: String, default: '' },
            size: { type: String, default: '' },
        },
    }
</script>
<style>

    .placeholder {
        padding:          20px;
        background-color: #FFF;
        color:            #202020;
        border-radius:    6px;
        overflow-y:       hidden;
        overflow-x:       auto;
        border:           1px solid #FFF;
    }

    .placeholder + .placeholder {
        margin-top: 20px;
    }

    .placeholder-large {
        padding:    30px;
        text-align: center;
    }

    .placeholder-large i {
        font-size: 32px;
    }

    .placeholder-title {
        text-transform: uppercase;
        margin-top:     14px;
        font-weight:    700;
        font-size:      12px;
    }

</style>
