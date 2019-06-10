﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QBCS.Service.ViewModel
{
    class TopicInExamination
    {
        public int Id { get; set; }
        public int EasyQuestion { get; set; }
        public int MediumQuestion { get; set; }
        public int HardQuestion { get; set; }
        public bool IsLearingOutcome { get; set; }
        public TopicInExamination()
        {
            EasyQuestion = 0;
            MediumQuestion = 0;
            HardQuestion = 0;
        }
    }
}