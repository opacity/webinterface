export default interface Metadata {
  fileName: string;
  fileExtension: string;
  size: number;
  kind: "folder" | "file";
  uploadedAt: number;
  modifiedAt: number;
}
