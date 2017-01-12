 (function( $ ) {
    $.fn.partOfWord = function(str,end){
     if(typeof str && end === 'number'){
   	    if(str || end < 1){return null}
        var p = this.clone().children().remove().end().text().substr(str,end);
   	    this.text(p);
   	  }
    }
 
}( jQuery ));
