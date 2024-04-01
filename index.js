document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector("#toggle-popup")
	const pageNav = document.querySelector('#page-nav')
	const popup = document.querySelector('.pop-up')

	toggleBtn.addEventListener('click', (e) => {
		e.preventDefault();

		popup.classList.toggle('visible')
		pageNav.classList.toggle('visible')
	})
})