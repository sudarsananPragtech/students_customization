from odoo import models, fields, api


class LibrarySelectBooks(models.Model):
    _name = 'custom_library.books.sales'
    _description = 'custom_library_sales_books'

    book_id = fields.Many2one('custom_library.books')
    author = fields.Char(related='book_id.author_id.name')
    rate = fields.Integer(related="book_id.rate")
    sales = fields.Many2one('custom_library.sales')
    taken_count = fields.Integer()

    @api.model
    def create(self, vals):
        created = super(LibrarySelectBooks, self).create(vals)
        for books in created.book_id:
            created.book_id.current_stock -= created.taken_count     #type: ignore
        return created


class LibrarySales(models.Model):
    _name = 'custom_library.sales'
    _description = 'library_book_sales'


    sales_book_ids = fields.One2many('custom_library.books.sales','sales', string="Book name")
    purchase_date = fields.Date(string="Purchased Date", required="1")
    returned_date = fields.Date(string="Returened Date", readonly="1")



