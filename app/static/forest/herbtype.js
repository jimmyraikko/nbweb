$.fn.additem=function(){
	$('#pnl-form').attr('style','');
	$('#pnl-form #id').val('0');
	$('#pnl-form #chnname').val(null);
	$('#pnl-form #latinname').val(null);
	$('#pnl-form #imgurl').val(null);
	$('#pnl-form .panel-heading').text('添加草本植物种类');
}

$.fn.edititem=function(){
	$('#pnl-form').attr('style','');
	var row=$(this).parent().parent();
	var id=row.find('#typeid').text();
	var chnname=row.find('#chnname').text();
	var latinname=row.find('#latinname').text();
	var imgurl=row.find('#imgurl').attr('href');
	$('#pnl-form #id').val(id);
	$('#pnl-form #chnname').val(chnname);
	$('#pnl-form #latinname').val(latinname);
	$('#pnl-form #imgurl').val(imgurl);
	$('#pnl-form #img1').attr('src',imgurl);
	$('#pnl-form .panel-heading').text('编辑草本植物种类数据');
}

$.fn.delitem=function(){
	$('.modal-body #del-message').text('确认删除草本植物 <'+$(this).attr('data-whatever')+'> 及其所有数据？');
	var row=$(this).parent().parent();
	var id=row.find('#typeid').text();
	var chnname=row.find('#chnname').text();
	$('.modal-body #del-id').text(id);
	$('.modal-body #del-name').text(chnname);
}

$.fn.showimg=function(){
	var row=$(this).parent().parent();
	var imgurl=row.find('#imgurl').attr('data-whatever')
	$('#imgModal #showimg').attr('src', imgurl);
}

$.fn.imgUpload=function(){
	$.ajaxFileUpload({
		url:'imgupload',
		secureuri:false,
		fileElementId:'file1',
		dataType:'json',
		success:function(data,status)
		{
			$("#img1").attr("src",data.imgurl);
			$("#pnl-form #imgurl").val(data.imgurl);
		},
		error:function(data,status,e)
		{
			alert(e);
		}
	});
	return false;
}

$.fn.checkerror=function(){
	$(this).attr('style','');
	if($(this).find('#id').val()=='0'){
		$(this).find('.panel-heading').text('添加草本植物种类');
	}else{
		$(this).find('.panel-heading').text('编辑草本植物种类数据');
	}
}
	
$(document).ready(function(){
	$('#menu-forest').attr('class','dropdown active');
	$('.error-info').parent().parent().parent().parent().checkerror();
	$('#pnl-form #imgurl').attr('style','display:none;');
	$('#btn-add').click(function(){
		$('#btn-add').additem();
	});
	$('.del').click(function(){
		$(this).delitem();
	});
	$('.edit').click(function(){
		$(this).edititem();
	});
	$('#herbtypes #imgurl').click(function(){
		$(this).showimg();
	});
	$('#btn-cancel').click(function(){
		$('#pnl-form').attr('style','display:none;');
	});
	$('#del-confirm').click(function(){
		var typeid=$('.modal-body #del-id').text();
		var typename=$('.modal-body #del-name').text();
		$.post('delherbtype',{
			id:typeid,
			name:typename
		},
		function(result){
			if(result=='fail')
			{
			}
			else
			{
				$('#herbtypes').text("");
				$('#herbtypes').append(result);
				$('#btn-add').click(function(){
					$('#btn-add').additem();
				});
				$('.del').click(function(){
					$(this).delitem();
				});
				$('.edit').click(function(){
					$(this).edititem();
				});
				$('#herbtypes #imgurl').click(function(){
					$(this).showimg();
				});
			}
		});	
	});
	$('#btn-upload').click(function(){
		$(this).imgUpload();
	});
});
