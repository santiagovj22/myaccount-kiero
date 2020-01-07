//require method Router
const router = require('express').Router();

// imports
const questionService = require('../services/questionService');
const postService = require('../services/postService');

const accountService = require('../services/accountService');
const productService = require('../services/productService');
//--------------Route for myAccount---------------------------------
router.get('/api/usuarios/:id_usuarios', accountService.getPersonalData);
router.get('/api/usuarios', accountService.getData);

//--------------Route orders service--------------------------------

router.get('api/compras/:id_producto', productService.getProductById);
router.get('api/compras', productService.getProducts);
//---------------Route posts service--------------------------------
router.get('/api/publicaciones', postService.getData);
router.get('/api/publicaciones/:id_publicacion', postService.findById);
router.post('/api/publicaciones', postService.savePost);
router.put('/api/publicaciones/:id_publicacion', postService.updatePost);
router.delete('/api/publicaciones/:id_publicacion', postService.deletePost);

//---------------Route question service-----------------------------
router.get('/api/preguntas',questionService.find);
router.get('/api/preguntas/:id_cliente',questionService.findByIdQuestion);
router.post('/api/preguntas', questionService.save);
router.put('/api/preguntas/:id_cliente', questionService.update);
router.delete('/api/preguntas/:id_cliente', questionService.delete);



module.exports = router;