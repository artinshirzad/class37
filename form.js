class Form{
    constructor(){
        this.input=createInput("").attribute("placeholder","Name");
        this.button=createButton("play");
        this.greeting=createElement('h2');
        this.title=createElement('h2');
        this.reset=createButton("reset");
    }
display(){
    this.title.html('carracinggame');
    this.title.position(500,0);
    this.input.position(300,200);   
    this.button.position(300,400);
    this.reset.position(700,20);    
            
}
}