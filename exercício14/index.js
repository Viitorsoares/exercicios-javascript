function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.text = text
    return label 
}

function createInput(id, value, name, type= 'text', placeholder = '' ) {
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const devFirm = document.getElementById('devFirm')
const developers = []
let inputRows = 0 

addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow' + rowIndex
    newRow.className =  'inputRow'

    const techNameLabel = createLabel('Nome: ', 'TechName-', + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    newRow.append(
        techNameLabel, techNameInput
    )

    stackInputs.appendChild(newRow)
})