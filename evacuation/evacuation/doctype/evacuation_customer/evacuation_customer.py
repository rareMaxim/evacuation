# Copyright (c) 2023, Maxim Sysoev and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class EvacuationCustomer(Document):
	def before_save(self):
		self.full_name = f'{self.last_name} {self.first_name} {self.middle_name}'
