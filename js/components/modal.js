function popup_getstarted(){
    var modal = document.getElementById('modal-safe');
    var btn = document.getElementById("popup-getstarted");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function(){
      modal.style.display = "none"
    }
    window.onclick = function(event){
      if (event.target == modal){
        modal.style.display = "none";
      }
    }
  }
