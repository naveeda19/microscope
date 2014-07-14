if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducting Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/'
	});
	Posts.insert({
		title: 'Meteor',
		author: 'Tom Coleman',
		url: 'http://sachagreif.com/'
	});
	Posts.insert({
		title: 'The Meteor Book',
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com/'
	});
}