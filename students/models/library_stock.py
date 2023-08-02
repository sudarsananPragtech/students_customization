from odoo import models, fields, api


class LibraryStock(models.Model):
    _name = 'custom_library.stock'
    _description = 'custom_library_stock'

    book_id = fields.Many2one('custom_library.books', string="Book name")
    image = fields.Image(related='book_id.image')
    author_name = fields.Char(related="book_id.author_id.name")
    current_stock = fields.Integer(related="book_id.current_stock")
    book_rate = fields.Integer(related="book_id.rate")