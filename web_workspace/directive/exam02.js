//exam02.js => ForComponent

let template = `
<div>
    <div>
        <p v-for="data in star" :key="data">{{data}}</p>
        <p v-for="(data,idx) in 9" :key="idx">{{data}} x {{data}}</p>
    </div>
</div>
`;
export default{
    template,
    data(){
        return{
            star : ['*','**','***','****','*****']
        }
    }
}