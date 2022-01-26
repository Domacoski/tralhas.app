$( document ).ready(function() {
    createEquipamentos();
});

const createEquipamentos = () => {
    var e = getUrlVars()["e"];
    if(e == undefined){
        e = 1;
    }

    $.get( '/json/carretilhas.json', function( data ) {
        var carretilha = data.filter(i=> i.id == e)[0];
        console.log(carretilha);
        var html = '<div id="carretilha" class="blockquote">  <div class="img-box">'+ 
        `<img id="it-img"src="${carretilha.img}"> <h3>${carretilha.name}</h3>`;
        $("#equipamentos").html(html);
    
    });
    
    // $.get( '/equipamentos', function( data ) {
    //     $("#main-view").html(data); 22761
    // });
};
