


function Item(title,description,status){
	this.title = title;
	this.description = description;
	this.status = status;
}

Item.prototype.setTitle = function(title){
	this.title = title;
}
Item.prototype.getTitle = function(){
	return this.title;
}
Item.prototype.setDescription = function(description){
	this.description = description;
}
Item.prototype.getDescription = function(){
	return this.description;
}
Item.prototype.setStatus = function(status){
	this.status = status;
}
Item.prototype.getStatus = function(){
	return this.status;
}
initView = function (){
	//hàm này lấy giá trị từ từ view vào
	
}

var items = [];
var todoItems = [];
var doneItems = [];

creatNewItem = function(){
	var item = getNewItem
}

getNewItem = function(){
	var it = new Item;
	var tit = document.getElementById("input-title").value;
	var des = document.getElementById("input-description").value;
	it.setTitle(tit);
	it.setDescription(des);
	it.setStatus("done");
	todoItems.push(it);
	return it;
	}
	
inflateViewWithItem = function(){

	var item = getNewItem();
	var title = item.getTitle();
	var detail = item.getDescription(); 
	
	//Vẽ ra view 
    var node = document.createElement("LI");
	var position = todoItems.indexOf(item);
	var index = "item-" + position;
	
	var headingIndex = "heading-" + index;
	var descriptionIndex = "description-" + index;
	node.setAttribute("id",index);
	var heading = document.createElement("h4");
		heading.className = "tit";
		var headingContent = document.createTextNode(title);
		heading.appendChild(headingContent);
		heading.setAttribute("id",headingIndex);
		node.append(heading);
	
	var description = document.createElement("P");
		description.className = "des";
		var descriptionContent = document.createTextNode(detail);
		description.appendChild(descriptionContent);
		description.setAttribute("id",descriptionIndex);
		node.append(description);
	
	var editButton = document.createElement("BUTTON");
		var edit = document.createTextNode("Edit");
		editButton.appendChild(edit);
		editButton.className = "btn btn-primary";
		var delIndex = "edit-btn-" + position;
		editButton.setAttribute("id",delIndex);
		editButton.setAttribute("onclick","editItem(this.id)");
	
	var doneButton = document.createElement("BUTTON");
		var edit = document.createTextNode("Done");
		doneButton.appendChild(edit);
		doneButton.className = "btn btn-success";
		var doneIndex = "done-btn-" + position;
		doneButton.setAttribute("id",doneIndex);
		doneButton.setAttribute("onclick","moveItemToDoneTab(this.id)");
	
	var deleteButton = document.createElement("BUTTON");
		var del = document.createTextNode("Delete");
		deleteButton.appendChild(del);
		deleteButton.className = "btn btn-danger";
		var delIndex = "delete-btn-" + position;
		deleteButton.setAttribute("id",delIndex);
		deleteButton.setAttribute("onclick","deleteItem(this.id)");
		
	node.append(editButton);
	node.append(doneButton);
	node.append(deleteButton);
	
	document.getElementById("todo-list").append(node);
	
	
}	

moveItemToDoneTab = function(removedId){
	//Xóa view cũ ở tab to-do
	var tag = removedId.slice(9);
	var removedItemId ="item-" + tag;
	var removedItemView = document.getElementById(removedItemId);
	removedItemView.remove();
	//xử lí dữ liệu ở mảng
	var movedItem = todoItems[tag];
	doneItems.push(movedItem);
	var movedTitle = movedItem.getTitle();
	var movedDetail = movedItem.getDescription(); 
	
	//Xử lí view mới
    var movedNode = document.createElement("LI");
	var movedHeading = document.createElement("h4");
		movedHeading.className = "tit";
		movedNode.setAttribute("id",removedItemId);
		var movedHeadingContent = document.createTextNode(movedTitle);
		movedHeading.appendChild(movedHeadingContent);
		var movedHeadingId = "heading-item-" +tag;
		movedHeading.setAttribute("id",movedHeadingId);
		movedNode.append(movedHeading);
		
	var movedDescription = document.createElement("P");
		movedDescription.className = "des";
		var movedDescriptionContent = document.createTextNode(movedDetail);
		movedDescription.appendChild (movedDescriptionContent);
		var movedDescriptionId = "description-item-" + tag;
		movedDescription.setAttribute("id",movedDescriptionId);
		movedNode.append(movedDescription);
	
		var undoneButton = document.createElement("BUTTON");
		var edit = document.createTextNode("Undone");
		undoneButton.appendChild(edit);
		undoneButton.className = "btn btn-warning";
		var undoneIndex = "undone-btn-" + tag.toString();
		undoneButton.setAttribute("id",undoneIndex);
		undoneButton.setAttribute("onclick","moveItemToTodoTab(this.id)");
		
		var deleteButton = document.createElement("BUTTON");
		var del = document.createTextNode("Delete");
		deleteButton.appendChild(del);
		deleteButton.className = "btn btn-danger";
		var delIndex = "delete-btn-" + tag.toString();
		deleteButton.setAttribute("id",delIndex);
		deleteButton.setAttribute("onclick","deleteItem(this.id)");

	movedNode.append(undoneButton);
	movedNode.append(deleteButton);
	
	document.getElementById("done-list").append(movedNode);
}


