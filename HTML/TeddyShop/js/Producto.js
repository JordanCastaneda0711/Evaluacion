document.addEventListener('DOMContentLoaded', () => {
    const initialCategories = ['Peluches', 'Rosados'];

    const categorySelect = document.getElementById('productCategory');
    const categoryTable = document.getElementById('categoryTable');

    initialCategories.forEach(category => {
        const newOption = document.createElement('option');
        newOption.value = category;
        newOption.textContent = category;
        categorySelect.appendChild(newOption);

        const newRow = categoryTable.insertRow();
        const categoryCell = newRow.insertCell(0);
        const actionsCell = newRow.insertCell(1);
        categoryCell.textContent = category;
        actionsCell.innerHTML = '<button class="action-button" onclick="deleteCategory(this)">Eliminar</button>';
    });
});

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;
    const editingProductId = document.getElementById('editingProductId').value;

    const table = document.getElementById('productTable');

    if (editingProductId) {
        // Update the existing product row
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].cells[0].textContent === editingProductId) {
                rows[i].cells[0].textContent = productId;
                rows[i].cells[1].textContent = productName;
                rows[i].cells[2].textContent = productDescription;
                rows[i].cells[3].textContent = `$${parseFloat(productPrice).toFixed(2)}`;
                rows[i].cells[4].textContent = productCategory;
                break;
            }
        }
        document.getElementById('editingProductId').value = '';
        document.querySelector('#productForm button').textContent = 'Agregar Producto';
    } else {
        // Add a new product row
        const newRow = table.insertRow();

        const idCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);
        const descriptionCell = newRow.insertCell(2);
        const priceCell = newRow.insertCell(3);
        const categoryCell = newRow.insertCell(4);
        const actionsCell = newRow.insertCell(5);

        idCell.textContent = productId;
        nameCell.textContent = productName;
        descriptionCell.textContent = productDescription;
        priceCell.textContent = `$${parseFloat(productPrice).toFixed(2)}`;
        categoryCell.textContent = productCategory;
        actionsCell.innerHTML = `
            <button class="edit-button" onclick="editProduct(this)">Editar</button>
            <button class="action-button" onclick="deleteProduct(this)">Eliminar</button>
        `;
    }

    document.getElementById('productForm').reset();
});

document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newCategory = document.getElementById('newCategory').value;
    const categorySelect = document.getElementById('productCategory');
    const table = document.getElementById('categoryTable');
    const newRow = table.insertRow();

    const categoryCell = newRow.insertCell(0);
    const actionsCell = newRow.insertCell(1);

    categoryCell.textContent = newCategory;
    actionsCell.innerHTML = '<button class="action-button" onclick="deleteCategory(this)">Eliminar</button>';

    const newOption = document.createElement('option');
    newOption.value = newCategory;
    newOption.textContent = newCategory;
    categorySelect.appendChild(newOption);

    document.getElementById('categoryForm').reset();
});

function deleteProduct(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function deleteCategory(button) {
    const row = button.parentElement.parentElement;
    const categoryName = row.cells[0].textContent;
    const categorySelect = document.getElementById('productCategory');
    for (let i = 0; i < categorySelect.options.length; i++) {
        if (categorySelect.options[i].value === categoryName) {
            categorySelect.remove(i);
            break;
        }
    }
    row.remove();
}

function editProduct(button) {
    const row = button.parentElement.parentElement;
    const productId = row.cells[0].textContent;
    const productName = row.cells[1].textContent;
    const productDescription = row.cells[2].textContent;
    const productPrice = row.cells[3].textContent.replace('$', '');
    const productCategory = row.cells[4].textContent;

    document.getElementById('productId').value = productId;
    document.getElementById('productName').value = productName;
    document.getElementById('productDescription').value = productDescription;
    document.getElementById('productPrice').value = productPrice;
    document.getElementById('productCategory').value = productCategory;
    document.getElementById('editingProductId').value = productId;

    document.querySelector('#productForm button').textContent = 'Actualizar Producto';
}
