//if.js
let template = `
<div>
    <label>
        <input type="checkbox" v-model="myVisible">표시
    </label>
    <p v-show="myVisible">show 디렉티브</p>
    <p v-if="myVisible">체크박스가 ON</p>
    <p v-else>체크박스가 OFF</p>
    <hr>
    <label>
        등급 : <input type="text" v-model="score">
    </label>
    <p v-if="score >= 90">A등급</p>    
    <p v-else-if="score >= 80">B등급</p>    
    <p v-else-if="score >= 70">C등급</p>    
    <p v-else-if="score >= 60">D등급</p>    
    <p v-else>F등급</p>    
    <!-- v-for 과 v-if -->
    <template v-for="dan in 9" :key="dan">
        <div v-if="dan%2 == 0">
            <p v-for="num in 9" :key="num">{{ dan }} x {{ num }} = {{ dan*num }}
        </div>
    </template>

    <button type="button" onclick="clickFun"></button>
    <button type="button" onclick="clickFun(event)"></button>

    <script>
        function clickFun(event){

        }
    </script>
`;
export default{
    template,
    data(){
        return{
            myVisible : false,
            score : 0
        }
    }
}