<template>
    <section>
        <page-header :to="{ name: 'people' }" background-icon="users">{{ item.name }}</page-header>
        <placeholder>
            <resource-meta label="Name" :value="item.name"/>
            <resource-meta label="Height" :value="item.height + ' cm'"/>
            <resource-meta label="Mass" :value="item.mass + ' kg'"/>
            <resource-meta label="Gender" :value="item.gender"/>
            <resource-meta label="Hair color" :value="item.hair_color"/>
            <resource-meta label="Skin color" :value="item.skin_color"/>
            <resource-meta label="Eye color" :value="item.eye_color"/>
            <resource-meta label="Birth year" :value="item.birth_year"/>
        </placeholder>
    </section>
</template>

<script>
    export default {
        transition: 'page-slide-left',
        async asyncData({ store, params, $axios })
        {
            const { data } = await $axios.get('https://swapi.co/api/people/' + params.id)

            return {
                item: data,
            }
        },
    }
</script>
