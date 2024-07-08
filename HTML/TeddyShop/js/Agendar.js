let orders = [];

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const order = {
        id: orders.length + 1,
        date: document.getElementById('orderDate').value,
        time: document.getElementById('orderTime').value,
        receiverName: document.getElementById('receiverName').value,
        receiverPhone: document.getElementById('receiverPhone').value,
        payerName: document.getElementById('payerName').value,
        payerPhone: document.getElementById('payerPhone').value,
        address: document.getElementById('address').value,
        neighborhood: document.getElementById('neighborhood').value,
        locality: document.getElementById('locality').value,
        totalAmount: parseFloat(document.getElementById('totalAmount').value).toFixed(2)
    };

    orders.push(order);
    displayOrders();
    this.reset();
});

function displayOrders() {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        const orderHeader = document.createElement('div');
        orderHeader.className = 'order-header';
        orderHeader.innerHTML = `<strong>Pedido ID:</strong> ${order.id} - <strong>Fecha:</strong> ${order.date}`;
        orderItem.appendChild(orderHeader);

        const orderDetails = document.createElement('div');
        orderDetails.className = 'order-details';
        orderDetails.style.display = 'none';
        orderDetails.innerHTML = `
            <p><strong>Fecha:</strong> ${order.date}</p>
            <p><strong>Hora:</strong> ${order.time}</p>
            <p><strong>Nombre de quien recibe:</strong> ${order.receiverName}</p>
            <p><strong>Número de quien recibe:</strong> ${order.receiverPhone}</p>
            <p><strong>Nombre de quien paga:</strong> ${order.payerName}</p>
            <p><strong>Número de quien paga:</strong> ${order.payerPhone}</p>
            <p><strong>Dirección:</strong> ${order.address}</p>
            <p><strong>Barrio:</strong> ${order.neighborhood}</p>
            <p><strong>Localidad:</strong> ${order.locality}</p>
            <p><strong>Total:</strong> $${order.totalAmount}</p>
            <button class="action-button" onclick="editOrder(${order.id})">Modificar</button>
        `;
        orderItem.appendChild(orderDetails);

        orderHeader.addEventListener('click', () => {
            orderDetails.style.display = orderDetails.style.display === 'none' ? 'block' : 'none';
        });

        orderList.appendChild(orderItem);
    });
}

function editOrder(orderId) {
    const order = orders.find(o => o.id === orderId);

    document.getElementById('editOrderId').value = order.id;
    document.getElementById('editOrderDate').value = order.date;
    document.getElementById('editOrderTime').value = order.time;
    document.getElementById('editReceiverName').value = order.receiverName;
    document.getElementById('editReceiverPhone').value = order.receiverPhone;
    document.getElementById('editPayerName').value = order.payerName;
    document.getElementById('editPayerPhone').value = order.payerPhone;
    document.getElementById('editAddress').value = order.address;
    document.getElementById('editNeighborhood').value = order.neighborhood;
    document.getElementById('editLocality').value = order.locality;
    document.getElementById('editTotalAmount').value = order.totalAmount;

    document.getElementById('editContainer').classList.remove('hidden');
}

document.getElementById('editOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderId = parseInt(document.getElementById('editOrderId').value);
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex > -1) {
        orders[orderIndex] = {
            id: orderId,
            date: document.getElementById('editOrderDate').value,
            time: document.getElementById('editOrderTime').value,
            receiverName: document.getElementById('editReceiverName').value,
            receiverPhone: document.getElementById('editReceiverPhone').value,
            payerName: document.getElementById('editPayerName').value,
            payerPhone: document.getElementById('editPayerPhone').value,
            address: document.getElementById('editAddress').value,
            neighborhood: document.getElementById('editNeighborhood').value,
            locality: document.getElementById('editLocality').value,
            totalAmount: parseFloat(document.getElementById('editTotalAmount').value).toFixed(2)
        };
    }

    displayOrders();
    document.getElementById('editContainer').classList.add('hidden');
});

function cancelEdit() {
    document.getElementById('editContainer').classList.add('hidden');
}

function generateReport() {
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = '';

    orders.forEach(order => {
        const orderReport = document.createElement('div');
        orderReport.className = 'order-item';
        orderReport.innerHTML = `
            <p><strong>Pedido ID:</strong> ${order.id}</p>
            <p><strong>Fecha:</strong> ${order.date}</p>
            <p><strong>Hora:</strong> ${order.time}</p>
            <p><strong>Nombre de quien recibe:</strong> ${order.receiverName}</p>
            <p><strong>Número de quien recibe:</strong> ${order.receiverPhone}</p>
            <p><strong>Nombre de quien paga:</strong> ${order.payerName}</p>
            <p><strong>Número de quien paga:</strong> ${order.payerPhone}</p>
            <p><strong>Dirección:</strong> ${order.address}</p>
            <p><strong>Barrio:</strong> ${order.neighborhood}</p>
            <p><strong>Localidad:</strong> ${order.locality}</p>
            <p><strong>Total:</strong> $${order.totalAmount}</p>
        `;
        reportContent.appendChild(orderReport);
    });

    document.getElementById('reportContainer').classList.remove('hidden');
}