moveItemToTodoTab= function(undoneTag){
	var index = undoneTag.slice(11);
	var itemId = "item-" + index;
	//xóa view ở tab done
	
	var removedItemView = document.getElementById(itemId);
	removedItemView.remove();
	
	//Xử lí ở đối tượng
	var undoneItem = todoItems[index];
	var undoneTitle = undoneItem.getTitle();
	var undoneDetail = undoneItem.getDescription(); 
	
	var node = document.createElement("LI");
	var headingIndex = "heading-" + index;
	var descriptionIndex = "description-" + index;
	
	
	node.setAttribute("id",itemId);
	
	var heading = document.createElement("h4");
		heading.className = "tit";
		var headingContent = document.createTextNode(undoneTitle);
		heading.appendChild(headingContent);
		heading.setAttribute("id",headingIndex);
		node.append(heading);
	
	var description = document.createElement("P");
		description.className = "des";
		var descriptionContent = document.createTextNode(undoneDetail);
		description.appendChild(descriptionContent);
		description.setAttribute("id",descriptionIndex);
		node.append(description);
	
	var editButton = document.createElement("BUTTON");
		var edit = document.createTextNode("Edit");
		editButton.appendChild(edit);
		editButton.className = "btn btn-primary";
		var delIndex = "edit-btn-" + index;
		editButton.setAttribute("id",delIndex);
		editButton.setAttribute("onclick","editItem(this.id)");
	
	var doneButton = document.createElement("BUTTON");
		var edit = document.createTextNode("Done");
		doneButton.appendChild(edit);
		doneButton.className = "btn btn-success";
		var doneIndex = "done-btn-" + index;
		doneButton.setAttribute("id",doneIndex);
		doneButton.setAttribute("onclick","moveItemToDoneTab(this.id)");
	
	var deleteButton = document.createElement("BUTTON");
		var del = document.createTextNode("Delete");
		deleteButton.appendChild(del);
		deleteButton.className = "btn btn-danger";
		var delIndex = "delete-btn-" + index;
		deleteButton.setAttribute("id",delIndex);
		deleteButton.setAttribute("onclick","deleteItem(this.id)");
		
	node.append(editButton);
	node.append(doneButton);
	node.append(deleteButton);
	
	document.getElementById("todo-list").append(node);
	
}

deleteItem = function(deleteId){
	var deleteTag = deleteId.slice(11);
	var delItemId = "item-" + deleteTag;
	var delItemView = document.getElementById(delItemId);
	delItemView.remove();
}

editItem = function(editId){
	var editTag = editId.slice(9);
	console.log(editTag);
	
	var editItemId = "item-" + editTag;
	var editItem = todoItems[editTag];
	var a = editItem.getTitle();
	console.log(a);
	
	var span = document.getElementsByClassName("close")[0];
	var modal = document.getElementById('myModal');
    modal.style.display = "block";
	if (event.target == modal) {
			modal.style.display = "none";
	}
	
	var confirmButton = document.getElementById("edit-confirm-btn");
		confirmButton.onclick = function(){
			var tit =document.getElementById("edit-title").value;
			var des =document.getElementById("edit-description").value;
			console.log(tit);
			todoItems[editTag].setTitle(tit);
			todoItems[editTag].setDescription(des);
			//thay đổi view
			var editHeadingId = "heading-item-" + editTag;
			
			var editDescriptionId = "description-item-" + editTag;
			document.getElementById(editHeadingId).innerHTML = tit;
			document.getElementById(editDescriptionId).innerHTML = des;
		}
}



//Nhóm code xử lí modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





