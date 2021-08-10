

const inputField = document.querySelector('#add-new-field');
const submit = document.querySelector('#add');
const taskShow = document.querySelector('#show-task');

submit.addEventListener ('click', () => {
  if(inputField.value.trim()!=0){
    let localItems = JSON.parse( localStorage.getItem('localItem'))
    if(localItems === null){
          taskList = []

    }else{
        taskList = localItems;
    }
    taskList.push(inputField.value)
    localStorage.setItem('localItem', JSON.stringify(taskList)); 
  }

 showItem();
 inputField.value = '';
});

function showItem(){
  let localItems = JSON.parse( localStorage.getItem('localItem'))
  if(localItems === null){
       taskList = []

  }else{
      taskList = localItems;
  }


  let html = '';

  taskList.forEach((data, index )=> {
    

    html += `
    <div class="task-container">
    <p class="task-detail" onclick="done(this)">${index+1 + ". " + data}</p>
    <button class="delete" onClick="deleteItem(${index})">del</button>
    </div>
    `
  })
  taskShow.innerHTML = html;
};


showItem();

function deleteItem(index){
  taskList.splice(index, 1);
  localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
};

function done(d){
  d.classList.toggle('done')
}

function clearTask(){
  localStorage.clear()
  showItem()
  }



