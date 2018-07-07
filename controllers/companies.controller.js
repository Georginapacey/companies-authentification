const mongoose = require('mongoose');
const Company = require('../models/company.model.js');
//add comments model so we can populate
const Comment = require('../models/comments.model.js');

module.exports.list = (req, res, next) => {
    Company.find()
        .then(companies => {
            res.render('companies/index.hbs', {
                companies
            })
        })
        .catch(error => {
            console.error('Erró', error)
        })
}

module.exports.getDetails = (req, res, next) => {
    const id = req.params.id;
    //he cambiado esto a id porque luego el id se usa en los comments y otros sitios y nos va a costar mucho mas
    Company.findById(id)
    .populate('allComments')
    .then ( company => {
        console.log(company);
        res.render('companies/detail.hbs', {
            company,
            comment: new Comment()
        })
    })
    .catch(error => {
        console.error('Erró', error)
    })
/*     const companyCode = req.params.code;
    Company.findOne({code: companyCode})
        .then ( company => {
         
            console.log(company);
            res.render('companies/detail.hbs', {
                company
            })
        })
        .catch(error => {
            console.error('Erró', error)
        }) */


}

module.exports.create = (req,res,next) => {
    res.render("companies/form", {
        company: new Company()
    });
}

module.exports.doCreate = (req, res, next) => {
    let company = new Company(req.body);
    console.log(req.body);
    company.save()
        .then(()=> {    
            res.redirect('/companies');
            console.info('Compañía cargá');
        })
        .catch(error => {
            console.error(error);
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('companies/form', {company: company, errors: error.errors});
            }
        })

}

module.exports.doDelete = (req, res, next) => {
    let id = req.params.id;
    Company.findByIdAndRemove(id)
    .then(()=> {
        res.redirect('/companies');
        console.info('mu bien borrao');
    })
    .catch(error => {
        console.error('pos no sa borrao');
    })

}