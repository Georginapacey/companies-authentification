const createError = require('http-errors');
const mongoose = require('mongoose');
const Company = require('../models/company.model');
const Comment = require('../models/comments.model');

module.exports.doCreate = (req, res, next) => {
    const id = req.body.company;

    Company.findById(id)
        .then((company) => {
            let comment = new Comment({
                title: req.body.title,
                text: req.body.text,
                company: company._id
            });

            comment.save()
                //siempre tiene que haber un then y un catch o puede saltar al catch de fuera?
                .then(() => {
                    company.allComments.push(comment);
                    return company.save();
                })
                .then(()=> {
                    //it will be easier if we can change the route to /id
                    res.redirect(`/companies/${id}`)
                })
        })
        .catch(error => console.error('Un mohón pa ti: ' + error))
}