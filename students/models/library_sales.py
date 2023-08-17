from odoo import models, fields, api
from odoo.exceptions import ValidationError



class LibrarySelectBooks(models.Model):
    _name = 'custom_library.books.sales'
    _description = 'custom_library_sales_books'

    book_id = fields.Many2one('custom_library.books')
    author = fields.Char(related='book_id.author_id.name')
    rate = fields.Integer(related="book_id.rate")
    sales = fields.Many2one('custom_library.sales')
    taken_count = fields.Integer()
    total = fields.Integer(readonly=1)



class LibrarySales(models.Model):
    _name = 'custom_library.sales'
    _description = 'library_book_sales'


    student_id = fields.Many2one('custom.students')
    sales_book_ids = fields.One2many('custom_library.books.sales','sales', string="Book name")
    purchase_date = fields.Date(string="Purchased Date", required="1",default = lambda self: fields.Datetime.now())
    returned_date = fields.Date(string="Returened Date", readonly="1")


    @api.model
    def create(self, vals):
        created  = super(LibrarySales, self).create(vals)
        for book in created.sales_book_ids:
            book.total = book.taken_count * book.rate       #type: ignore
            if book.book_id.current_stock == 0:      #type: ignore
                raise ValidationError(f"The selected book {book.book_id.name} is not in stock....!")        #type: ignore
            elif book.taken_count > book.book_id.current_stock:                 #type: ignore
                raise ValidationError(f"The quantity you have selected for {book.book_id.name} is not available.....!") #type: ignore
            elif book.taken_count == 0:              #type: ignore
                raise ValidationError(f"You must take atleast 1 {book.book_id.name} to add....")       #type: ignore
            book.book_id.current_stock -= book.taken_count        #type: ignore
            if book.book_id.current_stock == 0:                   #type: ignore
                book.book_id.status = 'reserved'                  #type: ignore
        return created


