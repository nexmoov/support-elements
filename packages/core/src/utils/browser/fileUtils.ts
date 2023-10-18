export const downloadFile = ({
  data,
  fileName,
  fileType,
}: {
  data: string;
  fileName: string;
  fileType: "json" | "csv";
}) => {
  const type = `text/${fileType}`;
  const blob = new Blob([data], { type });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = `${fileName}.${fileType}`;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};
