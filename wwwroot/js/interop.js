window.himitsuInterop = {
    downloadElementAsPng: async function (elementId, fileName) {
        const el = document.getElementById(elementId);
        if (!el || typeof html2canvas === "undefined") {
            return;
        }
        const canvas = await html2canvas(el, { backgroundColor: "#fdfcf9", scale: 2 });
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName || "himitsu.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};
