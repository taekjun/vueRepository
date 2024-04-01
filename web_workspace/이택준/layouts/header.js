//header.js
let template = `
<router-link v-bind:to="{ path : '/' }">Home</router-link>
    ||  <router-link v-bind:to="{ name : 'userList' }">전체조회</router-link>
    ||  <router-link v-bind:to="{ path : '/userInsert' }">등록</router-link>
`;

export default{
    template,
    name : 'headerComponent'
}