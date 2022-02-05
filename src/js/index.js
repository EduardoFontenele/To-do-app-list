import styles from '../css/styles.scss'

const headerH1 = document.getElementById('header-h1')
window.addEventListener('load', () => {
    headerH1.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], { duration: 1000, fill: 'forwards', easing: 'ease-in' })
})

class CreateTask {
    constructor() {
        this.taskForm = document.querySelector('.task-form')
        this.submitEvent()
        this.results = document.querySelector('.results')
        this.iterator = 0
    }
    
    submitEvent() {
        this.taskForm.addEventListener('submit', e => {
            e.preventDefault()
            this.handleSubmit()
        })

    };

    

    handleSubmit() {
        const taskToDo = document.getElementById('task-to-do')
        const errorDivs =   document.querySelectorAll('.error-div')

        if(!taskToDo.value) {
            this.createError('Cannot insert an empty task')
            for(let errorDiv of errorDivs) {
                errorDiv.remove()
            }
            return
        }

        if(taskToDo.value) {
            this.createTask(taskToDo.value)
            for(let errorDiv of errorDivs) {
                errorDiv.remove()
            }
        }

        this.markDivs()
    };

    markDivs() {
        const deleteBtns = this.results.querySelectorAll('.delete')
        for(let btn of deleteBtns) {
            btn.addEventListener('click', e => {
                const parentDiv = btn.parentNode
                this.deleteDiv(parentDiv)
            })
        }
    }
    
    deleteDiv(div) {
        div.classList.add('remove')
 

        setTimeout(() => {
            if(div.classList.contains('remove')) {
                div.remove()
            }
        }, 900)

    }

    createTask(task) {
        const elDiv = document.createElement('div')
        const elButton = document.createElement('button')

        elDiv.innerHTML = task
        elButton.innerHTML = 'Done'
        elButton.classList.add('delete')
        this.iterator++
        
        elDiv.appendChild(elButton)
        this.results.appendChild(elDiv)

    };

    createError(msg) {
        const errDiv = document.createElement('div')
        errDiv.classList.add('error-div')
        errDiv.innerHTML = msg
        this.results.appendChild(errDiv)
    };
}

const createTasks = new CreateTask