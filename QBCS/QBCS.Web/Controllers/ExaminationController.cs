﻿using AuthLib.Module;
using QBCS.Service.Enum;
using QBCS.Service.Implement;
using QBCS.Service.Interface;
using QBCS.Service.ViewModel;
using QBCS.Web.Attributes;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace QBCS.Web.Controllers
{

    [CheckSession]
    public class ExaminationController : Controller
    {
        private ITopicService topicService;
        private ILearningOutcomeService learningOutcomeService;
        private IExaminationService examinationService;
        private IPartOfExamService partOfExamService;
        private ICategoryService categoryService;
        private ISemesterService semesterService;
        private ILogService logService;
        public ExaminationController()
        {
            topicService = new TopicService();
            learningOutcomeService = new LearningOutcomeService();
            examinationService = new ExaminationService();
            partOfExamService = new PartOfExamService();
            categoryService = new CategoryService();
            semesterService = new SemesterService();
            logService = new LogService();
        }
        //Staff
        //stpm: feature declare
        [Feature(FeatureType.Page, "Config to Generate", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult GenerateExam(int courseId)
        {
            List<LearningOutcomeViewModel> learningOutcomeViewModels = learningOutcomeService.GetLearningOutcomeByCourseId(courseId);
            List<CategoryViewModel> categoryViewModels = categoryService.GetCategoriesByCourseId(courseId);
            List<SemesterViewModel> semester = semesterService.GetAllSemester();
            ListLearningOutcomeViewModel listTopicLearningOutcomeViewModel = new ListLearningOutcomeViewModel()
            {
                LearningOutcomes = learningOutcomeViewModels,
                Categories = categoryViewModels,
                Semester = semester
            };
            TempData["active"] = "Examination";
            return View(listTopicLearningOutcomeViewModel);
        }
        //Staff
        //stpm: feature declare
        [Feature(FeatureType.Page, "Generate Examination", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult GenerateExaminaton(GenerateExamViewModel exam)
        {
            GenerateExamViewModel examination = examinationService.GenerateExamination(exam, fullname: User.Get(u => u.FullName), usercode: User.Get(u => u.Code));     
            TempData["active"] = "Examination";
            return View(examination);
        }

        //Staff
        //stpm: feature declare
        [Feature(FeatureType.Page, "Review Examination", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult ViewGeneratedExamination(string examGroup)
        {
            List<ExaminationViewModel> exams = examinationService.GetExamByExamGroup(examGroup);
            TempData["active"] = "Examination";
            return View(exams);
        }
        //Staff
        //stpm: feature declare
        [Feature(FeatureType.SideBar, "All Examinations", "QBCS", protectType: ProtectType.Authorized, ShortName = "Examination", InternalId = (int)SideBarEnum.AllExamination)]
        public ActionResult GetAllExamination()
        {
            List<ExaminationViewModel> exams = examinationService.GetAllExam();
            TempData["active"] = "Examination";
            return View("ListExamination",exams);
        }
        //Staff
        //stpm: feature declare
        [Feature(FeatureType.Page, "Examination Detail", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult DetailExam(int examId)
        {
            ExaminationViewModel exam = examinationService.GetExanById(examId);
            TempData["active"] = "Examination";
            return View(exam);
        }
        //Staff
        //stpm: feature declare
        [Feature(FeatureType.Page, "Disable Examination", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult DisableExam(int examId)
        {
            examinationService.DisableEaxam(examId);
            logService.LogManually("Disable", "Examination", targetId: examId, controller: "Examination", method: "DisableExam", fullname: User.Get(u => u.FullName), usercode: User.Get(u => u.Code));
            return RedirectToAction("GetAllExamination", "Examination");
        }
        //Staff

        //stpm: feature declare
        [Feature(FeatureType.Page, "Get Aging Question", "QBCS", protectType: ProtectType.Authorized)]
        public ActionResult GetHistoryCourse(int courseId)
        {
            var listQuestion = examinationService.GetExaminationHistoryQuestionsInCourse(courseId);
            TempData["active"] = "Course";
            return View(listQuestion);
        }

    }
}