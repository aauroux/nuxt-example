<template>
    <div class="resource-meta">
        <div class="resource-meta-label">{{ label }}</div>
        <div class="resource-meta-value" v-html="value"></div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            value: [String, Number],
        },
    }
</script>

<style>

    .resource-meta {
        padding: 0 20px;
        margin:  0 -20px;
    }

    .resource-meta + .resource-meta { margin-top: 16px; }

    .resource-meta-label {
        text-transform: uppercase;
        color:          #A6A6A6;
        font-size:      12px;
    }

    .resource-meta-value {
        font-size:  16px;
        margin-top: 1px;
    }

</style>
