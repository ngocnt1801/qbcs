﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace QBCS.Service.Utilities
{
    public class StringProcess
    {
        public static string RemoveTag (string source, string oldString, string newString)
        {
            string result = null;
            if (source != null)
            {
                result = source.Replace(oldString, newString);
            }
            return result;
        }
        public string UpperCaseKeyWord(string source)
        {
            string result = "";
           
            //string tempResult = "";
            string INCORRECT = "incorrect";
            string FALSE = "false";
            //string NOT = "not";
            string NOT_TRUE = "not true";
            string NOT_CORRECT = "not correct";
            string TRUE = "true";
            string CORRECT = "correct";
            //bool isContinute = false;
            if (source != null)
            {
                
                result = RemoveTag(source, INCORRECT, INCORRECT.ToUpper());
                result = RemoveTag(result, FALSE, FALSE.ToUpper());
                //string[] temp = result.Split(' ');
                //for (int i = 0; i < temp.Length; i++)
                //{
                   
                //    if (temp[i].Equals(NOT))
                //    {
                //        //tempResult = RemoveTag(result, temp[i].ToString(), NOT.ToUpper());
                //        //tempResult = result.Replace(temp[i].ToString(), NOT.ToUpper());
                //        temp[i] = temp[i].ToUpper();
                //        isContinute = true;
                //        continue;
                //    }
                //    if (isContinute)
                //    {
                //        if (temp[i].Contains(TRUE))
                //        {
                //            //tempResult = RemoveTag(tempResult, temp[i].ToString(), TRUE.ToUpper());
                //            temp[i] = temp[i].ToUpper();
                //            isContinute = false;
                //            result = String.Join(" ", temp).ToString();
                //        }
                //        if (temp[i].Contains(CORRECT))
                //        {
                //            //tempResult = RemoveTag(tempResult, temp[i].ToString(), CORRECT.ToUpper());
                //            temp[i] = temp[i].ToUpper();
                //            isContinute = false;
                //            result = String.Join(" ", temp).ToString();
                //        }
                        
                //        isContinute = false;
                //    }
                    

                //}
                
                //result = RemoveTag(result, NOT, NOT.ToUpper());

                result = RemoveTag(result, NOT_TRUE, NOT_TRUE.ToUpper());
                result = RemoveTag(result, NOT_CORRECT, NOT_CORRECT.ToUpper());
                result = RemoveTag(result, TRUE, TRUE.ToUpper());
                result = RemoveTag(result, CORRECT, CORRECT.ToUpper());
               
            }
            return result;
        }
        public string RemoveHtmlBrTagForUpdateQuestion(string source)
        {
            string result = null;

            if (source != null)
            {
                result = RemoveTag(source, "\r\n", "<cbr>");
                result = RemoveTag(result, "\n", "<cbr>");
                result = RemoveTag(result, "\t\n", "");
                result = RemoveTag(result, "\t", "");
                result = RemoveTag(result, "\r", "");

            }

            return result;
        }
        public string RemoveHtmlBrTag(string source)
        {
            string result = null;
            
            if (source != null)
            {
                result = RemoveTag(source, @"<br>", @"\n");
                result = RemoveTag(source, @"<br/>", @"\n");
                result = RemoveTag(source, @"<br>", @"\n");
                result = RemoveTag(result, @"</p>", @"</p>\n");
                
            }

            return result;
        }
        public string RemoveHtmlTagXML(string source)
        {
            string result = null;
          
            if (source != null)
            {
              
                //result = RemoveTag(source, "[html]", "");
                //result = RemoveTag(source, "[html]", "");
                result = RemoveTag(source, @"\=", @"=");
                result = RemoveTag(result, @"\{", @"{");
                result = RemoveTag(result, "[moodle]", "");
                result = RemoveTag(result, "[markdown]", "");
                result = RemoveTag(result, "[plain]", "");
                result = RemoveTag(result, @"\}", @"}");
                result = RemoveTag(result, @"\#", @"#");
                result = RemoveTag(result, @"\~", @"~");
                result = RemoveTag(result, @"\:", @":");
               
                result = RemoveTag(result, @"\n", @"<cbr>");
                
                result = RemoveTag(result, @"<br/>", @"<cbr>");
                result = RemoveTag(result, @"\:", @":");
               // result = RemoveTag(result, @"#", "");
                
                result = RemoveTag(result, @"<span lang=" + '"' + "EN" + '"' + ">", "");
                
               

            }

            return result;
        }
        public string RemoveHtmlTagGIFT(string source)
        {
            string result = null;

            if (source != null)
            {
                string partern = "(<cbr>){2,}";
                //result = RemoveTag(source, "[html]", "");
                //result = RemoveTag(source, "[html]", "");
                result = RemoveTag(source, @"\=", @"=");
                result = RemoveTag(result, @"\{", @"{");
                result = RemoveTag(result, @"\}", @"}");
                result = RemoveTag(result, "[moodle]", "");
                result = RemoveTag(result, "[markdown]", "");
                result = RemoveTag(result, "[plain]", "");
                //result = RemoveTag(result, @"\#", @"#");
                result = RemoveTag(result, @"\~", @"~");
                result = RemoveTag(result, @"\:", @":");
                
                result = RemoveTag(result, @"\n", @"<cbr>");
               
                result = RemoveTag(result, @"<br/>", @"<cbr>");
                result = RemoveTag(result, @"\:", @":");
                // result = RemoveTag(result, @"\#", "#");
                result = RemoveUnExpectedTagGIFT(result);
                result = RemoveTag(result, @"<span lang=" + '"' + "EN" + '"' + ">", "");
                result = Regex.Replace(result, partern, @"<cbr>");

            }

            return result;
        }
        public string RemoveUnExpectedTagGIFT(string source)
        {
            string result = null;
           
            if (source != null)
            {
               if (source.Contains("#") && !source.Contains(@"\#"))
                {
                    result = RemoveTag(source, "#", "");
                    return result;
                }
               if (source.Contains(@"\#") && !source.Contains("#"))
                {
                    result = RemoveTag(source, @"\#", "#");
                    return result;
                }
               if (source.Contains(@"\#") && source.Contains("#"))
                {
                    StringBuilder sb = new StringBuilder();
                    sb.Append(source);
                    List<int> listArrayKeeping = new List<int>();
                    List<int> listArrayRemove = new List<int>();
                    bool isFlag = false;
                    for (int i = 0; i < sb.Length; i++)
                    {
                        
                        if (sb[i].Equals(@"\"))
                        {
                            isFlag = true;
                            continue;
                        }
                        //if (isFlag && sb[i].Equals("#"))
                        //{
                        //    listArrayKeeping.Add(i);
                        //}
                        if (isFlag == false && sb[i].Equals("#"))
                        {
                            listArrayRemove.Add(i);
                        }
                        isFlag = false;
                    }
                    foreach (var item in listArrayRemove)
                    {
                        sb.Remove(item, 1);
                    }
                    result = sb.ToString();
                    if (result.Contains(@"\#"))
                    {
                        result = RemoveTag(result, @"\#", "#");
                    }
                }
                if (!source.Contains(@"\#") && !source.Contains("#"))
                {
                    result = source;
                }
                
            }
            
            return result;
        }
    }
   
}
