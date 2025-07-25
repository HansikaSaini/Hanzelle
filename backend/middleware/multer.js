// import multer from 'multer'

// let storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"../public")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// });
//  let upload = multer({storage})

//  export default upload
import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public'))  // saves in backend/public
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let upload = multer({ storage })

export default upload
