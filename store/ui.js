/**
 * State
 */
export const state = () => ({
    left: false,
    right: false,
    menu: [
        { icon: 'users', title: 'People', route: 'people' },
        { icon: 'video', title: 'Movies', route: 'films' },
        { icon: 'space-shuttle', title: 'Starships', route: 'starships' },
        { icon: 'shuttle-van', title: 'Vehicles', route: 'vehicles' },
        { icon: 'hand-spock', title: 'Species', route: 'species' },
        { icon: 'globe-europe', title: 'Planets', route: 'planets' },
    ],
})

/**
 * Getters
 */
export const getters = {}

/**
 * Mutations
 */
export const mutations = {

    toggleLeftPanel(state)
    {
        state.left = !state.left
        state.right = false
    },

    toggleRightPanel(state)
    {
        state.right = !state.right
        state.left = false
    },

    closePanels(state)
    {
        state.right = false
        state.left = false
    },

}

/**
 * Actions
 */
export const actions = {}
