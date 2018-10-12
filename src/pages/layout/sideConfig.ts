export const menus = [
	{
		item: '待审核',
		icon: 'file',
		link: '/home'
	},
	{
		item: '重点关注',
		icon: 'team',
		children: [
			{
				item: '被举报',
				link: '/page_one'
			},
			{
				item: '传播过高',
				link: '/page_two'
			},
			{
				item: '移交上级',
				link: '/page_three'
			}
		]
	}
]