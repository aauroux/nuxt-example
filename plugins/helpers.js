import Vue from 'vue'

/**
 * @param item
 * @returns {integer}
 */
Vue.extractId = (item) =>
{
    const arr = item.url.split('/')

    return arr[arr.length - 2]

}

/**
 * @param item
 * @returns {integer}
 */
Vue.prototype.$extractId = (item) => Vue.extractId(item)
