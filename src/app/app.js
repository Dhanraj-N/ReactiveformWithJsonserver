document.addEventListener('DOMContentLoaded', function () {
    // Fetch the JSON structure from the server
    fetch('http://localhost:3000/controls')
      .then(response => response.json())
      .then(data => {
        const form = document.getElementById('dynamicForm');
  
        // Create input elements based on the JSON structure
        data.controls.forEach(control => {
          const inputElement = createInputElement(control);
          form.appendChild(inputElement);
        });
  
        // Add event listener for form submission
        form.addEventListener('submit', function (event) {
          event.preventDefault();
  
          const formData = new FormData(event.target);
          const formDataObject = {};
  
          formData.forEach((value, key) => {
            formDataObject[key] = value;
          });
  
          console.log('Form Data:', formDataObject);
        });
      })
      .catch(error => {
        console.error('Error fetching JSON data:', error);
      });
  });
  
  function createInputElement(control) {
    const { name, label, type, value } = control;
    const inputElement = document.createElement(type === 'textarea' ? 'textarea' : 'input');
  
    inputElement.setAttribute('name', name);
    inputElement.setAttribute('placeholder', label);
    inputElement.setAttribute('type', type);
  
    if (type !== 'textarea') {
      inputElement.setAttribute('value', value);
    }
  
    return inputElement;
  }
  