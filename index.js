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

	// Projects Navigation
	const projectLinks = document.querySelectorAll('.project-nav a')
	const projectInfo = document.querySelector('.project-info')
	const tourBuddy = projectInfo.querySelector('#tour-buddy')
	const greenShop = projectInfo.querySelector('#green-shop')
	const churchBlog = projectInfo.querySelector('#church-blog')
	const bookingApp = projectInfo.querySelector('#tricia-kissi')

	projectLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault();

			projectLinks.forEach(link => {
				link.classList.remove('active')
			})

			e.target.classList.add('active')

			const currentLink = e.target.getAttribute('id')

			if (currentLink === 'tour-buddy') {
				tourBuddy.classList.add('visible');
				greenShop.classList.remove('visible');
				churchBlog.classList.remove('visible');
				bookingApp.classList.remove('visible');
			} else if (currentLink === 'green-shop') {
				tourBuddy.classList.remove('visible');
				greenShop.classList.add('visible');
				churchBlog.classList.remove('visible');
				bookingApp.classList.remove('visible');
			} else if (currentLink === 'church-blog') {
				tourBuddy.classList.remove('visible');
				greenShop.classList.remove('visible');
				churchBlog.classList.add('visible');
				bookingApp.classList.remove('visible');
			} else if (currentLink === 'tricia-kissi') {
				tourBuddy.classList.remove('visible');
				greenShop.classList.remove('visible');
				churchBlog.classList.remove('visible');
				bookingApp.classList.add('visible');
			}
		})
	})
})
