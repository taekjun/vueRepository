//list.js

let template = `
<div>
    <!-- 프로퍼티 없이 v-for사용 -->
    <ul>
        <li v-for="num in 5" v-bind:key="num"> {{num}} </li>
    </ul>
    <!-- 단일값 배열을 활용 -->
    <ul>
        <li v-for="data in myArray"> {{data}} </li>
    </ul>
    <ul>
        <li v-for="(data, idx) in myArray" :key="idx"> {{idx}} : {{data}} </li>
    </ul>
    <!-- 객체 배열을 활용 -->
    <!-- 1) -->
    <div>
        <ul v-for="user in users" :key="user.id">
            <li>{{user.id}}</li>
            <li>{{user.name}}</li>
            <li>{{user.age}}</li>
        </ul>
        <hr>
    </div>    
    <!-- 2) -->    
    <div>
        <ul v-for="user in users" :key="user.id">
            <li v-for="(value, name) in user" :key="value"> {{ name }} : {{ value }}</li>
        </ul>
    </div>
</div>
`;

export default{
    template,
    data(){
        return{
            myArray : ['김밥','샌드위치','햄버거','라면'],
            users : [
                {   id : 1,
                    name : 'Hong',
                    age : 20
                },
                {
                    id : 2,
                    name : 'Kang',
                    age : 30 
                },
                {
                    id : 3,
                    name : 'Lee',
                    age : 25
                }
            ]
        }
    }
}