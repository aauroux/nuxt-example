<template>
    <div class="navigation">
        <nuxt-link class="navigation-item-dashboard" v-touchfeedback :to="{ name: 'index' }">
            Dashboard
        </nuxt-link>
        <nuxt-link class="navigation-item" v-touchfeedback v-for="item, i in $store.state.ui.menu" :key="i" :to="{ name: item.route }">
            <i class="fas" :class="'fa-' + item.icon"></i>
            {{ item.title }}
        </nuxt-link>
    </div>
</template>

<style>

    .navigation-item, .navigation-item-dashboard {
        display:       block;
        font-size:     16px;
        font-weight:   700;
        margin-bottom: 26px;
        color:         #747474;
    }

    .navigation-item i, .navigation-item-dashboard i {
        width:        26px;
        margin-right: 4px;
        text-align:   center;
    }

    .navigation-item.is-touch, navigation-item-dashboard.is-touch {
        color: #393939;
    }

    .navigation-item-dashboard.nuxt-link-exact-active, .navigation-item.nuxt-link-active { color: #000; }

</style>
