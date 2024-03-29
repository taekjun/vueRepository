//slot_parent.js
import ChildComponent from './slot_child.js';

let template = `
<div>
    <ChildComponent>
        <template v-slot:title>
            <h3>팝업 타이틀</h3>
        </template>
        <p>중간에 다른 태그 들어가도 내용 반영은 안된다.</p>
        <template v-slot:content>
            <p>팝업 컨텐츠1</p>
            <p>팝업 컨텐츠2</p>
        </template>
        <template v-slot:default>
            <button type="button">닫기</button>
        </template>
    </ChildComponent>
    <hr>
    <ChildComponent>
        <template v-slot:title>
            <h3>Info</h3>
        </template>
        <template v-slot:content>
            <p>Service</p>
            <input type="radio" v-model="select" value="A"> A 유형 <br>
            <input type="radio" v-model="select" value="B"> B 유형
        </template>
        <template v-slot:default>
            <button type="button">완료</button>
        </template>
    </ChildComponent>
</div>
`;

export default{
    template,
    data(){
        return{
            select : ''
        }
    },
    components : {
        ChildComponent
    }
}