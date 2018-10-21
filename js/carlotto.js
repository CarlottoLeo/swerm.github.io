$("#calcular").on("click", function(){
  var valor = $("#valor").val();
  var parcela = $("#parcela").val();
  var taxa = 1.57;
  var prestacao = 0;

  prestacao = valor * Math.pow((1 + (taxa/100)), parcela);

  if((prestacao/parcela) > 0){
      $("#prestacaoSicoob").text("R$ " + (prestacao/parcela).toFixed(2));
  }

})

$("#limpar").on("click", function(){
  $("#valor").val("");
  $("#parcela").val("");
  $("#taxa").val("");
  $("#prestacaoSicoob").text("");
})
