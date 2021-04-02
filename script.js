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
generateTrees()

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
        stripe.css('background-color','hsla('+currentDegree+','+currentSaturation+'%,'+(2*(i+1))+'%,.5)')
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

function generateTrees(){

    $('.tree').remove();
    for(let i=0;i<50;i++){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
        
        // var size = Math.random()*20+10;
        var width=Math.random()*20+10 
        var top=Math.random()*100;
        var left=Math.random()*100;
        var tree=$('<div>');
        
        tree.addClass('tree');
        tree.css('top',top+'%')
        tree.css('left',left+'%')
        tree.css('width',width)
        var treebody=$('<div>') 
        treebody.addClass('treeBody');
        
        treebody.css('border-bottom',width+'px solid'+color)
        treebody.css('border-left',width+'px solid transparent')
        treebody.css('border-right',width+'px solid transparent')
        var treeCast=$('<div>') 
        treeCast.addClass('treeCastShadow');
        treeCast.css('border-top',width+'px solid hsla('+currentDegree+','+currentSaturation+'%, 4%,.5)')
        treeCast.css('border-left',width+'px solid transparent')
        treeCast.css('border-right',width+'px solid transparent')
        var treeShadow=$('<div>') 
        treeShadow.addClass('treeShadow');
        
        treeShadow.css('border-bottom',width+'px solid hsla('+currentDegree+','+currentSaturation+'%, 4%,.5)')
        treeShadow.css('border-left',width+'px solid transparent')
        treeShadow.css('border-right',width+'px solid transparent')
        


        tree.append(treebody);
        tree.append(treeCast);
        tree.append(treeShadow);


        $('.trees').append(tree)



        // var treeCastShawdow=$('<div>') 
        // treebody.addClass('tree');


    }

}





$('body').mousemove(e=>{
    $('.sun0').css('top',e.pageY-400)
    $('.sun0').css('left',e.pageX-400)
    // console.log(e.pageY)
    // console.log($('.ground'))

    console.log($('.ground')[0].offsetTop)
    if(e.pageY<$('.ground')[0].offsetTop){
        $('.groundStripe').remove()
        lightUpGround()
        // generateTrees() 

    }
    if(e.pageY<$('.ground')[0].offsetTop-100){
        $('.groundStripe').remove()
        lightUpGround2()
        $('.treeCastShadow').css("transform",'scaleY(1)')
        $('.treeShadow').css("transform",'scaleY(.7)')



    }
    if(e.pageY<$('.ground')[0].offsetTop-200){
        $('.groundStripe').remove()
        lightUpGround3()
        $('.treeCastShadow').css("height",'20%')
        $('.treeCastShadow').css("transform",'scaleY(.5)')
        $('.treeShadow').css("transform",'scaleY(.5)')




    }
    if(e.pageY<$('.ground')[0].offsetTop-300){
        $('.groundStripe').remove()
        lightUpGround4()
        $('.treeCastShadow').css("height",'10%')
        $('.treeCastShadow').css("transform",'scaleY(.2)')
        $('.treeShadow').css("transform",'scaleY(.2)')




    }
    if(e.pageY>$('.ground')[0].offsetTop+100){
        $('.groundStripe').remove()
        lightUpGroundNegative1()
        $('.treeCastShadow').css("transform",'scaleY(2)')
        $('.treeShadow').css("transform",'scaleY(.9)')


    }
    if(e.pageY>$('.ground')[0].offsetTop+200){
        $('.groundStripe').remove()
        lightUpGroundNegative2()
        $('.treeCastShadow').css("transform",'scaleY(4)')
        $('.treeShadow').css("transform",'scaleY(1)')


        

    }
    // else($('.groundStripe').remove())

    


})