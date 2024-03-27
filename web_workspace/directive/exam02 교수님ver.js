//exam02.js => ForComponent

let template = `
<div>
    <div>
        <p v-for="line in 5" :key="line">
            <span v-for="num in line" :key="num">{{'*'}}</span>
        </p>
    </div>
    <div>
        <div v-for="dan in 9" :key="dan">
          <p v-for="num in 9" :key="num">{{dan}} x {{num}} = {{dan*num}}
        </div>
    </div>
</div>
`;
export default{
    template,
    data(){
        return{
            
        }
    }
}