from odoo import models, fields, api

class Student(models.Model):
    _name = 'custom.student'
    _description = 'Student'

    
    name = fields.Char(string='Name')
    age = fields.Integer(compute="compute_age",store=True)
    class_name = fields.Char()