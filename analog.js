// analog.js
var hrs=document.querySelectorAll(".hr");
var hrs_test = document.querySelector("#t_hrs");
var min = document.querySelectorAll(".min");
var min_test = document.querySelector("#t_min");
var am=document.querySelector("#am")
var pm=document.querySelector("#pm")
var hours,minutes,hrs_transform,min_transform;
var degree=30;
// hours hands 
var ref_circle=document.querySelector(".circle_bg_reference")
var hrs_hand = window.getComputedStyle(ref_circle,"::before");
// minutes hands 
var ref_circle_min = document.querySelector(".circle_bg_reference_b")
var min_hand = window.getComputedStyle(ref_circle_min, "::before");
var minutes_ac = document.querySelectorAll(".min_ac");
var min_pos;
// get the hrs and add an click event with an call back function  to the selected hrs

hrs.forEach((e)=>{
    e.addEventListener("click",()=>
    {
        if(e.innerHTML < 10)
        {
            hrs_test.innerHTML="0"+e.innerHTML;
            hours = hrs_test.innerHTML;
            hrs_transform = (degree*Number(hours)).toString();
            ref_circle.style.setProperty("--hd",hrs_transform+"deg");
            return hours
        }
        else
        {
            hrs_test.innerHTML =  e.innerHTML;
            hours = hrs_test.innerHTML;
            hrs_transform = (degree * Number(hours)).toString();
            ref_circle.style.setProperty("--hd", hrs_transform + "deg");
            return hours
        }
    })
})

// get the hrs and add an click event with an call back function  to the selected hrs
min.forEach((e) => {
    e.addEventListener("click", () => 
        {
            min_test.innerHTML = e.innerHTML;
            minutes = min_test.innerHTML;
            min_transform = (6 * Number(minutes)).toString();
            ref_circle_min.style.setProperty("--md", min_transform + "deg");
        })
    })    
minutes_ac.forEach((e) => {
    e.addEventListener("click", () => {
        let eid = e.id; //Element id 
        min_pos = eid.split("-", 3);
        minutes = min_pos[1];
        min_test.innerHTML = minutes;
        min_transform = (6 * Number(minutes)).toString();
        ref_circle_min.style.setProperty("--md", min_transform + "deg");
    })
})

function outtime(e) {
    if (!hours) alert("hours needed")
    if (!minutes) alert("Minutes needed")
    else {
        alert(hours + ":" + minutes + " " + e.innerText +"-"+ "PDT");
        let min_IST=Number(minutes)+30;
        let hrs_IST=Number(hours);
        if(min_IST >=60)
        {
            hrs_IST = (hrs_IST+1)%12;
            min_IST = (min_IST % 60);
            if(min_IST < 10)
            {
                min_IST="0"+min_IST.toString()
            }
        }
        if(e.innerText=="AM") 
        {
            alert(hrs_IST.toString() + ":" + min_IST + " " + "PM" + "-"+"IST")
        }
        else
        {
            e.innerText = "AM"
            alert(hrs_IST + ":" + min_IST + " " + "AM"+ "-" + "IST")
        }

    }
}
