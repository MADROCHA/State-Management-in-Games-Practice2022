export default class InputHandler {
    constructor(){
        this.lastKey = '';
        window.addEventListener('keydown', (e) => {           
            console.log(e.key)
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                    break 
                case "ArrowRight":
                    this.lastKey = "PRESS right";
                    break 
                case "s":
                    this.lastKey = "PRESS s";
                    break 
                case "w":
                    this.lastKey = "PRESS w";
                    break 
            }
        });
        window.addEventListener('keyup', (e) => {          
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                    break 
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
                    break
                case "s":
                    this.lastKey = "RELEASE s";
                    break  
                case "w":
                    this.lastKey = "RELEASE w";
                    break  
            }
        });
    }
}