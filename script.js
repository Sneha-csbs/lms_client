function login(){
    alert("Logged in succesfully!!")
}
function register(){
    alert("Registered succesfully!!")
}
let a=0;
function change(){
    const words=document.getElementsByClassName("data")
    words[0].innerText="Welcome to World of Sheero!!"
    words[1].innerText="Shiro, also called Sheero, is Shinchan’s small white pet dog known for his cute, gentle, and loyal nature. Shiro is calm and responsible, often acting like the sensible member of the Nohara family. Unlike Shinchan, he is quiet and well-behaved, but he always follows Shinchan around and tries to protect him.Shiro is very intelligent for a dog—he understands emotions, helps the family, and sometimes even cleans up after Shinchan’s mess. He is famous for his fluffy appearance, innocent eyes, and adorable reactions."
    const arr=[]
    for(let i=0;i<=10;i++){
        arr[i]=i;
    }
    words[2].innerText=arr
    
}
function changeback(){
    const words=document.getElementsByClassName("data")
    words[0].innerText="Welcome to World of Shinchan!"
    words[1].innerText="Shinnosuke Nohara, popularly known as Shinchan, is a 5-year-old playful, mischievous, and funny kindergarten boy. He is the main character of the Japanese anime and manga series Crayon Shin-chan. Shinchan is known for his silly behavior, witty dialogues, and hilarious actions that often annoy adults but entertain everyone watching.He loves to joke around, dance, tease people, and create trouble without real intention. Despite his naughty nature, he has a kind heart, cares deeply for his family and friends, and often surprises others with his innocence."   
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