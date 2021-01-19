const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
	const triggerBot = (window.innerHeight / 5 * 4)
	boxes.forEach(box=> {
		const boxTop = box.getBoundingClientRect().top

		// top of box < trigBot --> add class
		if(boxTop < triggerBot) {
			box.classList.add('show');
		}
		else {
			box.classList.remove('show');
		}
	})

}