<script type="text/javascript"></script>

    document.getElementById("button1").addEventListener("click", function(){
        
        document.getElementById("box").style.height = "+=25px"
    
    });
    
    document.getElementById("button2").addEventListener("click", function(){
    
        document.getElementById("box").style.color = "blue"
    
    });

    document.getElementById("button3").addEventListener("click", function(){
    
        document.getElementById("box").style.opacity = "0"

    });
    
    document.getElementById("button4").addEventListener("click", function(){
    
        document.getElementById("box").style.height = "150px"
        document.getElementById("box").style.color = "orange"
        document.getElementById("box").style.opacity = "1"
    
    });
