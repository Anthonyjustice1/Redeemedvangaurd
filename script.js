const openbtn = document.querySelector('#openbtn');
const closebtn = document.querySelector('#closebtn')
const navbar = document.querySelector('#navlist')
console.log(navbar)

openbtn.addEventListener('click', (e)=>{
    if (e.target.id === 'openbtn' && navlist.style.right === '-112px') {
        navlist.style.right = '-5px';
        openbtn.style.display = 'none';
        closebtn.style.display = 'block';
    } else {
        navlist.style.right = '-112px'
    }
})

closebtn.addEventListener('click', (e)=> {
    if (e.target.id === 'closebtn' && navlist.style.right === '-5px') {
        navlist.style.right = '-112px';
        closebtn.style.display = 'none';
        openbtn.style.display = 'block';
    } else {
        navlist.style.right = '-5px'
    }
})