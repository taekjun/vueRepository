//typicode_vue.js
const { createApp } = Vue
//div영역 잡힌곳이 뷰(view)
let template =`
<div>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>userId</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(post, idx) in postList" :key="idx"
                v-on:click="getPostInfo(post.id)">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.userId}}</td>
            </tr>
        </tbody>
    </table>
</div>
`;
//data()가 데이터. created()부터가 기능들. createApp안에 내용들 전부가 컴포넌트이자 뷰(vue)객체이다.(mount빼고)
createApp({
  template : template, //필드명 template에 template 값을 넣는다 라는 의미임. 이름이 서로 같으면 template 생략가능. template : template, => template,
  data() {
    return {
      postList : []
    }
  },
  created(){
    this.getPostList();
  },
  methods : {
    async getPostList(){
        this.postList = await fetch('https://jsonplaceholder.typicode.com/posts')
                              .then(res => res.json());
    },
    getPostInfo(id){
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        });
    }
  }
}).mount('#list')