import "./App.css";
import Card from "./components/Card";
import File from "./components/File";

const cards = [
  { id: 1, label: "folder one", files: [] },
  { id: 2, label: "folder two", files: [] },
];

const files = [
  { id: 1, label: "file one" },
  { id: 2, label: "file two" },
  { id: 3, label: "file three" },
  { id: 4, label: "file four" },
  { id: 5, label: "file five" },
  { id: 6, label: "file six" },
];

function App() {
  return (
    <>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="files">
        {files.map((file) => (
          <File key={file.id} file={file} />
        ))}
      </div>
    </>
  );
}

export default App;
