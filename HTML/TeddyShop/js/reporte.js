document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const date = document.getElementById('date').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
   
    const table = document.getElementById('reportTable');
    const newRow = table.insertRow();
   
    const dateCell = newRow.insertCell(0);
    const titleCell = newRow.insertCell(1);
    const descriptionCell = newRow.insertCell(2);
   
    dateCell.textContent = date;
    titleCell.textContent = title;
    descriptionCell.textContent = description;
   
    document.getElementById('reportForm').reset();
});