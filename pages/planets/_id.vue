<template>
    <section>
        <page-header :to="{ name: 'planets' }" background-icon="globe-europe">{{ item.name }}</page-header>
        <placeholder>
            <resource-meta label="Name" :value="item.name"/>
            <resource-meta label="Diameter" :value="item.diameter + ' kms'"/>
            <resource-meta label="Rotation period" :value="item.rotation_period + ' hours'"/>
            <resource-meta label="Orbital period" :value="item.orbital_period + ' days'"/>
            <resource-meta label="Climate" :value="item.climate"/>
            <resource-meta label="Gravity" :value="item.gravity"/>
            <resource-meta label="Terrain" :value="item.terrain"/>
            <resource-meta label="Water" :value="item.surface_water + '%'"/>
            <resource-meta label="Population" :value="item.population"/>
        </placeholder>
    </section>
</template>

<script>
    export default {
        transition: 'page-slide-left',
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/planets/' + params.id)

            return {
                item: data,
            }
        },
    }
</script>
