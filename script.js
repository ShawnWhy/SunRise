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
lightUpGroundNegative2()
generateCloud()



function lightUpGround(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(5*(i+1))+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}

function lightUpGround2(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(8*(i+1))+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}

function lightUpGround3(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(10*(i+1))+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}
function lightUpGround4(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(20*(i+1))+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}
function lightUpGroundNegative1(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(2*(i+1))+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}
function lightUpGroundNegative2(){
    for(let i=0;i<20;i++){
        var stripe=$('<div>');
        stripe.addClass('groundStripe');
        stripe.css('background-color','hsla('+currentDegree+','+(currentSaturation+i)+'%,'+(i+1)+'%,'+(i+1)*.5+')')
        $('.ground').prepend(stripe)

    }
}

function generateTrees(){

    $('.tree').remove();
    for(let i=0;i<30;i++){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];}
        
        // var size = Math.random()*20+10;
        var width=Math.random()*40+10 
        var top=Math.random()*100;
        var left=Math.random()*100;
        var height=Math.random()*4+1;
        var tree=$('<div>');
        
        tree.addClass('tree');
        tree.css('top',top+'%')
        tree.css('left',left+'%')
        tree.css('z-index',Math.floor(top))
        tree.css('width',width)
        tree.css('transform','scaleY('+height+')')
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
    var Xposition=e.pageX;
    var halfpage = $('.sky').width()/2
    // console.log(e.pageY)
    // console.log($('.ground'))

    console.log($('.ground')[0].offsetTop)
    if(e.pageY<$('.ground')[0].offsetTop){
        $('.groundStripe').remove()
        $('.treeCastShadow').css("transform",'scaleY(1)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(1)skew('+((halfpage-Xposition)/10)+'deg')
        // }
        lightUpGround()

    }
    if(e.pageY<$('.ground')[0].offsetTop-100){
        $('.groundStripe').remove()
        lightUpGround2()
        $('.treeCastShadow').css("transform",'scaleY(.7)')
        $('.treeShadow').css("transform",'scaleY(.7)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(.7)skew('+((halfpage-Xposition)/10)+'deg')
        // }
    }
    if(e.pageY<$('.ground')[0].offsetTop-200){
        $('.groundStripe').remove()
        lightUpGround3()
        $('.treeCastShadow').css("height",'20%')
        $('.treeCastShadow').css("transform",'scaleY(.5)')
        $('.treeShadow').css("transform",'scaleY(.5)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(.5)skew('+((halfpage-Xposition)/10)+'deg')
        // }
    }
    if(e.pageY<$('.ground')[0].offsetTop-300){
        $('.groundStripe').remove()
        lightUpGround4()
        $('.treeCastShadow').css("height",'10%')
        $('.treeCastShadow').css("transform",'scaleY(.2)')
        $('.treeShadow').css("transform",'scaleY(.2)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(.2)skew('+((halfpage-Xposition)/10)+'deg')
        // }
    }
    if(e.pageY>$('.ground')[0].offsetTop+100){
        $('.groundStripe').remove()
        lightUpGroundNegative1()
        $('.treeCastShadow').css("transform",'scaleY(2)')
        $('.treeShadow').css("transform",'scaleY(.9)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(2)skew('+((halfpage-Xposition)/10)+'deg')
        // }
    }
    if(e.pageY>$('.ground')[0].offsetTop+200){
        $('.groundStripe').remove()
        lightUpGroundNegative2()
        $('.treeCastShadow').css("transform",'scaleY(4)')
        $('.treeShadow').css("transform",'scaleY(1)')
        // if(Xposition>halfpage){
            $('.treeCastShadow').css("transform",'scaleY(4)skew('+((halfpage-Xposition)/10)+'deg')
        // }
}
    // else($('.groundStripe').remove())
})



function generateCloud(){
    for(let i=0;i<20;i++){
        var angle1 = Math.random()*800+200;
        var angle2 = Math.random()*800+200;
        var angle3 = Math.random()*40+40;
        var angle4 = Math.random()*40+40;
        var height = Math.random()*30+2;
        var width = Math.random()*50+10;
        var top = Math.random()*140-20;
        var left = Math.random()*140-20;
        var transp = Math.random()*.8+0.2
        var cloud=$('<div>')
        var randAnimation = Math.random()*40+10
        
        $(cloud).addClass('cloud)')
        $(cloud).css('animation','float '+randAnimation+'s linear infinite')
        $(cloud).css('position','absolute');

        

        $(cloud).css('border-radius',angle1+"px "+ angle2+"px "+ angle3+"px "+angle4+"px");
        $(cloud).css('background-color','rgba(176,178,182,'+transp+')')
        $(cloud).css('height', height+"%");
        $(cloud).css('width', width+"%");
        $(cloud).css('top', top+'%');
        $(cloud).css('left', left+'%');
        $('.clouds').append(cloud);



    }
}