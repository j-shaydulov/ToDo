const valueTodo = document.querySelector(".form-control");
const addTodo = document.querySelector("#addButton");
const clearTodo = document.querySelector("#clearButton");
const itemTodo = document.querySelector("#todoList");

itemTodo.style.display = 'flex';
itemTodo.style.flexDirection = 'column'
itemTodo.style.gap = '20px'



function TodoTask (){

    let value = valueTodo.value;
    if(value == ''){
        alert("xato");
        return
    }


    const li = document.createElement("li");
    li.style.display = "flex";
    li.style.backgroundColor = "rgb(236, 236, 236)";
    li.style.padding = "20px";
    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";

    const liValue = document.createElement("p");
    liValue.textContent = value;
    liValue.style.fontWeight = 600;
    liValue.style.margin = 0;

    const btns = document.createElement("div");
    btns.style.display = "flex";
    btns.style.gap = "10px";

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-primary");
    editBtn.textContent = "Edit";

    let isEditing = false;
    editBtn.addEventListener('click', ()=>{
        isEditing = !isEditing;
        if(isEditing){
            const editInput = document.createElement('input');
            editInput.value = liValue.textContent;
            liValue.style.display = 'none';
            complateBtn.style.display = "none";
            editBtn.textContent = 'OK'
            deleteBtn.textContent = "Cencel";

            li.prepend(editInput);
        }
        else{
            const input = li.querySelector('input');
            liValue.textContent = input.value;
            input.style.display = 'none'
            liValue.style.display = "flex";
            editBtn.textContent = 'Edit'
            complateBtn.style.display = "flex";
            deleteBtn.textContent = 'Delete'
        }

        
        // const cencel = document.createElement("button");
        // cencel.textContent = "cencel";
        // cencel.classList.add("btn");
        // cencel.classList.remove("btn-primary");
        // cencel.classList.add("btn-warning");
        // cencel.addEventListener('click', ()=>{
        //     // let cValue = valueTodo.value;
        //     editInput.style.display = "none";
        //     cencel.style.display = "none";
        //     liValue.textContent = value;
        // });

        // const ok = document.createElement("button");
        // ok.classList.add("btn");
        // ok.classList.add("btn-primary");
        // ok.textContent = 'OK'
        // ok.addEventListener('click', ()=>{
        //     editInput.style.display = 'none';
        //     liValue.style.display = "flex";
        //     if(editInput.value == ''){
        //         editInput.value = "nothing!"
        //     }
        //     liValue.textContent = editInput.value
        //     ok.style.display = 'none'
        //     cencel.style.display = "none";
        //     editBtn.style.display = "flex";
        //     complateBtn.style.display = "flex";
        //     deleteBtn.style.display = "flex";
        // });

        // btns.prepend(ok);
        // btns.prepend(cencel)
    });

    const complateBtn = document.createElement("button");
    complateBtn.classList.add("btn");
    complateBtn.classList.add("btn-success");
    complateBtn.textContent = "Complate";

    let isComplate = false;
    complateBtn.addEventListener('click', ()=>{
        isComplate = !isComplate;
        if(isComplate){
            complateBtn.classList.remove("btn-success");
            complateBtn.classList.add("btn-warning");
            complateBtn.textContent = "Uncomplate";
            liValue.style.textDecoration = "line-through";
            liValue.style.color = "rgb(202 190 190)";
        }
        else{
            complateBtn.classList.add("btn-success");
            complateBtn.classList.remove("btn-warning");
            complateBtn.textContent = "Complate";
            liValue.style.textDecoration = "none";
            liValue.style.color = "#333";
        }
    })

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', ()=>{
        if(isEditing){
            const input = li.querySelector('input');

            input.style.display = 'none'
            liValue.style.display = "flex";
            complateBtn.style.display = "flex";
            editBtn.textContent = "Edit";
            deleteBtn.textContent = "Delete";

            isEditing = false;
        }
        else{
            li.style.display = "none";
        }
    })


    itemTodo.append(li);

    li.append(liValue);
    li.append(btns);

    btns.append(editBtn);
    btns.append(complateBtn);
    btns.append(deleteBtn);
}

valueTodo.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter') TodoTask();
})



addTodo.addEventListener("click", TodoTask);

addTodo.addEventListener("click", ()=>{
    valueTodo.value = '';
});


clearTodo.addEventListener('click', ()=>{
    itemTodo.innerHTML = ''
})







