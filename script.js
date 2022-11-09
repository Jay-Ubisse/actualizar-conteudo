
function adicionar() {
    let ele = document.getElementsByName('elemento');
         
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked) {
            let option = ele[i].value;
            switch (option) {
                case "paragrafo":
                    const paragrafo = document.createElement("p");
                    let valorInput = document.getElementById("texto").value;
                    paragrafo.innerHTML = valorInput;
                    document.getElementById("my-div").appendChild(paragrafo);
                    break;
                case "label":

                    break;
                default:
                    break;
            }
        }
        
    }
}

