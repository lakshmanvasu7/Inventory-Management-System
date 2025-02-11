$(document).ready(function () {
    loadProducts();

    $("#productForm").submit(function (event) {
        event.preventDefault();
        let product = {
            name: $("#name").val(),
            quantity: $("#quantity").val(),
            price: $("#price").val(),
        };

        $.ajax({
            url: "/add",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(product),
            success: function () {
                loadProducts();
                $("#productForm")[0].reset();
            },
        });
    });
});

function loadProducts() {
    $.get("/products", function (data) {
        $("#productTable").empty();
        let labels = [], quantities = [];

        data.forEach((product) => {
            $("#productTable").append(`
                <tr>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price}</td>
                    <td>
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                </tr>
            `);
            labels.push(product.name);
            quantities.push(product.quantity);
        });

        updateChart(labels, quantities);
    });
}

function deleteProduct(id) {
    $.ajax({
        url: `/delete/${id}`,
        type: "DELETE",
        success: function () {
            loadProducts();
        },
    });
}

// Chart.js Integration
let inventoryChart;
function updateChart(labels, quantities) {
    let ctx = document.getElementById("inventoryChart").getContext("2d");
    if (inventoryChart) {
        inventoryChart.destroy();
    }
    inventoryChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Product Quantity",
                    data: quantities,
                    backgroundColor: "rgba(54, 162, 235, 0.6)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true },
            },
        },
    });
}
