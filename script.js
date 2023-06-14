const addTask = document.querySelector('#btn')
const input = document.querySelector('#input')
const list = document.querySelector('#tasklist')



addTask.addEventListener('click', function(){
    const cb = document.createElement("input")
    cb.setAttribute('type','checkbox')
    cb.setAttribute('name','checkbox')
    cb.classList.add('checkbox')

    const text = document.createElement('p')
    text.innerHTML= input.value
    text.classList.add('task-text')

    const btnimg = document.createElement('img')
    btnimg.setAttribute('src','./assets/images/delete.png')
    
    btnimg.classList.add('del-img')

    const btn = document.createElement('button')
    btn.classList.add('del')

    btn.append(btnimg)

    const task = document.createElement('div')
    task.classList.add('task-item')
    task.append(cb,text,btn)

    list.append(task);
    
    btn.addEventListener('click',function(){
        task.remove()
    })
    cb.addEventListener('click',function(){
        if(cb.checked){
            text.style.textDecoration='line-through'
            text.style.textDecorationColor ='#C4F635'
            
        }else{
            text.style.textDecoration='none'
        }
    })
    
    input.value=""
})
