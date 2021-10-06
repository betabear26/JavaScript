//using selectors inside the element
// traversing the dom


// Traversing the DOM
/* const btns = document.querySelectorAll(".question-btn")

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const question = e.currentTarget.parentElement.parentElement
		question.classList.toggle('show-text')
	})
}) */

// Using selectors inside elements
const questions = document.querySelectorAll('.question')

questions.forEach((qtn) => {
	const btn = qtn.querySelector('.question-btn')
	btn.addEventListener('click', (e) => {
		qtn.classList.toggle('show-text')
	})
})