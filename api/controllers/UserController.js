/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new:function (req,res) {
		res.view();
	},
	create:function(req, res) {
		var userObj={
			name: req.param('name'),
			lastname:req.param('lastname'),
			age:req.param('age'),
			email:req.param('email'),
			city:req.param('city'),
			neighbor: req.param('neighbor'),
			phone:req.param('phone')
		}

		//console.log(userObj);
		User.create(userObj,function (err, user) {
			// body...
			if(err)
				return res.redirect('/user/new');
			res.redirect('/user/show/'+user.id);
		});
	},show:function (req, res, next) {
		// body...
		User.findOne(req.param('id'),function (err,user) {
			if(err)
				return next(err);
			res.view({
				user:user
			});
		});
	}
};

