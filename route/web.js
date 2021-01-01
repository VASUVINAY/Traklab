import {
    indexController,
    postController,
    getIdController
} from "../app/controller/indexController.js"


const root=(app)=>{
    app.get('/',indexController)
    app.post('/traklabpost',postController)
    app.post('/traklabs',getIdController)
}
export default root