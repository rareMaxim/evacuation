// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt


function AddCar() {
	new frappe.ui.form.MultiSelectDialog({
		doctype: "Evacuation Auto",
		target: this.cur_frm,
		setters: {
			//	schedule_date: null,
			//	status: 'Pending'
		},
		//	add_filters_group: 1,
		//	date_field: "transaction_date",
		get_query() {
			return {
				filters: null // { docstatus: ['!=', 2] }
			}
		},
		action(selections) {
			console.log(selections);
		}
	});
}
function AddCarAddButton() {
	frappe.ui.form.on('Evacuation Car Request', {
		setup: function (frm) {

			frappe.form.link_formatters['Evacuation Auto'] = function (value, doc) {
				console.log(doc);
				if (doc && doc.model) {

					return value ? brand + ': ' + doc.model : doc.model;
				} else {
					console.log('link formatter: b');
					return value;
				}
			}

		},
		refresh: function (frm) {
			frm.add_custom_button(__('Get User Email Address'), function () {
				frappe.msgprint(frm.doc.email);
			}, __("Utilities"));
		}
	});
}

frappe.ui.form.on("Evacuation Car Request", {
	refresh(frm) {
		console.log(frappe);
	},
});
