    // Read query params
    const params = new URLSearchParams(window.location.search);
    const detailsEl = document.getElementById("reviewDetails");

    const fields = [
      { key: "product", label: "Product ID" },
      { key: "rating", label: "Rating" },
      { key: "installDate", label: "Installed On" },
      { key: "features", label: "Features" },
      { key: "writtenReview", label: "Review" },
      { key: "userName", label: "Your Name" }
    ];

    // Build details list
    let html = "<ul>";
    fields.forEach(f => {
      const vals = params.getAll(f.key);
      const val = vals.length ? vals.join(", ") : "—";
      html += `<li><strong>${f.label}:</strong> ${val}</li>`;
    });
    html += "</ul>";
    detailsEl.innerHTML = html;

    // Update and display submission counter
    let count = parseInt(localStorage.getItem("reviewCount") || "0", 10);
    count += 1;
    localStorage.setItem("reviewCount", count);
    document.getElementById("counter").textContent =
      `You have submitted ${count} review${count === 1 ? "" : "s"}.`;