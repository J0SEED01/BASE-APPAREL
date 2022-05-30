document.addEventListener('keyup', e => {

    if(document.querySelector('.form__input').validity.valid === false && document.querySelector('.form__input').value !== ''){
        document.querySelector('.form__error').classList.add('form--active')
        document.querySelector('.form__paragraph').classList.add('form--active')
    }    
    else{
        document.querySelector('.form__error').classList.remove('form--active')
        document.querySelector('.form__paragraph').classList.remove('form--active')
    }

})

document.addEventListener('submit', e => {

    e.preventDefault()
    document.querySelector('.processing__sending').classList.add('form--active')
    document.querySelector('.processing__img').classList.add('form--active')
    document.querySelector('.processing__excelent').classList.remove('form--active')

    setTimeout(() => {
        
        document.querySelector('.processing__sending').classList.remove('form--active')
        document.querySelector('.processing__img').classList.remove('form--active')
        
        setTimeout(() => {
            document.querySelector('.processing__excelent').classList.add('form--active')
        },1)

        setTimeout(() => {
            document.querySelector('.processing__excelent').classList.remove('form--active')
            document.querySelector('.apparel__form').reset()

        },2000)

    },2000)
})