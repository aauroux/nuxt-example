<template>
    <section>
        <page-header :to="{ name: 'index' }" icon="angle-double-up" background-icon="shuttle-van">Vehicles</page-header>
        <list :items="items" route-name="vehicles-id"></list>
    </section>
</template>

<script>
    import ResourceIndex from '@/mixins/ResourceIndex'

    export default {
        mixins: [ResourceIndex],
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/vehicles')

            return {
                items: data.results,
            }
        },
    }
</script>
