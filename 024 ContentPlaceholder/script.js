const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
	header.innerHTML ='<img src="https://wallpapercave.com/wp/wp3988316.png" alt="" />'
	title.innerHTML = 'Hi I\'m a programmer'
	excerpt.innerHTML ='yeah spagetti, I\'m used to it by now'
	profile_img.innerHTML ='<img src="https://wallpapercave.com/wp/wp5335767.jpg" alt="" />'
	name.innerHTML = 'Bad dev'
	date.innerHTML = 'Jan 01, 2020'

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
