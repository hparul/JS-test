fetch("https://reqres.in/api/users")
.then(response=>(response.json()))
.then(response=>{
    console.log(response);
    let nameList=[]
    let counter =0;
    response.data.forEach(element => {
        counter = counter +1;
    
        console.log(element.first_name);
        
        if (counter<=3) {
            nameList.push(element.first_name);
        }
       
    });;
    console.log(nameList);
const myUL=document.getElementById("nameList");

    const list=document.createElement('li');
    list.innerHTML=nameList;
    myUL.append(list);
   



   
    });
    
    //.data.forEach(element => {
        //element.first_name;