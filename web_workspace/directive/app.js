//app.js
//=> Root Component
import RawComponent from './raw.js';
import InputComponent from './input.js';
import ModelComponent from './exam01 교수님ver.js';
import ListComponent from './list.js';
import ForComponent from './exam02 교수님ver.js'
import IfComponent from './if.js'

const { createApp } = Vue

const template = `
<div>
    <!-- 자식 컴포넌트 추가 -->
    <!-- <raw-component/> -->
    <!-- <InputComponent /> -->  
    <!-- <ModelComponent /> -->
    <!-- <ListComponent /> -->
    <!-- <ForComponent/> -->
    <IfComponent/>

</div>
`;

createApp({
    template,
    components : {
        RawComponent,   //'raw-component' : RawComponent (raw-component는 사용자가 정하는 이름)
        InputComponent,
        ModelComponent,
        ListComponent,
        ForComponent,
        IfComponent
    }
})
.mount('#app');