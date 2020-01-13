window.local_vuejs_req_config('local_vuedemo', 'vue/comps', {registerName: "local_vuedemo/vuecomps"});

define([
    'core/config',
    'local_vuejs_req/vue',
    'local_vuejs_req/vuex',
    'local_vuedemo/vuecomps/app-main',
    'local_vuedemo/store',
], function(Config, Vue, Vuex, MainComp, Store) {
    return {
        init: function() {
            // If JS caching is turned off, then turn dev tools for vue on.
            if (parseInt(Config.jsrev) === -1) {
                Vue.config.devtools = true;
            }
            Vue.use(Vuex);
            Vue.component('app-main', MainComp);
            new Vue({ el: '#app' , store: Store.initStore(Vuex)});
        }
    };

});