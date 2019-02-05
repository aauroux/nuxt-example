<template>
    <div class="main-loading">
        <transition name="fade">
            <div v-show="loading" class="main-loading-content" v-loading="true">
                <div class="main-loading-text">Loading</div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                loading: false,
            }
        },
        methods: {
            start()
            {
                this.loading = true
            },
            finish()
            {
                this.loading = false
            },
        },
    }
</script>

<style>

    .main-loading-content {
        position:         fixed;
        top:              0;
        left:             0;
        right:            0;
        bottom:           0;
        z-index:          999;
        background-color: rgba(0, 0, 0, .4);
    }

    .main-loading-text {
        text-align:     center;
        text-transform: uppercase;
        font-weight:    700;
        position:       absolute;
        top:            50%;
        height:         50px;
        line-height:    50px;
        margin-top:     -25px;
        left:           0;
        right:          0;
    }

</style>
