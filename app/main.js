// get for button 

const btn = document.querySelectorAll(".buttons button");


// event action adding here now

btn.forEach((item) => {
    item.onclick = (e) => {
        e.target.style.border = "none";
        e.target.style.color = '#fff';
    }

    item.addEventListener('click',function(){
        item.style.backgroundColor = "red";
    });
});

