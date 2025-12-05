function login(){
    alert("Logged in succesfully!!")
}
function register(){
    alert("Registered succesfully!!")
}
let a=0;
function change(){
    const words=document.getElementsByClassName("data")
    words[0].innerText="Save Life!!"
    words[1].innerText="Saving a life means taking action that protects someone from danger, illness, or death. Simple acts like donating blood, helping in emergencies, providing first aid, supporting mental health, or calling for medical help can make the difference between life and death. Every individual has the power to save lives through awareness, kindness, and timely action."
    const arr=[]
    for(let i=0;i<=10;i++){
        arr[i]=i;
    }
    words[2].innerText=arr
    
}
function changeback(){
    const words=document.getElementsByClassName("data")
    words[0].innerText="DONATE BLOOD!"
    words[1].innerText="Blood donation is the voluntary process of giving blood so it can be used to save the lives of people in medical need. Donated blood is separated into components like red blood cells, plasma, and platelets, which are used for surgeries, accidents, anemia treatment, cancer therapy, and emergency care."   
    words[2].innerText=++a;
}
function get() {
    const act=document.activeElement.tagName;
    const value=document.getElementById("word");
    value.innerText=act;

}
const arr=()=>{
        const heading=document.createElement("h2")
        heading.innerText="9876543210";
        const cont=document.getElementById("container")
        cont.append(heading);
}
const col=()=>{
    const div=document.getElementById("end")
    div.style.backgroundColor="black";
}

const body=document.getElementById("trans");
const ligh=document.getElementById("lightm");
const dar=document.getElementById("darkm");
ligh.addEventListener("click",()=>setTheme("light"))
dar.addEventListener("click", ()=>setTheme("dark"))
const setTheme=(mode)=>{
    if(mode==="light"){
        body.style.backgroundColor="white";
        body.style.color="black";
    }
    else{
        body.style.backgroundColor="black";
        body.style.color="white";
    }
}