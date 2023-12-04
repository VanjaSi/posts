const USER_AVATAR = '/assets/img/avatar.jpg'

const SESSION_CONFIG ={

	name: "userSession",
	secret: "7bb424ce1b29f1af37d0",
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		maxAge: 1000 * 60 * 60 * 12,
	},
} 

module.exports = {USER_AVATAR,SESSION_CONFIG}