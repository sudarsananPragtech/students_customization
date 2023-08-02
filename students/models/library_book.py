from odoo import models, fields, api

class LibraryBooks(models.Model):
    _name = 'custom_library.books'
    _description = 'library_books'

    name = fields.Char(string="Book name")
    image = fields.Image()
    author_id = fields.Many2one('custom_library.author')
    current_stock = fields.Integer(readonly="1")
    publication_date = fields.Date()
    ISBN = fields.Char(string="ISBN")
    rate = fields.Integer(string="Price")
    inventory_id = fields.Many2one('custom_library.inventory')
    genere = fields.Selection([('horror','Horror'),
                               ('biography','Biography'),
                               ('auto_biography','Auto biography'),
                               ('novel','Novel'),
                               ('thriller','Thriller'),
                               ('fiction','Fiction'),
                               ('narrative','Narrative'),
                               ('science_fiction','Science fiction'),
                               ('romance','Romance'),
                               ('fantacy','Fantacy'),
                               ('adults_only','Adults only'),
                               ('short_story','Short story'),
                               ('humor','Humor'),
                               ('poety','Poety'),
                               ('history','History'),
                               ('satire','Satire'),
                               ('mystery','Mystery'),])
    status = fields.Selection([('available','Available'),
                               ('reserved','Not Available')])
    
    @api.model
    def create(self, vals):
        created = super(LibraryBooks, self).create(vals)
        if created.current_stock == 0:
            created.status = 'reserved'
            self.env['custom_library.stock'].create({
                'book_id' : created.id
            })
            

        return created