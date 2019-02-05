/**
 * State
 */
export const state = () => ({
    viewed: false,
    messages: [
        {
            type: 'success',
            title: 'This is a success notification',
            description: 'This is a description',
        },
        {
            type: 'error',
            title: 'This is an error notification',
            description: 'This is a description',
        },
    ],
})

/**
 * Getters
 */
export const getters = {
    count: (state) => state.messages.length,
}

/**
 * Mutations
 */
export const mutations = {

    setViewed(state, value)
    {
        state.viewed = value
    },

}

/**
 * Actions
 */
export const actions = {

    view(store)
    {
        store.commit('setViewed', true)
    },

    reset(store)
    {
        setTimeout(() => store.commit('setViewed', false), 20000)
    },

}
