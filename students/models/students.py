from odoo import models, fields, api
from dateutil.relativedelta import relativedelta
from datetime import date



class CustomStudent(models.Model):
    _name = 'custom.students'
    _description = 'Students'

    
    name = fields.Char(string='Name')
    date_of_birth = fields.Date()
    age = fields.Integer(compute="compute_age")
    class_name = fields.Char()

    @api.depends('date_of_birth')
    def compute_age(self):
        delta = relativedelta(date.today(), self.date_of_birth)
        self.age = delta.years
