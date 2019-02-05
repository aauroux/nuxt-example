<template>
    <section class="dashboard">
        <h1>Dashboard</h1>
        <el-row :gutter="20">
            <el-col v-for="item, i in $store.state.ui.menu" :span="12" :key="i">
                <nuxt-link class="dashboard-item" :to="{ name: item.route }" v-touchfeedback>
                    <placeholder :icon="item.icon" :title="item.title" size="large"/>
                </nuxt-link>
            </el-col>
        </el-row>
    </section>
</template>

<style>

    .dashboard-item {
        margin-top: 20px;
        display:    block;
    }

    .dashboard-item.is-touch .placeholder {
        background-color: #F2F2F2;
        box-shadow:       inset 0px 2px 6px rgba(0, 0, 0, .1);
        border:           1px solid #D0D0D0;
    }

</style>
