import CommonController from './controller/CommonController'

const controller = new CommonController().application;

controller.listen(3000, () => {
    console.log("server has been connect by 3000")
})