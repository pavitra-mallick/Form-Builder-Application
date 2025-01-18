document.getElementById("add-field-btn").addEventListener("click", function() {
    const fieldType = document.getElementById("field-type").value;
    const fieldLabel = document.getElementById("field-label-input").value;

    if(fieldLabel.trim() === ""){
        alert("Please enter a label!");
        return;
    }

    const form = document.getElementById("preview-form");
    const fieldWrapper = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = fieldLabel;
    fieldWrapper.appendChild(label);

    let input;
    switch (fieldType) {
        case 'text-input':
            input = document.createElement('input');
            input.type = "text";
            break;

        case 'checkbox':
            input = document.createElement('input');
            input.type = "checkbox";
            break;
        case 'radio-btn':
            input = document.createElement('input');
            input.type = "radio";
            break;
        default:
            break;
    }

    fieldWrapper.appendChild(input);
    form.appendChild(fieldWrapper);

    document.getElementById('field-label-input').value = '';
})