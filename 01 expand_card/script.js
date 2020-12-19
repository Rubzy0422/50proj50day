const panels = document.querySelectorAll('.panel'); //put in array 

panels.forEach((panel)=> {
	// Add Event listner for click
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active'); // add active class

	})

});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}