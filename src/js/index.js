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
        this.event()
        this.results = document.querySelector('.results')
    }
    
    event() {
        this.taskForm.addEventListener('submit', e => {
            e.preventDefault()
            this.handleSubmit()
        })
    }

    handleSubmit() {
        const taskToDo = document.getElementById('task-to-do').value
        const errorDivs =   document.querySelectorAll('.error-div')

        if(!taskToDo) {
            this.createError('Cannot insert an empty task')
        }

        for(let errorDiv of errorDivs) {
            errorDivs[0].remove()
        }
    }

    createError(msg) {
        const errDiv = document.createElement('div')
        errDiv.classList.add('error-div')
        errDiv.innerHTML = msg
        this.results.appendChild(errDiv)
    }

}

const createTasks = new CreateTask