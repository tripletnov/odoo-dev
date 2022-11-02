from odoo import models, fields, api

class ModelTest(models.Model):
    _name='model.test'
    _description='for testing models and views'
    name = fields.Char('Title', required=True)
    state = fields.Selection([
        ('draft', 'Unavailable'),
        ('available', 'Available'),
        ('borrowed', 'Borrowed'),
        ('lost', 'Lost')],
        'State', default="draft")

    @api.model
    def do_something(self):
        pass