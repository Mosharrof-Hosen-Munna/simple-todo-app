const btn = document.getElementById('submit-btn')
const field = document.getElementById('input')
const list = document.getElementById('listGroup')

field.addEventListener('keypress',function(e){
    
    if (e.keyCode === 13) {
        if (field.value) {
            let li = generator(field.value,list)
            list.prepend(li)
            field.value=''
        }else{
            alert('please provided a value')
        } 
    }
})

btn.addEventListener('click',function(){
    
     if (field.value) {
         let li = generator(field.value,list)
         list.prepend(li)
         field.value=''
     }else{
         alert('please provided a value')
     }
})

// function generator(value,ul){
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     let span = document.createElement('span')
//     span.innerHTML = value
//     li.appendChild(span)

//     let deleteBtn = document.createElement('button')
//     deleteBtn.innerHTML = 'delete'
//     deleteBtn.classList= "btn float-right btn-danger"
//     deleteBtn.addEventListener('click', function(){
//         ul.removeChild(li)
//     })
//     li.appendChild(deleteBtn)

//     // let editBtn = 
//     return li
// }
// let input = document.createElement('input')
//     input.setAttribute('type','text')
//     input.setAttribute('placeholder','Enter your edit task')
//     input.value = 'lsjdfa'
//     input.className = 'form-control'
//     input.innerHTML = 'something'
//     console.log(input);

//     document.getElementById('output').appendChild(input)

function generator(value,ul){
    let li = document.createElement('li')
    li.className = 'list-group-item'
    
    let rowDiv = document.createElement('div')
    rowDiv.className = 'row'
    
    let valueDiv= document.createElement('div')
    valueDiv.classList = 'col-10'
    valueDiv.style.width = '700px'
    valueDiv.innerHTML= value
    rowDiv.appendChild(valueDiv)

    let btnDiv = document.createElement('div')
    btnDiv.classList = 'col-2 float-right m-auto'

    let editBtn = document.createElement('button')
    editBtn.classList= 'btn btn-sm m-auto btn-warning'
    editBtn.innerHTML = 'Edit'
    
    editBtn.addEventListener('click',function(){
        editFunc(rowDiv,valueDiv,(input,inputDiv)=>{
            editBtn.classList.add('d-none')

            let updateBtn = document.createElement('button')
            updateBtn.classList= 'btn btn-sm  btn-warning'
            updateBtn.innerHTML = 'Update'

            updateBtn.addEventListener('click',function(){
                valueDiv.classList.remove('d-none')
                valueDiv.innerHTML = input.value
                rowDiv.removeChild(inputDiv)

                updateBtn.classList.add('d-none')
                editBtn.classList.remove('d-none')
            })
            btnDiv.prepend(updateBtn)
        })
    })
    btnDiv.appendChild(editBtn)

    let deleteBtn = document.createElement('button')
    deleteBtn.classList= 'btn btn-sm float-right btn-danger'
    deleteBtn.innerHTML = 'Delete'
    
    deleteBtn.addEventListener('click',function(){
        ul.removeChild(li)
    })
    btnDiv.appendChild(deleteBtn)
    rowDiv.appendChild(btnDiv)

    li.appendChild(rowDiv)
    console.log(li);
    return li
}

function editFunc(row,valueDiv,cb){
    valueDiv.classList.add('d-none')

    let inputDiv = document.createElement('div')
    inputDiv.classList = 'col-10'

    let input = document.createElement('input')
    input.setAttribute('type','text')
    input.setAttribute('placeholder','Enter your edit task')
    input.className = 'form-control'
    input.value = valueDiv.innerHTML
    
    inputDiv.appendChild(input)

    row.prepend(inputDiv)
    console.log(row);
    cb(input,inputDiv)
}