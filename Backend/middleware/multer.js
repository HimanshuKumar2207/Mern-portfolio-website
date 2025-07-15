// import multer from "multer";

// const upload = multer({ storage: multer.diskStorage({}) });

// export default upload;

import multer from "multer";

// Store file in memory (as buffer) instead of saving to disk
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
