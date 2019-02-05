<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-menu-button" @click="toggleMenu" v-touchfeedback>
                <i v-if="menuOpened" class="fas fa-times"></i>
                <i v-else class="fas fa-bars"></i>
            </div>
            My Application
            <div class="layout-notification-button" @click="toggleNotifications" v-touchfeedback>
                <i class="fas fa-bell"></i>
                <transition name="pop">
                    <div v-if="!$store.state.notifications.viewed" class="layout-notification-count">{{ count }}</div>
                </transition>
            </div>
        </div>
        <transition name="slide-left">
            <div v-show="menuOpened" class="layout-panel-left">
                <div @click="toggleMenu">
                    <navigation/>
                </div>
            </div>
        </transition>
        <transition name="slide-right">
            <div v-show="notificationsOpened" class="layout-panel-right">
                <notifications></notifications>
            </div>
        </transition>
        <div class="layout-content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
    import Notifications from '@/components/Notifications'
    import Navigation from '@/components/Navigation'
    import { mapMutations, mapGetters } from 'vuex'

    export default {
        components: {
            'notifications': Notifications,
            'navigation': Navigation,
        },
        watch: {
            'notificationsOpened'(opened)
            {
                if ( opened ) this.$store.dispatch('notifications/view')
                else this.$store.dispatch('notifications/reset')
            },
        },
        computed: {
            ...mapGetters({
                count: 'notifications/count',
            }),
            menuOpened()
            {
                return this.$store.state.ui.left
            },
            notificationsOpened()
            {
                return this.$store.state.ui.right
            },
        },
        methods: {
            ...mapMutations({
                toggleMenu: 'ui/toggleLeftPanel',
                toggleNotifications: 'ui/toggleRightPanel',
            }),
        },
    }
</script>

<style>

    .layout {

    }

    .layout-panel-left, .layout-panel-right {
        position:         fixed;
        top:              64px;
        left:             0;
        right:            0;
        bottom:           0;
        z-index:          50;
        background-color: #F7F7F7;
        padding:          20px;
    }

    .layout-panel-right {
        background-color: #FFF;
    }

    .layout-header {
        position:         fixed;
        top:              0;
        left:             0;
        right:            0;
        height:           64px;
        line-height:      64px;
        text-transform:   uppercase;
        font-weight:      700;
        background-color: #000;
        color:            #FFF;
    }

    .layout-menu-button, .layout-notification-button {
        width:         64px;
        height:        64px;
        line-height:   48px;
        text-align:    center;
        border:        8px solid #000;
        border-radius: 50%;
        cursor:        pointer;
    }

    .layout-menu-button.is-touch, .layout-notification-button.is-touch { background-color: #323232; }

    .layout-menu-button { float: left; }

    .layout-notification-button {
        float:    right;
        position: relative;
    }

    .layout-notification-count {
        font-family:      Arial, sans-serif;
        background-color: #474747;
        color:            #FFF;
        font-size:        10px;
        font-weight:      700;
        border-radius:    50%;
        position:         absolute;
        height:           16px;
        line-height:      16px;
        width:            16px;
        margin-top:       -8px;
        top:              50%;
        right:            5px;
    }

    .layout-content {
        position:                   fixed;
        top:                        64px;
        left:                       0;
        right:                      0;
        bottom:                     0;
        overflow-x:                 hidden;
        overflow-y:                 scroll;
        -webkit-overflow-scrolling: touch;
        background-color:           #DFDFDF;
    }

</style>
