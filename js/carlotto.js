$("#calcular").on("click", function(){
  var valor = $("#valor").val();
  var parcela = $("#parcela").val();
  var taxa = $("#taxa").val();
  var prestacao = 0;

  prestacao = valor * Math.pow((1 + (taxa/100)), parcela);

  $("#prestacao").val(prestacao/parcela);

})
