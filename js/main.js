document.querySelector('#form').style.display="none"

let defaultCity=document.querySelector('#defaultCity').value



document.querySelector('#getStarted').addEventListener('click',getStarted)
 function getStarted  ()  {
    document.querySelector('#welcome').style.display="none"
    document.querySelector('#form').style.display="flex"
   
 }
document.querySelector('#save').addEventListener('click',weatherProper)
function weatherProper(){
    if(document.querySelectorAll(".mustFill").value ===''){
        document.querySelector('#save').disabled=true
    }
    document.querySelector('#form').style.display="none" 
   document.querySelector("#main").style.display="inline"
   
}














document.querySelector('#getData').addEventListener('click',weatherDetails)
function weatherDetails(){
let location=document.querySelector('#location').value
fetch(`http://api.weatherstack.com/current?access_key=5668ac9dea43d3dd6215a4a68728d7d5&query=${location}`)
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        document.querySelector('img').src=data.current.weather_icons[0]
        document.querySelector('#description').innerText=`Weather conition :${data.current.weather_descriptions[0]}`
        document.querySelector('#temperature').innerText= `Temperature : ${data.current.temperature} degrees cel`
        document.querySelector("#dateTime").innerText=data.location.localtime
     })
     .catch(err=>{
        console.log(`error $err`)
     })

    }

   