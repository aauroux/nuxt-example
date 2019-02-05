<template>
    <div class="notifications">
        <el-alert class="notification" v-for="message, i in $store.state.notifications.messages" :key="i" :title="message.title" :type="message.type" :description="message.description" :closable="false"/>
    </div>
</template>

<style>

    .notifications { margin-top: -20px; }

    .notification { margin-top: 20px; }

</style>
