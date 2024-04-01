//userInsert.js
let template =`
<div>
    <table>
        <tr>
            <th>id</th>
            <td><input type="text" v-model="user.id" readonly></td>
        </tr>
        <tr>
            <th>name</th>
            <td><input type="text" v-model="user.name"></td>
        </tr>
        <tr>
            <th>username</th>
            <td><input type="text" v-model="user.username"></td>
        </tr>
        <tr>
            <th>email</th>
            <td><input type="text" v-model="user.email"></td>
        </tr>
        <tr>
            <button type="button" @click="createUserInfo()">저장</button>
        </tr>
    </table>
</div>    
`;
export default{
    template,
    data(){
        return{
            user : {
                id : '',
                name : '',
                username : '',
                email : ''
            }
        }
    },
    methods : {
        createUserInfo(){
            let data = {
                name : this.user.name,
                username : this.user.username,
                email : this.user.email
            }

            fetch('https://jsonplaceholder.typicode.com/users',{
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data != null){
                    alert('저장 완료!!!!!')
                    this.user.id = data.id;
                }else{
                    alert('저장 실패@@@@@\n데이터를 확인해주세요.')
                }
            })
            .catch(err => console.log(err));
        }
    }
}