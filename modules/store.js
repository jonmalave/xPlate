export default {
	site: {
		title: 'Title',
		logo: '',
		description: "A Nuxt.js Boilerplate Project"
	},
	menu: {
		show: false,
		links: [
		{
			name: 'Home',
			icon: 'fa fa-home',
			action: {
				type: 'route',
				value: '/'
			}
		},
		{
			name: 'Photos',
			icon: 'fa fa-images',
			action: {
				type: 'route',
				value: '/photos'
			}
		},			
		{
			name: 'Videos',
			icon: 'fa fa-video',
			action: {
				type: 'route',
				value: '/videos'
			}
		},
		{
			name: 'About',
			icon: 'fa fa-info',
			action: {
				type: 'route',
				value: '/about'
			}
		},
		{
			name: 'Contact',
			icon: 'far fa-envelope',
			action: {
				type: 'route',
				value: '/contact'
			}
		}																	
	]
	},
	route: {
		path: ''
	}	
};