<template>
    <div class="alerts">
        <el-alert class="alert" v-for="alert, i in $store.state.notifications.messages" :key="i" :title="alert.title" :type="alert.type" :description="alert.description" :closable="false"/>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>

    .alerts {
        margin-top: -20px;
    }

    .alert {
        margin-top: 20px;
    }

</style>
