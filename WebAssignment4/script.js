function validateInput(input, regex, errorId) {
    const errorElement = document.getElementById(errorId);
    if (!regex.test(input.value)) {
        input.classList.add('error');
        errorElement.textContent = 'Invalid input';
    } else {
        input.classList.remove('error');
        errorElement.textContent = '';
    }
    checkFormValidity();
}

function checkFormValidity() {
    const inputs = document.querySelectorAll('input[required]');
    const textAreas = document.querySelectorAll('textarea[required]');
    const validInputs = Array.from(inputs).every(input => input.checkValidity() && !input.classList.contains('error'));
    const validTextAreas = Array.from(textAreas).every(textArea => textArea.checkValidity() && !textArea.classList.contains('error'));
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = !(validInputs && validTextAreas);
}

function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const formData = new FormData(document.getElementById('feedbackForm'));
    const table = document.createElement('table');
    formData.forEach((value, key) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `<strong>${key}</strong>`;
        cell2.textContent = value;
    });
    tableContainer.appendChild(table);
    var allInputs = document.querySelectorAll('input');
    var textArea = document.querySelectorAll('textarea')
    textArea.forEach(singleInput => singleInput.value = '');
    allInputs.forEach(singleInput => singleInput.value = '');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.checked = false;
    });
    
}
function addCheckbox() {
    const selection = document.getElementById('selection');
    const selectedOption = selection.options[selection.selectedIndex].value;
    console.log(selectedOption)
    const checkboxContainer = document.getElementById('checkboxContainer');
    checkboxContainer.innerHTML = '';

    if(selectedOption == 'Coffee'){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'dynamicCheckbox';
        checkbox.value = `8oz`;
        checkboxContainer.appendChild(checkbox); 
        const label = document.createElement('label');
        label.textContent = `Was it decaf?`;
        checkboxContainer.appendChild(label);
        const checkbox1 = document.createElement('input');
        checkbox1.type = 'checkbox';
        checkbox1.name = 'dynamicCheckbox';
        checkbox1.value = `10oz`;
        checkboxContainer.appendChild(checkbox); 
        const label1 = document.createElement('label');
        label1.textContent = `8oz`;
        checkboxContainer.appendChild(label);
    }
    
    if(selectedOption == 'Tea'){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'dynamicCheckbox';
        checkbox.value = `8oz`;
        checkboxContainer.appendChild(checkbox); 
        const label = document.createElement('label');
        label.textContent = `Was it with milk or creamer?`;
        checkboxContainer.appendChild(label);

        const checkbox1 = document.createElement('input');
        checkbox1.type = 'checkbox';
        checkbox1.name = 'dynamicCheckbox';
        checkbox1.value = `10oz`;
        checkboxContainer.appendChild(checkbox); 
        const label1 = document.createElement('label');
        label1.textContent = `10oz`;
        checkboxContainer.appendChild(label);
    }
    
    if(selectedOption == 'Donut'){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'dynamicCheckbox';
        checkbox.value = `8oz`;
        checkboxContainer.appendChild(checkbox); 
        const label = document.createElement('label');
        label.textContent = `Was it stuffed?`;
        checkboxContainer.appendChild(label);
    }
    
    if(selectedOption == 'Pastry'){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'dynamicCheckbox';
        checkbox.value = `8oz`;
        checkboxContainer.appendChild(checkbox); 
        const label = document.createElement('label');
        label.textContent = `Was it a cake?`;
        checkboxContainer.appendChild(label);
    }

    
    if(selectedOption == 'Soft Drink'){
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'dynamicCheckbox';
        checkbox.value = `8oz`;
        checkboxContainer.appendChild(checkbox); 
        const label = document.createElement('label');
        label.textContent = `Was it sugar free?`;
        checkboxContainer.appendChild(label);
    }

        // for (let i = 0; i < 3; i++) {
        //     const checkbox = document.createElement('input');
        //     checkbox.type = 'checkbox';
        //     checkbox.name = 'dynamicCheckbox';
        //     checkbox.value = `Checkbox ${i+1}`;
        //     checkboxContainer.appendChild(checkbox);

        //     const label = document.createElement('label');
        //     label.textContent = `Checkbox ${i+1}`;
        //     checkboxContainer.appendChild(label);
        // }
}