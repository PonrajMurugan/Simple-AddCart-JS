let cartCount = 0;
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerHTML = cartCount;
    
}

function remove(){
    cartCount--;
    document.getElementById("cartCount").innerHTML=cartCount;
}

  
let wishlist=0;

function wish(){
    wishlist++;
    document.getElementById("wishlist").innerHTML = wishlist;
document.getElementById("heart").style.color="red";

}

function wish1(){
    wishlist++;
    document.getElementById("wishlist").innerHTML = wishlist;
    document.getElementById("heart1").style.color="red";
    
    }

    function wish2(){
        wishlist++;
        document.getElementById("wishlist").innerHTML = wishlist;
        document.getElementById("heart2").style.color="red";
        
        }

        function wish3(){
            wishlist++;
            document.getElementById("wishlist").innerHTML = wishlist;
            document.getElementById("heart3").style.color="red";
            
            }

            function wish4(){
                wishlist++;
                document.getElementById("wishlist").innerHTML = wishlist;
                document.getElementById("heart4").style.color="red";
                
                }

                function wish5(){
                    wishlist++;
                    document.getElementById("wishlist").innerHTML = wishlist;   
                    document.getElementById("heart5").style.color="red";
                    
                    }



 