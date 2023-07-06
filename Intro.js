class Intro {
    constructor() {   
      this.greeting = createElement("h2");
      this.hi = createElement("h2");
      this.start = createButton("View my profile")
    }
    
    setElementPosition(){
    
      this.greeting.position(width/2-200,height/2-180) 
      this.start.position(width/2-200,height/2+180) 
      this.hi.position(width/2-200,height/2-780) 
   }
  
    setElementStyle(){
      this.greeting.class("greeting")
      this.start.class("customButton")
      this.hi.class("greeting")
    }
  
    hide() {
      this.greeting.hide();
      this.start.hide();
    }
  
    handleMousePressed(){
      var message = `Presented By Class X Students`
      this.greeting.html(message) 
      this.start.mousePressed(()=>{
        this.greeting.hide()
        this.start.hide()
        var hi = `Select your Class`
        this.hi.html(hi)
        
       
       });
       
  
    }
  
    display(){
      this.setElementPosition()
      this.setElementStyle()
      this.handleMousePressed()
    }
  
  }
  
  