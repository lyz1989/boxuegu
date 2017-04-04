/**
 * Created by Administrator on 2017-04-03.
 */
define([], function () {

    //配置
    require.config({
        baseUrl:'./',
        paths:{
            advertAdd:'js/advert/advert_add',
            advertList:'js/advert/advert_list',
            courseAdd1:'js/course/course_add_step1',
            courseAdd2:'js/course/course_add_step2',
            courseAdd3:'js/course/course_add_step3',
            courseAdd:'js/course/course_add',
            courseCategoreAdd:'js/course/course_category_add',
            courseCategory:'js/course/course_category',
            courseList:'js/course/course_list',
            courseTopic:'js/course/course_topic',
            login:'js/home/login',
            repass:'js/home/repass',
            settings:'js/home/settings',
            teacherAdd:'js/teacher/teacher_add',

            //配置第三方js模块和别名
            template:'lib/artTemplate/template-debug',

        }

    })

    //根据页面加载对应的JS模块
})