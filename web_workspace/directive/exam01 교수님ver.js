//exam01.js => ModelComponent

let template = `
<h2>자기소개</h2>
<div>
<label>이름 : </label><input type="text" v-model.lazy="myName"><br>
<label>좋아하는 색은 : <br>
<input type="radio" v-model="myColor" value="red">빨강<br>
<input type="radio" v-model="myColor" value="green">녹색<br>
<input type="radio" v-model="myColor" value="blue">파란색<br>
<input type="radio" v-model="myColor" value="yellow">노란색<br>
<input type="radio" v-model="myColor" value="gray">회색</label>
<p>내 이름은 {{ myName }} 이고 좋아하는 색은 {{ myColor }} 입니다.

<select v-model="myColor" v-bind:disabled="myName.length == 0">
    <option value="red"> 빨강 </option>
    <option value="green"> 녹색 </option>
    <option value="blue"> 파랑색 </option>
    <option value="yellow"> 노란색 </option>
    <option value="gray"> 회색 </option>
</select>
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