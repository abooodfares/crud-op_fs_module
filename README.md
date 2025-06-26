# 📁 File System Event Handler - Node.js

This project demonstrates a simple **file system event handler** using Node.js. It uses the `fs/promises` module and `EventEmitter` to watch and handle different file operations such as:

- Creating a file
- Appending to a file
- Reading file changes
- Renaming a file
- Deleting a file

---

## 🚀 Features

- 🔍 Watch file changes
- 📝 Create and write to files
- ➕ Append content to existing files
- ✂️ Delete files safely
- ✏️ Rename files with error handling

---

## 📦 Requirements

- Node.js 16+
- File system permissions to read/write

---

## 📁 File Structure

Project/
├── text.txt # The file to monitor
├── app.js # Main logic using EventEmitter and fs/promises
└── README.md


---

## ⚙️ How It Works

- Uses `fs.open()` to read files and display content.
- Uses `fs.access()` to check if a file exists before creating.
- Wraps all actions inside an `EventEmitter` handler with `switch-case`.
- Uses `fs.watch()` (optional) to detect changes in a file and trigger events.

---

## 🛠️ Example Usage

In your `app.js` file, you can emit actions like this:

```js
event.emit("action", "create", "file.txt");
event.emit("action", "append", "file.txt");
event.emit("action", "delete", "file.txt");
event.emit("action", "rename", "file.txt");
event.emit("action", "change");
