document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value;
    const engine = document.getElementById("engineSelect").value;
    window.open(engine + encodeURIComponent(query), "_blank");
});
