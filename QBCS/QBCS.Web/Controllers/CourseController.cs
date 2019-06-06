﻿using QBCS.Entity;
using QBCS.Service.Implement;
using QBCS.Service.Interface;
using QBCS.Service.ViewModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QBCS.Web.Controllers
{
    public class CourseController : Controller
    {
        private ICourseService courseService;
        public CourseController()
        {
            courseService = new CourseService();
        }
        // GET: Course
        public ActionResult Index(int userId)
        {
            var list = courseService.GetAllCoursesByUserId(userId);
            return View(list);
        }
        public ActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Add(CourseViewModel model)
        {
            courseService.AddNewCourse(model);
            int userId = ((UserViewModel)Session["user"]).Id;
            return RedirectToAction("Index",new { userId = userId });
        }
        public ActionResult Edit(int itemId)
        {
            var result = courseService.GetCourseById(itemId);
            return View(result);
        }
        public ActionResult GetCoursesByName(string name)
        {
            List<CourseViewModel> result = new List<CourseViewModel>();

            List<Course> courses = courseService.GetCoursesByName(name);
            foreach (Course course in courses)
            {
                CourseViewModel courseViewModel = new CourseViewModel
                {
                    Name = course.Name,
                    Code = course.Code,
                    DefaultNumberOfQuestion = course.DefaultNumberOfQuestion.Value
                };
                result.Add(courseViewModel);
            }
            return View("ListCourse", result);
        }
        [HttpPost]
        public ActionResult UpdateDisable(int itemId)
        {
            //int itemId = 0;
            //int userId = 0;
            //try
            //{
            //    string[] split = itemAndUserId.Split('_');
            //    itemId = int.Parse(split[0]);
            //    userId = int.Parse(split[1]);
            //}
            //catch (NotFiniteNumberException)
            //{

            //}
            var update = courseService.UpdateDisable(itemId);
            int userId = ((UserViewModel)Session["user"]).Id;
            return RedirectToAction("Index", new { userId = userId });
        }
    }
}