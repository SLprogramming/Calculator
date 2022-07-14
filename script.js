console.log("hello world");
const inputBarTag = document.querySelector(".inputBar");
const btnTag = document.querySelectorAll(".btn");

for (let icon of btnTag) {
    icon.addEventListener("click", (e) => {
        let btnText = e.target.innerText;
        if (btnText=="=") {
            if (inputBarTag.value=="") {
                return;
            }
            
            inputBarTag.value=eval(inputBarTag.value);
            return;
        }
        if (btnText=="x") {
            btnText="*";
        }
        if (btnText=="C") {
            inputBarTag.value=inputBarTag.value.slice(0,inputBarTag.value.length-1)
            return;
        }
        if (btnText=="AC") {
            inputBarTag.value="";
            return;
        }
        if (btnText=="sin") {
            if(inputBarTag.value=="") {
                return;
            }
            inputBarTag.value=Math.sin(eval(inputBarTag.value));
            return;
        }
        if (btnText=="cos") {
            if(inputBarTag.value=="") {
                return;
            }
            inputBarTag.value=Math.cos(eval(inputBarTag.value));
            return;
        }
        if (btnText=="0" && inputBarTag.value=="") {
            return;
        }
        inputBarTag.value+=btnText;
    })
}