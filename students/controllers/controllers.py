from odoo import http
from odoo.http import request

class NewCustomWebsiteForm(http.Controller):
    @http.route(['/new-student-registration'], type='http', auth="public", website=True)
    def custuom_template_loadig(self):
        return request.render('students.custom_student_registration_form')  # type: ignore