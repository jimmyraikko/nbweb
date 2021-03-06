$.fn.editindicator=function(){
	var row=$(this).parent().parent();
	var id=row.find('#indicatorid').text();
	var indicatorname=row.find('#indicatorname').text();
	var symbol=row.find('#symbol').text();
	var unit=row.find('#unit').text();
	var dland=row.find('#dland_standard').text();
	var ph1=row.find('#aland_standard_ph1').text();
	var ph2=row.find('#aland_standard_ph2').text();
	var ph3=row.find('#aland_standard_ph3').text();
	var ph4=row.find('#aland_standard_ph4').text();
	var indicatortype=row.find('#indicatortype').text();
	$('#editModal').find('#action').val('1');
	$('#editModal').find('#id').val(id);
	$('#editModal').find('#edit-name').text(indicatorname);
	$('#editModal').find('#indicatortype').val(indicatortype);
	$('#editModal').find('#symbol').val(symbol);
	$('#editModal').find('#unit').val(unit);
	$('#editModal').find('#dland_standard').val(dland);
	$('#editModal').find('#aland_standard_ph1').val(ph1);
	$('#editModal').find('#aland_standard_ph2').val(ph2);
	$('#editModal').find('#aland_standard_ph3').val(ph3);
	$('#editModal').find('#aland_standard_ph4').val(ph4);
	$('#editModal').find('#submit').val('确定');
}

$.fn.delindicator=function(){
	var row=$(this).parent().parent();
	var id=row.find('#indicatorid').text();
	var indicatorname=row.find('#indicatorname').text();
	$('#delModal').find('#action').val('2');
	$('#delModal').find('#id').val(id);
	$('#delModal').find('#del-message').text('确认删除土壤监测指标项 <'+indicatorname+'> 吗？');
	$('#delModal').find('#submit').val('确定');
}

$(document).ready(function(){
	$('#menu-soil').attr('class','dropdown active');
	$('.del').click(function(){
		$(this).delindicator();
	});
	$('.edit').click(function(){
		$(this).editindicator();
	});
});
