from odoo import models, fields, api

class LibraryAuthor(models.Model):
    _name = 'custom_library.author'
    _description = 'library_Author'

    name = fields.Char(string="Author name")
    date_of_birth = fields.Date()
    gender = fields.Selection([('male','Male'),('female','Female')])
    image = fields.Image()