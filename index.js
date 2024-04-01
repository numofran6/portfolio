document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.querySelector("#toggle-popup")
	const pageNav = document.querySelector('#page-nav')
	const popup = document.querySelector('.pop-up')
	const popupLinks = popup.querySelectorAll('a')

	toggleBtn.addEventListener('click', (e) => {
		e.preventDefault();

		popup.classList.toggle('visible')
		pageNav.classList.toggle('visible')
	})

	popupLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			popup.classList.toggle('visible')
			pageNav.classList.toggle('visible')
		})
	})
})