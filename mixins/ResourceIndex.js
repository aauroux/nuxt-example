/**
 * Resource index
 */
export default {
    transition(to, from)
    {
        if ( typeof from !== 'undefined' && from.name.match(/\-id$/) !== null ) return 'page-slide-right'
        return 'page'
    },
}
