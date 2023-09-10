// JavaScript to trigger file input when the box is clicked
document.addEventListener("DOMContentLoaded", function () {
    const uploadBox = document.getElementById("uploadBox");
    const fileInput = document.getElementById("fileUpload");

    // Add a click event listener to the box
    uploadBox.addEventListener("click", function () {
        fileInput.click(); // Trigger the file input click event
    });

    // Listen for file selection in the input
    fileInput.addEventListener("change", function () {
        // Handle file selection here (e.g., display file name)
        const selectedFile = fileInput.files[0];
        if (selectedFile) {
            alert("Selected file: " + selectedFile.name);
        }
    });
});


// submit ur purchase order
// JavaScript to trigger file input when the box is clicked
document.addEventListener("DOMContentLoaded", function () {
    const purchaseOrderBox = document.getElementById("purchaseOrderBox");
    const purchaseOrderInput = document.getElementById("purchaseOrderUpload");

    // Add a click event listener to the purchase order box
    purchaseOrderBox.addEventListener("click", function () {
        purchaseOrderInput.click(); // Trigger the file input click event
    });

    // Listen for file selection in the input
    purchaseOrderInput.addEventListener("change", function () {
        // Handle file selection here (e.g., display file name)
        const selectedFile = purchaseOrderInput.files[0];
        if (selectedFile) {
            alert("Selected file: " + selectedFile.name);
        }
    });
});
