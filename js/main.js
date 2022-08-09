
document.querySelector('#getData').addEventListener('click',weatherDetails)
function weatherDetails(){
let location=document.querySelector('input').value
fetch(`http://api.weatherstack.com/current?access_key=5668ac9dea43d3dd6215a4a68728d7d5&query=${location}`)
     .then(res=>res.json())
     .then(data=>{
        console.log(data)
        document.querySelector('img').src=data.request.current.weather_icons[0]
     })
     .catch(err=>{
        console.log(`error $err`)
     })

    }