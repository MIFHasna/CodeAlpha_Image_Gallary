let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

next.addEventListener('click',function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.imgSlides').appendChild(items[0])
})
previous.addEventListener('click',function(){
	let items = document.querySelectorAll('.item')
	document.querySelector('.imgSlides').prepend(items[items.length-1])
})