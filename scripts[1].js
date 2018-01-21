function deleteItem() {
	$(this).remove();
}

$(function(){
	$(document).on('click', '.delete', deleteItem);
});