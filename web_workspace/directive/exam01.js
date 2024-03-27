//exam01.js => ModelComponent

let template = `
<div>
이름 : <input type="text" v-model.lazy="myName"><br>
좋아하는 색은 : <br>
<input type="checkbox" v-model="myColor" true-value="red" v-bind:disabled="!myName">빨강
<input type="checkbox" v-model="myColor" true-value="green" v-bind:disabled="!myName">녹색
<input type="checkbox" v-model="myColor" true-value="blue" v-bind:disabled="!myName">파란색
<input type="checkbox" v-model="myColor" true-value="yellow" v-bind:disabled="!myName">노란색
<input type="checkbox" v-model="myColor" true-value="gray" v-bind:disabled="!myName">회색
<p>내 이름은 {{ myName }} 이고 좋아하는 색은 {{ myColor }} 입니다.
</div>
`;

export default {
    template,
    data(){
        return{
            myName : '',
            myColor : ''
        }
    }
}