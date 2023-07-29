# Copyright (c) 2023, Maxim Sysoev and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.model.document import Document


class EvacuationCarRequest(Document):
    def add_car(self, car):
        new_car = frappe.new_doc('Evacuation Car Response')
        new_car.date = car.date
        new_car.car = car.car
        new_car.insert()
        
    def on_submit(self):
        print('66666666666666666666666')
        cars = frappe.get_all('Evacuation Car Request Table',
                       filters = dict(parent=self),
                       fields = ['date', 'car'])
        for car in cars:
            print(car)
            self.add_car(car)
        
