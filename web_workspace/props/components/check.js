//check.js
let ChildComponent = {
    template : `
    <div>
        <p> 숫자 : {{ num }} </p>
        <p> 문자열 : {{ str }} </p>
        <p> 짝수? : {{ even }} </p>
        <p> 객체 : {{ obj }} </p>
    </div>
    `,
    props : {
        num : {
            type : [Number, String],
            required : true
        },
        str : {
            type : String,
            default : 'Hello!'
        },
        even : {
            validator(value){
                return (value%2 == 0)
            }
        },
        //obj : Object
        obj : {
            type : Object,
            default : ()=>{
                return {
                    name : 'Hong',
                    age : 20
                }
            }
        }
    }
};

export default{
    template : `
    <div>
        <ChildComponent v-bind:num="myNumber" 
                        v-bind:str="sendMsg" 
                        :even="myNumber"
                        :obj="newObj"/>
    </div>
    `,
    data(){
        return {
            myNumber : 55,
            sendMsg : 'Hello, world!',
            newObj : null
        }
    },
    components : {
        ChildComponent
    }
    
}