# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class my_library(models.Model):
#     _name = 'my_library.my_library'
#     _description = 'my_library.my_library'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

from odoo import models, fields

class LibraryBook(models.Model):
    _name = 'library.book'
    _description = 'Library Book'
    _order = 'date_release desc, name'
    _rec_name = 'short_name'
    
    name = fields.Char('Title', required=True)
    short_name = fields.Char('Short Title', required=True)
    date_release = fields.Date('Release Date')
    author_ids = fields.Many2many('res.partner', string='Authors')

    notes = fields.Text('Internal Notes')
    state = fields.Selection(
    [('draft', 'Not Available'),
    ('available', 'Available'),
    ('lost', 'Lost')],
    'State')
    description = fields.Html('Description')
    cover = fields.Binary('Book Cover')
    out_of_print = fields.Boolean('Out of Print?')
    date_release = fields.Date('Release Date')
    date_updated = fields.Datetime('Last Updated')
    pages = fields.Integer('Number of Pages')
    reader_rating = fields.Float(
    'Reader Average Rating',
    digits=(14, 4), # Optional precision decimals,
    )
    cost_price = fields.Float('Book Cost', digits='Book Price')

    currency_id = fields.Many2one('res.currency', string='Currency')
    retail_price = fields.Monetary('Retail Price',# optional: currency_field='currency_id',
    )
    # def log_all_library_members(self):
    #     # This is an empty recordset of model library.
    #     # member
    #     library_member_model = self.env['library.member']
    #     all_members = library_member_model.search([])
    #     print("ALL MEMBERS:", all_members)
    #     return True