<template>
    <section>
        <page-header :to="{ name: 'index' }" icon="angle-double-up" background-icon="globe-europe">Planets</page-header>
        <list :items="items" route-name="planets-id"></list>
    </section>
</template>

<script>
    import ResourceIndex from '@/mixins/ResourceIndex'

    export default {
        mixins: [ResourceIndex],
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/planets')

            return {
                items: data.results,
            }
        },
    }
</script>
