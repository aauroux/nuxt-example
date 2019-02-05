<template>
    <section>
        <page-header :to="{ name: 'index' }" icon="angle-double-up" background-icon="video">Movies</page-header>
        <list :items="items" route-name="films-id"></list>
    </section>
</template>

<script>
    import ResourceIndex from '@/mixins/ResourceIndex'

    export default {
        mixins: [ResourceIndex],
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/films')

            return {
                items: data.results,
            }
        },
    }
</script>
