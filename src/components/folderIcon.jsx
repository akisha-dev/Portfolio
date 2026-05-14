import "./folderIcon.css";


export default function FolderIcon({ color = "#f0c040" }) {
  return (
    <div className="folder">
      <div className="folder-tab" style={{ background: color }} />
      <div className="folder-body" style={{ background: color }} />
    </div>
  );
}
