﻿using QBCS.Entity;
using QBCS.Service.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QBCS.Service.Interface
{
    public interface ILearningOutcomeService
    {
        List<LearningOutcomeViewModel> GetLearningOutcomeByCourseId(int? CourseId);
        List<LearningOutcomeViewModel> GetAllLearningOutcome();
        bool UpdateDisable(int id);
        bool UpdateLearningOutcome(LearningOutcomeViewModel model);
        LearningOutcomeViewModel GetLearningOutcomeById(int id);
        bool AddLearningOutcome(LearningOutcomeViewModel model);
    }
}
