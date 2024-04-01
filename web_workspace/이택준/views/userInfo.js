//userInfo.js
let template = `
<div>
    <table>
        <tr>
            <th>id</th>
            <td>{{userInfo.id}}</td>
        </tr>
        <tr>
            <th>name</th>
            <td>{{userInfo.name}}</td>
        </tr>
        <tr>
            <th>username</th>
            <td>{{userInfo.username}}</td>
        </tr>
        <tr>
            <th>email</th>
            <td>{{userInfo.email}}</td>
        </tr>
        <tr>
            <button type="button" @click="goToUpdateForm()">수정</button>
            <button type="button" @click="delUserInfo()">삭제</button>
        </tr>
    </table>
</div>
`;

export default{
    template,
    data(){
        return{
            userInfo : {}
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id);
    },
    methods : {
        async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                                  .then(res => res.json())
                                  .catch(err => console.log(err));
        },
        goToUpdateForm(){
            this.$router.push({ name : 'userUpdate',
                               query : { id : this.userInfo.id}})
        },
        delUserInfo(){
            fetch('https://jsonplaceholder.typicode.com/users/'+this.userInfo.id,{
                method : 'delete'
            })
            .then(res => res.json())
            .then(data => {
                let result = Object.keys(data).length;
                if(result == 0){
                    alert('정상 삭제!!!!!')
                }else{
                    alert('삭제 실패@@@@@')
                }
            })
            .catch(err => console.log(err))
        }
    }
}