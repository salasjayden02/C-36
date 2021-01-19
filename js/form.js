class Form{
    constructor(){}
    display(){
        var title=createElement('h2')
        title.html("CarRacingGame")
        title.position(480,100)
        var input=createInput("name");
        input.position(480,260);
        var button=createButton("play");
        button.position(480,300);
        var greeting=createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello"+name);
            greeting.position(480,260);
        })
    }
}