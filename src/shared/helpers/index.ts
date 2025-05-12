export const dataURLToBlob = (dataURL: string): Blob => {
  try {
    const [header, base64Data] = dataURL.split(",");
    const mimeType = header.match(/:(.*?);/)?.[1] || "application/octet-stream";
    console.log(mimeType);

    if (!base64Data) {
      throw new Error("Invalid Data URL: No base64 data found");
    }

    const binaryString = atob(base64Data);

    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return new Blob([bytes], { type: mimeType });
  } catch (error) {
    console.error("Error converting Data URL to Blob:", error);
    throw error;
  }
};

export const dataURLToFile = (dataURL: string): File => {
  try {
    const [header, base64Data] = dataURL.split(",");
    const mimeType = header.match(/:(.*?);/)?.[1] || "application/octet-stream";
    console.log(mimeType);

    if (!base64Data) {
      throw new Error("Invalid Data URL: No base64 data found");
    }

    const binaryString = atob(base64Data);

    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return new File([bytes], "test.txt", { type: mimeType });
  } catch (error) {
    console.error("Error converting Data URL to Blob:", error);
    throw error;
  }
};
