// myName.js
let ChildComponent = {
    template : `
    <div>
        <p> 내 이름은 {{ myname }} 입니다.</p>
        <p> 변경될 이름 </p>
        <input type="text" 
            v-model.lazy="updateName" 
            @keyup.enter="updateMyName()">
    </div>
    `,
    props : ['myname'],
    data(){
        return{
            updateName : ''
        }
    },
    methods : {
        updateMyName(){
            this.$emit('update-name',   //첫번째는 무조건 이벤트이름이 들어가야한다.
                        this.updateName,
                        '업데이트 진행');
        }
    }
};

// Parent
export default{
    template : `
    <div>
        <ChildComponent 
            v-bind:myname="first" 
            v-on:update-name="getName"/>    <!-- $emit 사용시 getName()에서 괄호를빼야한다 -->
        <ChildComponent 
            v-bind:myname="second"/>
    </div>
    `,
    data(){
        return {
            first : 'Hong',
            second : 'Kang'
        }
    },
    components : {
        ChildComponent
    },
    methods : {
        getName(data, msg){
            console.log(data, msg);
            this.first = data;
        }
    }
}