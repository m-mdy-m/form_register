const labels = document.querySelectorAll('.form-input label')
const inputs = document.querySelectorAll('.form-input input')

labels.forEach(label =>{
    label.innerHTML = label.innerText.split('').map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`).join(' ')
})
inputs.forEach(input =>{
    
})