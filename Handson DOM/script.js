//fourth

let hello = document.getElementById('hello');
hello.addEventListener('click', helloworld)
function helloworld(){
    hello.innerText = 'Hello World';
    hello.style.cursor= "copy";
    hello.style.fontSize= '20px';
}
console.log('Hello World');

//fifth
function prepbyte(){
    
    hi.innerText="Welcome to prepbytes";
}

//sixth

let heading = document.getElementById('heading')
heading.addEventListener('click', head1)
function head1(){
    heading.style.color='red';
    heading.style.fontSize='50px';
}

//seventh

function change(){
    let count=0;
    let card=document.getElementsByClassName('card');

    if(count===0){
        card[0].style.flexDirection = 'column';
    count++;
    }
    else{
        card[0].style.flexDirection = 'row';
        count--;
    }

}

//ninth
    function diaplayTime() {
        // console.log("JavaScript is Live");
        var dateTime = new Date();
        var hrs = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();
      
        var session = document.getElementById('sessions');
      
          if(hrs >= 12)
          {
            session.innerHTML = 'PM';
          }
          else
          {
            session.innerHTML = 'AM';
          }   
        
        // kkkkk
          if (hrs>12) {
            hrs -= 12;
          PMAM = "pm";
        }
      
        if (hrs < 10) {
          hrs = "0" + hrs;
        }
      
        if (min < 10) {
          min = "0" + min;
        }
      
        if (sec < 10) {
          sec = "0" + sec;
        }
      
      
        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        
        
      }
      
      setInterval(diaplayTime, 1000); 