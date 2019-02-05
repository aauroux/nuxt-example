<template>
    <div class="page-header">
        <h1>
            <nuxt-link v-if="to" :to="to" class="page-header-back-button" v-touchfeedback>
                <i class="fas" :class="'fa-' + icon"></i>
            </nuxt-link>
            <slot></slot>
        </h1>
        <div v-if="backgroundIcon !== ''" class="page-header-background-icon">
            <i class="fas" :class="'fa-' + backgroundIcon"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            to: { type: [Object, Boolean], default: false },
            icon: { type: String, default: 'chevron-left' },
            backgroundIcon: { type: String, default: '' },
        },
    }
</script>

<style>

    .page-header { margin-bottom: 20px; }

    .page-header-back-button {
        font-size: 0.7em;
        position:  relative;
        top:       -.1em;
        margin:    0 .25em;
    }

    .page-header-back-button.is-touch i { transform: scaleX(.8) scaleY(.8); }

    .page-header-background-icon {
        color:        #C8C8C8;
        font-size:    40px;
        height:       54px;
        margin-top:   -32px;
        text-align:   right;
        margin-right: 20px;
    }

</style>
