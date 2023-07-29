// Copyright (c) 2023, Maxim Sysoev and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Evacuation Auto", {
// 	refresh(frm) {

// 	},
// });
frappe.form.link_formatters['Evacuation Auto'] = function (value, doc) {
    console.log('link formatter');
    if (doc && doc.model) {
        return value ? brand + ': ' + doc.model : doc.model;
    } else {
        return value;
    }
}