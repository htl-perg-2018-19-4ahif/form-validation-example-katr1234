$('index.html').ready(function(){
  $('#firstName').keypress(function(){
    if($('#firstName').val() != ''){
        $('#firstNameMandatory').hide(1000);
    }
    else{
        $('#firstNameMandatory').show(1000);
    }
  }); 
  $('#lastName').keypress(function(){
    if($('#lastName').val() != ''){
        $('#lastNameMandatory').hide(1000);
    }
    else{
        $('#lasstNameMandatory').show(1000);
    }
  }); 
  $('#email').keypress(function(){
    if($('#email').val() != ''){
        $('#emailMandatory').hide(1000);
    }
    if($('#email').val() != '' && $('#newsletter').prop('checked')){
        $('#emailMandatory').hide(1000);
    }
    if($('#email').val() == '' && $('#newsletter').prop('checked')){
        $('#emailMandatory').show(1000);
    }
  }); 

  $('#mediaChannelSelect').keypress(function(){
    if($("#mediaChannelSelect option:selected").text() == "Other"){
        $("#otherMediaChannel").show();
    }else{
        $('#otherMediaChannel').hide();
    }
  });
});