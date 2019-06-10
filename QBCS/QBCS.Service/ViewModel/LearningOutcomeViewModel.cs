﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QBCS.Service.ViewModel
{
    public class LearningOutcomeViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public int CourseId { get; set; }
        public bool IsDisable { get; set; }
        public string IdValue { get; set; }
        public void UpdateIdValue()
        {
            IdValue = "LO_" + Id;
        }
    }
}
