/*
라우팅(Routing)
: 특정 엔드 포인트에 대한 클라이언트 요청에 
  애플리케이션이 응답하는 방법을 결정하는 것
엔드 포인트 = 메소드(Method) + 경로(Path)

REST    Restfull Server 
= URI(자원) + METHOD(기능) / JSON
=> GET(조회), POST(등록), PUT(수정), DELETE(삭제)
단건조회 : GET + empInfo?employeeID=100     => GET    + emps/100
전체조회 : GET + empList                    => GET    + emps
등록     : POST + empInsert                 => POST   + emps
수정     : POST + empUpdate?employeeID=100  => PUT    + emps/100
삭제     : GET + empDelete?employeeID=100   => DELETE + emps/100
*/

// 전체조회
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    //console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);

})
.catch(err => console.log(err));

// 단건조회
fetch('https://jsonplaceholder.typicode.com/posts/'+1)
.then(res => {
    //console.log(res);
    return res.json();
})
.then(data => {
    console.log(data);

})
.catch(err => console.log(err));

//등록  JSON : {}, []
let post = {
    id : 100,
    title : 'Hello',
    userId : 1,
    body : 'Today is Friday!!!'
}

fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'post',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(post) 
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//수정
fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'put',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
        title : 'Welcome!',
        userId : 20,
        body : 'Test!'
    }) 
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

//삭제
fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'delete',
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));
