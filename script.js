var winner = false;

var x = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn2').hasClass('clicked') && $('#btn3').hasClass('clicked')){
        winner = true;
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn2').hasClass('dblclicked') && $('#btn3').hasClass('dblclicked')){
        winner = true;
    }
    if($('#btn4').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn6').hasClass('clicked')){
        winner = true;
    }
    if($('#btn7').hasClass('clicked') && $('#btn8').hasClass('clicked') && $('#btn9').hasClass('clicked')){
        winner = true;
    }
    if($('#btn4').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked')){
        winner = true;
    }
    if($('#btn7').hasClass('dblclicked') && $('#btn8').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
    }
    if(winner){
        document.write("We have a winner")
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);

var y = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn4').hasClass('clicked') && $('#btn7').hasClass('clicked')){
        winner = true;
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn4').hasClass('dblclicked') && $('#btn7').hasClass('dblclicked')){
        winner = true;
    }
    if($('#btn2').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn8').hasClass('clicked')){
        winner = true;
    }
    if($('#btn2').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn8').hasClass('clicked')){
        winner = true;
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
    }
    if(winner){
        document.write("We have a winner")
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);

var z = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn9').hasClass('clicked')){
        winner = true;
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
    }
    if($('#btn3').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn7').hasClass('clicked')){
        winner = true;
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn7').hasClass('dblclicked')){
        winner = true;
    }
    if(winner){
        document.write("We have a winner")
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);


$('#btn1').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})
$('#btn1').click(function(e){
    setTimeout(function(){
        if(!$('#btn1').hasClass('dblclicked')){
            $('#btn1').css('background-color','red');
            $('#btn1').attr('disabled','true');
            $('#btn1').addClass('clicked');
        }
    },200);
})

$('#btn2').click(function(e){
    setTimeout(function(){
        if(!$('#btn2').hasClass('dblclicked')){
            $('#btn2').addClass('clicked');
            $('#btn2').attr('disabled','true');
        }
    },200);
})
$('#btn2').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn3').click(function(e){
    setTimeout(function(){
        if(!$('#btn3').hasClass('dblclicked')){
            $('#btn3').addClass('clicked');
            $('#btn3').attr('disabled','true');
        }
    },200);
})
$('#btn3').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn4').click(function(e){
    setTimeout(function(){
        if(!$('#btn4').hasClass('dblclicked')){
            $('#btn4').addClass('clicked');
            $('#btn4').attr('disabled','true');
        }
    },200);
})
$('#btn4').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn5').click(function(e){
    setTimeout(function(){
        if(!$('#btn5').hasClass('dblclicked')){
            $('#btn5').addClass('clicked');
            $('#btn5').attr('disabled','true');
        }
    },200);
})
$('#btn5').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn6').click(function(e){
    setTimeout(function(){
        if(!$('#btn6').hasClass('dblclicked')){
            $('#btn6').addClass('clicked');
            $('#btn6').attr('disabled','true');
        }
    },200);
})
$('#btn6').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn7').click(function(e){
    setTimeout(function(){
        if(!$('#btn7').hasClass('dblclicked')){
            $('#btn7').addClass('clicked');
            $('#btn7').attr('disabled','true');
        }
    },200);
})
$('#btn7').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn8').click(function(e){
    setTimeout(function(){
        if(!$('#btn8').hasClass('dblclicked')){
            $('#btn8').addClass('clicked');
            $('#btn8').attr('disabled','true');
        }
    },200);
})
$('#btn8').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})

$('#btn9').click(function(e){
    setTimeout(function(){
        if(!$('#btn9').hasClass('dblclicked')){
            $('#btn9').addClass('clicked');
            $('#btn9').attr('disabled','true');
        }
    },200);
})
$('#btn9').dblclick(function(e){
    if(!$(this).hasClass('clicked')){
        $(this).addClass('dblclicked');
        $(this).attr('disabled','true');
    }
})



