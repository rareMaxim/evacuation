# Copyright (c) 2023, Maxim Sysoev and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class EvacuationAuto(Document):
	#this method will run every time a document is saved
    def before_save(self):
        self.full_name = f'{self.brand} {self.model}'

