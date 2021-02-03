class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Avengers Quiz Game");
      title.position(displayWidth/2+150,0);
  
      this.input.position(displayWidth/2+150, 160);
      this.button.position(displayWidth/2+150, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        
        
        player.update();
        
        this.greeting.position(displayWidth/2+150, 100);
      });
  
    }
  }
  