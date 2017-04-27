using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace projectD.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public double? Price { get; set; }
        //в базе не будет?
        public double? Count { get; set; }

        public double Sum()
        {
            System.Globalization.NumberFormatInfo formatProvider=new System.Globalization.NumberFormatInfo();
            formatProvider.NumberDecimalSeparator=".";
            formatProvider.NumberDecimalDigits=2;

            return Convert.ToDouble(Price * Count, formatProvider);
        }
    }
}