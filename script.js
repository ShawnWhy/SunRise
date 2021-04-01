//background-color:hsla(degrees, percent% , percent%, decimal)
var currentDegree;
var currentSaturation;  
function generateSun(){
    var colorD = Math.random()*360;
    var saturation = Math.random()*80+20;
    currentDegree=colorD;
    currentSaturation=saturation; 
    var suns = $('.sun')
    for(i=0;i<suns.length;i++){
        console.log($(suns[i]))
        $(suns[i]).css('background-color','hsla('+colorD+','+saturation+'%,'+(10*(i+1))+'%,'+(i+1)*.2+')')
    }

}

generateSun();

function lightUpGround(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(5*(i+1))+'%,.5)')
        $('.ground').prepend(stripe)

    }
}

function lightUpGround2(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(8*(i+1))+'%,.5)')
        $('.ground').prepend(stripe)

    }
}

function lightUpGround3(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(10*(i+1))+'%,.5)')
        $('.ground').prepend(stripe)

    }
}
function lightUpGround4(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(20*(i+1))+'%,.5)')
        $('.ground').prepend(stripe)

    }
}
function lightUpGroundNegative1(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(5*(i+1))+'%,.5)')
        $('.ground').prepend(stripe)

    }
}
function lightUpGroundNegative2(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(i+1)+'%,.5)')
        $('.ground').prepend(stripe)

    }
}





$('body').mousemove(e=>{
    $('.sun0').css('top',e.pageY-400)
    $('.sun0').css('left',e.pageX-400)
    console.log(e.pageY)
    console.log($('.ground'))

    console.log($('.ground')[0].offsetTop)
    if(e.pageY<$('.ground')[0].offsetTop){
        $('.groundStripe').remove()
        lightUpGround()

    }
    if(e.pageY<$('.ground')[0].offsetTop-100){
        $('.groundStripe').remove()
        lightUpGround2()

    }
    if(e.pageY<$('.ground')[0].offsetTop-200){
        $('.groundStripe').remove()
        lightUpGround3()

    }
    if(e.pageY<$('.ground')[0].offsetTop-300){
        $('.groundStripe').remove()
        lightUpGround4()

    }
    if(e.pageY>$('.ground')[0].offsetTop+100){
        $('.groundStripe').remove()
        lightUpGroundNegative1()

    }
    if(e.pageY>$('.ground')[0].offsetTop+200){
        $('.groundStripe').remove()
        lightUpGroundNegative2()
        

    }
    // else($('.groundStripe').remove())

    


})