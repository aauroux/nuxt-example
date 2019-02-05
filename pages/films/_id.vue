<template>
    <section>
        <page-header :to="{ name: 'films' }" background-icon="video">{{ item.title }}</page-header>
        <placeholder>
            <resource-meta label="Title" :value="item.title"/>
            <resource-meta label="Episode" :value="item.episode_id"/>
            <resource-meta label="Producer" :value="item.producer"/>
            <resource-meta label="Director" :value="item.director"/>
            <resource-meta label="Release date" :value="item.release_date"/>
            <resource-meta label="Opening crawl" :value="item.opening_crawl"/>
        </placeholder>
    </section>
</template>

<script>
    export default {
        transition: 'page-slide-left',
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/films/' + params.id)

            return {
                item: data,
            }
        },
    }
</script>
