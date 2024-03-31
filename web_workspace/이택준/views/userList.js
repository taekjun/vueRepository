//userList.js

let template = `
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userList" :key="user.id" @click="goToDetail(user.id)">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
`;

export default{
    template,
    data(){
        return{
            userList : []
        }
    },
    created(){
        this.getUserList();
    },
    methods : {
        async getUserList(){
            this.userList = await fetch('https://jsonplaceholder.typicode.com/users')
                                  .then(res => res.json())
                                  .catch(err => console.log(err));
        },
        goToDetail(userId){
            this.$router.push({ name : 'userInfo',
                                query : { id : userId} });
        }
    }
}