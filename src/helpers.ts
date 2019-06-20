const BYTES_PER_GB = 1073741824;
const SIZES = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

export const formatBytes = bytes => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(0)) + " " + SIZES[i];
};

export const formatGbs = gb => {
  const bytes = gb * BYTES_PER_GB;
  return formatBytes(bytes);
};
