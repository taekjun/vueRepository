import router from './router/router.js';
import HeaderComponent from './layouts/header.js'
import FooterComponent from './layouts/footer.js'

const { createApp } = Vue

let template = `
<div>
    <HeaderComponent/>
    <router-view :key="$route.fullPath" />  <!-- 같은 컴포넌트여도 새로 만들어 달라는 의미 -->
    <FooterComponent/>
</div>
`;
createApp({
    template,
    components : {
        HeaderComponent,
        FooterComponent
    }
})
.use(router)
.mount('#app');