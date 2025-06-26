const fs = require("fs/promises");
const EventEmitter = require("events");
(async () => {
  const openfile = await fs.open("./text.txt", "r");
  const event = new EventEmitter();
  event.on("change", async () => {
    const size = (await openfile.stat()).size;
    const buffer = Buffer.alloc(size);
    const data = await openfile.read(buffer, 0, size, 0);
    console.log(data);
  });
  event.on("create file", async (file) => {
    try {
    await fs.open(file, "r") 
      console.log("file already exists");
      return;
    } catch (error) {
    
    const openfile = await fs.writeFile(file, "Hello World");
   
    // await openfile.close();
  }
});
event.on("append", async (file) => {
  try {
    await fs.appendFile(file, " Hello World");
    console.log("file appended");
  } catch (error) {
    console.log("file not found");
  }
});
event.on("delete file", async (file) => {
  try {
    await fs.unlink(file);
    console.log("file deleted");
  } catch (error) {
    console.log("file not found");
  }
});

event.on("rename", async (file) => {
  try {
    await fs.rename(file, "rename.txt");
    console.log("file renamed");
  } catch (error) {
    console.log("file not found");
  }
})



 
    // event.emit("change");
    // event.emit("create file", "craeate.txt");
    // event.emit("delete file", "craeate.txt");
    // event.emit( "append", "hi.txt" );
    event.emit( "append", "hhi.txt" );

})();
