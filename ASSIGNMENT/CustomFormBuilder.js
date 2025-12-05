"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    render(containerId) {
        const container = document.getElementById(containerId);
        let html = '<form id="dynamicForm">';
        this.fields.forEach(f => {
            html += `<label>${f.label}: <input type="${f.type}" name="${f.label}"></label><br>`;
        });
        html += '<button type="submit">Submit</button></form>';
        container.innerHTML = html;

        const form = document.getElementById("dynamicForm");
        form.addEventListener("submit", e => {
            e.preventDefault();
            const data = this.getFormData(form);
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        });
    }

    getFormData(form) {
        const data = {};
        this.fields.forEach(f => {
            data[f.label] = form[f.label].value;
        });
        return data;
    }
}

const fb = new FormBuilder([
    {type:'text', label:'Username'},
    {type:'email', label:'Email'},
    {type:'password', label:'Password'}
]);

fb.render("formContainer");
