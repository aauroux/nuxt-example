<template>
    <section>
        <page-header :to="{ name: 'index' }" icon="angle-double-up" background-icon="space-shuttle">Starships</page-header>
        <list :items="items" route-name="starships-id"></list>
    </section>
</template>

<script>
    import ResourceIndex from '@/mixins/ResourceIndex'

    export default {
        mixins: [ResourceIndex],
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/starships')

            return {
                items: data.results,
            }
        },
    }
</script>
