var seg = 0;
var min = 0;
var hor = 0;
var id;
function start()
{
    id = setInterval(function() {
        seg++;
        if(seg >= 60){
            min++;
            seg=0;
        }

        if(min >= 60){
            hor++;
            min=0;
        }

        document.getElementById("tempo").innerHTML = `0${hor}: 0${min}: 0${seg}`;

        if(seg >= 10) {
            document.getElementById('tempo').innerHTML = `0${hor}: 0${min}: ${seg}`;
        }
        if(min >= 10) {
            document.getElementById('tempo').innerHTML = `0${hor}: ${min}: ${seg}`;
        }
        if(hor >= 10) {
            document.getElementById('tempo').innerHTML = `${hor}: ${min}: ${seg}`;
        }

    
    },1000);
}

function stop()
{
    clearInterval(id);
}