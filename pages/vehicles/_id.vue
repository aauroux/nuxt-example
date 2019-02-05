<template>
    <section>
        <page-header :to="{ name: 'vehicles' }" background-icon="shuttle-van">{{ item.name }}</page-header>
        <placeholder>
            <resource-meta label="Model" :value="item.model"/>
            <resource-meta label="Cost" :value="item.cost_in_credits + ' credits'"/>
            <resource-meta label="Length" :value="item.length + ' m'"/>
            <resource-meta label="Class" :value="item.vehicle_class"/>
        </placeholder>
    </section>
</template>

<script>
    export default {
        transition: 'page-slide-left',
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/vehicles/' + params.id)

            return {
                item: data,
            }
        },
    }
</script>
