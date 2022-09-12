const bty = document.getElementById('bty');
const q = document.getElementById('search');
const k = document.getElementById('keywords');
const hide = document.getElementById('cpyy');
// const gh = <a href="https://app.shrtco.de/disallowed"></a>

const getTags = async(event) => {
    event.preventDefault();
    let searchVal = q.value
    searchVal = (searchVal.indexOf('://') === -1) ? 'http://' + searchVal : searchVal;
    if(searchVal === ""){
            k.innerHTML = `Add some link first`
            hide.style.visibility="hidden";
            
    }
    else{

        try{
            let urll = "https://api.shrtco.de/v2/shorten?url=" + searchVal;
            const response = await fetch(urll);
            const data = await response.json();
            const arrData = [data.result.short_link]
            k.innerHTML = "<a href='"+searchVal+"' target === '_blank' >"+arrData+"</a>"
            hide.style.visibility="visible";
           
           
                
        }
        catch{
            k.innerHTML =  `Your Link is either Wrong or not allowed <br> <a href="https://app.shrtco.de/disallowed" target === '_blank' > (CLICK HERE FOR MORE) </a>`
            // `Your Link is either Wrong or not allowed !`
            hide.style.visibility="hidden";
          
        }
    }

    
}
bty.addEventListener('click', getTags) 




function sswap(){

        k.innerHTML = `Analysing Link & Kutting, Please Wait...`;
    
}

function swappp(){
    if ( k.innerHTML = `Analysing Link & Kutting, Please Wait...`) {
        hide.style.visibility="hidden";
    }
}

function swapp(){
    if (hide.innerText === "Copied !") {
        hide.innerText = "Copy Link";
    }
}

function swap(){
    if (hide.innerText === "Copy Link") {
        hide.innerText = "Copied !";
    }
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }