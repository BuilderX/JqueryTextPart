 (function( $ ) {

    $.fn.partsOfWord = function(str,end){
   	    if(str || end < 1){return null}
        var p = this.clone().children().remove().end().text().substr(str,end);
   	    p.text(p);
   	  }
      
 
}( jQuery ));
