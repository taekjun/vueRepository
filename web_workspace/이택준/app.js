import router from './router/router.js'

const { createApp } = Vue

let template = `
<div>
    <router-link v-bind:to="{ path : '/' }">Home</router-link>
    ||  <router-link v-bind:to="{ name : 'userList' }">전체조회</router-link>
    ||  <router-link v-bind:to="{ path : '/userInfo' }">단건조회</router-link>
    <router-view :key="$route.fullPath" />
</div>
`;
createApp({
    template
})
.use(router)
.mount('#app');