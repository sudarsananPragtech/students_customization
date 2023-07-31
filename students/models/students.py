from odoo import models, fields, api

class CustomStudent(models.Model):
    _name = 'custom.students'
    _description = 'Students'

    
    name = fields.Char(string='Name')
    age = fields.Integer()
    class_name = fields.Char()