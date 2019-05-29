﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QBCS.Service.ViewModel
{
    public class QuestionViewModel
    {
        public int Id { get; set; }
        public string QuestionContent { get; set; }
        public int Frequency { get; set; }
        public int Priority { get; set; }
        public int CourseId { get; set; }
        public int TopicId { get; set; }
        public int LearningOutcomeId { get; set; }
        public int LevelId { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public bool IsDuplicated { get; set; }
        public QuestionViewModel DuplicatedQuestion { get; set; }
        public List<OptionViewModel> Options { get; set; }
    }
}
