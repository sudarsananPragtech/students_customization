from odoo import models, fields, api


class LibraryBooksBuy(models.Model):
    _name = 'custom_library.inventory.buy'
    _description = 'custom_library_books_buy'

    book_id = fields.Many2one('custom_library.books')
    author = fields.Char(related='book_id.author_id.name')
    purchased_count = fields.Integer()
    inventory_id = fields.Many2one('custom_library.inventory')

    @api.model
    def create(self, vals):
        created = super(LibraryBooksBuy, self).create(vals)
        for books in created.book_id:                               #type: ignore
                created.book_id.status = 'available'                #type: ignore
                created.book_id.current_stock += created.purchased_count     #type: ignore
        return created

class LibraryInventory(models.Model):
    _name = 'custom_library.inventory'
    _description = 'library_inventory'

    book_ids = fields.One2many('custom_library.inventory.buy','inventory_id',string="Books")
    date = fields.Date(string='Date', required=True,default = lambda self: fields.Datetime.now())
