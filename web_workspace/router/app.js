import router from './router/router.js';

const { createApp } = Vue

let template = `
<div>
    <!-- <router-link to="/home">Home</router-link> -->
    <router-link v-bind:to="{ path : '/' }">Home</router-link>
    || <router-link v-bind:to="{ name : 'postList' }">전체조회</router-link>
    || <router-link v-bind:to="{ path : '/postInfo' }">단건조회</router-link>
    <router-view :key="$route.fullPath" />  <!-- 같은 컴포넌트여도 새로 만들어 달라는 의미 -->
</div>
`;
createApp({
    template
})
.use(router)
.mount('#app');