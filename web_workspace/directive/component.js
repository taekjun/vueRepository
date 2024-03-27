//component.js

let component = {
    name : '',      //필수값은 아님. 컴포넌트의 이름.
    template : ``,  //view
    data(){},       //data : CRUD 가능
    computed : {},  //data : read만 가능. 자동계산을 생각하면 쉽다.(ex 환율계산할때 달러가 data이면 원화가 컴퓨티드이다.)
    methods : {},   //code : 기능을 정의.
    watch : {},     //data를 감시. -> 연속행위를 정의 (많이 사용하지는 않는다. 주의가 필요.)
    components : {} //자식 컴포넌트들 추가. (ROOT컴포넌트는 필수.)
}