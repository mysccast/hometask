comments = [];
class Comment {
	constructor(username, text) {
		this.username = username != '' ? username : "Аноним";
		this.text = text;
	}
	createDateCommnet() {
		const date = new Date();
		this.time = `${date.getHours()}:${date.getMinutes()}`;
		this.date = `${date.toLocaleDateString('ru')}`;
	}
}
function getComment(){
	let allcomment = '';
	let i = 0;
	for( key of comments){
		allcomment += `<p><b>${key.username}</b> ${key.time} ${key.date}<button onclick = "deleteComment(${i})">Удалить комментарий</button>
		<button onclick = "editComment(${i})">Редактировать комментарий</button></p><p id = "text${i}">${key.text}</p>`;
		i++;
		
	}
	document.getElementById("listcomment").innerHTML = allcomment;
}
clicker = function(){
    name = document.getElementById('comname').value;
    comm = document.getElementById('comtext').value;
    user = new Comment(name, comm);
    user.createDateCommnet();
    comments.push(user);
    getComment();
    
}
function deleteComment(num){
	comments.splice(num, 1);
	getComment();
}
function editComment(num){
	document.getElementById(`text${num}`).innerHTML = `<textarea id = "comm${num}">Ваш комментарий</textarea><button onclick = "saveComment(${num})">Сохранить</button>`
}
function sortByDate(){
	comments.reverse();
	getComment();
}
function saveComment(num){
	comments[num].text = document.getElementById(`comm${num}`).value;
	getComment();
}
document.getElementById('create').addEventListener('click', clicker);
document.getElementById('sortdate').addEventListener('click', sortByDate);
