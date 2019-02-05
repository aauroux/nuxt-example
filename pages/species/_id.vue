<template>
    <section>
        <page-header :to="{ name: 'species' }" background-icon="hand-spock">{{ item.name }}</page-header>
        <placeholder>
            <resource-meta label="Classification" :value="item.classification"/>
            <resource-meta label="Designation" :value="item.designation"/>
            <resource-meta label="Average height" :value="item.average_height + ' cm'"/>
            <resource-meta label="Language" :value="item.language"/>
            <resource-meta label="Hair colors" :value="item.hair_colors"/>
            <resource-meta label="Skin colors" :value="item.skin_colors"/>
            <resource-meta label="Eye colors" :value="item.eye_colors"/>
        </placeholder>
    </section>
</template>

<script>
    export default {
        transition: 'page-slide-left',
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/species/' + params.id)

            return {
                item: data,
            }
        },
    }
</script>
