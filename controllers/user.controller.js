const mongoose = require('mongoose');
const User = require('../models/user.model.js');

module.exports.create = (req, res, next) => {
    res.render('user/form', {
        user: new User()
    })
}

module.exports.doCreate = (req, res, next) => {
    const newUser = new User(req.body);

    User.findOne({email: newUser.email})
        .then((user) => {
            if(user) {
                return res.render('user/form'), {
                    user: user,
                    errors: errors.email
                }
            } else {
                newUser.save()
                    .then(() => {
                        return res.redirect('/companies');
                    })
                    .catch(error => {
                        if (error instanceof mongoose.Error.ValidationError) {
                            res.render('user/form'), {
                                user: newUsers,
                                errors: error.errors
                            }
                        }
                        console.error(error)
                    })

            }
        })
        .catch((error) => {
            console.log(error)
          });
}