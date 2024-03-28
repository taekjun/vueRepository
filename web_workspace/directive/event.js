//event.js
let template = `
<div>
    <button type="button" v-on:click="upCounter(),printMsg($event)" >Add 1</button>
    <p> The counter is : {{ counter }}</p>
    <hr>
    <input type="number" v-model="num">
    <button type="button" v-on:click="increaseCounter(num)" >Add {{ num }}</button>
    <p> The counter is : {{ sum }}</p>
    <hr>
    <form v-on:click="showAlert('form')" style="border: 1px solid black;">
        <div v-on:click.self="showAlert('div')" style="border: 1px solid black;">
            <p v-on:click.once="showAlert('p')" style="border: 1px solid black;">
                <a v-on:click.prevent.stop style="border: 1px solid black;" href="http://www.naver.com">네이버</a>
            </p>
            click div tag
        </div>
    </form>
    <hr>
    <input type="text" v-model="keyword" @keyup.enter="showAlert(keyword)">
</div>
`;

export default{
    template,
    data(){
        return{
            counter : 0,
            num : 0,
            sum : 0,
            keyword :''
        }
    },
    methods : {
        upCounter(event){
            console.log(event);
            this.counter += 1;  //객체 내부에 있는값을 가져오기때문에 this
        },
        printMsg(event){
            console.log(event)
        },
        increaseCounter(num){   //여기서 사용된 num은 프로퍼티가 아니다.
            this.sum += num;    //num대신 data를 넣어도 같은 결과값.
        },
        showAlert(tag){
            alert('click ' + tag);
        }
    }
}