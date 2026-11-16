const form = document.querySelector(".contact-form");

if (form) {
    const fields = form.querySelectorAll("input, textarea");

    fields.forEach((field) => {
        const error = document.getElementById(`${field.id}-error`);

        field.addEventListener("invalid", () => {
            field.setAttribute("aria-invalid", "true");
            error.textContent = field.validity.valueMissing
                ? "This field is required."
                : "Enter a valid email address.";
        });

        field.addEventListener("input", () => {
            if (field.validity.valid) {
                field.setAttribute("aria-invalid", "false");
                error.textContent = "";
            }
        });
    });
}
