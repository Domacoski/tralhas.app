 
$( document ).ready(function() {
    onCreate();
});

const onCreate = () => {
    // const c = getUrlVars()["c"];
    $.get( '/equipamentos', function( data ) {
        $("#main-view").html(data);
    });
};


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}
 